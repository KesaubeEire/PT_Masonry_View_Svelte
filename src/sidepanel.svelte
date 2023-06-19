<script>
  import { _show_originTable, _Global_Masonry } from "./stores";

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

  function __sort_masonry() {
    $_Global_Masonry.layout();
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
