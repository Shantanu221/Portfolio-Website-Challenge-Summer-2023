const animation_elts=document.querySelectorAll(".non-anim")

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("anim");
        }
    })
}, {threshold:0.5});

for(let i=0;i<animation_elts.length;i++){
    const el=animation_elts[i];
    observer.observe(el);
}