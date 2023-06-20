import { writable } from 'svelte/store';


// 全局类变量 -------------------------------------
/**全局Masonry */
const _Global_Masonry = writable({});

// 站点类变量 -------------------------------------
/**当前所在站点域名 */
const _current_domain = writable("");

// 配置类变量 -------------------------------------
/**是否显示原始种子列表 */
const _show_originTable = writable(0);

// 卡片类变量 -------------------------------------
/**卡片宽度 */
const _card_width = writable(200);


export {
  _show_originTable,
  _current_domain,
  _Global_Masonry,
  _card_width
}
