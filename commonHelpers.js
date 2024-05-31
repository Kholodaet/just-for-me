import{A as l,S as u,i as a,a as f}from"./assets/vendor-1565971e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function p(){new l(".faq-list",{showMultiple:!0})}const d=t=>{a.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1}),a.error({message:t,class:"error-notification",timeout:5e3,titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})},w=async()=>{try{const t=await f.get("https://portfolio-js.b.goit.study/api/reviews");if(t.status!==200)throw new Error(t.status);return t.data}catch(t){throw new Error(`Fetching reviews failed: ${t.message}`)}};new u("#reviews-slider",{autoHeight:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:10},991:{slidesPerView:2,spaceBetween:32}},navigation:{nextEl:".custom-button-next",prevEl:".custom-button-prev"}});const c=document.querySelector(".reviews-wrapper");w().then(t=>{const o=t.map(({author:i,avatar_url:s,review:e})=>`
            <li class="review-card swiper-slide">
                <p class="review-card-text">${e}</p>
                <div class="review-card-author">
                    <img
                        class="review-card-author-avatar"
                        src="${s}"
                        alt="review author photo"
                        width="40"
                        height="40"
                    />
                    <p class="review-card-author-name">${i}</p>
                </div>
            </li>
        `).join("");c.insertAdjacentHTML("afterbegin",o)}).catch(t=>{c.insertAdjacentHTML("afterbegin",'<p class="reviews-error-text">Not found</p>'),d(t.message)});p();
//# sourceMappingURL=commonHelpers.js.map
