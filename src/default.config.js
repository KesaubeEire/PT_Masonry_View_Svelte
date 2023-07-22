/**
 * 各种默认参数
 */

import { get } from 'svelte/store';
import { _card_width } from './stores';

/** 瀑布流卡片相关参数顶层对象 */
const CARD = {
  /** 瀑布流卡片宽度 */
  CARD_WIDTH: get(_card_width),

  /** NOTE: 瀑布流卡片边框宽度 -> 这个2是真值, 但是边框好像是会随着分辨率和缩放变化, 给高有利大分辨率, 给低有利于小分辨率 */
  CARD_BORDER: 0,

  /** 瀑布流卡片索引 */
  CARD_INDEX: 0,

  /** 图片悬浮预览方式
   * 0: 一律放大到全视窗[默认]
   * 1: 最小为原图
   */
  PIC_HOVER_STYLE: 0,
};

/** 翻页相关参数顶层对象 */
// @ts-ignore
const PAGE = {
  /** 翻页: 底部检测时间间隔 */
  GAP: 3000,

  /** 翻页: 底部检测视点与底部距离 */
  DISTANCE: 300,

  /** 翻页: 是否为初始跳转页面 */
  IS_ORIGIN: true,

  /** 翻页: 初始页面 */
  PAGE_ORIGIN: 0,

  /** 翻页: 当前页数 */
  PAGE_CURRENT: 0,

  /** 翻页: 下一页数 */
  PAGE_NEXT: 0,

  /** 翻页: 下一页的链接 */
  NEXT_URL: "",

  /** 翻页: 下一页的加载方式: Button | Slip */
  SWITCH_MODE: "Button",
};

/** 网站图标链接 */
// @ts-ignore
const ICON = {
  /** 大小图标 */
  SIZE: '<img class="size" src="pic/trans.gif" style=" transform: translateY(-0.4px);" alt="size" title="大小">',
  /** 评论图标 */
  COMMENT:
    '<img class="comments" src="pic/trans.gif" alt="comments" title="评论数">',
  /** 上传人数图标 */
  SEEDERS:
    '<img class="seeders" src="pic/trans.gif" alt="seeders" title="种子数">',
  /** 下载人数图标 */
  LEECHERS:
    '<img class="leechers" src="pic/trans.gif" alt="leechers" title="下载数">',
  /** 已完成人数图标 */
  SNATCHED:
    '<img class="snatched" src="pic/trans.gif" alt="snatched" title="完成数">',
  /** 下载图标 */
  DOWNLOAD:
    '<img class="download" src="pic/trans.gif" style=" transform: translateY(1px);" alt="download" title="下载本种">',
  /** 未收藏图标 */
  COLLET:
    '<img class="delbookmark" src="pic/trans.gif" alt="Unbookmarked" title="收藏">',
  /** 已收藏图标 */
  COLLETED: '<img class="bookmark" src="pic/trans.gif" alt="Bookmarked">',
};

export { CARD, PAGE, ICON }