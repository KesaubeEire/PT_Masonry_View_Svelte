/**
 * 全局工具类函数~
 */

export { debounce, throttle, sortMasonry, NEXUS_TOOLS }
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
let timer = null;
function debounce(func, delay) {
  return function () {
    if (timer) {
      console.warn('debounce dupe!!!!!!');
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      func.apply(this, arguments);
      // console.log('防抖: ', func.name);
      timer = null;
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

// NOTE: 3. Nexus 工具(触摸预览 + 懒加载)-------------------------------/**NEXUS 预览工具箱, 提供图片预览和图片懒加载, 神器*/
/**NEXUS 预览工具箱, 提供图片预览和图片懒加载, 神器*/
function NEXUS_TOOLS() {
  jQuery(document).ready(function () {
    // console.log("----jQuery 加载完毕 | Kesa 改版 nexus 工具启动!---");

    /**
     * 获取图片位置
     * @param {*} e 鼠标事件对象
     * @param {*} imgEle 图片元素对象
     * @returns
     */
    function getImgPosition(event, imgEle) {
      // console.log(e, imgEle)

      // 获取图片的原始宽度和高度
      let imgWidth = imgEle.prop("naturalWidth");
      let imgHeight = imgEle.prop("naturalHeight");

      // 计算图片的宽高比
      let ratio = imgWidth / imgHeight;

      // 设置图片的偏移量, 初始为 10
      let offsetX = 0;
      let offsetY = 0;

      // 设置为预览图片默认 or 预览图片尽可能占满屏幕
      if (true) {
      }

      // 计算图片应该显示的宽度和高度，初始值为窗口的宽度和高度减去鼠标事件对象的坐标。
      let width = window.innerWidth - event.clientX;
      let height = window.innerHeight - event.clientY;

      // 设置偏移量是否需要改变的标记，初始值为 0 和 false。
      let changeOffsetY = 0;
      let changeOffsetX = false;

      // 如果鼠标位置在窗口的右半边且图片的右侧会超出窗口边界，
      // 就将偏移量需要改变的标记设置为 true，
      // 并将图片的宽度调整为鼠标事件对象的横坐标。
      if (event.clientX > window.innerWidth / 2 && event.clientX + imgWidth > window.innerWidth) {
        changeOffsetX = true;
        width = event.clientX;
      }

      // 如果鼠标位置在窗口的下半边，且图片的下侧会超出窗口边界，
      // 就将偏移量需要改变的标记设置为 1 或 2，并将图片的高度调整为鼠标事件对象的纵坐标。
      if (event.clientY > window.innerHeight / 2) {
        if (event.clientY + imgHeight / 2 > window.innerHeight) {
          changeOffsetY = 1;
          height = event.clientY;
        } else if (event.clientY + imgHeight > window.innerHeight) {
          changeOffsetY = 2;
          height = event.clientY;
        }
      }

      // let log = `innerWidth: ${window.innerWidth}, innerHeight: ${window.innerHeight}, pageX: ${event.pageX}, pageY: ${event.pageY}, imgWidth: ${imgWidth}, imgHeight: ${imgHeight}, width: ${width}, height: ${height}, offsetX: ${offsetX}, offsetY: ${offsetY}, changeOffsetX: ${changeOffsetX}, changeOffsetY: ${changeOffsetY}`;
      // console.log(log);

      // 如果图片的宽度大于应该显示的宽度，
      // 就将图片的宽度调整为应该显示的宽度，
      // 并根据宽高比计算出新的高度。
      if (imgWidth > width) {
        imgWidth = width;
        imgHeight = imgWidth / ratio;
      }

      // 如果图片的高度大于应该显示的高度，
      // 就将图片的高度调整为应该显示的高度，
      // 并根据宽高比计算出新的宽度。
      if (imgHeight > height) {
        imgHeight = height;
        imgWidth = imgHeight * ratio;
      }

      // 如果偏移量需要改变，
      // 就将偏移量设置为鼠标事件对象横坐标和应该显示的宽度之差再加上 10 的负值。
      if (changeOffsetX) {
        // console.log('X轴反转');
        offsetX = -imgWidth;
      }

      // 如果偏移量需要改变，且需要向上偏移，
      // 则将偏移量设置为图片的高度减去窗口剩余的高度和鼠标事件对象纵坐标之差的负值；
      // 如果需要向上和向下偏移，则将偏移量设置为图片的高度的一半的负值。
      if (changeOffsetY == 1) {
        offsetY = -(imgHeight - (window.innerHeight - event.clientY));
      } else if (changeOffsetY == 2) {
        offsetY = -imgHeight / 2;
      }

      // if (changeOffsetX) { console.log(`imgWidth: ${imgWidth}, imgHeight: ${imgHeight}, offsetX: ${offsetX}, offsetY: ${offsetY}`); }
      // console.log(`changeOffsetY: ${changeOffsetY}`);
      // 返回对象
      return { imgWidth, imgHeight, offsetX, offsetY };
    }

    function getMinRatio(pic, container) {
      return Math.min(container.width / pic.width, container.height / pic.height)
    }

    /**
     * 获取图片位置_Kesa版
     * @param {*} e 鼠标事件对象
     * @param {*} imgEle 图片元素对象
     * @returns
     */
    function previewPosition_Kesa(event, imgEle) {
      // 获取图片的原始宽度和高度
      let imgWidth = imgEle.prop("naturalWidth") ?? 0;
      let imgHeight = imgEle.prop("naturalHeight") ?? 0;


      // 计算图片的宽高比
      let ratio = imgWidth / imgHeight;

      // 设置图片的偏移量, 初始为 10
      let offsetX = 0;
      let offsetY = 0;

      // 获取鼠标位置
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      // 获取视口宽高
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // 定义视口缓冲距离
      const borderY = 10
      const borderX = 10

      // 获取鼠标位置到视口上下左右的距离
      const distanceToTop = mouseY;
      const distanceToBottom = viewportHeight - mouseY;
      const distanceToLeft = mouseX;
      const distanceToRight = viewportWidth - mouseX;

      // 定义size对象
      const picSize = {
        width: imgWidth,
        height: imgHeight
      }
      const containerSize = {
        bot: {
          width: viewportWidth,
          height: distanceToBottom,
        },
        top: {
          width: viewportWidth,
          height: distanceToTop,
        },
        right: {
          width: distanceToRight,
          height: viewportHeight,
        },
        left: {
          width: distanceToLeft,
          height: viewportHeight,
        },
      }

      /**定义可容纳最大比例 */
      let maxRatio = 0
      /**定义可容纳最大比例的位置 */
      let maxPosition = ''

      for (const key in containerSize) {
        if (Object.hasOwnProperty.call(containerSize, key)) {
          const element = containerSize[key];
          if (getMinRatio(picSize, element) > maxRatio) {
            maxRatio = getMinRatio(picSize, element)
            maxPosition = key
          }
        }
      }

      // console.log(`最大的位置: ${maxPosition}  
      // top: ${getMinRatio(picSize, containerSize['top'])}  
      // bot: ${getMinRatio(picSize, containerSize['bot'])}  
      // left: ${getMinRatio(picSize, containerSize['left'])}  
      // right: ${getMinRatio(picSize, containerSize['right'])}
      // `);



      const result = {
        top: {
          left: 0,
          top: 0,
          width: viewportWidth,
          height: distanceToTop,
        },
        bot: {
          left: 0,
          top: distanceToTop,
          width: viewportWidth,
          height: distanceToBottom,
        },
        left: {
          left: 0,
          top: 0,
          width: distanceToLeft,
          height: viewportHeight,
        },
        right: {
          left: distanceToLeft,
          top: 0,
          width: distanceToRight,
          height: viewportHeight,
        },
        default: {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
        },
      }

      const container = maxPosition != '' ? result[maxPosition] : result['default']
      return container

      // console.log(
      //   '2_Bottom:', distanceToBottom,
      //   '2_Top:', distanceToTop,
      //   '2_Left:', distanceToLeft,
      //   '2_Right:', distanceToRight
      // )

      // return {
      //   left: event.pageX + position.offsetX,
      //   top: event.pageY + position.offsetY,
      //   width: position.imgWidth,
      //   height: position.imgHeight,
      // };

    }

    /**
     * 获取展示位置
     * @param {*} e
     * @param {*} position
     * @returns
     */
    function getPosition(event, position) {
      return {
        left: event.pageX + position.offsetX,
        top: event.pageY + position.offsetY,
        width: position.imgWidth,
        height: position.imgHeight,
      };
    }

    // -------------preview
    const selector = "img.preview_Kesa";
    let imgEle;
    let imgPosition;

    // 1. 原始方法: 判断是否有 #nexus-preview, 没有就新建一个
    if (!jQuery("#nexus-preview").length) {
      const _previewDom = document.body.appendChild(document.createElement('img'));
      _previewDom.id = 'nexus-preview';
    }
    const previewEle = jQuery("#nexus-preview");

    // 2. Kesa方法: 判断是否有 #kp_container, 没有就新建一个
    function createKesaPreview(color) {
      const parent =
        jQuery('<div>', {
          id: 'kp_container',
          css: {
            backgroundColor: color,
            opacity: 1,
            position: 'fixed',
            zIndex: 20000,
            pointerEvents: 'none',
            transition: 'all .3s'
          }
        });
      parent.append(jQuery('<img>', {
        class: 'kp_img',
        css: {
          position: 'absolute',
          zIndex: 20002,
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }
      }))
      parent.append(jQuery('<img>', {
        class: 'kp_img',
        css: {
          position: 'absolute',
          zIndex: 20001,
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: `blur(8px)`
        }
      }))
      return parent
    }

    // const kesa_preview = createKesaPreview('')
    const kesa_preview = (jQuery('#kp_container').length > 0) ? jQuery('#kp_container') : createKesaPreview('')
    jQuery("body").append(kesa_preview)

    jQuery("body")
      .on("mouseover", selector, function (e) {
        imgEle = jQuery(this);
        // previewEle = jQuery('<img style="display: none;position:absolute;">').appendTo(imgEle.parent())
        imgPosition = getImgPosition(e, imgEle);
        let position = getPosition(e, imgPosition);
        let src = imgEle.attr("src");
        if (src) {
          // FIXME: 2选1未设置
          // previewEle.attr("src", src).css(position).fadeIn("fast");
          if (kesa_preview) kesa_preview.find('.kp_img').attr('src', src)
        }

        // kesa_preview.css(previewPosition_Kesa(e, imgEle)).fadeIn('fast')
        kesa_preview.css(previewPosition_Kesa(e, imgEle)).show()
      })
      .on("mouseout", selector, function (e) {
        // FIXME: 2选1未设置
        // previewEle.hide();// previewEle.fadeOut();
        kesa_preview.hide();// kesa_preview.fadeOut()
      })
      .on("mousemove", selector, function (e) {
        imgPosition = getImgPosition(e, imgEle);
        let position = getPosition(e, imgPosition);

        // FIXME: 2选1未设置
        // previewEle.css(position);
        kesa_preview.css(previewPosition_Kesa(e, imgEle))
      });

    // -------------lazy load
    if ("IntersectionObserver" in window) {
      let imgList = [...document.querySelectorAll(".nexus-lazy-load_Kesa")];
      // console.log(imgList);
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const intersectionRatio = entry.intersectionRatio;
          el._entry = entry
          // console.log(`el, ${el.getAttribute("data-src")}, intersectionRatio: ${intersectionRatio}`);

          // if (
          //   intersectionRatio > 0 &&
          //   intersectionRatio <= 1 &&
          //   !el.classList.contains("preview_Kesa")
          // ) 
          if (entry.isIntersecting && !el.classList.contains("preview_Kesa")
          ) {
            // 懒加载成功
            // console.log(`el, ${el.getAttribute("data-src")}, loadImg`);
            // let currentIndex = el.nextSibling.nextSibling.textContent.trim();
            // console.log(`index: ${currentIndex} 懒加载添加成功~`);
            // console.log(el);
            const source = el.dataset.src;
            el.src = source;
            el.classList.add("preview_Kesa");
            // 加载完图片后重新布局 Masonry
            // 这里是真实图片的加载
            // TODO: 这里可以写个防抖优化性能, 但是人好像自带防抖的, 哈哈......
            sortMasonry();
          }
          // el.onload = el.onerror = () => io.unobserve(el);
        });
      });

      imgList.forEach((img) => io.observe(img));
    }
  });
}