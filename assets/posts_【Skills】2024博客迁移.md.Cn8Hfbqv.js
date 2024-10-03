import{_ as i,c as a,a3 as n,o as l}from"./chunks/framework.DWZwO2WB.js";const d=JSON.parse('{"title":"【Skills】2024博客迁移","description":"","frontmatter":{"title":"【Skills】2024博客迁移","date":"2024-10-03T13:00:00.000Z","tags":["vue","Vitepress","Github"],"category":["Skills"]},"headers":[],"relativePath":"posts/【Skills】2024博客迁移.md","filePath":"posts/【Skills】2024博客迁移.md","lastUpdated":1727939783000}'),p={name:"posts/【Skills】2024博客迁移.md"};function h(t,s,e,k,r,E){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>近半年都没怎么好好地整理之前的文档，都是碎片化地写在语雀上，没有放到博客，趁着最近国庆将之前的文档整理以下，全部放到网上。</p><p>由于之前对前端不是特别的熟悉，用的Hexo框架修改起来非常麻烦，也没有非常有动力地去改。正好最近学习了vue，对前端有了一个比较系统的认识，所以顺便将博客从hexo迁移到了基于vue开发vitepress。可以很方便地修改主题布局以及自定义组件。现在博客风格非常对我的胃口。哈哈哈。后续应该会添加更多的功能。</p><h2 id="主题修改" tabindex="-1">主题修改 <a class="header-anchor" href="#主题修改" aria-label="Permalink to &quot;主题修改&quot;">​</a></h2><p>使用的主题基于<a href="https://github.com/airene/vitepress-blog-pure" target="_blank" rel="noreferrer">Pure Theme</a>，添加了<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">tailwindcss</a>支持（吹爆，太好用了）可以不用去纠结起<code>classname</code>了。之前一直没发现那么好用。</p><p>具体修改如下：</p><ol><li>修改原来的单栏布局为双栏，并取消了Aside Bar的显示。</li><li>修改了样式，适配主题。现在的主题色为 tailwind的 \`orange-600。</li><li>修改了字体，替换为了更为通用的 <code>LXGW WenKai Screen</code>字体。</li><li>布局的样式全部使用了tailwind进行重构。</li></ol><p>最终效果如下，还算比较满意。后续好好研究以下哪些动画库，添加一些动画效果。</p><p><img src="https://jiaming-1258672479.cos.ap-chengdu.myqcloud.com//imgs/blogimage-20241003144201127.png" alt="主页截图"></p><h2 id="腾讯云oss上传设置" tabindex="-1">腾讯云OSS上传设置 <a class="header-anchor" href="#腾讯云oss上传设置" aria-label="Permalink to &quot;腾讯云OSS上传设置&quot;">​</a></h2><p>图床的设置基本上遵循之前的使用习惯，使用PicGo搭配Typora进行文章的写作，但是之前使用的是imgur的图床，虽然是免费的，但是国内访问非常不稳定。所以这次换成了腾讯云。虽然收费，但是也很便宜，一个月都不到一瓶可乐的钱。</p><p>OSS的购买以及PicGo的配置参考了这篇帖子<a href="https://www.cnblogs.com/kohler21/p/17108475.html" target="_blank" rel="noreferrer">链接</a>。</p><h2 id="github-actions-部署" tabindex="-1">Github Actions 部署 <a class="header-anchor" href="#github-actions-部署" aria-label="Permalink to &quot;Github Actions 部署&quot;">​</a></h2><p>action的部署脚本如下，内容基本来自于<a href="https://vitepress.dev/zh/guide/deploy" target="_blank" rel="noreferrer">VitePress官网</a>，但是直接使用官网的那个脚本并不完整。这里是进行了修改，主要修改替换的是环境初始化的最后部署的那一部分。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>需要注意一点的是，pure默认主题中的<code>.gitignore</code>文件时包含了<code>/package-lock.json</code>文件的，在本地运行的时候没有问题。但是在action初始化的时候会需要这个文件，需要在commit 的时候把这个文件添加上去。</p></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy VitePress site to Pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 在针对 \`main\` 分支的推送上运行。如果你</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 使用 \`master\` 分支作为默认分支，请将其更改为 \`master\`</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    branches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 允许你从 Actions 选项卡手动运行此工作流程</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write-all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">concurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cancel-in-progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 构建工作</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          fetch-depth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 如果未启用 lastUpdated，则不需要</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      #   with:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      #     version: 9</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Node</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/setup-node@v4</span></span>
<span class="line highlighted"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line highlighted"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          node-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line highlighted"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 或 pnpm / yarn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/configure-pages@v4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm install</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 或 pnpm install / yarn install / bun install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build with VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          npm run docs:build</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          pwd</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          ls -al</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          echo &quot;ROOT_DIR=$(pwd)&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      </span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy to GitHub Pages</span></span>
<span class="line highlighted"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line highlighted"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line highlighted"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.ACCESS_TOKEN }}</span></span>
<span class="line highlighted"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          folder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ env.ROOT_DIR }}/.vitepress/dist</span></span>
<span class="line highlighted"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          repository-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">jiamingyy/jiamingyy.github.io</span></span>
<span class="line highlighted"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          branch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 部署工作</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">github-pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    needs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deployment</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/deploy-pages@v4</span></span></code></pre></div><h3 id="pat-token配置" tabindex="-1">PAT Token配置 <a class="header-anchor" href="#pat-token配置" aria-label="Permalink to &quot;PAT Token配置&quot;">​</a></h3><p>上面的action需要在将代码编译后的结果推送到存放Pages的仓库，源代码（存放源代码的仓库中，可以是私有的仓库）中需要配置获取访问Page仓库的Token才能顺利地将编译后的网页推送到Page仓库。</p><h4 id="生成token" tabindex="-1">生成Token <a class="header-anchor" href="#生成token" aria-label="Permalink to &quot;生成Token&quot;">​</a></h4><p>在Github - &gt; Settings -&gt; Developer settings中生成Token。</p><p><img src="https://jiaming-1258672479.cos.ap-chengdu.myqcloud.com//imgs/blogimage-20241003150607823.png" alt="image-20241003150607823"></p><p>选择 Personal Access Token -&gt; Fine-grain tokens。然后生辰一个新的Token</p><p><img src="https://jiaming-1258672479.cos.ap-chengdu.myqcloud.com//imgs/blogimage-20241003150738379.png" alt="image-20241003150738379"></p><p>我这里是已经生成了，具体可以只选择部署Pages的仓库，并把所有能开的权限都开上。</p><p><img src="https://jiaming-1258672479.cos.ap-chengdu.myqcloud.com//imgs/blogimage-20241003150935237.png" alt="image-20241003150935237"></p><h4 id="配置access-token" tabindex="-1">配置ACCESS_TOKEN <a class="header-anchor" href="#配置access-token" aria-label="Permalink to &quot;配置ACCESS_TOKEN&quot;">​</a></h4><p>上一步中得到了PAT，然后把得到的Token配置到<strong>博客源代码</strong>的Secrets中。因为Action是最终要在源代码仓库中运行的，所以生成的Token也需要配置到<strong>源代码仓库</strong>。</p><p>选择仓库的Settings。</p><p><img src="https://jiaming-1258672479.cos.ap-chengdu.myqcloud.com//imgs/blogimage-20241003151443013.png" alt="image-20241003151443013"></p><p>注意这里的Name需要跟<code>action</code>中的变脸名称对应起来。</p><p><img src="https://jiaming-1258672479.cos.ap-chengdu.myqcloud.com//imgs/blogimage-20241003151218543.png" alt="image-20241003151218543"></p>`,31)]))}const c=i(p,[["render",h]]);export{d as __pageData,c as default};
