import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.bdb1750b.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/article/代码高亮组件实现.md","filePath":"docs/article/代码高亮组件实现.md","lastUpdated":1704354946000}'),p={name:"docs/article/代码高亮组件实现.md"},o=l(`<h2 id="安装库" tabindex="-1">安装库 <a class="header-anchor" href="#安装库" aria-label="Permalink to &quot;安装库&quot;">​</a></h2><div class="language-Shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clipboard</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">highlight.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clipboard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">highlight.js</span></span></code></pre></div><h2 id="封装组件" tabindex="-1">封装组件 <a class="header-anchor" href="#封装组件" aria-label="Permalink to &quot;封装组件&quot;">​</a></h2><p><code>HighCode/index.vue</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">v-highlight</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;high-code srollbar_style hljs&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{</span></span>
<span class="line"><span style="color:#9ECBFF;">            atom_one_dark: currentTheme === &#39;dark&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">            atom_one_light: currentTheme === &#39;light&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{width:width,height:height,borderRadius:round?&#39;8px&#39;:&#39;&#39;}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;code-lang&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{color:currentTheme===&#39;dark&#39;?&#39;#fff&#39;:&#39;#1e1e20&#39;}&quot;</span><span style="color:#E1E4E8;">&gt;{{ lang }}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;code-header&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">:style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{backgroundColor:currentTheme===&#39;dark&#39;?&#39;#1e1e20&#39;:&#39;#d0d4d6&#39;}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;header-item&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;changeTheme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;i-ant-design-skin-outlined&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">i</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;copyHandle&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">:style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{backgroundColor:currentTheme===&#39;dark&#39;?&#39;#1e1e20&#39;:&#39;#d0d4d6&#39;}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;header-item&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;i-ep-document-copy&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">i</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">pre</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">code</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\`language-\${lang}\`&quot;</span><span style="color:#E1E4E8;">&gt;{{ codeValue }}&lt;/</span><span style="color:#85E89D;">code</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">pre</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> clipboard </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/utils/clipboard.js&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">props</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    codeValue: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    round: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    lang: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;javascript&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;620px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;240px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">currentTheme</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dark&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// light dark</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">changeTheme</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    currentTheme.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentTheme.value </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;dark&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;dark&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">copyHandle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">clipboard</span><span style="color:#E1E4E8;">(props.codeValue, event)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./theme/atom_one_dark&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./theme/atom_one_light&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.high-code</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">flex-direction</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">column</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">700</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">:hover</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.code-header</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">.header-item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">opacity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.code-lang</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">absolute</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">15</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">999</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.code-header</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">absolute</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">15</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">35</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">999</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">align-items</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.header-item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">4</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">justify-content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">align-items</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">cursor</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">pointer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">opacity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">transition</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">.3</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">i</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">18</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">.srollbar_style::-webkit-scrollbar-track</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#eee</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">.srollbar_style::-webkit-scrollbar-thumb</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">rgb</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">175</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">171</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">171</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">.srollbar_style::-webkit-scrollbar</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">pre</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">overflow-y</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">pre</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">code</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">font-family</span><span style="color:#E1E4E8;">: Consolas, Monaco, </span><span style="color:#79B8FF;">monospace</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1.3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">14</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">overflow-x</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">visible</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">box-sizing</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">border-box</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">v-highlight</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;high-code srollbar_style hljs&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{</span></span>
<span class="line"><span style="color:#032F62;">            atom_one_dark: currentTheme === &#39;dark&#39;,</span></span>
<span class="line"><span style="color:#032F62;">            atom_one_light: currentTheme === &#39;light&#39;,</span></span>
<span class="line"><span style="color:#032F62;">        }&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{width:width,height:height,borderRadius:round?&#39;8px&#39;:&#39;&#39;}&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;code-lang&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{color:currentTheme===&#39;dark&#39;?&#39;#fff&#39;:&#39;#1e1e20&#39;}&quot;</span><span style="color:#24292E;">&gt;{{ lang }}&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;code-header&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">div</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">:style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{backgroundColor:currentTheme===&#39;dark&#39;?&#39;#1e1e20&#39;:&#39;#d0d4d6&#39;}&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;header-item&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;changeTheme&quot;</span></span>
<span class="line"><span style="color:#24292E;">            &gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">i</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;i-ant-design-skin-outlined&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">div</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;copyHandle&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">:style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{backgroundColor:currentTheme===&#39;dark&#39;?&#39;#1e1e20&#39;:&#39;#d0d4d6&#39;}&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;header-item&quot;</span></span>
<span class="line"><span style="color:#24292E;">            &gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">i</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;i-ep-document-copy&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">pre</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">code</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\`language-\${lang}\`&quot;</span><span style="color:#24292E;">&gt;{{ codeValue }}&lt;/</span><span style="color:#22863A;">code</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">pre</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> clipboard </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/utils/clipboard.js&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">props</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineProps</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    codeValue: {</span></span>
<span class="line"><span style="color:#24292E;">        type: String,</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    round: {</span></span>
<span class="line"><span style="color:#24292E;">        type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    lang: {</span></span>
<span class="line"><span style="color:#24292E;">        type: String,</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#032F62;">&#39;javascript&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    width: {</span></span>
<span class="line"><span style="color:#24292E;">        type: String,</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#032F62;">&#39;620px&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    height: {</span></span>
<span class="line"><span style="color:#24292E;">        type: String,</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#032F62;">&#39;240px&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">currentTheme</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;dark&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// light dark</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">changeTheme</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    currentTheme.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentTheme.value </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;dark&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;light&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;dark&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">copyHandle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">event</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">clipboard</span><span style="color:#24292E;">(props.codeValue, event)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./theme/atom_one_dark&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./theme/atom_one_light&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.high-code</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">flex-direction</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">column</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">relative</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">z-index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">700</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">:hover</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.code-header</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">.header-item</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">opacity</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.code-lang</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">absolute</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">right</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">15</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">z-index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">999</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.code-header</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">absolute</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">right</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">15</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">35</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">z-index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">999</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">align-items</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">gap</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.header-item</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">4</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">justify-content</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">align-items</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">cursor</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">pointer</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">opacity</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">transition</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">all</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">.3</span><span style="color:#D73A49;">s</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">i</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">18</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">.srollbar_style::-webkit-scrollbar-track</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#eee</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">.srollbar_style::-webkit-scrollbar-thumb</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">rgb</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">175</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">171</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">171</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">.srollbar_style::-webkit-scrollbar</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">pre</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">overflow-y</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">pre</span><span style="color:#24292E;"> </span><span style="color:#22863A;">code</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">font-family</span><span style="color:#24292E;">: Consolas, Monaco, </span><span style="color:#005CC5;">monospace</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">line-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1.3</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">14</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">relative</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">overflow-x</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">visible</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">box-sizing</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">border-box</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="两个主题" tabindex="-1">两个主题 <a class="header-anchor" href="#两个主题" aria-label="Permalink to &quot;两个主题&quot;">​</a></h2><p><code>HighCode/theme/atom_one_dark.scss</code></p><div class="language-SCSS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">SCSS</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">Atom One Dark by Daniel Gamage</span></span>
<span class="line"><span style="color:#6A737D;">Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark.hljs</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#abb2bf</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#282c34</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-comment</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-quote</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#5c6370</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-style</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">italic</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-doctag</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-keyword</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-formula</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#c678dd</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-section</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-name</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-selector-tag</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-deletion</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-subst</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#e06c75</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-literal</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#56b6c2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-string</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-regexp</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-addition</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-attribute</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-string</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#98c379</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-attr</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-variable</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-template-variable</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-type</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-selector-class</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-selector-attr</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-selector-pseudo</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-number</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#d19a66</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-symbol</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-bullet</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-link</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-meta</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-selector-id</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-title</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#61aeee</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-built_in</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-title</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.class_</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-title</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#e6c07b</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-emphasis</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-style</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">italic</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-strong</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-weight</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">bold</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_dark</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-link</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">text-decoration</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">underline</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">Atom One Dark by Daniel Gamage</span></span>
<span class="line"><span style="color:#6A737D;">Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark.hljs</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#abb2bf</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#282c34</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-comment</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-quote</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#5c6370</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-style</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">italic</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-doctag</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-keyword</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-formula</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#c678dd</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-section</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-name</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-selector-tag</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-deletion</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-subst</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#e06c75</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-literal</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#56b6c2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-regexp</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-addition</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-attribute</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-string</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#98c379</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-attr</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-variable</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-template-variable</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-type</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-selector-class</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-selector-attr</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-selector-pseudo</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-number</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#d19a66</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-symbol</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-bullet</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-link</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-meta</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-selector-id</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-title</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#61aeee</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-built_in</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-title</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.class_</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-title</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#e6c07b</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-emphasis</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-style</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">italic</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-strong</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-weight</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">bold</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_dark</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-link</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">text-decoration</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">underline</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><code>HighCode/theme/atom_one_light.scss</code></p><div class="language-SCSS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">SCSS</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">Atom One Light by Daniel Gamage</span></span>
<span class="line"><span style="color:#6A737D;">Original One Light Syntax theme from https://github.com/atom/one-light-syntax</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light.hljs</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#383a42</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#edf2f4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-comment</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-quote</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#a0a1a7</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-style</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">italic</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-doctag</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-keyword</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-formula</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#a626a4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-section</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-name</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-selector-tag</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-deletion</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-subst</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#e45649</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-literal</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#0184bb</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-string</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-regexp</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-addition</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-attribute</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-string</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#50a14f</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-attr</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-variable</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-template-variable</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-type</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-selector-class</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-selector-attr</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-selector-pseudo</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-number</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#986801</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-symbol</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-bullet</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-link</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-meta</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-selector-id</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-title</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#4078f2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-built_in</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-title</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.class_</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-title</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#c18401</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-emphasis</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-style</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">italic</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-strong</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-weight</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">bold</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.atom_one_light</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.hljs-link</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">text-decoration</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">underline</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">Atom One Light by Daniel Gamage</span></span>
<span class="line"><span style="color:#6A737D;">Original One Light Syntax theme from https://github.com/atom/one-light-syntax</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light.hljs</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#383a42</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#edf2f4</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-comment</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-quote</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#a0a1a7</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-style</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">italic</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-doctag</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-keyword</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-formula</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#a626a4</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-section</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-name</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-selector-tag</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-deletion</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-subst</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#e45649</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-literal</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#0184bb</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-regexp</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-addition</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-attribute</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-string</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#50a14f</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-attr</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-variable</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-template-variable</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-type</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-selector-class</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-selector-attr</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-selector-pseudo</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-number</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#986801</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-symbol</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-bullet</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-link</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-meta</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-selector-id</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-title</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#4078f2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-built_in</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-title</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.class_</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-title</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#c18401</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-emphasis</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-style</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">italic</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-strong</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-weight</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">bold</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.atom_one_light</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.hljs-link</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">text-decoration</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">underline</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="自定义指令v-highlight" tabindex="-1">自定义指令<code>v-highlight</code> <a class="header-anchor" href="#自定义指令v-highlight" aria-label="Permalink to &quot;自定义指令\`v-highlight\`&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> hljs </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;highlight.js&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">highlight</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">blocks</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;pre code&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        blocks.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hljs.</span><span style="color:#B392F0;">highlightBlock</span><span style="color:#E1E4E8;">(block)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">updated</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">blocks</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> el.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;pre code&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        blocks.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hljs.</span><span style="color:#B392F0;">highlightBlock</span><span style="color:#E1E4E8;">(block)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> highlight</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> hljs </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;highlight.js&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">highlight</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">el</span><span style="color:#24292E;">, </span><span style="color:#E36209;">binding</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">blocks</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.</span><span style="color:#6F42C1;">querySelectorAll</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;pre code&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        blocks.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            hljs.</span><span style="color:#6F42C1;">highlightBlock</span><span style="color:#24292E;">(block)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">updated</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">el</span><span style="color:#24292E;">, </span><span style="color:#E36209;">binding</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">blocks</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.</span><span style="color:#6F42C1;">querySelectorAll</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;pre code&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        blocks.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            hljs.</span><span style="color:#6F42C1;">highlightBlock</span><span style="color:#24292E;">(block)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> highlight</span></span></code></pre></div><p><code>clipboard</code>封装</p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Clipboard </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;clipboard&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ElMessage } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;element-plus&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clipboardSuccess</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ElMessage.</span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(msg </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;复制成功&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clipboardError</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ElMessage.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(msg </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;复制失败&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleClipboard</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">clipboard</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Clipboard</span><span style="color:#E1E4E8;">(event.target, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> text</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    clipboard.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">clipboardSuccess</span><span style="color:#E1E4E8;">(msg)</span></span>
<span class="line"><span style="color:#E1E4E8;">        clipboard.</span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    clipboard.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">clipboardError</span><span style="color:#E1E4E8;">(msg)</span></span>
<span class="line"><span style="color:#E1E4E8;">        clipboard.</span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    clipboard.</span><span style="color:#B392F0;">onClick</span><span style="color:#E1E4E8;">(event)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Clipboard </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;clipboard&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ElMessage } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;element-plus&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clipboardSuccess</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    ElMessage.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(msg </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;复制成功&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clipboardError</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    ElMessage.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(msg </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;复制失败&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleClipboard</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">text</span><span style="color:#24292E;">, </span><span style="color:#E36209;">event</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">clipboard</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Clipboard</span><span style="color:#24292E;">(event.target, {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> text</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    clipboard.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;success&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">clipboardSuccess</span><span style="color:#24292E;">(msg)</span></span>
<span class="line"><span style="color:#24292E;">        clipboard.</span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    clipboard.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">clipboardError</span><span style="color:#24292E;">(msg)</span></span>
<span class="line"><span style="color:#24292E;">        clipboard.</span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    clipboard.</span><span style="color:#6F42C1;">onClick</span><span style="color:#24292E;">(event)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,14),e=[o];function c(t,r,E,y,i,F){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{h as __pageData,d as default};
