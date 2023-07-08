import { writable } from 'svelte/store';

// ----------------------------------------------------------------

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

// ----------------------------------------------------------------

// 全局类变量 -------------------------------------
/** 全局Masonry */
export const _Global_Masonry = writable({});

// iframe变量 -------------------------------------
/** iframe 开关 */
export const _iframe_switch = writable(0)
/** iframe 网址 */
export const _iframe_url = writable('https://kamept.com/index.php')

// 站点类变量 -------------------------------------
/** 当前所在站点域名 */
// export const _current_domain = writable("")
export const _current_domain = persistStore('_domain', "");

/** 当前所在站点背景颜色 */
export const _current_bgColor = persistStore('_bgColor', "");

// 配置类变量 -------------------------------------
/** 是否显示原始种子列表 */
export const _show_originTable = writable(0)
// export const _show_originTable = persistStore('_show_ori_table', 0);

/** 加载下一页方式: 点击0 滚动1 */
export const _turnPage = persistStore('_turnPage', 0);

/** 外面板位置: x->left y->top */
export const _panelPos = persistStore('_panelPos', { x: 0, y: 0 })

/** 是否显示侧边栏 debug 按钮 */
export const _show_debug_btn = persistStore('_show_debug_btn', 0);

/** 是否显示鼠标悬浮预览大图 */
export const _show_nexus_pic = persistStore('_show_nexus_pic', 1);

/** 是否延迟显示悬浮预览大图 */
export const _delay_nexus_pic = persistStore('_delay_nexus_pic', 600);

// 卡片类变量 -------------------------------------
/** 卡片宽度 */
// export const _card_width = writable(200);
export const _card_width = persistStore('_card_width', 200);

/** 卡片显示_细节总开关 */
const show_switch = {
  // 全局总开关
  all: false,

  // 显示置顶和免费
  free: false,
  // 显示副标题
  sub_title: false,
  // 显示标签
  tags: false,
  // 显示大小&下载&收藏
  size_download_collect: false,
  // 显示上传时间
  upload_time: false,
  // 显示评论/上传/下载/完成
  statistics: false,
}
// export const _CARD_SHOW = writable(show_switch);
export const _CARD_SHOW = persistStore('_card_show', show_switch);
