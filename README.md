# 为 PT 站点 打造的种子列表瀑布流视图 (现支持 Kame & MT & 猫站)

<!-- TODO: 改为显示边栏的 -->
![gif_preview.gif](https://github.com/KesaubeEire/PT_TorrentList_Masonry/blob/main/preview/gif_preview.gif?raw=true)

<!-- TODO: 改为显示边栏的 -->
预览视频:

https://user-images.githubusercontent.com/20382002/236703818-427840b9-aaee-4133-9185-59244245cb7b.mov

<!-- https://raw.githubusercontent.com/KesaubeEire/PT_TorrentList_Masonry/main/preview/_input.mov -->
<!-- https://github.com/KesaubeEire/PT_TorrentList_Masonry/blob/main/preview/_input.mov?raw=true -->

<!-- TODO: 没有修改过链接, 记得改掉 -->
| 新版 | 旧版 |
|-----|-----|
| [github 项目地址~](https://github.com/KesaubeEire/PT_TorrentList_Masonry) | [旧版 github 项目地址~](https://github.com/KesaubeEire/PT_TorrentList_Masonry) |
| [油猴 项目地址~](https://github.com/KesaubeEire/PT_TorrentList_Masonry) | [旧版 油猴 项目地址~](https://github.com/KesaubeEire/PT_TorrentList_Masonry) |


---

## 简介

RT, 本油猴脚本专为 PT 打造, 让你顺畅划划点点, 一页爽逛种子超市!
<!-- TODO: 这里 issue 页面没有改为新地址 -->
欢迎为项目提 [issue](https://github.com/KesaubeEire/PT_TorrentList_Masonry/issues) 以及留言配置您想适配的站点~

相关事宜如果您在 tg 能找到我也可以直接联系我~

<!-- ![gif_preview.gif](./preview/gif_preview.gif) -->

---

## 使用说明

0. 建议使用 Chrome 浏览器, 火狐等其他浏览器可能存在不知名问题(from tg by 天 胖)
1. 本脚本功能:
   1. 支持在已适配的站点将种子列表变为瀑布流视图
   1. 在侧边栏区域可以设置各种配置
      1. 可以拖拽侧边栏
      1. 可以显示原种子表格
      1. 可以呼出详细配置面板配置细节  
      (所有配置都能在同一个站点记忆, 不同的站点之间配置不共享)
   1. 鼠标放在分类和标题可以显示种子详细数据内容
   1. 鼠标放在图片上可以预览大图
   1. <span style="color: red"><b>点击图片可以在内部窗口查看种子详情! 不需要新打开表情页了!!!</b></span>
   1. <span style="color: red"><b>点击列和列之间的间隙也可以整理布局! 不需要鼠标移到右上角了!!!</b></span>
   1. 图片懒加载: 对电脑性能和服务器负担都比较小~
   1. 滑动或按钮可以无缝显示下一页的内容
2. 推荐设置:

   1. 如果 PT 站点是 NexusPHP 架构, 推荐将主题改为 Blue Gene  
      (一般更改主题方式: 控制面板->网站设定->界面风格)
   1. 某些站点限制网页刷新频率, 所以默认翻页是要点按钮的,  
      可以右上手动改为自动检测翻页, 请理解~

---

<details>
<summary open>TODO LIST</summary>

- 宏观类
    - [ ] TODO: 在 readme.md 中把架构图画出来以防屎山(from tg by @兔纸)

- 功能类
    - [ ] 原 table 也随着滑动到底部自动添加数据
    - [ ] TODO: ( 类似index的位置 )显示当前是否下载以及下载进度(from tg by @Charlie Swift)
    - [ ] TODO: 配置按钮区域可拖动
      - [ ] 排序区按钮(from tg by 天 胖)
      - [ ] 卡片宽度 & 间距宽度 调整
      - [ ] 简洁模式 & 详细模式 切换
      - [ ] 跟随预览 & 中间预览 切换(from tg by 天 胖)
    - [ ] 加个 ESC 按钮退出 iframe 显示(from tg by LNN)
    - [ ] Nexus 触摸显示大图放个半秒再显示？避免划过显示一堆不想看的？(from tg by LNN & 龟龟)

- 样式类
    - [ ] iframe 两侧颜色降低亮度(from tg by LNN)

- 说明类
  - [ ] github & 油猴介绍 数据脱敏 (from tg by 天 胖)
      - [ ] 问一下每个站点的管理有没有必要
      - [ ] 去除匹配站点的域名展示
      - [ ] 去除匹配站点的原始匹配

</details>

---

<details>
<summary>旧版历史 TODO LIST</summary>

- 其他事务
  - [x] 将 油猴脚本从成人区撤离, 改为正常
  - [x] 将 特别区作为截图示范, 添加 /special.php 的适配
- 功能列表

  - [x] 懒加载(from tg by @兔纸)
    - [x] 懒加载完成后新图片出来之际整理瀑布流
    - [x] 修复了一些小的懒加载不出图的小 bug
  - [x] 触摸图片预览原图(from tg by @兔纸)
    - [x] 修正右边图片的预览位置
      - [x] <s>抄[某 pixiv 油猴脚本](https://github.com/Ocrosoft/PixivPreviewer)的实现(from tg by @兔纸)</s> 失败了, 有点复杂
      - [x] 自己改了改, 基本修正了
      - [x] 更好的四空间(四叉树)改造法基本完成, 等待大家反馈意见
        - [x] 做一个切换显示方式(尽量原图&最大显示)的切换变化, panel 完成后搞
  - [x] 默认将自动翻页改为按键翻页(from tg by @兔纸)
    - [x] <s>抄 NGA 的方式下拉到底后触点下一页(from tg by @兔纸)</s> 不太好用捏
    - [x] 给滑动翻页加一个防抖, 时间可以久一点
  - [x] 瀑布流基础排版
  - [x] 滑动到底部刷新页面
  - [x] 美化卡片内信息布局 & 样式

    - [x] <s>抄鲨鱼的 UI 样式, Free 的提示什么的(from tg by @兔纸)</s> 用原样了捏
    - [x] 基本布局
    - [x] 点击整个卡片跳转(from tg by @风言)
      - [x] 没有完全弄成那样, 会妨碍下载和收藏, 把图片和副标题点击跳网页做了
    - [x] 点击卡片不是打开新页面，而是在本页面打开 iframe 直接看内容，看完关掉，都不用切换页面了
    - [x] 卡片背景颜色适配主题(from tg by @LNN)
    - [x] 去掉副标题(from tg by @lslqtz)
    - [x] 右上角按钮 z-index 置顶(from tg by @lslqtz)
    - [x] 标签样式改为 div 的多行 flex(from tg by @bacz)

  - [ ] 将一些参数配置为可变

    - [x] 配置 LocalStorage 记录参数捏
    - [x] 单列宽度可调整(已 api 实现, 还需要简化操作方式)
      - [x] UI 化宽度调整 -> 右上角可设置单列 200px / 300px 切换
    - [ ] 分卡片固定宽度模式和列数固定宽度模式
      - [x] 卡片固定宽度模式: 默认模式
      - [ ] 列数固定宽度模式: 默认固定列数可调, 不少于 x 列 (from tg by @兔纸)
    - [ ] 设置详情文字(副标题)和标签左对齐 or 居中(from tg by @阴天)
    - [x] 配置可以忽略详情只剩标题图片的简略模式
    - [x] MT 已适配

  - [ ] 花样小 bug

    - [x] 下载按钮 href
    - [x] 改为宽列后, 新增的卡片仍然按照原先的列宽生成卡片
    - [x] 当下拉页没有新内容时控制台优雅报错
    - [x] 缩放小于 95% 时右侧有空隙 -> 不清楚真实的 4K 屏幕会不会有影响, 只能先这样设置边框为 3px
    - [x] 点击收藏后刷新页面 or 直接更新收藏图标
      - [ ] UI 提示
    - [x] 标题过长的话半透明背景可能会导致文字与图片重叠 (from tg by @bacz)
    - [x] 测试网站地址漏了 (from tg by @bacz)
    - [x] 收藏按钮样式调整 (from tg by @bacz)
    - [x] 图片链接多此一举了, 直接搬原链即可 (from tg by @Kyaru)
    - [x] 预览大图片的 bug 基本修完, 可继续改进
    - [x] 集成 Masonry.js 到项目, 非常感谢胖哥!!!(from tg by 天 胖)
    - [x] 让下载和收藏都变成隐藏按钮: 现在下载还不是隐藏按钮
    - [ ] ...

  - [x] 站点状态对齐
    - [x] KamePT.js: 最新
      - [x] (卡片顶部种类样式待更新)
      - [x] free 时间被搞到了临时标签里, 取出来
    - [x] MTeam.js: 最新
    - [x] PTer.js: 最新
  

<details>
    <summary><s>记录一些小小的暴论(嘻嘻本人不要打我)</s></summary>
    <p>1. 违反用户直觉的都是垃圾程序 by兔纸(2023/05/08 18:39)</p>
</details>
</details>
