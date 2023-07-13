import { sortMasonry } from '../utils'
export { CONFIG as config };
const CONFIG = {
  /** 默认的种子表格 dom selector */
  torrentListTable: "table.torrents",

  /** 将 种子列表dom 的信息变为 json对象列表 */
  TORRENT_LIST_TO_JSON,

  /** 加载图片等待时的默认图片 */
  LOADING_PIC:"logo.png",

  /**如果站点有自定义的icon, 可以用自定义的 */
  ICON: {},

  /**如果站点有必要设置分类颜色, 可以用自定义的 */
  CATEGORY: {
    // 成人分类
    410: '#f52bcb', // 有码 HD
    429: '#f52bcb', // 无码 HD
    424: '#db55a9', // 有码 Xvid
    430: '#db55a9', // 无码 Xvid
    437: '#f77afa', // 有码 DVD
    426: '#f77afa', // 无码 DVD
    431: '#19a7ec', // 有码 BluRay
    432: '#19a7ec', // 无码 BluRay
    440: '#f52bcb', // GAY
    436: '#bb1e9a', // 0 day
    425: '#bb1e9a', // 写真 video
    433: '#bb1e9a', // 写真 pic
    411: '#f49800', // H-Game
    412: '#f49800', // H-Anime
    413: '#f49800', // H-Comic

    // 综合分类
    401: '#c74854', // Movie SD
    419: '#c01a20', // Movie HD
    420: '#c74854', // Movie DVD    
    421: '#00a0e9', // Movie BluRay
    439: '#1b2a51', // Movie Remux
    403: '#c74854', // TV SD
    402: '#276fb8', // TV HD
    435: '#4dbebd ', // TV DVD
    438: '#1897d6', // TV BluRay
    404: '#23ac38', // 纪录教育
    405: '#996c34', // Anime
    407: '#23ac38', // Sport
    422: '#f39800', // Software
    423: '#f39800', // Game
    427: '#f39800', // EBook
    409: '#996c34', // Other

    // 音乐分类
    406: '#8a57a1', // MV
    408: '#8a57a1', // Music AAC/ALAC
    434: '#8a57a1', // Music 无损
  },

  /** 索引 */
  INDEX: 0,

  /** iframe 宽度 */
  Iframe_Width: 1260,

  /** NOTE: 站点特殊操作 */
  special: function () {
    console.log('23333333333333333333');
  }
};

/**
 * 将 种子列表dom 的信息变为 json对象列表
 * @param {DOM} torrent_list_Dom 种子列表dom
 * @param {*} CARD 卡片对象
 * @returns {list} 种子列表信息的 json对象列表
 */
function TORRENT_LIST_TO_JSON(torrent_list_Dom) {
  // 获取表格中的所有行
  const rows = torrent_list_Dom.querySelectorAll("tbody tr");
  // const rows = torrent_list_Dom.querySelectorAll("tr");
  // const rows = div.querySelectorAll('tr');

  // 种子信息 -> 存储所有行数据的数组
  const data = [];

  // 遍历每一行并提取数据
  rows.forEach((row) => {
    // 获取种子分类
    const categoryImg = row.querySelector("td:nth-child(1) > a > img");
    const category = categoryImg ? categoryImg.title : "";
    // 若没有分类则退出
    if (!category) return;

    // 获取种子分类链接 / 分类号
    const categoryLinkDOM = categoryImg.parentNode;
    const categoryLink = categoryLinkDOM.href;
    const categoryNumber = categoryLink.slice(-3);
    const _categoryImg = categoryImg.cloneNode(true)
    _categoryImg.className = "card-category-img"
    // console.log(categoryLinkDOM);
    // console.log(categoryLink, categoryNumber);

    // 加index
    const torrentIndex = CONFIG.INDEX++;

    // 获取种子名称
    const torrentNameLink = row.querySelector(".torrentname a");
    const torrentName = torrentNameLink ? torrentNameLink.title.trim() : "";

    // 获取种子详情链接
    const torrentLink = torrentNameLink.href;
    // console.log(torrentLink);

    // 获取种子id
    const pattern = /id=(\d+)&hit/;
    const match = torrentLink.match(pattern);
    const torrentId = match ? parseInt(match[1]) : null;

    // 获取 mouse_over 和 mouse_out
    const imgDom = row.querySelector(".torrentname img");
    const _mouseOver = imgDom.getAttribute("onmouseover");
    // const _mouseOut = imgDom.getAttribute("onmouseout");
    // console.log(_mouseOver);

    // 获取预览图片链接
    const raw1 = _mouseOver ? _mouseOver.split(',')[2].toString() : '';
    const picLink = raw1 ? raw1.slice(raw1.indexOf("'") + 1, raw1.lastIndexOf("'")) : '/pic/nopic.jpg'

    // 获取描述
    const desCell = row.querySelector(".torrentname td:nth-child(2)");
    const length = desCell.childNodes.length - 1;
    const desDom = desCell.childNodes[length];
    const description = desDom.nodeName == '#text' ? desDom.textContent.trim() : "";

    // 获取置顶信息
    const place_at_the_top = row.querySelectorAll(".torrentname img.sticky");
    const pattMsg = place_at_the_top[0] ? place_at_the_top[0].title : "";

    // 获取临时标签: 新 / 热门 等
    const tempTagDom = row.querySelectorAll('.torrentname font');
    // console.log(tempTagDom);

    // 获取免费折扣类型
    const freeTypeImg = row.querySelector('img[class^="pro_"]');
    // console.log(freeTypeImg);
    // if (freeTypeImg) { console.log(freeTypeImg.alt); }
    const freeType = freeTypeImg
      ? "_" + freeTypeImg.alt.replace(/\s+/g, "")
      : "";

    // 获取免费剩余时间
    const freeRemainingTimeSpan = row.querySelector(".torrentname td:nth-child(2) span");
    const freeRemainingTime = freeRemainingTimeSpan
      ? freeRemainingTimeSpan.innerText
      : "";

    // 获取标签
    const tagSpans = row.querySelectorAll(".torrentname img[class^='label_']");
    // const raw_tags = row.querySelector(".torrentname");
    const tagsDOM = Array.from(tagSpans);
    let tags = tagSpans ? tagsDOM.map((el) => el.title.trim()) : [];
    const raw_tags = tagsDOM.map((el) => el.outerHTML).join("&nbsp;");
    // console.log(raw_tags);

    // 获取下载链接
    const downloadLink = `download.php?id=${torrentId}`;

    // 获取收藏链接
    const collectLink = `javascript: bookmark(${torrentId},${torrentIndex});`;
    // 获取收藏状态
    const collectDOM = row.querySelector(".torrentname a[id^='bookmark']");
    const collectState = collectDOM.children[0].alt;
    // console.log(collectState);

    // 获取评论数量
    const commentsLink = row.querySelector("td.rowfollow:nth-child(3) a");
    // console.log(commentsLink.innerHTML);
    const comments = commentsLink ? parseInt(commentsLink.textContent) : 0;

    // 获取上传日期
    const uploadDateSpan = row.querySelector("td:nth-child(4) span");
    const uploadDate = uploadDateSpan ? uploadDateSpan.title : "";

    // 获取文件大小
    const sizeCell = row.querySelector("td:nth-child(5)");
    const size = sizeCell ? sizeCell.textContent.trim() : "";

    // 获取做种人数
    const seedersLink = row.querySelector("td:nth-child(6) a");
    const seeders = seedersLink ? parseInt(seedersLink.textContent) : 0;

    // 获取下载人数
    const leechersCell = row.querySelector("td:nth-child(7)");
    const leechers = leechersCell ? parseInt(leechersCell.textContent) : 0;

    // 获取完成下载数
    const snatchedLink = row.querySelector("td:nth-child(8) a");
    const snatched = snatchedLink ? parseInt(snatchedLink.textContent) : 0;

    // 将当前行的数据格式化为 JSON 对象
    const rowData = {
      torrentIndex,
      _categoryImg,
      category,
      categoryLink,
      categoryNumber,
      torrent_name: torrentName,
      torrentLink,
      torrentId,
      picLink,
      place_at_the_top,
      pattMsg,
      downloadLink,
      collectLink,
      collectState,
      tempTagDom,
      freeTypeImg,
      free_type: freeType,
      free_remaining_time: freeRemainingTime,
      raw_tags,
      tagsDOM,
      tags,
      description,
      comments,
      upload_date: uploadDate,
      size,
      seeders,
      leechers,
      snatched,
    };

    // 将当前行的 JSON 对象添加到数组中
    data.push(rowData);
  });
  return data;
}

/**
 * 将种子列表信息渲染为卡片放入瀑布流
 * @param {DOM} waterfallNode 瀑布流容器dom
 * @param {list} torrent_json 种子列表信息的 json对象列表
 * @param {boolean} isFirst 是否是第一次渲染, 默认为是, 新增渲染要写 false
 * @param {Object} masonry 瀑布流对象
 * @param {Object} CARD 卡片参数的静态数据
 * @param {Object} ICON 站点icon的静态数据
 */
function RENDER_TORRENT_JSON_IN_MASONRY(
  waterfallNode,
  torrent_json,
  isFirst = true,
  masonry,
  CARD,
  ICON = CONFIG.ICON
) {
  const cardTemplate = (data) => {
    const {
      torrentIndex,
      _categoryImg,
      category,
      categoryLink,
      categoryNumber,
      torrent_name: torrentName,
      torrentLink,
      torrentId,
      picLink,
      place_at_the_top,
      pattMsg,
      downloadLink,
      collectLink,
      collectState,
      tempTagDom,
      freeTypeImg,
      free_type: freeType,
      free_remaining_time: freeRemainingTime,
      raw_tags,
      tagsDOM,
      tags,
      description,
      comments,
      upload_date: uploadDate,
      size,
      seeders,
      leechers,
      snatched,
    } = data;

    return `

<div class="card-holder">
  <!-- 分区类别 -->
  <div
    class="card-category"
    href="${categoryLink}"
    style="background: ${CONFIG.CATEGORY[categoryNumber]};"
    >
    ${_categoryImg.outerHTML}
    ${category}    
  </div>

  <!-- 标题 & 跳转详情链接 -->    
  <div class="card-title">
    <a class="two-lines" src="${torrentLink}" href="${torrentLink}" target="_blank">
      ${tempTagDom ? Array.from(tempTagDom).map(e => e.outerHTML).join('&nbsp;') : ""}
      <b>${torrentName}</b>
    </a>
  </div>

  <!-- 卡片其他信息 -->    
  <div class="card-body">
    <div class="card-image" onclick="window.open('${torrentLink}')">
      <img  class="card-image--img nexus-lazy-load_Kesa" src="logo.png" data-src="${picLink}" alt="${torrentName}"/>
      <div class="card-index">
        ${torrentIndex + 1}
      </div>  
    </div>

    <!-- 置顶 && 免费类型&剩余时间 -->      
    ${freeType || pattMsg
        ? `
      <div class="card-alter">          
        <div class="top_and_free ${freeType}">
          <!-- 置顶等级 -->
          ${place_at_the_top.length != 0 ? Array.from(place_at_the_top).map(e => e.outerHTML) + '&nbsp;' : ''}

          <!-- 免费类型 & 免费剩余时间 -->
          ${freeTypeImg ? freeTypeImg.outerHTML : ""}  <b>${freeRemainingTime ? freeRemainingTime : ''}</b>
        </div>
      </div>
          `
        : ``
      }

    <!-- 置顶等级 -->
    <!--${pattMsg ? `<div><b>置顶等级:</b> ${pattMsg}</div>` : ""}-->

    <!-- 副标题 -->
    ${description ? `<div class="card-description"><a href='${torrentLink}'> ${description}</a></div>` : ""}
    

    <!-- 标签 Tags -->
    <div class="cl-tags">
      <!-- ${tempTagDom ? Array.from(tempTagDom).map(e => e.outerHTML + '&nbsp;') : ""} -->
      ${(tagsDOM.map(el => {
        const _tag = document.createElement('div')
        _tag.innerHTML = el.outerHTML;
        // console.log(_tag);
        return _tag.outerHTML
      })).join('')}
      <!-- <b>Tags:</b> ${tags.join("&nbsp;")} -->
    </div>


    <div class="card-details">  
      <div class="card-line">
        <!-- 大小 -->
        <div class="cl-center">
          ${ICON.SIZE}&nbsp;${size}
        </div> 

        <!-- 下载 -->
        &nbsp;&nbsp;
        <div class="cl-center">
          ${ICON.DOWNLOAD}&nbsp;
          <b><a src="${downloadLink}" href="${downloadLink}">下载</a></b>
        </div>

        <!-- 收藏 -->
        &nbsp;&nbsp;
        <div class="cl-center">
          <div class="btnCollet cl-center" id="tI_${torrentIndex}" onclick='COLLET_AND_ICON_CHANGE("${collectLink}", "tI_${torrentIndex}")'>
            ${collectState == "Unbookmarked" ? ICON.COLLET : ICON.COLLETED}
            &nbsp;<b>收藏</b>
          </div>
        </div>
      </div>
      
      <!-- 种子id, 默认不显示 -->
      <!--<div class="card-line"><b>Torrent ID:</b> ${torrentId}</div> -->
      
      <!-- 上传时间 -->
      <div class="card-line"><b>上传时间:</b> ${uploadDate}</div>
      
      <div class="card-line">
        ${ICON.COMMENT}&nbsp;<b>${comments}</b>&nbsp;&nbsp;
        ${ICON.SEEDERS}&nbsp;<b>${seeders}</b>&nbsp;&nbsp;
        ${ICON.LEECHERS}&nbsp;<b>${leechers}</b>&nbsp;&nbsp;
        ${ICON.SNATCHED}&nbsp;<b>${snatched}</b>
      </div>    
    </div>
  </div>
</div>`;
  };

  for (const rowData of torrent_json) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = cardTemplate(rowData);

    // 生成新的时候再改一次图片宽度
    card.style.width = `${CARD.CARD_WIDTH}px`;
    // z-index 逐渐变小, 使得展开标题时本卡片的内容可以不被下面的卡片遮挡
    card.style.zIndex = 10000 - rowData.torrentIndex;

    //  |--|-- 3.1.1 渲染完成图片后调整构图
    const card_img = card.querySelector(".card-image--img");
    //  |--|--|-- 3.1.1.1 onload监听
    card_img.onload = function () {
      // 加载完图片后重新布局 Masonry
      // 这里是转圈图片的加载
      sortMasonry();

      //  |--|--|-- 3.1.1.2 MutationObserver监听
      // 创建一个 MutationObserver 实例
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
            // NOTE: 这里写监听变化后的处理, 可能会有性能问题, 注意
            // console.log(`index: ${rowData.torrentIndex + 1} img 的 src 属性已经被替换`); // 在控制台输出信息
            sortMasonry();
          }
        });
      });

      // 配置 MutationObserver 监听 img 元素的属性变化
      const config = {
        attributes: true, // 监听属性变化
        attributeFilter: ['src'], // 只监听 src 属性的变化
      };

      // 将 img 元素和配置添加到 MutationObserver 中
      observer.observe(card_img, config);

    };

    //  |--|--|-- 3.1.1.3 eventListener load 监听
    card_img.addEventListener('load', () => {
      sortMasonry();
    })

    //  |--|-- 3.1.2 插入生成的元素
    //  |--|--|-- 3.1.2.1 第一次默认生成
    waterfallNode.appendChild(card);

    //  |--|--|-- 3.1.2.2 非第一次生成
    if (!isFirst) {
      // console.log("not first ----------------------------");
      // console.log(card);
      masonry.appended(card);
    }
    // console.log(masonry);
  }
}
