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