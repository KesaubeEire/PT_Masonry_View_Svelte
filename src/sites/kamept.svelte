<script>
  import { _Global_Masonry, _CARD_SHOW, _current_bgColor } from "../stores";
  import { sortMasonry } from "../utils";
  import { onMount } from "svelte";

  // ------------------------------------------------

  /** 调用瀑布流整理*/
  function sort_masonry() {
    sortMasonry();
  }

  /**执行收藏动作并对制定卡片切换图标
   * @param {string} jsCodeLink js的收藏代码
   * @param {string} card_id 种子卡片id
   */
  function COLLET_AND_ICON_CHANGE(jsCodeLink, card_id) {
    // console.log(jsCodeLink, card_id);
    try {
      // 收藏链接
      window.location.href = jsCodeLink;

      // 操作相应的收藏图片
      const btn = document.querySelector(`div#${card_id}`);
      const img = btn.children[0];
      img.className =
        img.className == "delbookmark" ? "bookmark" : "delbookmark";
      // console.log(btn);
      console.log(`执行脚本${jsCodeLink}成功, 已经收藏或者取消~`);
    } catch (error) {
      // GUI 通知一下捏
      console.error(error);
    }
  }

  // ------------------------------------------------

  /** 父传值: 种子信息*/
  export let torrentInfo;
  /** 父传值: 卡片宽度*/
  export let cardWidth;
  /** 父传值: 静态图片链接*/
  export let ICON;

  // ------------------------------------------------

  /** 本地: 是否显示详情*/
  let _hover = false;
  function card_show_detail() {
    _hover = !_hover;
  }

  // ------------------------------------------------

  /** 本地: 本组件 dom*/
  let _selfDom;

  // onMount(() => {
  //   if (Object.keys($_Global_Masonry).length !== 0) {
  //     $_Global_Masonry.appended(_selfDom);
  //   }
  //   // console.log($_Global_Masonry);
  // });
</script>

<div
  class="card"
  style="
    width: {cardWidth}px; 
    z-index:{10000 - torrentInfo.torrentIndex}; 
    background-color:{$_current_bgColor}"
  bind:this={_selfDom}
>
  <div class="card-holder">
    <!-- 分区类别 -->
    <div
      class="card-category"
      data-href={torrentInfo.categoryLink}
      on:mouseenter={card_show_detail}
      on:mouseleave={card_show_detail}
    >
      <!-- TODO: 颜色这里和龟龟商量怎么搞分类的颜色捏 -->
      <!-- style="background: ${CONFIG.CATEGORY[categoryNumber]};" -->

      <!-- TODO: 图片这里先注释了, 和龟龟商量捏 -->
      <!-- ${_categoryImg.outerHTML} -->
      {torrentInfo.category}
    </div>

    <!-- 标题 & 跳转详情链接 -->
    <div
      class="card-title"
      on:mouseenter={card_show_detail}
      on:mouseleave={card_show_detail}
    >
      <a class="two-lines" href={torrentInfo.torrentLink} target="_blank">
        {torrentInfo.tempTagDom
          ? torrentInfo.tempTagDom.map((e) => e.outerHTML).join("&nbsp;")
          : ""}
        <b>{torrentInfo.torrent_name}</b>
      </a>
    </div>

    <!-- 预览图 -->
    <div class="card-image">
      <img
        class="card-image--img nexus-lazy-load_Kesa"
        src="pic/logo2_100.png"
        data-src={torrentInfo.picLink}
        alt={torrentInfo.torrentName}
        on:load={sort_masonry}
      />

      <!-- 索引标号 -->
      <div class="card-index">
        {torrentInfo.torrentIndex + 1}
      </div>
    </div>

    {#if $_CARD_SHOW.all || _hover}
      <!-- 置顶 && 免费类型&剩余时间 -->
      {#if torrentInfo.free_type || torrentInfo.pattMsg}
        <div class="card-alter">
          <div class="top_and_free {torrentInfo.free_type}">
            <!-- 置顶等级 -->
            {#if torrentInfo.place_at_the_top.length != 0}
              {@html Array.from(torrentInfo.place_at_the_top).map(
                (e) => e.outerHTML
              ) + "&nbsp;"}
            {/if}

            <!-- 免费类型 & 免费剩余时间 -->
            {#if torrentInfo.freeTypeImg}
              {@html torrentInfo.freeTypeImg.outerHTML}
            {/if}
            {#if torrentInfo.free_remaining_time}
              &nbsp;<b> {torrentInfo.free_remaining_time} </b>
            {/if}
          </div>
        </div>
      {/if}

      <!-- 副标题 -->
      {#if torrentInfo.description}
        <a class="card-description" href={torrentInfo.torrentLink}>
          {torrentInfo.description}
        </a>
      {/if}

      <!-- 标签 Tags -->
      <div class="cl-tags">
        {@html torrentInfo.tagsDOM
          .map((el) => {
            const _tag = document.createElement("div");
            _tag.innerHTML = el.outerHTML;
            // console.log(_tag);
            return _tag.outerHTML;
          })
          .join("")}
      </div>

      <div class="card-details">
        <div class="card-line">
          <!-- 大小 -->
          <div class="cl-center">
            {@html ICON.SIZE}&nbsp;{torrentInfo.size}
          </div>

          <!-- 下载 -->
          &nbsp;&nbsp;
          <div class="cl-center">
            {@html ICON.DOWNLOAD}&nbsp;
            <b><a href={torrentInfo.downloadLink}>下载</a></b>
          </div>

          <!-- 收藏 -->
          &nbsp;&nbsp;
          <div class="cl-center">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              class="btnCollet cl-center"
              id="tI_{torrentInfo.torrentIndex}"
              on:click={COLLET_AND_ICON_CHANGE(
                torrentInfo.collectLink,
                "tI_" + torrentInfo.torrentIndex
              )}
            >
              {@html torrentInfo.collectState == "Unbookmarked"
                ? ICON.COLLET
                : ICON.COLLETED}
              &nbsp;<b>收藏</b>
            </div>
          </div>
        </div>

        <!-- 种子id, 默认不显示 -->
        <!--<div class="card-line"><b>Torrent ID:</b> ${torrentId}</div> -->

        <!-- 上传时间 -->
        <div class="card-line"><b>上传时间:</b> {torrentInfo.upload_date}</div>

        <div class="card-line">
          {@html ICON.COMMENT}&nbsp;<b>{torrentInfo.comments}</b>&nbsp;&nbsp;
          {@html ICON.SEEDERS}&nbsp;<b>{torrentInfo.seeders}</b>&nbsp;&nbsp;
          {@html ICON.LEECHERS}&nbsp;<b>{torrentInfo.leechers}</b>&nbsp;&nbsp;
          {@html ICON.SNATCHED}&nbsp;<b>{torrentInfo.snatched}</b>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  /* 卡片 */
  .card {
    /* width: ${CARD.CARD_WIDTH}px; */
    /* width: 200px; */
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    /* background-color: ${themeColor}; */
    /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); */
    /* margin: 10px; */
    margin: 6px 0;

    overflow: hidden;

    cursor: pointer;

    box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 0px, rgba(0, 0, 0, 0.1) -1px -1px 0px;
    transition: box-shadow 0.2s;
  }

  /* 指针卡片悬浮效果 */
  .card:hover {
    box-shadow: rgba(115, 0, 255, 0.3) 5px 5px 0px,
      rgba(0, 0, 0, 0.1) -1px -1px 0px;
  }

  /* 卡片标题 */
  .card-title {
    padding: 2px 0;
  }

  /* 卡片内部容器 */
  .card-holder {
    background-color: rgba(255, 255, 255, 0.5);
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0)
    );
    /* padding-bottom: 6px; */
  }

  /* 卡片分类 */
  .card-category {
    text-align: center;
  }

  /* 卡片行默认样式 */
  .card-line {
    margin-bottom: 1px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    height: 20px;
  }

  /* 卡片标题: 默认两行 */
  .two-lines {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    transition: color 0.3s;
  }

  /* 卡片标题: hover时变为正常 */
  .two-lines:hover {
    -webkit-line-clamp: 100;
  }

  /* 卡片信息: flex 居中 */
  .cl-center {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  /* 卡片信息行: 标签行 */
  .cl-tags {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;

    gap: 2px;

    transform: translateX(4px);
  }

  /* 卡片简介总容器 */
  .card-details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding-top: 2px;
  }

  /* 卡片图像div */
  .card-image {
    height: 100%;
    position: relative;
    /* margin-bottom: 2px; */
  }

  /* 卡片图像div -> img标签 */
  .card-image img {
    width: 100%;
    object-fit: cover;
  }

  /* 卡片可选信息 */
  .card-alter {
    text-align: center;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 置顶 && 免费类型&剩余时间 */
  .top_and_free {
    padding: 2px;
    border-radius: 4px;
    margin-bottom: 2px;

    display: flex;
    justify-content: center;
    align-items: center;

    line-height: 11px;
    height: 11px;
    font-size: 10px;
  }
  ._Free {
    color: blue;
    /* background-color: #00e6 */
  }

  ._2XFree {
    color: green;
    /* background-color: #0e0 */
  }

  /* 卡片索引 */
  .card-description {
    padding-left: 4px;
    padding-right: 4px;
  }

  /* 卡片索引 */
  .card-index {
    position: absolute;
    top: 0;
    left: 0;
    padding-right: 9px;
    padding-left: 2px;
    margin: 0;
    height: 20px;
    line-height: 16px;
    font-size: 16px;

    background-color: rgba(0, 0, 0);
    color: yellow;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;

    display: flex;
    align-items: center;

    pointer-events: none;
  }

  /* 卡片: 收藏按钮 */
  .btnCollet {
    padding: 1px 2px;
    cursor: pointer;
  }

  /* 上面是我自己脚本的css */
  /* --------------------------------------- */
  /* 下面是改进原有的css */

  /* 卡片索引 */
  #nexus-preview {
    z-index: 20000;
    position: absolute;
    display: none;

    pointer-events: none;
  }

  /* 临时标签_热门 */
  .hot {
    padding: 0 2px;
    border-radius: 8px;
    background: white;
    margin: 2px;
  }
  /* 临时标签_新 */
  .new {
    padding: 0 2px;
    border-radius: 8px;
    background: white;
    margin: 2px;
  }
</style>
