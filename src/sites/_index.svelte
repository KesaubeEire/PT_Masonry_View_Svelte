<script>
  import { _current_domain } from "../stores";

  import "../utils/masonry.pkgd.Kesa";

  import { config } from "./kamept";
  import Kamept from "./kamept.svelte";

  // ------------------------------------------------

  /** 父传值: 原有种子列表*/
  export let originTable;

  // ------------------------------------------------

  /**
   * 获得当前PT站的名字
   * @returns 当前PT站名
   */
  function GET_CURRENT_PT_DOMAIN() {
    const domainName = window.location.hostname;
    // 输出当前链接的域名
    console.log("当前站点: ", domainName);
    return domainName;
  }

  // 1. 获取当前域名 --------------------------------------------------------------------------------------
  $_current_domain = GET_CURRENT_PT_DOMAIN();
  console.log($_current_domain);

  // 2. 根据当前域名拿到对应的数据 --------------------------------------------------------------------------------------
  let infoList = [];
  infoList = [...infoList, ...config.TORRENT_LIST_TO_JSON(originTable)];
  console.log(infoList);

  // 3. 开整瀑布流 --------------------------------------------------------------------------------------
</script>

{#if $_current_domain == "kamept.com"}
  <div>kame</div>
  {#each infoList as info (info.torrentId)}
    <Kamept torrentInfo={info} />
  {/each}
{:else}
  <div>else</div>
{/if}

<style></style>
