import { config as config_Kame } from "./kamept";

/** 站点参数相关参数顶层对象 */
const SITE = {
  "kamept.com": config_Kame,
};

/** 获得当前PT站的名字 @returns 当前PT站名 */
function GET_CURRENT_PT_DOMAIN() {
  const domain = window.location.hostname;
  // 输出当前链接的域名
  // console.log("当前站点: ", domain);
  return domain;
}

/** 判断该页面是否存在种子列表 */
function IS_EXIST_SEED_LIST() {
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
  IS_EXIST_SEED_LIST,
}