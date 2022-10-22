import{_ as n,K as a,j as t,k as o,O as s,L as i,a5 as c}from"./app.cb1ee82f.js";import"./vendor.4f797638.js";const l={},p=c(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Behaviour <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyScript</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>

    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(d,u){const e=a("sample");return t(),o("div",null,[s(" this doesnt until this is fixed: https://github.com/vuepress/vuepress-next/issues/1140 "),s(` :::: code-group
::: code-group-item ts
\`\`\`ts
export class MyScript extends Behaviour {
    @serializable()
    myField : string;    
}
\`\`\`
:::
::: code-group-item csharp
\`\`\`csharp
public class MyScript : MonoBehaviour {
    public string myField;
}
\`\`\`
:::
:::: `),i(e,{src:"https://cdn.needle.tools/needle-engine/samples/screensharing"}),p])}const k=n(l,[["render",r],["__file","test.html.vue"]]);export{k as default};
