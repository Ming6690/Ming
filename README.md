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

## 发表评论
  1. 将文本框设置双向绑定
  2. 为发表评论按钮绑定一个事件
  3. 校验评论内容是否为空，如果为空，则Toast提示用户 评论内容不能为空
  4. 通过 vue-resource 发送一个请求，把评论内容提交给服务器
  5. 当发表评论 ok 后，重新刷新列表，以查看最新的评论
    + 如果调用 getComments 方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
    + 换一种思路：当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift 方法，把最新的评论，追加到 comment的开头

## 改造图片分享 按钮为 路由链接并显示对应的组件页面

## 绘制图片列表组件页面结构并美化样式
  1. 制作 顶部的滑动条
    + 需借助于 MUI 中的 tab-top-webview-main.html
    + 需要把 slider 区域的 mui-fullscreen 全屏类去掉
    + 滑动条无法触发滑动，因为是JS组件，需要初始化： 导入 mui.js ,调用初始化方式
    ```
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    ```
    + 在初始化滑动条的时候导入了mui.js，出现错误：Uncaught TypeError: 'caller', 'callee', and           'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
    + 可能是由于 mui.js 中使用了 'caller', 'callee', and 'arguments',但是 webpack 中打包好的 bundle.js    默认是启动严格模式的,所以两者方式冲突
    + 解决方法：1. 把 mui.js 中的非严格模式的 代码改掉（不现实）
               2. 把 webpack 打包时候的一个模式禁用
               2.1 装包 npm i babel-plugin-transform-remove-strict-mode -D
               2.2 配置 .babelrc  "plugins": ["transform-remove-strict-mode"]
    + 在mounted钩子函数中初始化滑动条，滑动条才能正常滑动
    + tabbar 无法正常切换，需要把 tabbar 按钮的样式中 'mui-tab-item' 重新命名，并自定义样式
    + 获取所有分类，并渲染 分类列表

  2. 制作 底部的图片列表
      + 图片列表需要使用懒加载技术，使用Mint-UI 提供的组件 'lazy-load'
### 制作图片列表区域
  1. 图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 `lazy-load`
  2. 根据`lazy-load`的使用文档，尝试使用
  3. 渲染图片列表数据

### 实现了 图片列表的 懒加载改造和 样式美化

## 实现了 点击图片 跳转到 图片详情页面
  1. 在改造 li 成 router-link 的时候，需要使用 tag 属性指定要渲染为 哪种元素

## 实现 详情页面的布局和美化，同时获取数据渲染页面

## 实现 图片详情中 缩略图的功能
  1. 使用 插件 vue-preview 这个缩略图插件
  2. 获取到所有的图片列表，然后使用 v-for 指令渲染数据
  3. 注意： img标签上的class不能去掉
  4. 注意： 每个 图片数据对象中，必须有 w 和 h 属性

## 绘制 商品列表 页面基本结构并美化

## 尝试在手机上 去进行项目的预览和测试
  1. 要保证自己的手机可以正常运行；
  2. 要保证 手机 和 开发项目的电脑 处于同一个 WIFI 环境中，也就是说 手机 可以 访问到 电脑的 IP
  3. 打开自己的 项目中 package.json 文件，在 dev 脚本中，添加一个 --host 指令， 把 当前 电脑的 WIFI IP地址， 设置为 --host 的指令值；
  + 如何查看自己电脑所处 WIFI 的IP呢， 在 cmd 终端中运行 `ipconfig` ， 查看 无线网的 ip 地址

