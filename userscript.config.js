export const config = {
  name: {
    "": "PT种子列表无限下拉瀑布流视图",
    en: "PT_waterfall_torrent",
  },
  icon: "https://avatars.githubusercontent.com/u/23617963",
  namespace: "https://github.com/KesaubeEire/PT_TorrentList_Masonry",
  description: {
    "": "PT种子列表无限下拉瀑布流视图(描述不能与名称相同, 乐)",
    en: "PT torrent page waterfall view.",
  },
  author: "Kesa",
  match: [
    "https://kamept.com/*",
    "https://kp.m-team.cc/*",
    "https://pterclub.com/*",
  ],
  exclude: [
    "*/offers.php*",
    "*/index.php*",
    "*/forums.php*",
    "*/viewrequests.php*",
    "*/seek.php*",
  ],
  grant: "none",
  license: "MIT",

  // NOTE: 经常修改这里就行了
  version: "0.0.1",
}