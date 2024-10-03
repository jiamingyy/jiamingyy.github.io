import{_ as e,c as s,a3 as i,o as n}from"./chunks/framework.DWZwO2WB.js";const k=JSON.parse('{"title":"【Skills】tmux使用总结","description":"","frontmatter":{"title":"【Skills】tmux使用总结","date":"2022-04-28T10:56:12.000Z","tags":["Linux","tmux"],"category":["Skills"]},"headers":[],"relativePath":"posts/【Skills】tmux使用总结.md","filePath":"posts/【Skills】tmux使用总结.md","lastUpdated":1727688963000}'),a={name:"posts/【Skills】tmux使用总结.md"};function l(r,t,d,p,o,h){return n(),s("div",null,t[0]||(t[0]=[i(`<p><code>tmux</code>（终端复用器）是连接<code>SSH</code>远程连接服务器时比较常用的工具。本文记录它的常用使用方法。</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>tmux</strong> is an <a href="https://en.wikipedia.org/wiki/Open-source" target="_blank" rel="noreferrer">open-source</a> <a href="https://en.wikipedia.org/wiki/Terminal_multiplexer" target="_blank" rel="noreferrer">terminal multiplexer</a> for <a href="https://en.wikipedia.org/wiki/Unix-like" target="_blank" rel="noreferrer">Unix-like</a> <a href="https://en.wikipedia.org/wiki/Operating_system" target="_blank" rel="noreferrer">operating systems</a>. It allows multiple <a href="https://en.wikipedia.org/wiki/Computer_terminal" target="_blank" rel="noreferrer">terminal</a> sessions to be accessed simultaneously in a single window. It is useful for running more than one <a href="https://en.wikipedia.org/wiki/Command-line_interface" target="_blank" rel="noreferrer">command-line</a> program at the same time. It can also be used to detach <a href="https://en.wikipedia.org/wiki/Process_(computing)" target="_blank" rel="noreferrer">processes</a> from their controlling terminals, allowing remote sessions to remain active without being visible.</p><p><code>tmux</code>具有的特点有：</p><ul><li>可以在一个窗口同时访问多个终端对话</li><li>每个会话都可以<code>detach</code>在后台运行</li></ul><p><code>tmux</code>的控制层次分为三个部分，从上到下为依次包含的关系。</p><ul><li>sessions</li><li>windows</li><li>panel</li></ul><p>一个<code>session</code>可以包含多个<code>window</code>一个<code>window</code>可以切分成若干个<code>panel</code>。这里盗用一张图</p><p><img src="http://louiszhai.github.io/docImages/tmux01.png" alt="tmux层级"></p><p>安装完<code>tmux</code>之后，直接在终端里面输入 <code>tmux</code>就可以出现上面这个界面了</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p><code>session</code>的相关操作，</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 直接输入 tmux 默认创建一个 新的 session</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建一个指定名字的session，注意这里的 session_name 不需要双引号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> session_name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># detach session 将当前会话转到后台运行，或者使用 快捷键 &lt;CTRL&gt;+B d</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> detach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 恢复连接一个会话</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> session_name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看当前tmux 的所有会话</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 退出一个 session</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kill-session</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> session_name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 退出服务/ 关闭所有 session</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kill-server</span></span></code></pre></div><p><img src="https://i.imgur.com/5ID4LYF.png" alt="image-20220428151116378"></p><p>如果当前处在一个 <code>session </code>中可以使用快捷键 <code>&lt;CTRL&gt;+B s </code>进入会话选择界面，通过方向键或者<code>hjkl</code>选择需要进入的会话，按下<code>ENTER</code>进入。</p><p><strong>session操作快捷键总结：</strong></p><p><code>tmux</code>中所有的命令都需要前缀按键，即<code>&lt;CTRL&gt;-B</code>，命令基本就下面这两个就够用了。</p><table tabindex="0"><thead><tr><th style="text-align:center;">快捷键</th><th style="text-align:center;">命令描述</th></tr></thead><tbody><tr><td style="text-align:center;">s</td><td style="text-align:center;">显示当前的会话列表，用于选择切换</td></tr><tr><td style="text-align:center;">d</td><td style="text-align:center;">将当前会话转到后台运行</td></tr></tbody></table><p><strong>window操作快捷键总结：</strong></p><table tabindex="0"><thead><tr><th style="text-align:center;">快捷键</th><th style="text-align:center;">命令描述</th></tr></thead><tbody><tr><td style="text-align:center;">w</td><td style="text-align:center;">显示所有会话中的窗口列表</td></tr><tr><td style="text-align:center;">c</td><td style="text-align:center;">在当前会话中新建一个窗口</td></tr><tr><td style="text-align:center;">&amp;</td><td style="text-align:center;">删除当前窗口,需要 y/n 确认</td></tr><tr><td style="text-align:center;">p</td><td style="text-align:center;">切换到上一个窗口</td></tr><tr><td style="text-align:center;">n</td><td style="text-align:center;">切换到下一个窗口</td></tr></tbody></table><p><strong>panel操作快捷键总结</strong></p><p>panel就是第一个图那里，将一个<code>window</code>划分为多个区域，每个区域就称为一个<code>panel</code></p><table tabindex="0"><thead><tr><th style="text-align:center;">快捷键</th><th style="text-align:center;">命令描述</th></tr></thead><tbody><tr><td style="text-align:center;">%</td><td style="text-align:center;">横向等分当前区域为两个panel</td></tr><tr><td style="text-align:center;">&quot;</td><td style="text-align:center;">纵向等分当前区域为两个panel</td></tr><tr><td style="text-align:center;">x</td><td style="text-align:center;">关闭当前面板,需要 y/n确认</td></tr><tr><td style="text-align:center;">方向键</td><td style="text-align:center;">切换当前panel 的交点</td></tr><tr><td style="text-align:center;">Alt+方向键</td><td style="text-align:center;">调整当前Panel的长宽等</td></tr><tr><td style="text-align:center;">q</td><td style="text-align:center;">显示当前面板的编号，通过按下数字键完成切换</td></tr><tr><td style="text-align:center;">z</td><td style="text-align:center;">将当前面包最大化，再进行一个则恢复原样</td></tr></tbody></table><p>如果划分了很多panel, 希望panel 可以水平或者垂直均匀分布，可以使用以下快捷键</p><table tabindex="0"><thead><tr><th style="text-align:center;">快捷键</th><th style="text-align:center;">命令描述</th></tr></thead><tbody><tr><td style="text-align:center;">Alt + 1</td><td style="text-align:center;">将所有panel 水平均匀分布</td></tr><tr><td style="text-align:center;">Alt + 2</td><td style="text-align:center;">将所有panel 垂直均匀分布</td></tr></tbody></table>`,25)]))}const g=e(a,[["render",l]]);export{k as __pageData,g as default};
