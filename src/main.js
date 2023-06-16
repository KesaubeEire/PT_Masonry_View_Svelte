import runSvelte from './entrance'
export { _ORIGIN_TL_Node };
// -------------------------------------------------------------
console.log("________PT-TorrentList-Masonry 已启动!________");
// -------------------------------------------------------------
/**原种子列表DOM */
// @ts-ignore
const _ORIGIN_TL_Node = jQuery('table.torrents');

// 没有种子列表就不进行整个程序
if (_ORIGIN_TL_Node.length > 0) { runSvelte() }
else { console.log('未识别到种子列表捏~') }
