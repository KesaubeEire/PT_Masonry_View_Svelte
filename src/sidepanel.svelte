<script>
  import {
    _show_originTable,
    _Global_Masonry,
    _card_width,
    _CARD_SHOW,
    _turnPage,
    _iframe_switch,
  } from "./stores";

  import { sortMasonry } from "./utils";

  // ------------------------------------------------

  /** 父传值: 原有种子列表*/
  export let originTable;

  // ------------------------------------------------

  /**按钮1函数: 显示原有列表*/
  function __show_originTable() {
    // console.log($_show_originTable);

    $_show_originTable = $_show_originTable == 0 ? 1 : 0;
    originTable.style.display = $_show_originTable === 1 ? "" : "none";
  }

  /**按钮2函数: 手动整理瀑布流布局*/
  function __sort_masonry() {
    // @ts-ignore
    $_Global_Masonry.layout();
  }

  /** debug01*/
  function debug01() {
    $_card_width = $_card_width == 300 ? 200 : 300;
    console.log(`[debug]\$card_width: ${$_card_width}`);

    sortMasonry("fast");
    sortMasonry("fast");
    sortMasonry();
  }

  /** debug02*/
  function debug02() {
    $_CARD_SHOW.all = !$_CARD_SHOW.all;
    sortMasonry("fast");
    sortMasonry("fast");
    sortMasonry();
    sortMasonry();
  }

  function debug03() {
    $_turnPage = $_turnPage == 0 ? 1 : 0;
  }

  function debug04() {
    $_iframe_switch = $_iframe_switch == 0 ? 1 : 0;
  }
</script>

<div class="sideP">
  <!-- 侧边栏拖拽条 -->
  <!-- TODO: 仿照 PTPP 插件做拖拽效果, 优先度低 -->
  <div class="sideP__title" />

  <!-- 按钮列表 -->
  <div class="sideP__out">
    <!-- 按钮1: 显示原有列表 -->
    <button class="sideP__btn" on:click={__show_originTable}>原有列表</button>

    <!-- 按钮2: 手动整理布局 -->
    <button class="sideP__btn" on:click={__sort_masonry}>整理布局</button>

    <!-- 按钮3: 呼出完整侧边栏 -->
    <button class="sideP__btn">呼出边栏</button>

    <!-- 按钮4: debug -->
    <button class="sideP__btn" on:click={debug01}>[debug]切换宽度</button>

    <!-- 按钮5: debug -->
    <button class="sideP__btn" on:click={debug02}>[debug]显示详情</button>

    <!-- 按钮6: debug -->
    <button class="sideP__btn" on:click={debug03}>
      [debug]加载下一页模式切换
    </button>

    <button class="sideP__btn" on:click={debug04}> 显示种子详情 </button>
  </div>
</div>

<style>
  .sideP {
    position: fixed;
    right: 0px;
    top: 0px;

    opacity: 0.4;

    margin: 4px 2px;

    background-color: aqua;

    border-radius: 8px;
    overflow: hidden;

    z-index: 30001;

    &:hover {
      opacity: 1;
    }
  }

  .sideP__title {
    width: 100%;
    height: 8px;

    background-color: yellow;

    &:hover {
      cursor: move;
    }
  }

  .sideP__out {
    display: flex;
    flex-direction: column;

    & button {
      background-color: gray;
      color: white;

      margin: 4px;
      border-radius: 8px;

      cursor: pointer;

      &:hover {
        background-color: black;
      }
    }
  }
</style>
