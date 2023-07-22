<script>
  import "./app.css";
  import "./utils/masonry.pkgd.Kesa";
  import { onMount } from "svelte";
  import Sidepanel from "./sidepanel.svelte";
  import Waterfall from "./sites/_index.svelte";
  import {
    _Global_Masonry,
    _show_mode,
    _iframe_switch,
    _iframe_url,
    _current_domain,
    _show_configPanel,
  } from "./stores";
  import { GET_TORRENT_LIST_SELECTOR, GLOBAL_SITE } from "./sites";
  import BtnTurnPage from "./component/btnTurnPage.svelte";
  import { fade } from "svelte/transition";
  // ------------------------------------------------

  console.log(
    `[${new Date().toLocaleTimeString()}]<--------------------------HMR-------------------------->`
  );

  // 1. 隐藏原种子列表并进行前置操作 --------------------------------------------------------------------------------------
  const _ORIGIN_TL_Node = document.querySelector(GET_TORRENT_LIST_SELECTOR());
  // 隐藏原有视图
  // @ts-ignore
  // _ORIGIN_TL_Node.style.display = "none";
  $: {
    _ORIGIN_TL_Node.style.display = $_show_mode ? "none" : "block";
    nextPageNode.style.display = $_show_mode ? "none" : "block";

    waterfallNode.style.display = $_show_mode ? "block" : "none";
  }

  // 这里检测 Masonry 是否加载成功了 ------------------
  // @ts-ignore
  while (!Masonry) {
    console.log("等待初始化......");
  }

  // 表格父节点
  const parentNode = _ORIGIN_TL_Node.parentNode;

  // 放置瀑布流的节点
  const waterfallNode = document.createElement("div");
  // 添加class
  waterfallNode.classList.add("waterfall");
  // 将瀑布流节点放置在表格节点上面
  parentNode.insertBefore(waterfallNode, _ORIGIN_TL_Node.nextSibling);

  // 放置随表格的下一页按钮的节点
  const nextPageNode = document.createElement("div");
  // 添加class
  nextPageNode.classList.add("nextPage");
  // 将瀑布流节点放置在表格节点上面
  parentNode.insertBefore(nextPageNode, _ORIGIN_TL_Node.nextSibling);

  // console.log(waterfallNode);

  // 面板相关 ------------------------------------------------
  /** 关闭 iframe */
  function toggleIframe() {
    $_iframe_switch = 0;
  }

  /** esc 控制关闭所有面板 */
  function key_closePanels(event) {
    // console.log(event);
    if (event.key === "Escape") {
      console.log(event);
      $_iframe_switch = 0;
      $_show_configPanel = false;
    }
  }

  // ------------------------------------------------
  let masonry;
  /** 启动项目配置*/
  onMount(() => {
    // UI -> 1. 边栏配置
    const componentSidePanel = new Sidepanel({
      target: document.body,
      props: {
        // 传递给组件的属性
        originTable: _ORIGIN_TL_Node,
      },
    });

    // UI -> 2. 瀑布流配置
    const componentMasonry = new Waterfall({
      target: waterfallNode,
      props: {
        // 传递给组件的属性
        originTable: _ORIGIN_TL_Node,
        waterfallNode,
      },
    });

    // UI -> 3. 原表格下一页按钮配置
    const componentBtnTurnPage = new BtnTurnPage({
      target: nextPageNode,
    });
  });
</script>

<!-- iframe 详情 -->
{#if $_iframe_switch}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div id="_iframe" on:click={toggleIframe} transition:fade={{ duration: 300 }}>
    <iframe
      src={$_iframe_url}
      frameborder="0"
      title="wow"
      style="width:
        {GLOBAL_SITE[$_current_domain]
        ? GLOBAL_SITE[$_current_domain].Iframe_Width
        : 1000}px"
    />
  </div>
{/if}

<!-- NOTE: svelte 绑定 window -> 按 escape 退出各种子面板 -->
<svelte:window on:keydown|capture={key_closePanels} />

<style>
  div#_iframe {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 38, 38, 0.607);
    z-index: 30000;

    display: flex;
  }

  iframe {
    /* width: 1246px; */
    height: 96%;

    margin: auto;
  }
</style>
