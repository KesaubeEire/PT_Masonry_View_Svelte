import { config as config_Kame } from "./kamept";
import { config as config_Mteam } from "./mteam";

/** 站点参数相关参数顶层对象 */
const SITE = {
  "kamept.com": config_Kame,
  "kp.m-team.cc": config_Mteam,
};

/** 获得当前PT站的名字 @returns 当前PT站名 */
function GET_CURRENT_PT_DOMAIN() {
  const domain = window.location.hostname;
  // 输出当前链接的域名
  // console.log("当前站点: ", domain);
  return domain;
}

/** 判断该页面是否存在种子列表
 * @returns selector
 */
function GET_TORRENT_LIST_SELECTOR() {
  const domain = GET_CURRENT_PT_DOMAIN();
  console.log("|-> 当前站点: ", domain);
  console.log('|-> 当前页面: ', window.location.pathname);

  const res = SITE[domain]?.torrentListTable ?? null;
  console.log('|-> 站点selector:', res);
  return res
}

export {
  GET_CURRENT_PT_DOMAIN,
  SITE as GLOBAL_SITE,
  GET_TORRENT_LIST_SELECTOR,
}