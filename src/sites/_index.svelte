<script>
  import { _current_domain } from "../stores";

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
</script>

{#if $_current_domain == "kamept.com"}
  <div>kame</div>
{:else}
  <div>else</div>
{/if}

<style></style>
