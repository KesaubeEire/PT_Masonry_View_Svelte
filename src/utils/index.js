/**
 * 全局工具类函数~
 */

export { debounce, throttle, sortMasonry }
/**瀑布流执行次数 */
const _SORT_COUNT = {
  /**外部呼叫函数次数 */
  Call: 0,
  /**函数实际执行次数 */
  Run: 0,
}
// NOTE: 1. 抽象工具-------------------------------
/** 防抖函数
 * @param {function} func 操作函数
 * @param {number} delay 延迟
 * @returns
 */
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(this, arguments);
      // console.log('防抖: ', func.name);
    }, delay);
  };
}

/** 节流函数
 * @param {*} func 操作函数
 * @param {*} delay 延迟
 * @returns 
 */
function throttle(func, delay) {
  let timerId;
  let lastExecTime = 0;

  return function (...args) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastExecTime;

    if (!timerId && elapsedTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = currentTime;
        timerId = null;
      }, delay - elapsedTime);
    }
  };
}

// NOTE: 2. 瀑布流整理调用-------------------------------
/**设置节流 Masonry 执行体*/
const throttleSort = throttle(doSortMasonry, 1500);
const throttleSort_fast = throttle(doSortMasonry, 30);

/**实际执行整理 Masonry */
function doSortMasonry() {
  _SORT_COUNT.Run++
  // console.log(`实际执行次数: ${_time}`);
  console.log(`呼叫整理次数: ${_SORT_COUNT.Call}   实际整理次数: ${_SORT_COUNT.Run}`);
  masonry.layout()
}

/**外部呼叫整理 Masonry: 根据速度调整 */
function sortMasonry(speed = 'normal') {
  _SORT_COUNT.Call++
  if (masonry) {
    if (speed === 'fast') {
      throttleSort_fast()
    } else {
      throttleSort()
    }
  }
}