import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as o}from"./assets/vendor-2s9xPmg-.js";const n=document.querySelector(".js-form"),a=document.querySelector(".js-gallery");n.addEventListener("submit",async e=>{e.preventDefault(),a.innerHTML="";const s=new FormData(n).get("search-text");try{const r=await i(s,1);console.log(r),p(r.hits)}catch{console.log("Error")}n.reset()});async function i(e,t){const s="https://pixabay.com/api/",r={key:"53379684-45c44d339c561808b5ad44122",q:e,page:t};return(await o.get(s,{params:r})).data}function c(e){return`<li>
          <img class="gallery-item" src="${e.previewURL}" width="${e.previewWidth}" height="${e.previewHeight}" />
          <div>
              <p>${e.views}</p>
              <p>${e.downloads}</p>
              <p>${e.likes}</p>
              <p>${e.comments}</p>
          </div>
        </li>`}function l(e){return e.map(c).join("")}function p(e){const t=l(e);a.insertAdjacentHTML("afterbegin",t)}
//# sourceMappingURL=gallery.js.map
