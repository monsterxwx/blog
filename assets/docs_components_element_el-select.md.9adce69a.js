import"./chunks/base.878014a1.js";import"./chunks/el-popper.92042296.js";import{b as d,E as m}from"./chunks/el-select.4511403c.js";import{h as c,x as g,o as e,b as y,w as v,c as i,D as B,F as C,L as h,k as r,H as q,a as b,Q as f}from"./chunks/framework.c50502ba.js";import"./chunks/index.80d8b797.js";import"./chunks/use-form-common-props.5a2ea5d2.js";import"./chunks/scroll.53b4895a.js";const A={__name:"BaseSelect",props:{modelValue:{type:[String,Number,Array]},list:{type:Array,default:()=>[]},label:{type:String,default:"label"},value:{type:String,default:"value"},width:{type:String,default:"100%"}},emits:["update:modelValue"],setup(s,{emit:l}){const t=s,p=c("");g(()=>t.modelValue,n=>{p.value=n},{immediate:!0});const o=n=>{l("update:modelValue",n)};return(n,E)=>{const u=d,F=m;return e(),y(F,h({modelValue:p.value,"onUpdate:modelValue":E[0]||(E[0]=a=>p.value=a),style:{width:s.width},onChange:o,placeholder:"请选择数据"},n.$attrs),{default:v(()=>[(e(!0),i(C,null,B(s.list,a=>(e(),y(u,{key:a[s.value],label:s.label?a[s.label]:a[s.value],value:a[s.value]},null,8,["label","value"]))),128))]),_:1},16,["modelValue","style"])}}},D=r("h1",{id:"el-select",tabindex:"-1"},[b("el-select "),r("a",{class:"header-anchor",href:"#el-select","aria-label":'Permalink to "el-select"'},"​")],-1),V={class:"w-200px"},S=f(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> BaseSelect </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/components/BaseSelect.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">currentValue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;选项1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#9ECBFF;">&#39;1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&#39;选项2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#9ECBFF;">&#39;2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;w-200px&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#FDAEB7;font-style:italic;">BaseSelect</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentValue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100%&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> BaseSelect </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/components/BaseSelect.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">currentValue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">list</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&#39;选项1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    value: </span><span style="color:#032F62;">&#39;1&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&#39;选项2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    value: </span><span style="color:#032F62;">&#39;2&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;w-200px&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#B31D28;font-style:italic;">BaseSelect</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;currentValue&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100%&quot;</span></span>
<span class="line"><span style="color:#24292E;">        /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="组件代码" tabindex="-1">组件代码 <a class="header-anchor" href="#组件代码" aria-label="Permalink to &quot;组件代码&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-nyhqM" id="tab-WS0gau-" checked="checked"><label for="tab-WS0gau-">components/BaseSelect.vue</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">el-select</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentValue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ width: width }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;change&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">placeholder</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;请选择数据&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-bind</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-option</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item in list&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item[value]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;label ? item[label] : item[value]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item[value]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">el-select</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, watch } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">props</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  modelValue: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: [String, Number, Array]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  list: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Array,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;label&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;value&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;100%&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">currentValue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> props.modelValue, (</span><span style="color:#FFAB70;">newValue</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  currentValue.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newValue</span></span>
<span class="line"><span style="color:#E1E4E8;">}, { immediate: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">emits</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineEmits</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;update:modelValue&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">change</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">emits</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;update:modelValue&#39;</span><span style="color:#E1E4E8;">, e)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">el-select</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;currentValue&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ width: width }&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;change&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">placeholder</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;请选择数据&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-option</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item in list&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item[value]&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;label ? item[label] : item[value]&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item[value]&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">el-select</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, watch } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">props</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineProps</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  modelValue: {</span></span>
<span class="line"><span style="color:#24292E;">    type: [String, Number, Array]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  list: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Array,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  label: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&#39;label&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  value: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&#39;value&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  width: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&#39;100%&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">currentValue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> props.modelValue, (</span><span style="color:#E36209;">newValue</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  currentValue.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newValue</span></span>
<span class="line"><span style="color:#24292E;">}, { immediate: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">emits</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineEmits</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;update:modelValue&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">change</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">emits</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;update:modelValue&#39;</span><span style="color:#24292E;">, e)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div></div>`,4),O=JSON.parse('{"title":"el-select","description":"","frontmatter":{},"headers":[],"relativePath":"docs/components/element/el-select.md","filePath":"docs/components/element/el-select.md","lastUpdated":1763533147000}'),w={name:"docs/components/element/el-select.md"},U=Object.assign(w,{setup(s){const l=c(""),t=c([{label:"选项1",value:"1"},{label:"选项2",value:"2"}]);return(p,o)=>(e(),i("div",null,[D,r("div",V,[q(A,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),list:t.value,width:"100%"},null,8,["modelValue","list"])]),S]))}});export{O as __pageData,U as default};
