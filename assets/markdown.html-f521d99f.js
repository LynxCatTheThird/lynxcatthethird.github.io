import{_ as b}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as y,c as f,f as w,a as s,b as e,d as a,w as l,e as o}from"./app-edae8862.js";const z={},A=s("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),x=s("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),B=s("h2",{id:"markdown-介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-介绍","aria-hidden":"true"},"#"),e(" Markdown 介绍")],-1),E={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},V=s("h2",{id:"markdown-配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-配置","aria-hidden":"true"},"#"),e(" Markdown 配置")],-1),C=s("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),M={class:"hint-container info"},U=s("p",{class:"hint-container-title"},"相关信息",-1),I={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},P=s("h2",{id:"markdown-扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-扩展","aria-hidden":"true"},"#"),e(" Markdown 扩展")],-1),J={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},F=s("h3",{id:"vuepress-扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-扩展","aria-hidden":"true"},"#"),e(" VuePress 扩展")],-1),W=s("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),Z={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},D=s("h3",{id:"主题扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主题扩展","aria-hidden":"true"},"#"),e(" 主题扩展")],-1),K={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},T=s("code",null,"vuepress-plugin-md-enhance",-1),X=o(`<h4 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h4><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>信息容器。</p></div><div class="hint-container note"><p class="hint-container-title">注</p><p>注释容器。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>警告容器</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>危险容器</p></div><details class="hint-container details"><summary>详情</summary><p>详情容器</p></details><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的信息容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container note"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的注释容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的提示容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的警告容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container danger"><p class="hint-container-title">自定义标题</p><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的危险容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><details class="hint-container details"><summary>自定义标题</summary><p>一个有 <code>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的详情容器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><div class="hint-container info"><p class="hint-container-title">自定义信息</p></div><div class="hint-container note"><p class="hint-container-title">自定义注释</p></div><div class="hint-container tip"><p class="hint-container-title">自定义提示</p></div><div class="hint-container warning"><p class="hint-container-title">自定义警告</p></div><div class="hint-container danger"><p class="hint-container-title">自定义危险</p></div>`,18),Q={href:"https://theme-hope.vuejs.press/zh/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},S=s("h4",{id:"代码块",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码块","aria-hidden":"true"},"#"),e(" 代码块")],-1),Y=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),L=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),H=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(" i "),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),q={href:"https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},N=s("h4",{id:"上下角标",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#上下角标","aria-hidden":"true"},"#"),e(" 上下角标")],-1),O=s("p",null,[e("19"),s("sup",null,"th"),e(" H"),s("sub",null,"2"),e("O")],-1),R={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},$=s("h4",{id:"自定义对齐",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义对齐","aria-hidden":"true"},"#"),e(" 自定义对齐")],-1),ss=s("div",{style:{"text-align":"center"}},[s("p",null,"我是居中的")],-1),es=s("div",{style:{"text-align":"right"}},[s("p",null,"我在右对齐")],-1),as={href:"https://theme-hope.vuejs.press/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},ns=s("h4",{id:"attrs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),e(" Attrs")],-1),ts=s("p",null,[e("一个拥有 ID 的 "),s("strong",{id:"word"},"单词"),e("。")],-1),ls={href:"https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},rs=o('<h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h4><p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),is={href:"https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},os=s("h4",{id:"标记",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#标记","aria-hidden":"true"},"#"),e(" 标记")],-1),cs=s("p",null,[e("你可以标记 "),s("mark",null,"重要的内容"),e(" 。")],-1),ps={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},ms=s("h4",{id:"任务列表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),e(" 任务列表")],-1),hs={class:"task-list-container"},ds=o('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 1</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 2</label></p></li>',2),us={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},gs=s("h3",{id:"图片增强",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#图片增强","aria-hidden":"true"},"#"),e(" 图片增强")],-1),vs=s("p",null,"支持为图片设置颜色模式和大小",-1),ks={href:"https://theme-hope.vuejs.press/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},_s=o(`<h4 id="卡片" tabindex="-1"><a class="header-anchor" href="#卡片" aria-hidden="true">#</a> 卡片</h4><div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
color: rgba(253, 230, 138, 0.15)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),bs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/card.html",target:"_blank",rel:"noopener noreferrer"},ys=s("h4",{id:"图表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#图表","aria-hidden":"true"},"#"),e(" 图表")],-1),fs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},ws=s("h4",{id:"echarts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),e(" Echarts")],-1),zs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},As=s("h4",{id:"流程图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),e(" 流程图")],-1),xs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},Bs=s("h4",{id:"mermaid",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),e(" Mermaid")],-1),Es={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},js=s("h4",{id:"tex-语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tex-语法","aria-hidden":"true"},"#"),e(" Tex 语法")],-1),Vs=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("msup",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"r")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("msup",null,[s("mi",null,"ω"),s("mi",null,"r")])])]),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"ω")]),s("mi",null,"ω")]),s("mo",{fence:"true"},")")]),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"ω")]),s("mi",null,"ω")]),s("mo",{fence:"true"},")")]),s("mrow",null,[s("mo",{fence:"true"},"{"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"r")]),s("mo",null,"+"),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"r")]),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",null,"−"),s("mn",null,"1"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"i")]),s("mi",null,"r"),s("mo",null,"⋯"),s("mo",{stretchy:"false"},"("),s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mrow",null,[s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"i")])])]),s("msup",null,[s("mi",null,"ω"),s("mi",null,"i")])]),s("mo",{fence:"true"},"}")])]),s("annotation",{encoding:"application/x-tex"}," \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4em","vertical-align":"-0.95em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3714em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.5904em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"ω")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.0277em","vertical-align":"-1.2777em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"ω")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"{")]),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5017em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7507em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"⋯"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"}")])])])])])])],-1),Cs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},Ms=s("h4",{id:"导入文件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#导入文件","aria-hidden":"true"},"#"),e(" 导入文件")],-1),Us={href:"https://theme-hope.vuejs.press/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},Is=s("h4",{id:"代码演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),e(" 代码演示")],-1),Ps=s("div",{class:"language-html line-numbers-mode","data-ext":"html"},[s("pre",{class:"language-html"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("h1")]),s("span",{class:"token punctuation"},">")]),e("VuePress Theme Hope"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("h1")]),s("span",{class:"token punctuation"},">")]),e(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("p")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("span")]),e(),s("span",{class:"token attr-name"},"id"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),e("very"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),e("非常"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("span")]),s("span",{class:"token punctuation"},">")]),e("强大!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("p")]),s("span",{class:"token punctuation"},">")]),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Js=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"language-javascript"},[s("code",null,[e("document"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"querySelector"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"#very"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"addEventListener"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"click"'),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token operator"},"=>"),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token function"},"alert"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"非常强大"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Gs=s("div",{class:"language-css line-numbers-mode","data-ext":"css"},[s("pre",{class:"language-css"},[s("code",null,[s("span",{class:"token selector"},"span"),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),e(" red"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token punctuation"},"}"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Fs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Ws=s("h4",{id:"样式化",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#样式化","aria-hidden":"true"},"#"),e(" 样式化")],-1),Zs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},Ds=s("h4",{id:"交互演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#交互演示","aria-hidden":"true"},"#"),e(" 交互演示")],-1),Ks={href:"https://theme-hope.vuejs.press/zh/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},Ts=s("h4",{id:"vue-交互演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue-交互演示","aria-hidden":"true"},"#"),e(" Vue 交互演示")],-1),Xs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Qs=s("h4",{id:"幻灯片",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#幻灯片","aria-hidden":"true"},"#"),e(" 幻灯片")],-1),Ss={href:"https://theme-hope.vuejs.press/zh/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},Ys=o('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function Ls(Hs,qs){const n=t("ExternalLinkIcon"),c=t("CodeTabs"),p=t("ChartJS"),m=t("ECharts"),h=t("FlowChart"),d=t("Mermaid"),u=t("CodeDemo"),g=t("Badge"),v=t("Playground"),k=t("VuePlayground"),_=t("Presentation");return y(),f("div",null,[A,x,w(" more "),B,s("p",null,[e("如果你是一个新手，还不会编写 Markdown，请先阅读 "),s("a",E,[e("Markdown 介绍"),a(n)]),e(" 和 "),s("a",j,[e("Markdown 演示"),a(n)]),e("。")]),V,C,s("div",M,[U,s("p",null,[e("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),s("a",I,[e("Frontmatter 介绍"),a(n)]),e("。")])]),P,s("p",null,[e("VuePress 会使用 "),s("a",J,[e("markdown-it"),a(n)]),e(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),s("a",G,[e("语法扩展"),a(n)]),e(" 。")]),F,W,s("p",null,[e("关于这些扩展，请阅读 "),s("a",Z,[e("VuePress 中的 Markdown 扩展"),a(n)]),e("。")]),D,s("p",null,[e("通过 "),s("a",K,[T,a(n)]),e("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),X,s("ul",null,[s("li",null,[s("a",Q,[e("查看详情"),a(n)])])]),S,a(c,{id:"134",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2},{title0:l(({value:r,isActive:i})=>[e("pnpm")]),title1:l(({value:r,isActive:i})=>[e("yarn")]),title2:l(({value:r,isActive:i})=>[e("npm")]),tab0:l(({value:r,isActive:i})=>[Y]),tab1:l(({value:r,isActive:i})=>[L]),tab2:l(({value:r,isActive:i})=>[H]),_:1}),s("ul",null,[s("li",null,[s("a",q,[e("查看详情"),a(n)])])]),N,O,s("ul",null,[s("li",null,[s("a",R,[e("查看详情"),a(n)])])]),$,ss,es,s("ul",null,[s("li",null,[s("a",as,[e("查看详情"),a(n)])])]),ns,ts,s("ul",null,[s("li",null,[s("a",ls,[e("查看详情"),a(n)])])]),rs,s("ul",null,[s("li",null,[s("a",is,[e("查看详情"),a(n)])])]),os,cs,s("ul",null,[s("li",null,[s("a",ps,[e("查看详情"),a(n)])])]),ms,s("ul",hs,[ds,s("li",null,[s("p",null,[s("a",us,[e("查看详情"),a(n)])])])]),gs,vs,s("ul",null,[s("li",null,[s("a",ks,[e("查看详情"),a(n)])])]),_s,s("ul",null,[s("li",null,[s("a",bs,[e("查看详情"),a(n)])])]),ys,a(p,{id:"chart-271",config:"eJxtULsOgjAU3fmKppMmaETDoKufYRgKNIRYKYGaSAyLg5sjk6O7cfWHMP6F95byMGFp2vO6t+dsEUJVkXK6ITQPmFI8ozaCIVMMQBSYV85VDshOI8QwmhXM5wIT6urxubzr6lXfnt/7VScZjclr3TqB0BNAM2dhE1rAbUHK3tHxLeuM053bHXfP3Zafg6ITeIPdfBbso0wek3ArhczwJ1nkT5YuWNdrmzir5ZQaeZPgwamnUZmqWCZYjKkKWhS8fwOCawzaausWccJZ07ZhUpnHmIasL5WSh/+peJZWaf0ALadm1Q==",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),s("ul",null,[s("li",null,[s("a",fs,[e("查看详情"),a(n)])])]),ws,a(m,{id:"echarts-284",config:"eJyr5lJQUKpwrMgsVrJSAHGA3JLKglQgTyk5sSQ1Pb+oUkkHIp6SWJIIFI9W8s3PU9JRUAopTQVR4akpYF5GKYhyK8oEUcGJJWCqNE8pFqi7FmSEUiV2e8oSc4AmwVUVpxZlpoKURYOVQRQjWW9oaqCjYGQMIoxMgIShhY6CobEpkDAxB3LNDGIh7kWyISczD2wB0AogGctVywUA9j06jQ==",title:"%E4%B8%80%E4%B8%AA%E6%8A%98%E7%BA%BF%E5%9B%BE%E6%A1%88%E4%BE%8B"}),s("ul",null,[s("li",null,[s("a",zs,[e("查看详情"),a(n)])])]),As,a(h,{id:"flowchart-297",code:"eJxLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE",preset:"vue"}),s("ul",null,[s("li",null,[s("a",xs,[e("查看详情"),a(n)])])]),Bs,a(d,{id:"mermaid-308",code:"eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ=="}),s("ul",null,[s("li",null,[s("a",Es,[e("查看详情"),a(n)])])]),js,Vs,s("ul",null,[s("li",null,[s("a",Cs,[e("查看详情"),a(n)])])]),Ms,s("ul",null,[s("li",null,[s("a",Us,[e("查看详情"),a(n)])])]),Is,a(u,{id:"code-demo-342",type:"normal",title:"%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo",code:"eJwljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC"},{default:l(()=>[Ps,Js,Gs]),_:1}),s("ul",null,[s("li",null,[s("a",Fs,[e("查看详情"),a(n)])])]),Ws,s("p",null,[e("向 Mr.Hope 捐赠一杯咖啡。 "),a(g,{type:"tip"},{default:l(()=>[e("Recommended")]),_:1})]),s("ul",null,[s("li",null,[s("a",Zs,[e("查看详情"),a(n)])])]),Ds,a(v,{key:"1bb473b2",title:"TS%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),s("ul",null,[s("li",null,[s("a",Ks,[e("查看详情"),a(n)])])]),Ts,a(k,{title:"Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA",key:"10503908",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D"}),s("ul",null,[s("li",null,[s("a",Xs,[e("查看详情"),a(n)])])]),Qs,a(_,{id:"presentation-400",code:"eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr5+bWVySWqSbkV+Qqpecn6up8HxWy7N1W19M2MvFpaury4VqqBFQUOHlwp3PZ68DWgBngoQx1BrrAZ2QkJCQVcyVnJ9XXKKQqGCrYGgNEgIpx1ANNERFhctLI6YkI7UkMd5AB8ow1ATqiykuzY2vzrQ1qAUpAgAALl2Z",theme:"auto"}),s("ul",null,[s("li",null,[s("a",Ss,[e("查看详情"),a(n)])])]),Ys])}const Rs=b(z,[["render",Ls],["__file","markdown.html.vue"]]);export{Rs as default};
