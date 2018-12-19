# 这是一个小项目

## by Ming6690

### 用命令行方式把修改后的代码 上传 GitHub
1. git add .
2. git commit -m "提交信息"
3. git push


## 购物车制作
 + 先把 扩展图标的 css 样式拷贝到项目中,然后在 main.js 中导入
 + 拷贝 扩展字体库 ttf 文件到项目中
 + 为购物车图标添加 "mui-icon mui-icon-extra mui-icon-extra-cart" 样式

## 设置路由高亮
  + 路由选择时，有一个class类的属性为 router-link-active,可以通过类名设置 CSS 样式实现高亮（不推荐）
  + 使用 MUI 提供的 mui-active 高亮属性替换router-link-active
  + 在 router.js 下 路由匹配规则 routes:[] 同级目录下 添加 linkActiveClass: 'mui-active' 实现替换 

## 制作首页轮播图布局

## 加载首页轮播图数据
  1. 获取数据，使用 vue-resource
  2. 使用 vue-resource 的 this.$http.get 获取数据
  3. 获取到的数据，要保存到 data 身上
  4. 使用 v-for 循环渲染每个 item 项

## 改造 新闻资讯 路由链接

## 新闻资讯 页面制作
  1. 绘制页面，使用 MUI 中的 media-list.html
  2. 使用 vue-resource 获取数据
  3. 渲染真实数据 

## 实现 新闻资讯列表 点击跳转到新闻详情
  1. 把列表中的每一项改造为 router-link，同时，在跳转的时候应该提供唯一的 Id 标识符
  2. 创建新闻详情的组件页面 NewsInfo.vue
  3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现 新闻详情的 页面布局 和 数据渲染

## 单独封装一个 comment.vue 评论子组件

## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能

