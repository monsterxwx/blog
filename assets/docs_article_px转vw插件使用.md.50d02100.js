import{_ as s,c as n,o as a,Q as p}from"./chunks/framework.bdb1750b.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/article/px转vw插件使用.md","filePath":"docs/article/px转vw插件使用.md","lastUpdated":1704354946000}'),l={name:"docs/article/px转vw插件使用.md"},o=p(`<h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-Shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postcss-px-to-viewport</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postcss-px-to-viewport</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>方式1：放在根目录：<code>postcss.config.js</code></p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> createPlugin </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;postcss-px-to-viewport&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Options...</span></span>
<span class="line"><span style="color:#E1E4E8;">      unitToConvert: </span><span style="color:#9ECBFF;">&#39;px&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      viewportWidth: </span><span style="color:#79B8FF;">1920</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      unitPrecision: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      propList: [</span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      viewportUnit: </span><span style="color:#9ECBFF;">&#39;vw&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      fontViewportUnit: </span><span style="color:#9ECBFF;">&#39;vw&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      selectorBlackList: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      minPixelValue: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      mediaQuery: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      replace: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      exclude: </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      include: </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      landscape: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      landscapeUnit: </span><span style="color:#9ECBFF;">&#39;vh&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      landscapeWidth: </span><span style="color:#79B8FF;">568</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> createPlugin </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;postcss-px-to-viewport&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Options...</span></span>
<span class="line"><span style="color:#24292E;">      unitToConvert: </span><span style="color:#032F62;">&#39;px&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      viewportWidth: </span><span style="color:#005CC5;">1920</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      unitPrecision: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      propList: [</span><span style="color:#032F62;">&#39;*&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      viewportUnit: </span><span style="color:#032F62;">&#39;vw&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      fontViewportUnit: </span><span style="color:#032F62;">&#39;vw&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      selectorBlackList: [],</span></span>
<span class="line"><span style="color:#24292E;">      minPixelValue: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      mediaQuery: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      replace: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      exclude: </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      include: </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      landscape: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      landscapeUnit: </span><span style="color:#032F62;">&#39;vh&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      landscapeWidth: </span><span style="color:#005CC5;">568</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>方式2：放在<code>vite.config.js</code></p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pxtovw </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;postcss-px-to-viewport&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">big_screen_pxtovw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pxtovw</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    unitToConvert: </span><span style="color:#9ECBFF;">&#39;px&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 要转化的单位</span></span>
<span class="line"><span style="color:#E1E4E8;">    viewportWidth: </span><span style="color:#79B8FF;">1920</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// UI设计稿的宽度</span></span>
<span class="line"><span style="color:#E1E4E8;">    unitPrecision: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 转换后的精度，即小数点位数</span></span>
<span class="line"><span style="color:#E1E4E8;">    propList: [</span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 指定转换的css属性的单位，*代表全部css属性的单位都进行转换</span></span>
<span class="line"><span style="color:#E1E4E8;">    viewportUnit: </span><span style="color:#9ECBFF;">&#39;vw&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 指定需要转换成的视窗单位，默认vw</span></span>
<span class="line"><span style="color:#E1E4E8;">    fontViewportUnit: </span><span style="color:#9ECBFF;">&#39;vw&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 指定字体需要转换成的视窗单位，默认vw</span></span>
<span class="line"><span style="color:#E1E4E8;">    selectorBlackList: [], </span><span style="color:#6A737D;">// 指定不转换为视窗单位的类名，</span></span>
<span class="line"><span style="color:#E1E4E8;">    minPixelValue: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值1，小于或等于1px则不进行转换</span></span>
<span class="line"><span style="color:#E1E4E8;">    mediaQuery: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否在媒体查询的css代码中也进行转换，默认false</span></span>
<span class="line"><span style="color:#E1E4E8;">    replace: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否转换后直接更换属性值</span></span>
<span class="line"><span style="color:#E1E4E8;">    exclude: [</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 设置忽略文件，用正则做目录名匹配</span></span>
<span class="line"><span style="color:#E1E4E8;">    landscape: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 是否处理横屏情况</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">  server:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#79B8FF;">3000</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  css:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    postcss:{</span></span>
<span class="line"><span style="color:#E1E4E8;">      plugins:[big_screen_pxtovw]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pxtovw </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;postcss-px-to-viewport&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">big_screen_pxtovw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pxtovw</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    unitToConvert: </span><span style="color:#032F62;">&#39;px&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 要转化的单位</span></span>
<span class="line"><span style="color:#24292E;">    viewportWidth: </span><span style="color:#005CC5;">1920</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// UI设计稿的宽度</span></span>
<span class="line"><span style="color:#24292E;">    unitPrecision: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 转换后的精度，即小数点位数</span></span>
<span class="line"><span style="color:#24292E;">    propList: [</span><span style="color:#032F62;">&#39;*&#39;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 指定转换的css属性的单位，*代表全部css属性的单位都进行转换</span></span>
<span class="line"><span style="color:#24292E;">    viewportUnit: </span><span style="color:#032F62;">&#39;vw&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 指定需要转换成的视窗单位，默认vw</span></span>
<span class="line"><span style="color:#24292E;">    fontViewportUnit: </span><span style="color:#032F62;">&#39;vw&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 指定字体需要转换成的视窗单位，默认vw</span></span>
<span class="line"><span style="color:#24292E;">    selectorBlackList: [], </span><span style="color:#6A737D;">// 指定不转换为视窗单位的类名，</span></span>
<span class="line"><span style="color:#24292E;">    minPixelValue: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值1，小于或等于1px则不进行转换</span></span>
<span class="line"><span style="color:#24292E;">    mediaQuery: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否在媒体查询的css代码中也进行转换，默认false</span></span>
<span class="line"><span style="color:#24292E;">    replace: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否转换后直接更换属性值</span></span>
<span class="line"><span style="color:#24292E;">    exclude: [</span><span style="color:#032F62;">/node_modules/</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 设置忽略文件，用正则做目录名匹配</span></span>
<span class="line"><span style="color:#24292E;">    landscape: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 是否处理横屏情况</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">  server:{</span></span>
<span class="line"><span style="color:#24292E;">    port: </span><span style="color:#005CC5;">3000</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  css:{</span></span>
<span class="line"><span style="color:#24292E;">    postcss:{</span></span>
<span class="line"><span style="color:#24292E;">      plugins:[big_screen_pxtovw]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="xy-postcss-px-to-viewport" tabindex="-1">xy-postcss-px-to-viewport <a class="header-anchor" href="#xy-postcss-px-to-viewport" aria-label="Permalink to &quot;xy-postcss-px-to-viewport&quot;">​</a></h2><p>支持<code>include</code>字段，原先的没有更新至最新版</p><p><code>postcss.config.js</code></p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;xy-postcss-px-to-viewport&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            unitToConvert: </span><span style="color:#9ECBFF;">&#39;px&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 要转化的单位</span></span>
<span class="line"><span style="color:#E1E4E8;">            viewportWidth: </span><span style="color:#79B8FF;">1920</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// UI设计稿的宽度</span></span>
<span class="line"><span style="color:#E1E4E8;">            unitPrecision: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 转换后的精度，即小数点位数</span></span>
<span class="line"><span style="color:#E1E4E8;">            propList: [</span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 指定转换的css属性的单位，*代表全部css属性的单位都进行转换</span></span>
<span class="line"><span style="color:#E1E4E8;">            viewportUnit: </span><span style="color:#9ECBFF;">&#39;vw&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 指定需要转换成的视窗单位，默认vw</span></span>
<span class="line"><span style="color:#E1E4E8;">            fontViewportUnit: </span><span style="color:#9ECBFF;">&#39;vw&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 指定字体需要转换成的视窗单位，默认vw</span></span>
<span class="line"><span style="color:#E1E4E8;">            selectorBlackList: [], </span><span style="color:#6A737D;">// 指定不转换为视窗单位的类名，</span></span>
<span class="line"><span style="color:#E1E4E8;">            minPixelValue: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值1，小于或等于1px则不进行转换</span></span>
<span class="line"><span style="color:#E1E4E8;">            mediaQuery: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否在媒体查询的css代码中也进行转换，默认false</span></span>
<span class="line"><span style="color:#E1E4E8;">            replace: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否转换后直接更换属性值</span></span>
<span class="line"><span style="color:#E1E4E8;">            include: [</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#DBEDFF;">src</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#DBEDFF;">views</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#DBEDFF;">statisticalView</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            landscape: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 是否处理横屏情况</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    plugins: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;xy-postcss-px-to-viewport&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            unitToConvert: </span><span style="color:#032F62;">&#39;px&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 要转化的单位</span></span>
<span class="line"><span style="color:#24292E;">            viewportWidth: </span><span style="color:#005CC5;">1920</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// UI设计稿的宽度</span></span>
<span class="line"><span style="color:#24292E;">            unitPrecision: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 转换后的精度，即小数点位数</span></span>
<span class="line"><span style="color:#24292E;">            propList: [</span><span style="color:#032F62;">&#39;*&#39;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 指定转换的css属性的单位，*代表全部css属性的单位都进行转换</span></span>
<span class="line"><span style="color:#24292E;">            viewportUnit: </span><span style="color:#032F62;">&#39;vw&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 指定需要转换成的视窗单位，默认vw</span></span>
<span class="line"><span style="color:#24292E;">            fontViewportUnit: </span><span style="color:#032F62;">&#39;vw&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 指定字体需要转换成的视窗单位，默认vw</span></span>
<span class="line"><span style="color:#24292E;">            selectorBlackList: [], </span><span style="color:#6A737D;">// 指定不转换为视窗单位的类名，</span></span>
<span class="line"><span style="color:#24292E;">            minPixelValue: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值1，小于或等于1px则不进行转换</span></span>
<span class="line"><span style="color:#24292E;">            mediaQuery: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否在媒体查询的css代码中也进行转换，默认false</span></span>
<span class="line"><span style="color:#24292E;">            replace: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否转换后直接更换属性值</span></span>
<span class="line"><span style="color:#24292E;">            include: [</span><span style="color:#032F62;">/</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#032F62;">src</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#032F62;">views</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#032F62;">statisticalView</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">i</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">            landscape: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 是否处理横屏情况</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,11),e=[o];function c(t,r,E,y,i,F){return a(),n("div",null,e)}const u=s(l,[["render",c]]);export{v as __pageData,u as default};
