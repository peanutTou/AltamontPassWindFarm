const hero = document.getElementById("hero");
const hint = document.getElementById("scroll_down");
const maxHeight = window.innerHeight;


window.addEventListener("scroll", ()=>{

    const scrollY = window.scrollY;
    let alpha = 1 - scrollY / (maxHeight / 3);
    let scale = (maxHeight - scrollY) / maxHeight * 100;

    if(alpha < 0){
        alpha = 0;
    }
    hint.style.opacity = alpha;

    if(scale < 20){
        scale = 20;
    }
    hero.style.height = Math.round(scale) + "vh";
});