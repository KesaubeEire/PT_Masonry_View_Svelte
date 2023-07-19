import { _iframe_switch, _iframe_url } from '../stores'
export { CONFIG as config };
const CONFIG = {
  /** 默认的种子表格 dom selector */
  torrentListTable: "table.torrents",

  /** 将 种子列表dom 的信息变为 json对象列表 */
  TORRENT_LIST_TO_JSON,

  /** 加载图片等待时的默认图片 */
  LOADING_PIC: "pic/logo2_100.png",

  /** 如果站点有自定义的icon, 可以用自定义的 */
  ICON: {},

  /** 如果站点有必要设置分类颜色, 可以用自定义的 */
  CATEGORY: {
    // [粉色]AV: 同人AV 男娘 VR同人
    410: '#FF66FF',
    413: '#FF66FF',
    414: '#FF66FF',
    // [绿色]图: cos图 画师CG 游戏CG 单行本 同人志
    417: '#59CD90',
    433: '#59CD90',
    434: '#59CD90',
    424: '#59CD90',
    435: '#59CD90',
    // [黄色]动画: 里番 2D 3D
    411: '#FAC05E',
    419: '#FAC05E',
    423: '#FAC05E',
    // [紫色]声音: 外语音声 中文音声 视频音声 音乐
    420: '#3FA7D6',
    421: '#3FA7D6',
    422: '#3FA7D6',
    437: '#3FA7D6',
    // [红色]游戏: 游戏 中文游戏
    415: '#EE6352',
    418: '#EE6352',

  },
  /** 索引 */
  INDEX: 0,

  /** iframe 宽度 */
  Iframe_Width: 1260,

  /** NOTE: 站点特殊操作 */
  special: function () {
    // 给龟站的搜索箱默认设置为"不扩展", 否则平常占地方(from tg by LNN)
    // $('ksearchboxmain').style.display = 'none'
    // @ts-ignore
    $('ksearchboxmain') ? $('ksearchboxmain').style.display = 'none' : null;

    // "点此查看即将断种资源" 文字设置为黑色(from tg by LNN)
    const link = document.querySelector('a[href="?sort=7&type=asc&seeders_begin=1"]');
    // @ts-ignore
    link ? link.childNodes[0].style.color = 'black' : null;

    // -------------------------------

    // 原表格点击图片显示 iframe
    table_Iframe_Set()
  },

  /** NOTE: 站点下一页加载后操作 */
  pageLoaded: function () {
    // 原生 nexus tools
    var script = document.createElement("script");
    script.src = "https://kamept.com/js/nexus.js";
    document.head.appendChild(script);

    // -------------------------------

    // 原表格点击图片显示 iframe
    table_Iframe_Set()
  }
};

/** 原表格点击图片显示 iframe */
function table_Iframe_Set() {
  const lists = Array.from(document.querySelectorAll('.torrentname'))
  lists.forEach(el => el.addEventListener('click', function (event) {
    // 阻止 a 标签的默认行为
    event.preventDefault();

    // 对 iframe 进行操作
    _iframe_switch.set(1)
    
    // console.log(el.children[0].children[0].children[1].querySelector('a').href);
    _iframe_url.set(el.children[0].children[0].children[1].querySelector('a').href + "#kdescr")
  }))
}

/** 将 种子列表dom 的信息变为 json对象列表
 * @param {*} torrent_list_Dom 种子列表dom
 * @returns {[]} 种子列表信息的 json对象列表
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
    const category = categoryImg ? categoryImg.alt : "";
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
    // const torrentIndex = CARD.CARD_INDEX++;
    const torrentIndex = CONFIG.INDEX++;

    // 获取种子名称
    const torrentNameLink = row.querySelector(".torrentname a");
    const torrentName = torrentNameLink ? torrentNameLink.textContent.trim() : "";

    // 获取种子详情链接
    const torrentLink = torrentNameLink.href;
    // console.log(torrentLink);

    // 获取种子id
    const pattern = /id=(\d+)&hit/;
    const match = torrentLink.match(pattern);
    const torrentId = match ? parseInt(match[1]) : null;

    // 获取预览图片链接
    const picLink = row.querySelector(".torrentname img").getAttribute("data-src");

    // 获取描述
    const desCell = row.querySelector(".torrentname td:nth-child(2)");
    const length = desCell.childNodes.length - 1;
    const desDom = desCell.childNodes[length];
    const description = desDom.nodeName == '#text' ? desDom.textContent.trim() : "";

    // 获取置顶信息
    const place_at_the_top = row.querySelectorAll(".torrentname img.sticky");
    const pattMsg = place_at_the_top[0] ? place_at_the_top[0].title : "";

    // 获取临时标签: 新 / 热门 等
    const tempTagDom = Array.from(row.querySelectorAll('.torrentname font'));
    // console.log(tempTagDom);

    // 获取免费折扣类型
    const freeTypeImg = row.querySelector('img[class^="pro_"]');
    // console.log(freeTypeImg);
    // console.log(freeTypeImg.alt);
    const freeType = freeTypeImg
      ? "_" + freeTypeImg.alt.replace(/\s+/g, "")
      : "";

    // 获取免费剩余时间
    // const freeRemainingTimeSpan = row.querySelector("font");
    const freeRemainingTimeSpan = freeType ? tempTagDom.pop() : "";
    const freeRemainingTime = freeRemainingTimeSpan
      ? freeRemainingTimeSpan.innerText
      : "";

    // 获取标签
    const tagSpans = row.querySelectorAll(".torrentname span");
    // const raw_tags = row.querySelector(".torrentname");
    const tagsDOM = Array.from(tagSpans);
    let tags = tagSpans ? tagsDOM.map((span) => span.textContent.trim()) : [];

    // console.log(index);
    // console.log(torrentName);
    // console.log(tags);

    if (freeRemainingTime != "") {
      // console.log(tags[0]);
      tags.shift();
      tagsDOM.shift();
    }
    const raw_tags = tagsDOM.map((el) => el.outerHTML).join("");
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
      upload_date: uploadDate,
      comments,
      size,
      seeders,
      leechers,
      snatched,
    };

    // 将当前行的 JSON 对象添加到数组中
    data.push(rowData);
  });
  // @ts-ignore
  return data;
}