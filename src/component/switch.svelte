<script>
  import "../stores";

  /** switch 类型: 默认是 switch, 可变为 range */
  export let type = "switch";

  /** 固定条目名称 */
  export let title_fixed = "";
  /** 活动条目名称: 肯定 */
  export let title_green = "";
  /** 活动条目名称: 否定 */
  export let title_red = "";
  /** 悬浮提示(dom 的 title 属性) */
  export let label = "";

  /** checkbox 和 附属 label 的绑定 id */
  const id = Math.random().toFixed(8);
  // console.log(id);

  /** checkbox 的绑定变量 */
  export let checked = false;
  /** 绿色是 true 还是 false */
  export let green_state = true;

  // range ----------------------------

  /** range 模式默认值 */
  // export let value = 0;
</script>

<div class="switch">
  <div class="s_title" title={label}>
    {#if label}
      <svg
        enable-background="new 0 0 128 128"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 128 128"
        xml:space="preserve"
        width="28"
        height="28"
        class="hint"
      >
        <!-- 有 label(title提示) 则出现 -->
        <path
          d="M102.6476822,65.245285l-40.2463036,40.1161652c-3.1256676,3.1155624-8.1839256,3.1114655-11.3045425-0.0091476  l-26.7890854-26.789093c-3.1289177-3.1289139-3.1234951-8.2035599,0.0121021-11.3257828l40.077301-39.9063568  C65.8964539,25.8381672,67.9261017,25,70.0419083,25H97c4.4182816,0,8,3.5817223,8,8v26.5792809  C105,61.7055016,104.1535873,63.7442589,102.6476822,65.245285z"
          fill="yellow"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="4"
        />
        <circle
          cx="85"
          cy="45"
          fill="red"
          r="8"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="4"
        />
      </svg>
      <div class="_hint">{label}</div>
    {/if}

    <!-- 固定条目名称 -->
    {title_fixed}
    <!-- 活动条目名称 -->
    {#if title_green || title_red}
      :&nbsp;

      {#if green_state}
        {#if checked}
          <span class="title_green">{title_green}</span>
        {:else}
          <span class="title_red">{title_red}</span>
        {/if}
      {:else if checked}
        <span class="title_red">{title_red}</span>
      {:else}
        <span class="title_green">{title_green}</span>
      {/if}
    {/if}
  </div>

  <!-- toggle Switch -->
  {#if type == "switch"}
    <div class="s_switch">
      <input
        type="checkbox"
        id="_t{id}"
        bind:checked
        on:change={() => {
          console.log(title_fixed, checked);
        }}
      />
      <label for="_t{id}" />
    </div>
  {/if}

  <!-- range 这里目前需要用插槽解决问题 -->
  {#if type == "range"}
    <slot />
  {/if}
</div>

<style scoped>
  .switch {
    width: 100%;

    height: 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .s_title {
    display: flex;
    align-items: center;

    font-size: 14px;

    position: relative;
  }

  .title_green {
    color: green;
    font-weight: 800;
  }
  .title_red {
    color: red;
    font-weight: 800;
  }

  /* -------------------- */

  /* 用了比较复杂的方式实现了纯 css 的 hint */
  .s_title:has(.hint):hover ._hint {
    display: block;
  }

  ._hint {
    display: none;

    position: absolute;
    bottom: 28px;
    left: 0;
    width: max-content;
    height: auto;
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;
    padding: 4px 8px;
    box-sizing: content-box;
    z-index: 1;
  }

  /* -------------------- */

  input[type="checkbox"] {
    width: 0px;
    height: 0px;
    display: none;
    visibility: hidden;
  }

  label {
    width: 48px;
    height: 12px;
    display: inline-block;
    position: relative;
    background-color: #777;
    border: 2px solid #555;
    border-radius: 30px;

    transition: all 0.2s;

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      background-color: #555;
      position: absolute;
      border-radius: 50%;
      left: -2px;
      top: -6px;
      transition: transform 0.2s;
    }
  }

  input[type="checkbox"]:checked ~ label {
    background-color: #00a0fc;
    border-color: #006dc9;
  }
  input[type="checkbox"]:checked ~ label::after {
    background-color: #0054b0;
    transform: translateX(28px);
  }
</style>
