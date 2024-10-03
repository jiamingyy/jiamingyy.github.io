import{_ as o,c as r,a3 as a,a as e,j as l,o as i}from"./chunks/framework.DWZwO2WB.js";const w=JSON.parse('{"title":"【FPGA】数字电路基础 - 时序逻辑","description":"","frontmatter":{"title":"【FPGA】数字电路基础 - 时序逻辑","date":"2022-03-17T17:10:32.000Z","tags":["数字电路","FPGA"],"category":["FPGA"]},"headers":[],"relativePath":"posts/【FPGA】数字电路基础 - 时序逻辑.md","filePath":"posts/【FPGA】数字电路基础 - 时序逻辑.md","lastUpdated":1727688963000}'),s={name:"posts/【FPGA】数字电路基础 - 时序逻辑.md"},p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},n={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.79ex",height:"2.6ex",role:"img",focusable:"false",viewBox:"0 -955 791 1149","aria-hidden":"true"},d={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.781ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.795ex",height:"2.737ex",role:"img",focusable:"false",viewBox:"0 -864.9 793.6 1209.9","aria-hidden":"true"};function h(g,t,u,c,x,T){return i(),r("div",null,[t[8]||(t[8]=a('<p>学习触发器，边缘触发器的基础知识。</p><p>可以参照<a href="https://zhuanlan.zhihu.com/p/37137899" target="_blank" rel="noreferrer">D触发器的进化之路</a>这篇文章，讲的比较清楚。</p><p>《编码》--- 触发器可以保持信息，可以记住最近一次是哪个开关先闭合的。</p><h2 id="rs触发器" tabindex="-1">RS触发器 <a class="header-anchor" href="#rs触发器" aria-label="Permalink to &quot;RS触发器&quot;">​</a></h2><p>使用两个或非门或者与非门就可以构成最基本的RS锁存器。</p><p><img src="https://i.imgur.com/IegO4Ek.png" alt="image-20220905171451669"></p><p>这个电路的状态表如下图：</p><table tabindex="0"><thead><tr><th>R</th><th>S</th><th>Q(n+1)</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>Q(n)</td></tr><tr><td>0</td><td>0</td><td>不稳，该种情况需要避免出现</td></tr></tbody></table><p>这种电路的缺点是：</p><ol><li>能控制存储的对象，但是有非法态</li><li>整个系统不受控，一直处在工作状态</li></ol><p>在输入端加入时钟控制功能，RS锁存器就变成了RS触发器。</p><p>使用两个或门的输出作为RS触发器的输入，当中间的引脚为1，则自动屏蔽输入，（或门有一个1则输出肯定为1，此时的RS触发器处于保持状态）</p><p>中间的引脚可以作为时钟信号的输入，插入时钟控制信号就可以避免刚刚说到的第二个缺点。</p><p>PS: 在上面那个或门的输出那里再插入一个或门，引出一个额外的输出端口作为清零端口。</p><p><img src="https://i.imgur.com/u1IKpYx.png" alt="image-20220905172111938"></p><h2 id="d触发器" tabindex="-1">D触发器 <a class="header-anchor" href="#d触发器" aria-label="Permalink to &quot;D触发器&quot;">​</a></h2><p>由于RS触发器拥有两个输入端口（R/S）,为了避免这种情况，直接使用一个非门保证RS触发器的输入肯定是合法的。</p><p><img src="https://i.imgur.com/nyTr6tW.png" alt="image-20220905172334939"></p><p>将上面的电路进行封装，就变成了常见的电平触发的D触发器也称为DFF（D Filp-Flop）。在时钟信号为低电平时可以通过控制端口D改变保存的值，时钟信号为高电平时则进入所存状态。</p><p><img src="https://i.imgur.com/KByH2hI.png" alt="image-20220905172527859"></p><p>将两个DFF串联，时钟信号通过一个非门相连，就构成了电平触发的D触发器。</p><p><img src="https://i.imgur.com/TeOfiZb.png" alt="image-20220905172946640"></p><p>第一个传输数据的时候，第二个D触发器保持</p><p>第二个传输数据的时候，第一个触发器保持，</p><p>最后的结果就是，只在边沿触发的那一刻传输数据！</p><h2 id="分频器" tabindex="-1">分频器 <a class="header-anchor" href="#分频器" aria-label="Permalink to &quot;分频器&quot;">​</a></h2>',26)),e("p",null,[t[2]||(t[2]=l("将DFF的")),e("mjx-container",p,[(i(),r("svg",n,t[0]||(t[0]=[a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D444" d="M399 -80Q399 -47 400 -30T402 -11V-7L387 -11Q341 -22 303 -22Q208 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435Q740 255 592 107Q529 47 461 16L444 8V3Q444 2 449 -24T470 -66T516 -82Q551 -82 583 -60T625 -3Q631 11 638 11Q647 11 649 2Q649 -6 639 -34T611 -100T557 -165T481 -194Q399 -194 399 -87V-80ZM636 468Q636 523 621 564T580 625T530 655T477 665Q429 665 379 640Q277 591 215 464T153 216Q153 110 207 59Q231 38 236 38V46Q236 86 269 120T347 155Q372 155 390 144T417 114T429 82T435 55L448 64Q512 108 557 185T619 334T636 468ZM314 18Q362 18 404 39L403 49Q399 104 366 115Q354 117 347 117Q344 117 341 117T337 118Q317 118 296 98T274 52Q274 18 314 18Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(478.8,265) translate(-250 0)"><path data-c="AF" d="M69 544V590H430V544H69Z" style="stroke-width:3;"></path></g></g></g></g></g>',1)]))),t[1]||(t[1]=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mrow",{"data-mjx-texclass":"ORD"},[e("mover",null,[e("mi",null,"Q"),e("mo",{stretchy:"false"},"¯")])])])],-1))]),t[3]||(t[3]=l("接到D，就可以实现对CLK 的分频"))]),t[9]||(t[9]=e("p",null,[e("img",{src:"https://i.imgur.com/3VYjvTl.png",alt:"image-20220905173033502"})],-1)),e("p",null,[t[6]||(t[6]=l("输出的模型如下，可以看到Q的输出频率为输入Clk 的 ")),e("mjx-container",d,[(i(),r("svg",m,t[4]||(t[4]=[a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mfrac"><g data-mml-node="mn" transform="translate(220,394) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(220,-345) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g><rect width="553.6" height="60" x="120" y="220"></rect></g></g></g>',1)]))),t[5]||(t[5]=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mfrac",null,[e("mn",null,"1"),e("mn",null,"2")])])],-1))]),t[7]||(t[7]=l("。"))]),t[10]||(t[10]=a('<p><img src="https://i.imgur.com/HaiHLSm.png" alt="image-20220905173038458"></p><h2 id="倍频器" tabindex="-1">倍频器 <a class="header-anchor" href="#倍频器" aria-label="Permalink to &quot;倍频器&quot;">​</a></h2><p>DFF和与非门配合就可以实现2倍频电路。</p><p><img src="https://i.imgur.com/WJxs2eK.png" alt="Clock Doubler Circuit using Delay Chains"></p><h2 id="行波计数器" tabindex="-1">行波计数器 <a class="header-anchor" href="#行波计数器" aria-label="Permalink to &quot;行波计数器&quot;">​</a></h2><p>通过将DFF进行串联, 除了组成分频器外，因为串联一个DFF输出的频率就是原来频率的 1/2。不同分频器当前的输出作为一个二进制数的数的一位，这个二进制数就代表了CLK 脉冲产生的个数</p><p><img src="https://i.imgur.com/NpGEXZV.png" alt="image-20220905174734191"></p><p>该电路的波形如下，将波形所代表的电平转化为十进制数就得到了Clk时钟的脉冲计数。</p><p><img src="https://i.imgur.com/DthnfeP.png" alt="image-20220905174744692"></p>',9))])}const f=o(s,[["render",h]]);export{w as __pageData,f as default};
