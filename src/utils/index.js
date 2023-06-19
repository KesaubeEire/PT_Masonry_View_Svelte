/**
 * 全局工具类函数~
 */

export { debounce, throttle, sortMasonry, ButtonSet }
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

/**实际执行整理 Masonry */
function doSortMasonry() {
  _SORT_COUNT.Run++
  // console.log(`实际执行次数: ${_time}`);
  console.log(`呼叫整理次数: ${_SORT_COUNT.Call}   实际整理次数: ${_SORT_COUNT.Run}`);
  masonry.layout()
}

/**外部呼叫整理 Masonry */
function sortMasonry() {
  _SORT_COUNT.Call++
  if (masonry) {
    throttleSort()
  }
}

// NOTE: 3. 按钮调用-------------------------------
const config_example = {
  /**按钮 dom id */
  id: 'P-btn_xxx',
  /**按钮默认显示名称 */
  title: '点我捏~',
  /**按钮需要类名 */
  classList: 'debug',
}

/**
 * 面板按钮构造类
 */
class ButtonSet {
  /**构造函数
   * @param {Dom} domElement 父元素 Dom
   * @param {config_example} config 配置对象
   * @param {function} clickFunc 点击执行函数
   */
  constructor(domElement, config, clickFunc, beforeFunc = null) {
    this.domElement = domElement;
    this.config = config;
    this.clickFunc = clickFunc;
    this.beforeFunc = beforeFunc;

    this.buttonDom;

    this.initializeButtons();
  }

  /**启动函数 */
  initializeButtons() {
    // 创建一个按钮元素
    this.buttonDom = document.createElement("button");
    this.buttonDom.className = this.config.classList
    this.buttonDom.setAttribute('id', this.config.id)
    this.buttonDom.innerText = this.config.title
    this.buttonDom.style.zIndex = 10001; // DEBUG: 这里可能会出问题, 到时候再说吧

    // 如果有, 执行前置函数
    if (this.beforeFunc) this.beforeFunc();


    // 为按钮添加事件监听器
    this.buttonDom.addEventListener('click', this.clickFunc)

    // 将按钮插入到文档中
    if (this.domElement)
      this.domElement.appendChild(this.buttonDom);
  }
}
// const btnSwitchMode = document.getElementById("btnSwitchMode");
// const switchModeBtn = document.createElement("button");
// switchModeBtn.classList.add("debug");
// switchModeBtn.setAttribute("id", "btnSwitchMode");
// switchModeBtn.innerText = "当前加载方式: 按钮";
// switchModeBtn.style.zIndex = 10003;

// // 为按钮添加事件监听器
// switchModeBtn.addEventListener("click", function () {
//   if (switchModeBtn.innerText == "当前加载方式: 按钮") {
//     switchModeBtn.innerText = "当前加载方式: 滑动";
//     PAGE.SWITCH_MODE = "Slip"

//     btnTurnPageDOM.style.display = "none"

//     scan_and_launch()
//   }
//   else {
//     switchModeBtn.innerText = "当前加载方式: 按钮";
//     PAGE.SWITCH_MODE = "Button"

//     btnTurnPageDOM.style.display = "block"
//   }

// });
// // 将按钮插入到文档中
// document.body.appendChild(switchModeBtn);