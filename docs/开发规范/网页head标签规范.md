# 网页head标签规范 

## 最小推荐
- 下面是基本的、最低限度的网站基本标签：
``` html
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 以上 3 个 meta 标签 *必须* 放在 head 的最前面；其他任何的 head 内容必须在这些标签的 *后面* -->
<title>页面标题</title>
```

- 网页元素
``` html
<!-- 文档标题 -->
<title>页面标题</title>

<!-- 基本 URL 作用于文档中所包含的所有相对 URL -->
<base href="https://example.com/page.html">

<!-- 外部的 CSS -->
<link rel="stylesheet" href="styles.css">

<!-- 文档内的 CSS -->
<style>
  /* ... */
</style>

<!-- JavaScript -->
<script src="script.js"></script>
<noscript><!--无 JS 时的替代--></noscript>
```

## Meta 标签

``` html
<!-- 设置文档的字符编码 -->
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- 以上 3 个 meta 标签 *必须* 放在 head 的最前面；其他任何的 head 内容必须在这些标签的 *后面* -->

<!-- 允许控制资源的过度加载 -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
<!-- 尽早地放置在文档中 -->
<!-- 仅应用于该标签下的内容 -->

<!-- Web 应用的名称（仅当网站被用作为一个应用时才使用）-->
<meta name="application-name" content="应用名称">

<!-- 针对页面的简短描述（限制 150 字符）-->
<!-- 在*某些*情况下，该描述是被用作搜索结果展示片段的一部分 -->
<meta name="description" content="一个页面描述">

<!-- 控制搜索引擎的抓取和索引行为 -->
<meta name="robots" content="index,follow,noodp"><!-- 所有的搜索引擎 -->
<meta name="googlebot" content="index,follow"><!-- 仅对 Google 有效 -->

<!-- 告诉 Google 不显示网站链接的搜索框 -->
<meta name="google" content="nositelinkssearchbox">

<!-- 告诉 Google 不提供此页面的翻译 -->
<meta name="google" content="notranslate">

<!-- 验证 Google 搜索控制台的所有权 -->
<meta name="google-site-verification" content="verification_token">

<!-- 用来命名软件或用于构建网页（如 - WordPress、Dreamweaver）-->
<meta name="generator" content="program">

<!-- 关于你的网站主题的简短描述 -->
<meta name="subject" content="你的网站主题">

<!-- 非常简短（少于 10 个字）的描述。主要用于学术论文。-->
<meta name="abstract" content="">

<!-- 完整的域名或网址 -->
<meta name="url" content="https://example.com/">

<meta name="directory" content="submission">

<!-- 基于网站内容给出一般的年龄分级 -->
<meta name="rating" content="General">

<!-- 允许控制 referrer 信息如何传递 -->
<meta name="referrer" content="no-referrer">

<!-- 禁用自动检测和格式化可能的电话号码 -->
<meta name="format-detection" content="telephone=no">

<!-- 通过设置为 “off” 完全退出 DNS 预取 -->
<meta http-equiv="x-dns-prefetch-control" content="off">

<!-- 在客户端存储 cookie，web 浏览器的客户端识别 -->
<meta http-equiv="set-cookie" content="name=value; expires=date; path=url">

<!-- 指定要显示在一个特定框架中的页面 -->
<meta http-equiv="Window-Target" content="_value">

<!-- 地理标签 -->
<meta name="ICBM" content="latitude, longitude">
<meta name="geo.position" content="latitude;longitude">
<meta name="geo.region" content="country[-state]"><!-- 国家代码 (ISO 3166-1): 强制性, 州代码 (ISO 3166-2): 可选; 如 content="US" / content="US-NY" -->
<meta name="geo.placename" content="city/town"><!-- 如 content="New York City" -->
```
- Google 可以识别的 Meta 标签
- WHATWG Wiki: Meta 拓展
- ICBM - 维基百科
- 地理标记 - 维基百科

## 不推荐的 Meta 标签
- 以下是不推荐使用的 Meta 属性，因为它们采用率低，或已弃用

``` html
<!-- 用于声明文档语言，但支持得不是很好。最好使用 <html lang=""> -->
<meta name="language" content="en">

<!-- Google 无视 & Bing 认为垃圾的指示器 -->
<meta name="keywords" content="你,关键字,在这里,不使用空格,而用逗号进行分隔">
<!-- 目前没有在任何搜索引擎中使用过的声明 -->
<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm">

<!-- 为垃圾邮件机器人收获 email 地址提供了一种简单的方式 -->
<meta name="reply-to" content="email@example.com">

<!-- 最好使用 <link rel="author"> 或 humans.txt 文件 -->
<meta name="author" content="name, email@example.com">
<meta name="designer" content="">
<meta name="owner" content="">

<!-- 告诉搜索机器人一段时间后重新访问该网页。这不支持，因为大多数搜索引擎使用随机时间间隔来重新抓取网页 -->
<meta name="revisit-after" content="7 days">

<!-- 在一段时间后将用户重定向到新的 URL -->
<!-- W3C 建议不要使用该标签。Google 建议使用服务器端的 301 重定向。-->
<meta http-equiv="refresh" content="300; url=https://example.com/">

<!-- 描述网站的主题 -->
<meta name="topic" content="">

<!-- 公司概要或网站目的 -->
<meta name="summary" content="">

<!-- 一个已废弃的标签，和关键词 meta 标签的作用相同 -->
<meta name="classification" content="business">

<!-- 是否是相同的 URL，年代久远且不支持 -->
<meta name="identifier-URL" content="https://example.com/">

<!-- 和关键词标签类似的功能 -->
<meta name="category" content="">

<!-- 确保你的网站在所有国家和语言中都能显示 -->
<meta name="coverage" content="Worldwide">

<!-- 和 coverage 标签相同 -->
<meta name="distribution" content="Global">

<!-- 控制在互联网上哪些用户可以访问 -->
<meta http-equiv="Pics-label" content="value"> 

<!-- 缓存控制 -->
<!-- 最好在服务器端配置缓存控制 -->
<meta http-equiv="Expires" content="0">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
```

## 链接

``` html
<!-- 有助于防止出现内容重复的问题 -->
<link rel="canonical" href="https://example.com/2010/06/9-things-to-do-before-entering-social-media.html">

<!-- 之前用于包含 icon 链接，但已被废弃并不再使用 -->
<link rel="shortlink" href="https://example.com/?p=42">

<!-- 链接到当前文档的一个 AMP HTML 版本 -->
<link rel="amphtml" href="https://example.com/path/to/amp-version.html">

<!-- 表明一个 CSS 样式表 -->
<link rel="stylesheet" href="https://example.com/styles.css">

<!-- 链接到一个指定 Web 应用程序“安装”证书的 JSON 文件 -->
<link rel="manifest" href="manifest.json">

<!-- 链接到文档的作者 -->
<link rel="author" href="humans.txt">

<!-- 指向一个适用于链接内容的版权申明 -->
<link rel="copyright" href="copyright.html">

<!-- 给出可能的你的另一种语言的文档位置参考 -->
<link rel="alternate" href="https://es.example.com/" hreflang="es">

<!-- 提供了关于作者或其他人的信息 -->
<link rel="me" href="https://google.com/profiles/thenextweb" type="text/html">
<link rel="me" href="mailto:name@example.com">
<link rel="me" href="sms:+15035550125">

<!-- 链接到一个文档，包含当前文档的一个归档链接 -->
<link rel="archives" href="https://example.com/2003/05/" title="May 2003">

<!-- 链接到层次结构中的顶级资源 -->
<link rel="index" href="https://example.com/" title="DeWitt Clinton">

<!-- 给出该文档的起点 -->
<link rel="start" href="https://example.com/photos/pattern_recognition_1_about/" title="Pattern Recognition 1">

<!-- 引导当前文档的前述资源序列 -->
<link rel="prev" href="https://example.com/opensearch/opensearch-and-openid-a-sure-way-to-get-my-attention/" title="OpenSearch and OpenID? A sure way to get my attention.">

<!-- 给出一个自我参考 - 当文档有多个可能的参考时非常有用 -->
<link rel="self" type="application/atom+xml" href="https://example.com/atomFeed.php?page=3">

<!-- 分别是在一系列文件中的第一个、下一个、上一个和最后一个 -->
<link rel="first" href="https://example.com/atomFeed.php">
<link rel="next" href="https://example.com/atomFeed.php?page=4">
<link rel="previous" href="https://example.com/atomFeed.php?page=2">
<link rel="last" href="https://example.com/atomFeed.php?page=147">

<!-- 当使用第三方服务来维护 blog 时使用 -->
<link rel="EditURI" href="https://example.com/xmlrpc.php?rsd" type="application/rsd+xml" title="RSD">

<!-- 当另一个 WordPress 博客链接到你的 WordPress 博客或文章时形成一个自动化的评论 -->
<link rel="pingback" href="https://example.com/xmlrpc.php">

<!-- 当你在自己的页面上链接到一个 url 时通知它 -->
<link rel="webmention" href="https://example.com/webmention">

<!-- 加载一个外部的 HTML 文件到当前 HTML 文件中 -->
<link rel="import" href="component.html">

<!-- 打开搜索 -->
<link rel="search" href="/open-search.xml" type="application/opensearchdescription+xml" title="Search Title">

<!-- Feeds -->
<link rel="alternate" href="https://feeds.feedburner.com/example" type="application/rss+xml" title="RSS">
<link rel="alternate" href="https://example.com/feed.atom" type="application/atom+xml" title="Atom 0.3">

<!-- 预取，预载，预浏览 -->
<link rel="dns-prefetch" href="//example.com/">
<link rel="preconnect" href="https://www.example.com/">
<link rel="prefetch" href="https://www.example.com/">
<link rel="prerender" href="https://example.com/">
<link rel="preload" href="image.png" as="image">
<!-- 更多信息：https://css-tricks.com/prefetching-preloading-prebrowsing/ -->
```

## 网站图标

``` html
<!-- 对于 IE10 及以下 -->
<!-- 无链接，只需在根目录下放置名为 favicon.ico 的文件 -->

<!-- 对于 IE 11、Chrome、Firefox、Safari 和 Opera -->
<link rel="icon" href="path/to/favicon-16.png" sizes="16x16" type="image/png">
<link rel="icon" href="path/to/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="path/to/favicon-48.png" sizes="48x48" type="image/png">
<link rel="icon" href="path/to/favicon-62.png" sizes="62x62" type="image/png">
<link rel="icon" href="path/to/favicon-192.png" sizes="192x192" type="image/png">
<!-- 更多信息: https://bitsofco.de/all-about-favicons-and-touch-icons/ -->
```

## 浏览器 / 平台
Apple iOS

``` html
<!-- 智能应用 Banner -->
<meta name="apple-itunes-app" content="app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT">

<!-- 禁用自动检测和格式化可能的电话号码 -->
<meta name="format-detection" content="telephone=no">

<!-- 添加到主屏幕 -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="应用标题">

<!-- 触摸图标 -->
<link rel="apple-touch-icon" href="path/to/apple-touch-icon.png">
<link rel="apple-touch-icon-precomposed" href="path/to/apple-touch-icon-precomposed.png">
<!-- iOS 8+ 不再支持预组合，你应该只使用 apple-touch-icon。-->
<!-- 在大多数情况下，在 `<head>` 中，一个 180×180px 触摸图标就已经足够了 -->
<!-- 如果你想采用自适应的图标，可以设置多个尺寸的图标 -->
<link rel="apple-touch-icon" sizes="57x57" href="/path/to/icon@57.png">
<link rel="apple-touch-icon" sizes="72x72" href="/path/to/icon@72.png">
<link rel="apple-touch-icon" sizes="114x114" href="/path/to/icon@114.png">
<link rel="apple-touch-icon" sizes="144x144" href="//path/to/icon@144.png">

<!-- 启动画面（已无效） -->
<link rel="apple-touch-startup-image" href="path/to/startup.png">

<!-- iOS 应用深层链接 -->
<meta name="apple-itunes-app" content="app-id=APP-ID, app-argument=http/url-sample.com">
<link rel="alternate" href="ios-app://APP-ID/http/url-sample.com">
```

## 国内的浏览器
360 浏览器

``` html
<!-- 选择渲染引擎 -->
<meta name="renderer" content="webkit|ie-comp|ie-stand">
```
## QQ 移动浏览器
``` html
<!-- 在指定方向上锁定屏幕（锁定横/竖屏） -->
<meta name="x5-orientation" content="landscape/portrait">
<!-- 全屏显示此页面 -->
<meta name="x5-fullscreen" content="true">
<!-- 页面将以“应用模式”显示（全屏等）-->
<meta name="x5-page-mode" content="app">
```
## UC 移动浏览器

``` html
<!-- 在指定方向上锁定屏幕（锁定横/竖屏） -->
<meta name="screen-orientation" content="landscape/portrait">
<!-- 全屏显示此页面 -->
<meta name="full-screen" content="yes">
<!-- 即使在“文本模式”下，UC 浏览器也会显示图片 -->
<meta name="imagemode" content="force">
<!-- 页面将以“应用模式”显示（全屏、禁止手势等） -->
<meta name="browsermode" content="application">
<!-- 在此页面禁用 UC 浏览器的“夜间模式” -->
<meta name="nightmode" content="disable">
<!-- 简化页面，减少数据传输 -->
<meta name="layoutmode" content="fitscreen">
<!-- 禁用的 UC 浏览器的功能，“当此页面中有较多文本时缩放字体” -->
<meta name="wap-font-scale" content="no">
```




