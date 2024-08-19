function o(c){return document.getElementById(c)}function L(c){const i=document.createElement("template");return i.innerHTML=c,i.content.firstElementChild}function k(c,i,E){if(o("toast-container")===null)document.body.append(L(`
            <x-flex id="toast-container" class="v" style="position: absolute; top: 1rem; right: 1rem;"></x-flex>
        `));const g="_"+Math.random().toString(36).substring(2,9);o("toast-container").append(L(`
        <x-toast id="toast-${g}" class="${E}">${c}</x-toast>
    `)),setTimeout(()=>{if(o(`toast-${g}`).remove(),document.getElementsByTagName("x-toast").length===0)o("toast-container").remove()},i)}function v(c){if(o("loading-animation-container")===null)document.body.append(L(`
            <div id="loading-animation-container">
                <x-loader></x-loader>
                <x-overlay></x-overlay>
            </div>
        `));if(c!==void 0)setTimeout(()=>{o("loading-animation-container").remove()},c)}function f(){o("toggle-content-side-panel").addEventListener("click",()=>o("content-side-panel").classList.toggle("show")),o("toast-btn").addEventListener("click",()=>k("toast",3000)),o("loading-btn").addEventListener("click",()=>v(1500))}export{f as default};
