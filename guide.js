"use strict";
(function(){
  const input=document.getElementById("manual-search");
  const items=[...document.querySelectorAll(".manual-item")];
  const status=document.getElementById("search-count");
  const empty=document.getElementById("empty-results");
  const normalize=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("es").trim();
  function filter(){
    const q=normalize(input.value);
    let visible=0;
    for(const item of items){
      const haystack=normalize(item.textContent+" "+(item.dataset.search||""));
      const show=!q||q.split(/\s+/).every(word=>haystack.includes(word));
      item.hidden=!show;
      if(show)visible++;
      if(q&&show)item.open=true;
      if(!q)item.open=false;
    }
    status.textContent=visible+(visible===1?" módulo disponible":" módulos disponibles");
    empty.hidden=visible!==0;
  }
  input.addEventListener("input",filter);
  const image=document.getElementById("platform-shot");
  image.addEventListener("error",()=>{image.hidden=true;document.getElementById("shot-fallback").hidden=false});
  function openTarget(){
    let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}
    for(const link of document.querySelectorAll(".side-nav a")){const active=link.getAttribute("href")==="#"+id;link.classList.toggle("active",active);if(active)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current")}
    const el=id?document.getElementById(id):null;
    if(el?.classList.contains("manual-item")){
      input.value="";
      for(const item of items)item.hidden=false;
      empty.hidden=true;
      status.textContent=items.length+" módulos disponibles";
      el.open=true;
      requestAnimationFrame(()=>el.scrollIntoView({block:"start"}));
    }
  }
  window.addEventListener("hashchange",openTarget);
  openTarget();
})();
