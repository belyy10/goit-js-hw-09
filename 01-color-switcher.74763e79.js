const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let n=null;e.disabled=!1,t.disabled=!0,e.addEventListener("click",(function(a){a.preventDefault(),n=setInterval((function(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),2e3),t.disabled=!1,e.disabled=!0})),t.addEventListener("click",(function(t){t.preventDefault(),clearInterval(n),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.74763e79.js.map