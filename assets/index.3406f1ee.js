var t=Object.assign;import{o,c as a,a as e,w as n,v as s,t as d,b as r,d as i,p as c,e as l,r as h,f as m,g as p,h as w,i as g,j as u,F as f,k as v,l as b,m as y,G as k,n as z,u as L,q as T,s as x}from"./vendor.0aa887dc.js";!function(t=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(a){const e=new URL(t,location),n=t=>{URL.revokeObjectURL(t.src),t.remove()};self[o]=t=>new Promise(((a,s)=>{const d=new URL(t,e);if(self[o].moduleMap[d])return a(self[o].moduleMap[d]);const r=new Blob([`import * as m from '${d}';`,`${o}.moduleMap['${d}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){s(new Error(`Failed to import: ${t}`)),n(i)},onload(){a(self[o].moduleMap[d]),n(i)}});document.head.appendChild(i)})),self[o].moduleMap={}}}("assets/");const j={name:"VueToggles",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},checkedText:{type:String,default:null},uncheckedText:{type:String,default:null},width:{type:[Number,String],default:75},height:{type:[Number,String],default:25},uncheckedBg:{type:String,default:"#939393"},checkedBg:{type:String,default:"#5850ec"},dotColor:{type:String,default:"#fff"},dotClass:{type:String,default:""},fontSize:{type:[Number,String],default:"12"},checkedColor:{type:String,default:"#fff"},uncheckedColor:{type:String,default:"#fff"},fontWeight:{type:[Number,String],default:"normal"},unit:{type:String,default:"px"}},emits:["click"],computed:{bgStyle(){return{width:this.width+this.unit,height:this.height+this.unit,background:this.value&&!this.disabled?this.checkedBg:this.uncheckedBg}},dotStyle(){const t={background:this.dotColor,width:this.height-8+this.unit,height:this.height-8+this.unit,"min-width":this.height-8+this.unit,"min-height":this.height-8+this.unit,"margin-left":this.value?this.width-(this.height-3)+this.unit:"5px"};return(!this.value&&this.reverse||this.value&&!this.reverse)&&(t.marginLeft=this.width-(this.height-3)+this.unit),(this.value&&this.reverse||!this.value&&!this.reverse)&&(t.marginLeft="5px"),t},textStyle(){const t={"font-weight":this.fontWeight,"font-size":this.fontSize+this.unit,color:this.value&&!this.disabled?this.checkedColor:this.uncheckedColor,right:this.value?this.height-3+this.unit:"auto",left:this.value?"auto":this.height-3+this.unit};return!this.value&&this.reverse&&(t.right=this.height-3+this.unit,t.left="auto"),this.value&&this.reverse&&(t.left=this.height-3+this.unit,t.right="auto"),t}}};j.render=function(t,c,l,h,m,p){return o(),a("span",{class:"vue-toggles",style:p.bgStyle,role:"switch",tabindex:"0","aria-checked":l.value?"true":"false","aria-readonly":l.disabled?"true":"false",onClick:c[1]||(c[1]=o=>l.disabled?null:t.$emit("click",l.value)),onKeyup:[c[2]||(c[2]=r(i((o=>l.disabled?null:t.$emit("click",l.value)),["prevent"]),["enter"])),c[3]||(c[3]=r(i((o=>l.disabled?null:t.$emit("click",l.value)),["prevent"]),["space"]))]},[e("span",{"aria-hidden":"true",style:p.dotStyle,class:["dot",l.dotClass]},[n(e("span",{style:p.textStyle,class:"text"},d(l.checkedText),5),[[s,l.checkedText&&l.value]]),n(e("span",{style:p.textStyle,class:"text"},d(l.uncheckedText),5),[[s,l.uncheckedText&&!l.value]])],6)],44,["aria-checked","aria-readonly"])};const C={},A=m("data-v-0f8d055a");c("data-v-0f8d055a");const _={class:"social"};l();const S=A(((t,e)=>(o(),a("div",_,[h(t.$slots,"default")]))));C.render=S,C.__scopeId="data-v-0f8d055a";const I={},R=m("data-v-1df0a795");c("data-v-1df0a795");const B={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",style:{width:"32rem"}},G=e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"},null,-1);l();const H=R(((t,e)=>(o(),a("svg",B,[G]))));I.render=H,I.__scopeId="data-v-1df0a795";const M=m("data-v-319fbe85");c("data-v-319fbe85");const J={class:"nav"},$={class:"github-anchor",href:"https://github.com/JonathanDn/vue-companies-israel"};l();const O={expose:[],setup(t){const n=p(!0);return M(((t,s)=>(o(),a("nav",J,[e(j,{disabled:"",unit:"rem",width:"50",height:"25",fontSize:"14",checkedText:"🌜",uncheckedText:"🌞",dotClass:"toggle-dot",dotColor:"currentColor",checkedBg:"var(--color-secondary2)",uncheckedBg:"var(--color-secondary2)",value:n.value,onClick:s[1]||(s[1]=t=>n.value=!n.value)},null,8,["value"]),e(C,null,{default:M((()=>[e("a",$,[e(I)])])),_:1})]))))}};function q(o){const a=[];return Array.from(o.rows).reduce(((e,n)=>{const s=[];return Array.from(n.children).forEach(((d,r)=>{"th"===d.tagName.toLowerCase()?(e.thead.push(d),r===V(o).length-1&&a.push(...function(t){return V(t).map((t=>t.innerText))}(o))):0===o.tHead.rows.length?e.tbody.push(d):(s.push(d),s.length===n.children.length&&(e.tbody.push(function(o,a){return o.reduce(((o,e,n)=>t(t({},o),{[e]:a[n]})),{})}(a,s)),s.length=0))})),e}),{thead:[],tbody:[]})}function V(t){return Array.from(t.tHead.rows[0].children)}O.__scopeId="data-v-319fbe85";const N={setup(t,o){const a=p(null),e=w({thead:[],tbody:[],ascending:!1,sortColumn:null}),n=(t,{ascending:o=!0}={})=>{e.sortColumn===t?e.ascending=!e.ascending:(e.ascending=o,e.sortColumn=t),e.tbody.sort(((o,a)=>o[t].innerText>a[t].innerText?e.ascending?1:-1:o[t].innerText<a[t].innerText?e.ascending?-1:1:0))};g((()=>{const t=document.createElement("template");t.innerHTML='<div align="center">\n    <div>logo design by <a href="https://twitter.com/adircode">@adircode</a></div>\n    <img width="320px" src="logo.png" alt="Products of Israel" title="Products of Israel">\n    <h3>✨ A curated list of companies who hire Israelis - that work with <a href="https://vuejs.org/">Vue.js</a> ✨</h3>\n    <br>\n<h4>Let developers know you have open Vue positions by adding <code>✓</code> to the <code>Recruiting</code> column.</h4>\n<p>(Table does NOT contain freelancers, consultancies, software contractors or open source projects).</p>\n<table>\n<thead>\n<tr>\n<th>Company</th>\n<th>Recruiting</th>\n<th>Location</th>\n<th>Contact</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=start.agritask.com" alt="Logo"> <a href="https://start.agritask.com/">Agritask</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/amit-82">@amit</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.animaapp.com" alt="Logo"> <a href="https://www.animaapp.com/">Anima</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/orarbel">@orarbel</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.aquasec.com" alt="Logo"> <a href="https://aquasec.com/about-us/careers">Aqua</a></td>\n<td>✓</td>\n<td>Ramat Gan</td>\n<td><a href="https://github.com/eranshmil">@eranshmil</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.axonius.com" alt="Logo"> <a href="https://www.axonius.com/">Axonius</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/galgertz">@galgertz</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.bluevine.com" alt="Logo"> <a href="https://www.bluevine.com/">BlueVine</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/yuvalraz">@yuval-raz-ibex</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=brainpop.com" alt="Logo"> <a href="https://brainpop.com">BrainPoP</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=breezometer.com" alt="Logo"> <a href="https://breezometer.com">BreezoMeter</a></td>\n<td></td>\n<td>Haifa</td>\n<td><a href="https://twitter.com/@ofeka_dev">@ofeka_dev</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=cnvrg.io" alt="Logo"> <a href="https://cnvrg.io">cnvrg.io</a></td>\n<td></td>\n<td>Jerusalem</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.withconfetti.com" alt="Logo"> <a href="https://www.withconfetti.com/">Confetti</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=constru.ai" alt="Logo"> <a href="https://constru.ai/">Constru.ai</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/silicakes">@silicakes</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.coolcousin.com" alt="Logo"> <a href="https://www.coolcousin.com">Cool Cousin</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.cynerio.com" alt="Logo"> <a href="https://www.cynerio.com">Cynerio</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/db_doskey">@db_doskey</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=daily.dev" alt="Logo"> <a href="https://daily.dev">daily.dev</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/idoshamun">@idoshamun</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=databand.ai" alt="Logo"> <a href="https://databand.ai">Databand.ai</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://www.linkedin.com/in/niv-sluzki/">@niv.sluzki</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.elbitsystems.com" alt="Logo"> <a href="https://elbitsystems.com/">Elbit Systems</a></td>\n<td>✓</td>\n<td>Netanya</td>\n<td><a href="https://github.com/nsxr51">@nsxr51</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.earnix.com" alt="Logo"> <a href="https://earnix.com/">Earnix</a></td>\n<td>✓</td>\n<td>Givatayim</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=finaloop.com" alt="Logo"> <a href="https://finaloop.com">Finaloop</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/eranshmil">@eranshmil</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=fundbox.com" alt="Logo"> <a href="https://fundbox.com">Fundbox</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/forforeach">@forforeach</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.gaviti.com" alt="Logo"> <a href="https://www.gaviti.com">Gaviti</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://www.linkedin.com/in/alexkomarovsky/">@akomarovsky</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.geteat.co.il" alt="Logo"> <a href="https://geteat.co.il">Geteat</a></td>\n<td></td>\n<td>Omer</td>\n<td><a href="https://github.com/avrahamba">@avrahamba</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.greeninvoice.co.il" alt="Logo"> <a href="https://www.greeninvoice.co.il/">GreenInvoice</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.growerstech.com" alt="Logo"> <a href="https://www.growerstech.com">GrowersTech</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/eladh">@eladh</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=ibex-ai.com" alt="Logo"> <a href="https://ibex-ai.com/">Ibex Medical Analytics</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/yuvalraz">@yuval-raz-ibex</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.igentify.com" alt="Logo"> <a href="https://www.igentify.com">Igentify</a></td>\n<td>✓</td>\n<td>Caesarea</td>\n<td><a href="https://github.com/talitman">@talitman</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.jacada.com/positions-in-israel" alt="Logo"> <a href="https://www.jacada.com/positions-in-israel">Jacada</a></td>\n<td></td>\n<td>Herzliya</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=bandpad.co" alt="Logo"> <a href="https://bandpad.co">Kehila-Menagenet</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://www.linkedin.com/in/amit-gur-65810146/">@amitgur</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=liquidity-capital.com" alt="Logo"> <a href="https://www.liquidity.inc/">Liquidity</a></td>\n<td>✓</td>\n<td>Ramat Gan</td>\n<td><a href="https://github.com/maorbarel">@maorbarel</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=loox.app" alt="Logo"> <a href="https://jobs.loox.io/">Loox</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/eranshmil">@eranshmil</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.mintigo.com" alt="Logo"> <a href="https://www.mintigo.com">Mintigo</a></td>\n<td></td>\n<td>Kfar Saba</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=namogoo.com" alt="Logo"> <a href="https://namogoo.com/careers">Namogoo</a></td>\n<td>✓</td>\n<td>Herzliya</td>\n<td><a href="https://github.com/eranshmil">@eranshmil</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=nonamesecurity.com" alt="Logo"> <a href="https://nonamesecurity.com">Noname Security</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="mailto:netanelm@nonamesecurity.com?subject=I%20Love%20Vue">@netanel</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.outbrain.com" alt="Logo"> <a href="https://www.outbrain.com">Outbrain</a></td>\n<td></td>\n<td>Netanya</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.oz-code.com" alt="Logo"> <a href="https://oz-code.com">Ozcode</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/OmerRaviv">@OmerRaviv</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=pendo.io" alt="Logo"> <a href="https://pendo.io">Pendo</a></td>\n<td>✓</td>\n<td>Herzliya</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.pic-time.com" alt="Logo"> <a href="https://www.pic-time.com">Pic-Time</a></td>\n<td></td>\n<td>From Home</td>\n<td><a href="https://github.com/ShoobyD">@shoobyd</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=app.powerdoc.co" alt="Logo"> <a href="https://powerdoc.co.il">powerdoc</a></td>\n<td></td>\n<td>Ra\'anana</td>\n<td><a href="https://www.linkedin.com/in/israel-zhout-80291071/">@israelz</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=resonai.com" alt="Logo"> <a href="https://resonai.com">Resonai</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/bergden-resonai">@bergden-resonai</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.riseup.co.il" alt="Logo"> <a href="https://www.riseup.co.il/">Riseup</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/mayaschuster">@mayaschuster</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=run.ai" alt="Logo"> <a href="https://run.ai">Run.ai</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/davidmeirlevy">@davidmeirlevy</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=segmanta.com" alt="Logo"> <a href="https://segmanta.com">Segmanta</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.squadded.co" alt="Logo"> <a href="https://www.squadded.co">Squadded</a></td>\n<td>✓</td>\n<td>Ra\'anana</td>\n<td><a href="https://twitter.com/cyrilcs">@cyrilcs</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=snyk.io" alt="Logo"> <a href="http://snyk.io">Snyk</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=swimm.io" alt="Logo"> <a href="https://swimm.io/">Swimm</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=tipalti.com" alt="Logo"> <a href="https://tipalti.com">Tipalti</a></td>\n<td></td>\n<td>Herzliya</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=toonimo.com" alt="Logo"> <a href="https://toonimo.com">Toonimo</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/eranshmil">@eranshmil</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.travelor.com" alt="Logo"> <a href="https://www.travelor.com">Travelor</a></td>\n<td>✓</td>\n<td>Petah Tikva</td>\n<td><a href="https://github.com/yakidahan">@yakidahan</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.trexgroup.com" alt="Logo"> <a href="https://www.trexgroup.com/">T-Rex</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/lalele/">@lalele</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.vonagetlv.com" alt="Logo"> <a href="https://www.vonagetlv.com">Vonage</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/yonatankra">@YonatanKra</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.sentinelone.com" alt="Logo"> <a href="https://www.sentinelone.com/">SentinelOne</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.sparkbeyond.com" alt="Logo"> <a href="https://www.sparkbeyond.com/">SparkBeyond</a></td>\n<td>✓</td>\n<td>Netanya</td>\n<td><a href="https://github.com/annab1">@annab1</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.storemaven.com" alt="Logo"> <a href="https://www.storemaven.com/">Storemaven</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/roybarash">@roybarash</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.wisestamp.com" alt="Logo"> <a href="https://www.wisestamp.com">WiseStamp</a></td>\n<td></td>\n<td>Tel Aviv</td>\n<td><a href="https://twitter.com/jodoron">@jodoron</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.wochit.com" alt="Logo"> <a href="https://wochit.com">Wochit</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/shmatul">@shmatul</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.yad2.co.il" alt="Logo"> <a href="https://www.yad2.co.il/">Yad2</a></td>\n<td>✓</td>\n<td>Bnei Brak</td>\n<td><a href="https://github.com/RonnyO">@RonnyO</a></td>\n</tr>\n<tr>\n<td><img src="https://www.google.com/s2/favicons?sz=16&amp;domain=www.yotpo.com" alt="Logo"> <a href="https://www.yotpo.com">Yotpo</a></td>\n<td>✓</td>\n<td>Tel Aviv</td>\n<td><a href="https://github.com/nimrodev">@nimrodev</a></td>\n</tr>\n</tbody>\n</table>\n<h3>👨‍💻 Follow me on <a href="https://twitter.com/jodoron">Twitter</a></h3>\n<p>If you found this project helpful, <a href="https://paypal.me/AdiSahar?locale.x=en_US">buy</a> me a cup of coffee. ☕</p>\n</div>\n',window.requestAnimationFrame((()=>{const a=t.content.querySelector("table"),{thead:s,tbody:d}=q(a);var r,i;e.thead=s,e.tbody=d,r=1,i={ascending:!1},n(e.thead[r].innerText,i),o.emit("ready",{length:e.tbody.length})}))}));const s=u((()=>({width:100/e.thead.length+"%"})));return{root:a,state:e,getRef:()=>a.value,sortTable:n,tdStyle:s}}},D=m("data-v-3c96cf6d");c("data-v-3c96cf6d");const F={ref:"root",class:"table"},P={class:"scroll-container"},E={key:0};l();const U=D(((t,n,s,r,i,c)=>(o(),a("div",F,[e("div",P,[e("table",null,[e("thead",null,[e("tr",null,[(o(!0),a(f,null,v(r.state.thead,((t,e)=>(o(),a("th",{key:e,style:r.tdStyle,onClick:o=>r.sortTable(t.innerText)},[b(d(t.innerHTML)+" ",1),t.innerText===r.state.sortColumn?(o(),a("span",E,d(r.state.ascending?"↑":"↓"),1)):y("",!0)],12,["onClick"])))),128))])]),e("tbody",null,[(o(!0),a(f,null,v(r.state.tbody,((t,e)=>(o(),a("tr",{key:e},[(o(!0),a(f,null,v(t,((t,e)=>(o(),a("td",{innerHTML:t.innerHTML,style:r.tdStyle,key:e},null,12,["innerHTML"])))),128))])))),128))])])])],512))));N.render=U,N.__scopeId="data-v-3c96cf6d";const W=m("data-v-04189e2a");c("data-v-04189e2a");const K={class:"button"},Y={class:"icon"};l();const Z={expose:[],props:{icon:String},setup:t=>W(((n,s)=>(o(),a("button",K,[e("span",Y,d(t.icon),1),h(n.$slots,"default")])))),__scopeId:"data-v-04189e2a"};const Q={},X=m("data-v-0bfd2249");c("data-v-0bfd2249");const tt={href:"#/",class:"animate__animated animate__fadeInDown"},ot=e("svg",{class:"logo",version:"1.1",viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg"},[e("defs",null,[e("linearGradient",{id:"Gradient1",x1:"0",x2:"0",y1:"0",y2:"1"},[e("stop",{offset:"0%","stop-color":"#2d805b"}),e("stop",{offset:"80%","stop-color":"#ffffff"})]),e("linearGradient",{id:"Gradient2",x1:"0",x2:"0",y1:"0",y2:"1"},[e("stop",{offset:"0%","stop-color":"#ffffff"}),e("stop",{offset:"120%","stop-color":"#2d805b"})])]),e("g",{transform:"matrix(1.3333 0 0 -1.3333 -76.311 313.34)"},[e("g",{transform:"translate(178.06 235.01)"},[e("path",{fill:"url(#Gradient1)",d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"})]),e("g",{transform:"translate(178.06 235.01)"},[e("path",{fill:"url(#Gradient2)",d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"})])])],-1);l();const at=X(((t,e)=>(o(),a("a",tt,[ot]))));Q.render=at,Q.__scopeId="data-v-0bfd2249";const et=m("data-v-f597c568"),nt={expose:[],props:{content:Boolean},setup:t=>et(((e,n)=>(o(),a("div",{class:["container",{"has-content":t.content}]},[h(e.$slots,"default")],2)))),__scopeId:"data-v-f597c568"};const st={setup:(t,o)=>({style:u((()=>({"grid-template-columns":`repeat(${o.slots.default().length}, minmax(0, 1fr))`})))})},dt=m("data-v-7f83ba76")(((t,e,n,s,d,r)=>(o(),a("div",{class:"button-group",style:s.style},[h(t.$slots,"default")],4))));st.render=dt,st.__scopeId="data-v-7f83ba76";const rt=m("data-v-770a8aa6");c("data-v-770a8aa6");const it={class:"header animate__animated animate__fadeIn"},ct=e("div",{class:"stars"},null,-1),lt=e("a",{href:"https://vuejs.org/"},"Vue.js",-1),ht=b("Get Started"),mt={href:"https://github.com/JonathanDn/vue-companies-israel/pulls"},pt=b("Add Company");l();const wt={expose:[],setup:t=>rt(((t,n)=>(o(),a("header",it,[ct,e(nt,{class:"container"},{default:rt((()=>[e(Q),e("h1",null,[b(" A curated list of "+d(t.$attrs.companies)+" companies who hire Israelis - that work with ",1),lt]),e(st,null,{default:rt((()=>[e(Z,{icon:"🙋🏻‍♀️",onClick:n[1]||(n[1]=o=>t.$emit("get-started"))},{default:rt((()=>[ht])),_:1}),e("a",mt,[e(Z,{icon:"👨🏻‍🌾"},{default:rt((()=>[pt])),_:1})])])),_:1})])),_:1})])))),__scopeId:"data-v-770a8aa6"};const gt={props:{packageJson:{type:Object,required:!0}},components:{GitHubButton:k}},ut=m("data-v-87cbca02");c("data-v-87cbca02");const ft=b("Star ");l();const vt=ut(((t,e,n,s,d,r)=>{var i;const c=z("GitHubButton");return o(),a(c,{class:"github-stars","data-show-count":"true","data-icon":"octicon-star",href:null==(i=n.packageJson.repository)?void 0:i.url,"aria-label":`Star ${n.packageJson.author}/${n.packageJson.name} on GitHub`},{default:ut((()=>[ft])),_:1},8,["href","aria-label"])}));gt.render=vt,gt.__scopeId="data-v-87cbca02";var bt={name:"vite-project",version:"0.0.0",license:"MIT",repository:{url:"https://github.com/JonathanDn/vue-companies-israel"},scripts:{dev:"vite",build:"vite build",serve:"vite preview",prerelease2:"yarn && yarn version --patch --no-git-tag-version && yarn build",prerelease:"yarn build",release:"node ./scripts/gh-pages",postrelease2:"node ./scripts/post-release"},dependencies:{"animate.css":"^4.1.1","prism-themes":"^1.5.0",prismjs:"^1.23.0",vue:"^3.0.5","vue-github-button":"^3.0.0","vue-toggles":"^1.1.0"},devDependencies:{"@vitejs/plugin-vue":"^1.1.4","@vue/compiler-sfc":"^3.0.5","gh-pages":"^3.1.0",sass:"^1.32.8",vite:"^2.0.1","vite-plugin-markdown":"^2.0.0"}};const yt=m("data-v-1265bea7");c("data-v-1265bea7");const kt={class:"footer"},zt=e("div",null,[b(" Made with 💜 by "),e("a",{href:"https://www.facebook.com/groups/1062801280495598"},"Vue.js Israel")],-1),Lt=e("li",null,[e("a",{href:"https://github.com/JonathanDn"},"About")],-1),Tt=e("li",null,[e("a",{href:"https://github.com/JonathanDn/vue-companies-israel/graphs/contributors"},"Contributors")],-1),xt=e("li",null,[e("a",{href:"https://github.com/JonathanDn/vue-companies-israel"},"GitHub")],-1),jt={class:"version"};l();const Ct={expose:[],setup:t=>yt(((t,n)=>(o(),a("footer",kt,[e(nt,{class:"container"},{default:yt((()=>[zt,e("ul",null,[Lt,Tt,xt,e("li",null,[e(gt,{packageJson:L(bt)},null,8,["packageJson"])])]),e("small",jt,d(L(bt).version),1)])),_:1})])))),__scopeId:"data-v-1265bea7"};const At=e("h3",null,"What is Vue.js?",-1),_t=e("p",null,[e("a",{href:"https://vuejs.org/"},"Vue.js"),b(" is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. "),e("a",{href:"https://en.wikipedia.org/wiki/Vue.js"},"Wikipedia")],-1),St=e("p",null,[e("small",{class:"opacity-50"},[b(" * Table does NOT contain freelancers, consultancies, software contractors or open source projects working with "),e("a",{href:"https://vuejs.org/"},"Vue.js"),b(". ")])],-1),It=e("h3",null,"Contributing",-1),Rt=e("p",null,[b(" If your company is currently working with "),e("a",{href:"https://vuejs.org/"},"Vue.js"),b(", open a "),e("a",{href:"https://github.com/JonathanDn/vue-companies-israel/pulls"},"pull request"),b(" to add it to the table above. If it's also currently recruiting, make sure to check the "),e("b",null,"Recruiting"),b(" column. ")],-1);x({expose:[],setup(t){const n=p(null),s=p(null),d=()=>{const t=n.value.getRef();t&&t.scrollIntoView({behavior:"smooth"})},r=({length:t})=>s.value=t;return(t,i)=>(o(),a(f,null,[e(O),e(wt,{companies:s.value,onGetStarted:d},null,8,["companies"]),e(nt,{content:""},{default:T((()=>[At,_t])),_:1}),e(nt,{content:""},{default:T((()=>[e(N,{ref:n,onReady:r},null,512),St])),_:1}),e(nt,{content:""},{default:T((()=>[It,Rt])),_:1}),e(Ct)],64))}}).mount("#app");
