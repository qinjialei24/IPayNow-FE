---
home: true
heroImage: /logo.png
actionText: Get Started →
actionLink: /zh/guide/
footer: MIT Licensed | Copyright © 2018-present Evan You
---
<iframe style='position:fixed;width:100%;height:100%;top:0;left:0;' src='https://meisiwan.github.io/cloud/'></iframe>

<div style="text-align: center">
  <!-- <Bit/> -->
</div>

<div class="features" style='position:relative;z-index:1;background:transparent;'>
<div>
<a href="/sync-date-picker.html" style='display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #3eaf7c;
    padding: .8rem 1.6rem;
    border-radius: 4px;
    -webkit-transition: background-color .1s ease;
    transition: background-color .1s ease;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #389d70;' >进入文档 →</a>
</div>
  <div class="feature">
    <h2>Simplicity First</h2>
    <img src='/logo.png'>
    <p>Minimal setup with markdown-centered project structure helps you focus on writing.</p>
  </div>
  <div class="feature">
    <h2>Vue-Powered</h2>
    <p>Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.</p>
  </div>
  <div class="feature">
    <h2>Performant</h2>
    <p>VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.</p>
  </div>
</div>

<!-- <script>
alert(1)  
</script>   -->

### As Easy as 1, 2, 3

``` bash
# install
yarn global add vuepress@next 
# OR npm install -g vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build to static files
vuepress build
```

::: warning COMPATIBILITY NOTE
VuePress requires Node.js >= 8.
:::