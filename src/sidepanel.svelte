<script>
  import { onMount } from "svelte";
  import {
    _show_originTable,
    _Global_Masonry,
    _card_width,
    _CARD_SHOW,
    _turnPage,
    _iframe_switch,
    _panelPos,
  } from "./stores";

  import { sortMasonry } from "./utils";

  // 配置拖拽侧边栏 ------------------------------------------------

  let div;
  let isMouseDown = false;
  let offsetX = 0,
    offsetY = 0;

  const onMouseDown = (e) => {
    e.preventDefault();
    isMouseDown = true;
    offsetX = e.clientX - div.getBoundingClientRect().left;
    offsetY = e.clientY - div.getBoundingClientRect().top;
  };

  const onMouseMove = (e) => {
    e.preventDefault();
    if (!isMouseDown) return;
    // NOTE: 进行拖拽限位, 不是很完全, 后期需要继续调整
    const res_L = e.clientX - offsetX > 0 ? e.clientX - offsetX : 0;
    const res_R = e.clientY - offsetY > 0 ? e.clientY - offsetY : 0;
    $_panelPos = { x: res_L, y: res_R };
    // div.style.left = `${res_L}px`;
    // div.style.top = `${res_R}px`;
  };

  const onMouseUp = () => {
    isMouseDown = false;
  };

  onMount(() => {
    // 拖拽边栏监听
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  });

  function resetPanelPos() {
    if ($_panelPos.x == 0 && $_panelPos.y == 0) alert("无需重置瀑布流边栏位置");
    $_panelPos = { x: 0, y: 0 };
  }

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

<div
  class="sideP"
  bind:this={div}
  style="top:{$_panelPos.y}px; left:{$_panelPos.x}px"
>
  <!-- 侧边栏拖拽条 -->
  <!-- TODO: 仿照 PTPP 插件做拖拽效果, 优先度低 -->
  <div class="sideP__title" on:mousedown={onMouseDown} />

  <!-- 按钮列表 -->
  <div class="sideP__out">
    <!-- 按钮1: 显示原有列表 -->
    <button class="sideP__btn" on:click={__show_originTable}>原有列表</button>

    <!-- 按钮2: 手动整理布局 -->
    <button class="sideP__btn" on:click={__sort_masonry}>整理布局</button>

    <!-- 按钮3: 呼出完整侧边栏 -->
    <button class="sideP__btn">呼出边栏</button>

    <!-- 按钮4: debug -->
    <button class="sideP__btn" on:click={debug01}>[d]切换宽度</button>

    <!-- 按钮5: debug -->
    <button class="sideP__btn" on:click={debug02}>[d]显示详情</button>

    <!-- 按钮6: debug -->
    <button class="sideP__btn" on:click={debug03}> [d]切换加载模式 </button>

    <!-- 按钮6: debug -->
    <button class="sideP__btn" on:click={debug04}> [d]iframe </button>
  </div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="reset_panel_pos" on:click={resetPanelPos}>重置瀑布流配置边栏位置</div>

<style>
  .sideP {
    position: fixed;
    /* left: 0px; */
    /* top: 0px; */

    /* transition: top 0.1s; */
    /* transition: left 0.1s; */

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

      padding: 4px 2px;

      margin: 4px;
      border-radius: 8px;

      cursor: pointer;

      &:hover {
        background-color: black;
      }
    }
  }

  #reset_panel_pos {
    width: 100%;
    text-align: center;
    /* background-color: #fff; */
    border: 1px solid black;
    border-radius: 16px;
    /* padding: 8px 0; */
  }
</style>
