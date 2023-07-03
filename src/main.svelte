<script>
  import "./app.css";
  import "./utils/masonry.pkgd.Kesa";
  import { onMount } from "svelte";
  import Sidepanel from "./sidepanel.svelte";
  import Waterfall from "./sites/_index.svelte";
  import { _Global_Masonry } from "./stores";

  // ------------------------------------------------

  console.log(
    `[${new Date().toLocaleTimeString()}]<--------------------------HMR-------------------------->`
  );

  // 1. 隐藏原种子列表并进行前置操作 --------------------------------------------------------------------------------------
  const _ORIGIN_TL_Node = document.querySelector("table.torrents");
  // 隐藏原有视图
  // @ts-ignore
  _ORIGIN_TL_Node.style.display = "none";

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

  // console.log(waterfallNode);

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
  });
</script>
