import App from './main.svelte';
import { GET_TORRENT_LIST_SELECTOR } from './sites/index.js';
// -------------------------------------------------------------

export { _ORIGIN_TL_Node };

// -------------------------------------------------------------

console.log("________PT-TorrentList-Masonry________");

// -------------------------------------------------------------
/** 相应站点的种子列表 selector */
const list_selector = GET_TORRENT_LIST_SELECTOR();
/**原种子列表DOM */
const _ORIGIN_TL_Node = document.querySelector(list_selector);

// 没有相应站点的种子列表 selector 或 种子列表 dom 不存在 就不进行整个程序
if (list_selector && !!_ORIGIN_TL_Node) {
  const app = new App({
    target: (() => {
      const app = document.createElement('div');
      document.body.append(app);
      return app;
    })(),
  });
}
else { console.log('未识别到种子列表捏~') }
