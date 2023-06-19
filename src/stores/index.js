import { writable } from 'svelte/store';

// 创建一个可写的 store，并定义初始值

/**是否显示原始种子列表 */
const _show_originTable = writable(0);

/**当前所在站点域名 */
const _current_domain = writable("");


export {
  _show_originTable,
  _current_domain
}
