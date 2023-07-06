<script>
  import {
    _current_domain,
    _Global_Masonry,
    _card_width,
    _current_bgColor,
    _turnPage,
    _iframe_switch,
    _iframe_url,
  } from "../stores";
  import { onMount, afterUpdate } from "svelte";
  import { sortMasonry, NEXUS_TOOLS, debounce } from "../utils";
  import "../utils/masonry.pkgd.Kesa";

  import { config } from "./kamept";
  import Kamept from "./kamept.svelte";
  import { fade } from "svelte/transition";

  // 父子参数 ------------------------------------------------

  /** 父传值: 原有种子列表dom*/
  export let originTable;
  /** 父传值: 瀑布流dom*/
  export let waterfallNode;

  // 固定参数 ------------------------------------------------

  // const cardDomList = {};

  /** 瀑布流卡片相关参数顶层对象 */
  const CARD = {
    /** 瀑布流卡片宽度 */
    CARD_WIDTH: $_card_width,

    /** 瀑布流卡片边框宽度 -> 这个2是真值, 但是边框好像是会随着分辨率和缩放变化, 给高有利大分辨率, 给低有利于小分辨率 */
    CARD_BORDER: 3,

    /** 瀑布流卡片索引 */
    CARD_INDEX: 0,

    /** 图片悬浮预览方式
     * 0: 一律放大到全视窗[默认]
     * 1: 最小为原图
     */
    PIC_HOVER_STYLE: 0,
  };

  /** 翻页相关参数顶层对象 */
  // @ts-ignore
  const PAGE = {
    /** 翻页: 底部检测时间间隔 */
    GAP: 3000,

    /** 翻页: 底部检测视点与底部距离 */
    DISTANCE: 300,

    /** 翻页: 是否为初始跳转页面 */
    IS_ORIGIN: true,

    /** 翻页: 当前页数 */
    PAGE_CURRENT: 0,

    /** 翻页: 下一页数 */
    PAGE_NEXT: 0,

    /** 翻页: 下一页的链接 */
    NEXT_URL: "",

    /** 翻页: 下一页的加载方式: Button | Slip */
    SWITCH_MODE: "Button",
  };

  /** 网站图标链接 */
  // @ts-ignore
  const ICON = {
    /** 大小图标 */
    SIZE: '<img class="size" src="pic/trans.gif" style=" transform: translateY(-0.4px);" alt="size" title="大小">',
    /** 评论图标 */
    COMMENT:
      '<img class="comments" src="pic/trans.gif" alt="comments" title="评论数">',
    /** 上传人数图标 */
    SEEDERS:
      '<img class="seeders" src="pic/trans.gif" alt="seeders" title="种子数">',
    /** 下载人数图标 */
    LEECHERS:
      '<img class="leechers" src="pic/trans.gif" alt="leechers" title="下载数">',
    /** 已完成人数图标 */
    SNATCHED:
      '<img class="snatched" src="pic/trans.gif" alt="snatched" title="完成数">',
    /** 下载图标 */
    DOWNLOAD:
      '<img class="download" src="pic/trans.gif" style=" transform: translateY(1px);" alt="download" title="下载本种">',
    /** 未收藏图标 */
    COLLET:
      '<img class="delbookmark" src="pic/trans.gif" alt="Unbookmarked" title="收藏">',
    /** 已收藏图标 */
    COLLETED: '<img class="bookmark" src="pic/trans.gif" alt="Bookmarked">',
  };

  // 组件函数 ------------------------------------------------

  /**获得当前PT站的名字
   * @returns 当前PT站名
   */
  function GET_CURRENT_PT_DOMAIN() {
    const domainName = window.location.hostname;
    // 输出当前链接的域名
    console.log("当前站点: ", domainName);
    return domainName;
  }

  /**根据容器宽度和卡片宽度动态调整卡片间隔 gutter
   * @param {object} containerDom 容器dom
   * @param {number} card_width 卡片宽度
   */
  // @ts-ignore
  function GET_CARD_GUTTER(containerDom, card_width) {
    // 获取容器宽度
    const _width = containerDom.clientWidth;

    // 获取一个合适的 gutter
    const card_real_width = card_width + CARD.CARD_BORDER;
    const columns = Math.floor(_width / card_real_width);
    const gutter = (_width - columns * card_real_width) / (columns - 1);
    console.log(`列数:${columns} 间隔:${gutter}`);
    console.log(
      `容器宽:${_width} 列宽:${masonry ? masonry.columnWidth : "对象"}`
    );

    return Math.floor(gutter);
  }

  /**调整卡片布局 */
  function CHANGE_CARD_LAYOUT() {
    console.log("card width changed.");
    masonry.options.gutter = GET_CARD_GUTTER(waterfallNode, $_card_width);
    masonry.options.columnWidth = $_card_width;
    sortMasonry("fast");
    sortMasonry("fast");
  }

  // iframe相关 ------------------------------------------------
  function toggleIframe() {
    $_iframe_switch = 0;
  }

  // 翻页相关 ------------------------------------------------

  /** 控制加载按钮是否激活 */
  let isButtonDisabled = false;
  /** 控制翻页 & onMount 响应 */
  let onMountSignal = false;
  /** 加载文字 */
  const LOAD_TEXT = {
    normal: "点击加载下一页",
    suspend: `下一页加载CD: ${PAGE.GAP} ms`,
    disable: "不可用",
  };

  /**翻页
   * @param event
   */
  function turnPage(event) {
    // 防止默认行为的发生
    event.preventDefault();
    // console.log(event);

    // 加载下一页
    if ($_turnPage == 0) debounceLoad();

    // 加载下一页3秒防抖
    if (!isButtonDisabled) {
      isButtonDisabled = true;
      setTimeout(() => {
        isButtonDisabled = false;
      }, PAGE.GAP);
    }
  }

  /** 延迟调用 Nexus Tool */
  function nexus_tool_delay() {
    setTimeout(NEXUS_TOOLS, 500);
  }

  // ------------------------------------------------
  // FIXME: 瀑布流渲染流程------------------------------------------------

  // 1. 获取当前域名 & 背景颜色 --------------------------------------------------------------------------------------
  $_current_domain = GET_CURRENT_PT_DOMAIN();
  console.log($_current_domain);

  /** 获取主题背景色 */
  const mainOuterDOM = document.querySelector("table.mainouter");
  const themeColor = window.getComputedStyle(mainOuterDOM)["background-color"];
  $_current_bgColor = themeColor;
  console.log("背景颜色:", themeColor);

  // 2. 根据当前域名拿到对应的数据 --------------------------------------------------------------------------------------
  let infoList = [];
  infoList = [...infoList, ...config.TORRENT_LIST_TO_JSON(originTable)];
  let _historyList = [...infoList];

  // 3. 开整瀑布流 --------------------------------------------------------------------------------------

  let masonry;
  $: if (masonry) {
    CARD.CARD_WIDTH = $_card_width;
    console.log(CARD.CARD_WIDTH);

    CHANGE_CARD_LAYOUT();
  }

  // FIXME:
  // 4. 底部检测 & 加载下一页 --------------------------------------------------------------------------------------
  // |-- 4.1 检测是否到了底部

  /** 延迟加载事件 */
  let debounceLoad;
  function scan_and_launch() {
    const scrollHeight = document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop + clientHeight >= scrollHeight - PAGE.DISTANCE) {
      if ($_turnPage === 1) debounceLoad();
      else {
        console.log("加载模式: 按钮");
      }

      // 这里整理一下瀑布流, 往往这里会出一点格式问题
      sortMasonry();
    }
  }

  // |-- 4.2 加载下一页
  debounceLoad = debounce(loadNextPage, PAGE.GAP);

  /**加载下一页的本体函数 */
  function loadNextPage() {
    console.log("到页面底部啦!!! Scrolled to bottom!");
    // |--|-- 4.2.1 获取下一页的链接
    // 使用 URLSearchParams 对象获取当前网页的查询参数
    const urlSearchParams = new URLSearchParams(window.location.search);

    // 获取名为 "page" 的参数的值 -> 初始为页面值, 更新为更新值
    PAGE.PAGE_CURRENT = PAGE.IS_ORIGIN
      ? Number(urlSearchParams.get("page"))
      : PAGE.PAGE_CURRENT;

    // 如果 "page" 参数不存在，则将页数设为 0，否则打印当前页数
    if (!PAGE.PAGE_CURRENT) {
      console.log(
        `网页链接没有page参数, 无法跳转下一页, 生成PAGE.PAGE_CURRENT为0`
      );
      PAGE.PAGE_CURRENT = 0;
    } else {
      console.log("当前页数: " + PAGE.PAGE_CURRENT);
    }

    // 将页数加 1，并设置为新的 "page" 参数的值
    // @ts-ignore
    PAGE.PAGE_NEXT = parseInt(PAGE.PAGE_CURRENT) + 1;
    // @ts-ignore
    urlSearchParams.set("page", PAGE.PAGE_NEXT);

    // 生成新的链接，包括原网页的域名、路径和新的查询参数
    PAGE.NEXT_URL =
      window.location.origin +
      window.location.pathname +
      "?" +
      urlSearchParams.toString();

    // 打印新的链接
    console.log("New URL:", PAGE.NEXT_URL);

    // TODO: 搞个 list 放入所有生成的新链接, 如果新链接存在就不 fetch 新数据

    // |--|-- 4.2.2 加载下一页 html 获取 json 信息对象
    fetch(PAGE.NEXT_URL)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const table = doc.querySelector("table.torrents");
        // console.log(table);

        infoList = [...infoList, ...config.TORRENT_LIST_TO_JSON(table)];

        // // |--|-- 4.2.3 渲染 下一页信息 并 加到 waterfallNode 里面来
        // PUT_TORRENT_INTO_MASONRY(table, waterfallNode, false, masonry);
        // // PUT_TORRENT_INTO_MASONRY(_ORIGIN_TL_Node, waterfallNode, false, masonry);

        // // 生成新的时候再改一次图片宽度
        // CHANGE_CARD_WIDTH(CARD.CARD_WIDTH, waterfallNode, masonry);

        // FIXME: 这里没搞定捏

        // 页数更新, 在上面几行更新会导致没有下一页的情况下仍然触发
        PAGE.IS_ORIGIN = false;
        PAGE.PAGE_CURRENT = PAGE.PAGE_NEXT;

        // NOTE: 配置 onMount 和 翻页的协同响应, 避免被其他 dom 刷新干扰重复调用
        onMountSignal = true;
        setTimeout(() => {
          onMountSignal = false;
        }, 1000);
      })
      .catch((error) => {
        // console.error(error);
        console.warn("获取不到下页信息, 可能到头了");
        console.warn(error);
      });
  }

  /** 启动项目配置*/
  onMount(() => {
    // 生成瀑布流
    // @ts-ignore
    masonry = new Masonry(waterfallNode, {
      itemSelector: ".card",
      columnWidth: $_card_width,
      gutter: GET_CARD_GUTTER(waterfallNode, $_card_width),
    });

    // 绑定各种全局变量
    // @ts-ignore
    window.masonry = masonry;
    $_Global_Masonry = masonry;

    // 初始化整理布局
    masonry.layout("fast");
    masonry.layout("fast");

    // 给瀑布流节点放一个手动点击整理的功能
    waterfallNode.addEventListener("click", (event) => {
      // 模拟 self, 只有在点击本身而非子元素的时候时触发效果
      if (event.target === event.currentTarget) {
        if (masonry) masonry.layout();
        console.log("Masonry 已整理~");
      }
    });

    // 滚动到底部检测
    window.addEventListener("scroll", function () {
      scan_and_launch();
    });

    // Nexus Tools
    NEXUS_TOOLS();
  });

  /** 更新项目配置*/
  afterUpdate(() => {
    console.log("afterUpdate-------------------->");

    // 配置 onMount 和 翻页的协同响应, 避免被其他 dom 刷新干扰重复调用
    if (masonry && onMountSignal) {
      console.log("reload Items-------------------->");
      masonry.reloadItems();
      masonry.layout();
      // setTimeout(NEXUS_TOOLS, 500);

      // NOTE: 修复了直接调用 Nexus 会导致懒加载失效的 bug
      masonry.on("layoutComplete", nexus_tool_delay);
      setTimeout(() => {
        masonry.off("layoutComplete", nexus_tool_delay);
      }, 1500);
      // masonry.on("layoutComplete", function () {
      //   setTimeout(NEXUS_TOOLS, 500);
      // });
      // NEXUS_TOOLS();
    }
  });
</script>

{#if $_current_domain == "kamept.com"}
  {#each infoList as info (info.torrentId)}
    <Kamept torrentInfo={info} cardWidth={CARD.CARD_WIDTH} {ICON} />
  {/each}
{:else}
  <div>else</div>
{/if}

<!-- 点击加载下一页的按钮 -->
<div>
  <button
    id="turnPage"
    on:click={turnPage}
    disabled={$_turnPage || isButtonDisabled}
  >
    {#if $_turnPage}
      {LOAD_TEXT.disable}
    {:else if isButtonDisabled}
      {LOAD_TEXT.suspend}
    {:else}
      {LOAD_TEXT.normal}
    {/if}
  </button>
</div>

<!-- iframe 详情 -->
{#if $_iframe_switch}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div id="_iframe" on:click={toggleIframe} transition:fade={{ duration: 300 }}>
    <iframe src={$_iframe_url} frameborder="0" title="wow" />
  </div>
{/if}

<style>
  /* 卡片: 收藏按钮 */
  #turnPage {
    width: 100%;
    height: 32px;
    border-radius: 16px;
    line-height: 20px;
    font-size: 14px;

    position: absolute;
    bottom: 0px;
  }

  div#_iframe {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 255, 255, 0.398);
    z-index: 20000;

    display: flex;
  }

  iframe {
    width: 1246px;
    height: 96%;

    margin: auto;
  }
</style>
