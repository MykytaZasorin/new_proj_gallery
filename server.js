import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as r}from"./assets/vendor-2s9xPmg-.js";function c(t){return`<li class="list-item">
          <p>${t.brand}</p>
          <p>${t.model}</p>
          <p>${t.year}</p>
          <p>${t.price}</p>
        </li>`}function p(t){return t.map(c).join("")}const i=document.querySelector(".server-list");async function l(){const n="http://localhost:3000"+"/cars";return(await r.get(n)).data}document.addEventListener("DOMContentLoaded",async t=>{t.preventDefault();const e=await l(),n=p(e);i.innerHTML=n});async function d(t){const a="http://localhost:3000"+"/cars";return(await r.post(a,t)).data}const o=document.querySelector(".js-form-create");o.addEventListener("submit",async t=>{t.preventDefault();const e=new FormData(o),n={brand:e.get("post-brand"),model:e.get("post-model"),year:e.get("post-year"),price:e.get("post-price")},a=await d(n),s=c(a);i.insertAdjacentHTML("afterbegin",s)});
//# sourceMappingURL=server.js.map
