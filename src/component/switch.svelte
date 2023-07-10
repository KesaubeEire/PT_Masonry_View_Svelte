<script>
  export let title_fixed = "";
  export let title_green = "";
  export let title_red = "";

  const id = Math.random().toFixed(8);
  console.log(id);

  export let checked = false;
</script>

<div class="switch">
  <div class="s_title">
    <svg
      enable-background="new 0 0 128 128"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 128 128"
      xml:space="preserve"
      width="28"
      height="28"
    >
      <circle
        cx="85"
        cy="45"
        fill="none"
        r="8"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="4"
      />
      <path
        d="  M102.6476822,65.245285l-40.2463036,40.1161652c-3.1256676,3.1155624-8.1839256,3.1114655-11.3045425-0.0091476  l-26.7890854-26.789093c-3.1289177-3.1289139-3.1234951-8.2035599,0.0121021-11.3257828l40.077301-39.9063568  C65.8964539,25.8381672,67.9261017,25,70.0419083,25H97c4.4182816,0,8,3.5817223,8,8v26.5792809  C105,61.7055016,104.1535873,63.7442589,102.6476822,65.245285z"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="4"
      />
    </svg>
    {title_fixed}
    {#if title_green || title_red}
      :&nbsp;
      {#if checked}
        <span class="title_green">{title_green}</span>
      {:else}
        <span class="title_red">{title_red}</span>
      {/if}
    {/if}
  </div>
  <div class="s_switch">
    <!--  -->
    <input
      type="checkbox"
      id="_toggle+{id}"
      bind:checked
      on:change={() => {
        console.log(checked);
      }}
    />
    <label for="_toggle+{id}" />
  </div>
</div>

<style scoped>
  .switch {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .s_title {
    display: flex;
    align-items: center;

    font-size: 14px;
  }

  .s_btn {
    padding: 0px;
    margin: 0px;
  }

  .title_green {
    color: green;
  }
  .title_red {
    color: red;
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
