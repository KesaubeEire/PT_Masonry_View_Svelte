import { writable } from 'svelte/store';

/** 持久化 Stores -> 配置联动 localstorage*/
function persistStore(key, startValue) {
  const savedValue = localStorage.getItem(key);
  const initialValue = savedValue ? JSON.parse(savedValue) : startValue;
  const store = writable(initialValue);

  store.subscribe(value => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return store;
}

// export const myStore = persistStore('myStore', {});



// 全局类变量 -------------------------------------
/**全局Masonry */
export const _Global_Masonry = writable({});

// 站点类变量 -------------------------------------
/**当前所在站点域名 */
// export const _current_domain = writable("")
export const _current_domain = persistStore('_domain', "");

// 配置类变量 -------------------------------------
/**是否显示原始种子列表 */
export const _show_originTable = writable(0)
// export const _show_originTable = persistStore('_show_ori_table', 0);

// 卡片类变量 -------------------------------------
/**卡片宽度 */
// export const _card_width = writable(200);
export const _card_width = persistStore('_card_width', 200);

/**卡片显示_细节总开关 */
const show_switch = { all: false }
// export const _CARD_SHOW = writable(show_switch);
export const _CARD_SHOW = persistStore('_card_show', show_switch);
