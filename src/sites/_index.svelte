<script>
  import { _current_domain, _Global_Masonry, _card_width } from "../stores";
  import { onMount } from "svelte";
  import { sortMasonry, NEXUS_TOOLS } from "../utils";
  import "../utils/masonry.pkgd.Kesa";

  import { config } from "./kamept";
  import Kamept from "./kamept.svelte";

  // ------------------------------------------------

  /** 父传值: 原有种子列表dom*/
  export let originTable;
  /** 父传值: 瀑布流dom*/
  export let waterfallNode;

  // ------------------------------------------------

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
    GAP: 900,

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

  // ------------------------------------------------

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

  // ------------------------------------------------
  // FIXME: 瀑布流渲染流程------------------------------------------------

  // 1. 获取当前域名 --------------------------------------------------------------------------------------
  $_current_domain = GET_CURRENT_PT_DOMAIN();
  console.log($_current_domain);

  // 2. 根据当前域名拿到对应的数据 --------------------------------------------------------------------------------------
  let infoList = [];
  infoList = [...infoList, ...config.TORRENT_LIST_TO_JSON(originTable)];
  console.log(infoList);

  // 3. 开整瀑布流 --------------------------------------------------------------------------------------

  let masonry;
  $: if (masonry) {
    CARD.CARD_WIDTH = $_card_width;
    console.log(CARD.CARD_WIDTH);

    // console.log("card width changed.");
    // masonry.options.gutter = GET_CARD_GUTTER(waterfallNode, $_card_width);
    // masonry.options.columnWidth = $_card_width;
    // sortMasonry('fast');
    // sortMasonry('fast');

    CHANGE_CARD_LAYOUT();
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

    // Nexus Tools
    NEXUS_TOOLS();
  });
</script>

{#if $_current_domain == "kamept.com"}
  {#each infoList as info (info.torrentId)}
    <Kamept torrentInfo={info} cardWidth={CARD.CARD_WIDTH} {ICON} />
  {/each}
{:else}
  <div>else</div>
{/if}

<style></style>
