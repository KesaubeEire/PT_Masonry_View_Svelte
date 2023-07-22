<script>
  import { _turnPage } from "../stores";

  /** 控制加载按钮是否激活 */
  let isButtonDisabled = false;

  const GAP = 3000;

  /** 加载文字 */
  const LOAD_TEXT = {
    normal: "点击加载下一页",
    suspend: `下一页加载CD: ${GAP} ms`,
    disable: "不可用",
  };

  function func(event) {
    // 防止默认行为的发生
    event.preventDefault();
    // console.log(event);

    // 加载下一页
    // if (!$_turnPage) debounceLoad();
    window.turnPage(event);

    // 加载下一页3秒防抖
    if (!isButtonDisabled) {
      isButtonDisabled = true;
      setTimeout(() => {
        isButtonDisabled = false;
      }, GAP);
    }
  }
</script>

<!-- 点击加载下一页的按钮 -->
<div>
  <button
    id="_turnPage"
    disabled={$_turnPage || isButtonDisabled}
    on:click={func}
  >
    {#if $_turnPage}
      {LOAD_TEXT.disable}
    {:else if isButtonDisabled}
      {LOAD_TEXT.suspend}
    {:else}
      {LOAD_TEXT.normal}
    {/if}
  </button>
</div>

<style>
  /* 卡片: 收藏按钮 */
  #_turnPage {
    width: 100%;
    height: 32px;
    border-radius: 16px;
    line-height: 20px;
    font-size: 14px;

    margin: 10px 0;
    padding: 0 10px;

    /* position: absolute; */
    /* bottom: 0px; */
  }
</style>
