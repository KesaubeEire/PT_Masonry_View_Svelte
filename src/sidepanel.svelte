<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import {
    _show_originTable,
    _Global_Masonry,
    _card_width,
    _CARD_SHOW,
    _turnPage,
    _iframe_switch,
    _panelPos,
    _show_debug_btn,
    _show_nexus_pic,
    _delay_nexus_pic,
    _show_configPanel,
  } from "./stores";

  import { sortMasonry } from "./utils";
  import Switch from "./component/switch.svelte";

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

  function resetPanelPos() {
    if ($_panelPos.x == 0 && $_panelPos.y == 0) alert("无需重置瀑布流边栏位置");
    $_panelPos = { x: 0, y: 0 };
  }

  // ------------------------------------------------

  /** 父传值: 原有种子列表*/
  export let originTable;

  // ------------------------------------------------

  /** 按钮1函数: 显示原有列表*/
  function __show_originTable() {
    // console.log($_show_originTable);

    $_show_originTable = $_show_originTable == 0 ? 1 : 0;
    originTable.style.display = $_show_originTable === 1 ? "" : "none";
  }

  /** 按钮2函数: 手动整理瀑布流布局*/
  function __sort_masonry() {
    // @ts-ignore
    $_Global_Masonry.layout();
  }

  /** 切换宽度 */
  function config_changeWidth() {
    $_card_width = $_card_width == 300 ? 200 : 300;
    console.log(`[debug]\$card_width: ${$_card_width}`);

    sortMasonry("fast");
    sortMasonry("fast");
    sortMasonry();
  }

  /** 显示所有详情界面 */
  function config_showAllDetails() {
    $_CARD_SHOW.all = !$_CARD_SHOW.all;
    sortMasonry("fast");
    sortMasonry("fast");
    sortMasonry();
    sortMasonry();
  }

  /** 模式切换按钮标签 */
  let label_switchMode = $_turnPage ? "滚动加载" : "按钮加载";
  function config_switchMode() {
    $_turnPage = !$_turnPage;
    label_switchMode = $_turnPage ? "滚动加载" : "按钮加载";
  }

  /** 切换下一页加载模式 */
  function config_changeLoadMode() {
    $_iframe_switch = $_iframe_switch == 0 ? 1 : 0;
  }

  // ------------------------------------------------

  onMount(() => {
    // 拖拽边栏监听
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  });
</script>

<!-- 侧边栏 -->
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
    <button
      class="sideP__btn"
      on:click={() => {
        $_show_configPanel = !$_show_configPanel;
      }}
    >
      呼出边栏
    </button>

    {#if $_show_debug_btn}
      <!-- 按钮4: debug -->
      <button class="sideP__btn" on:click={config_changeWidth}>
        [d]切换宽度
      </button>

      <!-- 按钮5: debug -->
      <button class="sideP__btn" on:click={config_showAllDetails}>
        [d]显示详情
      </button>

      <!-- 按钮6: debug -->
      <button class="sideP__btn" on:click={config_switchMode}>
        [d]{label_switchMode}
      </button>

      <!-- 按钮6: debug -->
      <button class="sideP__btn" on:click={config_changeLoadMode}>
        [d]iframe
      </button>
    {/if}
  </div>
</div>

<!-- 详细配置面板 -->
{#if $_show_configPanel}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="configP"
    transition:fade={{ duration: 100 }}
    on:click|self={() => ($_show_configPanel = false)}
  >
    <div class="configP_holder">
      <!-- 标题区 -->
      <div class="configP_title">
        <p>详细配置面板</p>
        <!-- ---------------- 返回按钮 ---------------- -->
        <button on:click={() => ($_show_configPanel = false)}>
          <!-- <svg height="28" width="28" viewBox="0 0 48 48">
            <path
              d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"
              fill="red"
            />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg> -->
          <svg
            class="feather feather-x"
            fill="none"
            height="28"
            width="28"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <line x1="20" x2="6" y1="6" y2="20" />
            <line x1="6" x2="20" y1="6" y2="20" />
          </svg>
        </button>
      </div>

      <!-- 配置区 -->
      <!-- ---------------- 常用配置 ---------------- -->
      <div class="section">
        <h1 class="s_title">常用配置</h1>
        <div class="s_panel">
          <Switch
            title_fixed={"按钮加载方式"}
            title_green="按钮(默认)"
            title_red="滚动(谨慎使用)"
            label="MT等网站频繁使用可能会导致 120"
            bind:checked={$_turnPage}
            green_state={false}
          />
          <Switch
            title_fixed={"显示侧边栏debug按钮"}
            title_green="隐藏(默认)"
            title_red="显示(开发用)"
            bind:checked={$_show_debug_btn}
            green_state={false}
          />
          <Switch
            title_fixed={"显示鼠标悬浮预览大图"}
            title_green="默认开启"
            title_red="真不用再关"
            bind:checked={$_show_nexus_pic}
          />
          <Switch title_fixed={"延迟悬浮预览"} />

          <!-- 按钮: 切换宽度 -->
          <button class="sideP__btn" on:click={config_changeWidth}>
            切换宽度
          </button>

          <!-- 按钮: 切换下一页加载模式 -->
          <button
            class="sideP__btn"
            on:click={config_switchMode}
            style="background-color:{!$_turnPage ? '#59CD90' : '#FBC4AB'}"
          >
            加载下一页: {label_switchMode}
            {#if $_turnPage}
              <span style="color: red;" title="MT等网站频繁使用可能会导致 120">
                (谨慎使用!)
              </span>
            {:else}
              (默认)
            {/if}
          </button>

          <!-- 按钮: 显示侧边栏 debug 按钮 -->
          <button
            class="sideP__btn"
            on:click={() => {
              $_show_debug_btn = !$_show_debug_btn;
            }}
            style="background-color:{$_show_debug_btn ? '#59CD90' : '#FBC4AB'}"
          >
            显示侧边栏 debug 按钮:
            {#if $_show_debug_btn}
              <span style="color: green;">是</span>
            {:else}
              <span style="color: red;">否</span>(默认)
            {/if}
          </button>

          <!-- 按钮: 显示鼠标悬浮预览大图 -->
          <button
            class="sideP__btn"
            on:click={() => {
              $_show_nexus_pic = !$_show_nexus_pic;
            }}
            style="background-color:{$_show_nexus_pic ? '#59CD90' : '#FBC4AB'}"
          >
            是否显示鼠标悬浮预览大图:
            {#if $_show_nexus_pic}
              <span style="color: green;">是</span>(默认)
            {:else}
              <span style="color: red;">否</span>
            {/if}
          </button>

          <!-- 按钮: 悬浮预览延迟 -->
          <button
            class="sideP__btn"
            on:click={() => {
              $_delay_nexus_pic = $_delay_nexus_pic == 0 ? 600 : 0;
            }}
            style="background-color:{$_delay_nexus_pic ? '#59CD90' : '#FBC4AB'}"
            disabled={!$_show_nexus_pic}
          >
            是否延迟悬浮预览:
            {#if $_delay_nexus_pic != 0}
              <span style="color: green;">延迟{$_delay_nexus_pic}ms</span>(默认)
            {:else}
              <span style="color: red;">不延迟</span>
            {/if}
          </button>
        </div>
      </div>

      <!-- ---------------- 卡片信息 ---------------- -->
      <div class="section">
        <h1 class="s_title">卡片信息</h1>
        <div class="s_panel">
          <!-- 按钮: 显示详情 -->
          <button class="sideP__btn" on:click={config_showAllDetails}>
            显示所有详情界面
          </button>
        </div>

        <!-- 子面板: 配置常驻卡片信息 -->
        <div class="section">
          <h3 class="s_title">配置常驻卡片信息</h3>
          <div class="s_panel">
            <span class="s_checkbox">
              <input
                type="checkbox"
                bind:checked={$_CARD_SHOW.title}
                on:change={() => {
                  // console.log($_CARD_SHOW.title);
                  sortMasonry();
                }}
              />
              显示种子名称
            </span>

            <span class="s_checkbox">
              <input
                type="checkbox"
                bind:checked={$_CARD_SHOW.free}
                on:change={() => {
                  // console.log($_CARD_SHOW.free);
                  sortMasonry();
                }}
              />
              显示置顶和免费
            </span>

            <span class="s_checkbox">
              <input
                type="checkbox"
                bind:checked={$_CARD_SHOW.sub_title}
                on:change={() => {
                  // console.log($_CARD_SHOW.sub_title);
                  sortMasonry();
                }}
              />
              显示副标题
            </span>

            <span class="s_checkbox">
              <input
                type="checkbox"
                bind:checked={$_CARD_SHOW.tags}
                on:change={() => {
                  // console.log($_CARD_SHOW.tags);
                  sortMasonry();
                }}
              />
              显示标签
            </span>

            <span class="s_checkbox">
              <input
                type="checkbox"
                bind:checked={$_CARD_SHOW.size_download_collect}
                on:change={() => {
                  // console.log($_CARD_SHOW.size_download_collect);
                  sortMasonry();
                }}
              />
              显示大小&下载&收藏
            </span>

            <span class="s_checkbox">
              <input
                type="checkbox"
                bind:checked={$_CARD_SHOW.upload_time}
                on:change={() => {
                  // console.log($_CARD_SHOW.upload_time);
                  sortMasonry();
                }}
              />
              显示上传时间
            </span>

            <span class="s_checkbox">
              <input
                type="checkbox"
                bind:checked={$_CARD_SHOW.statistics}
                on:change={() => {
                  // console.log('statistics:\t'+$_CARD_SHOW.statistics);
                  sortMasonry();
                }}
              />
              显示评论/上传/下载/完成
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- 按钮: 重置瀑布流配置边栏位置 -->
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

    z-index: 40000;

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
  .configP {
    position: fixed;

    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;

    padding: 0;
    margin: 0;

    z-index: 50000;

    background-color: rgba(0, 0, 0, 0.2);
  }

  .configP_holder {
    position: absolute;
    right: 20px;
    top: 20px;
    overflow-y: scroll;

    width: 360px;
    height: calc(100vh - 40px);
    padding: 0;
    margin: 0;

    /* border-top-left-radius: 24px; */
    /* border-bottom-left-radius: 24px; */
    border-radius: 24px;
    border: 2px solid black;

    background-color: rgb(212, 231, 255);

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .configP_title {
    position: fixed;

    box-sizing: border-box;
    width: inherit;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 40px;
    padding: 0 10px;

    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    border-bottom: 2px solid black;

    background-color: rgb(154, 198, 255);

    & p {
      font-size: 18px;
      font-weight: 500;
    }

    & button {
      border: none;
      padding: 0;
      margin: 0;
      background-color: transparent;
    }
  }

  .section {
    margin: 16px 18px;

    & button {
      border-radius: 10px;
      margin: 4px;
      padding: 12px 16px;
    }

    & .s_title {
      text-align: center;
    }

    & .s_panel {
      display: flex;
      flex-direction: column;
      /* flex-wrap: wrap; */
      justify-content: space-evenly;
      align-items: center;
    }

    & .s_checkbox {
      padding: 12px;
      margin: 4px;
      border-radius: 10px;
      border: 1px solid black;

      font-size: 14px;
      display: flex;
      align-items: center;
    }
  }

  .configP_holder .section:nth-child(2) {
    margin-top: 48px;
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
