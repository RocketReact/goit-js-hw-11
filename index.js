import{a as u,S as f,i}from"./assets/vendor-DRgUjrIE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();function p(e){const o=`https://pixabay.com/api/?${new URLSearchParams({key:"51145498-f51992c20e23a6f6f425bd97f",q:e,image_type:"photo",orientation:"horizontal",max_width:320,max_height:200,safesearch:"true",per_page:9})}`;return u.get(o).then(n=>n.data.hits).catch(n=>(console.error("Ошибка",n),[]))}const d=new f(".gallery a",{caption:!0,captionDelay:250}),m=document.querySelector(".gallery");function y(e){let t="";e.forEach(o=>{t+=`<li> 
      <a href= ${o.largeImageURL} class="large-img">
       <img src=${o.webformatURL} class="small-img" alt="${o.tags}">
       </a>
       <div class="under-image-info">
       <p> <span> Likes </span> <br> ${o.likes} </p>
       <p> <span> Views </span> <br> ${o.views} </p>
       <p> <span> Comments </span> <br> ${o.comments} </p>
       <p> <span> Downloads </span> <br> ${o.downloads} </p>
       </div>

    </li> `}),m.insertAdjacentHTML("beforeend",t),d.refresh()}function g(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function h(){const e=document.querySelector(".loader");e&&(e.style.display="block")}function b(){const e=document.querySelector(".loader");e&&(e.style.display="none")}const c=document.querySelector("#form");let l="";c.addEventListener("submit",async function(e){e.preventDefault(),l=c.elements["search-text"].value,g();const t=await w();y(t)});async function w(){const e={position:"topRight",timeout:4e3,close:!0,progressBar:!0,icon:"fas fa-check",closeOnClick:!1,pauseOnHover:!0};try{h();const t=await p(l);return t.length===0?(i.warning({message:"Sorry, there are no images matching <br> your search query. Please try again!",color:"red",...e}),[]):t}catch(t){return i.error({message:`Oops, something went wrong! ${t}`,color:"red",...e}),[]}finally{b()}}
//# sourceMappingURL=index.js.map
