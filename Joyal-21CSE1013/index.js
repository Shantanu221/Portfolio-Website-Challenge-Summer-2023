const animation_elts=document.querySelectorAll(".non-anim")

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("anim");
        }
    })
}, {threshold:0.4});

for(let i=0;i<animation_elts.length;i++){
    const el=animation_elts[i];
    observer.observe(el);
}

const animation_elts_up=document.querySelectorAll(".non-anim-up")

const observer_2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("anim-up");
        }
    })
}, {threshold:0.25});

for(let i=0;i<animation_elts_up.length;i++){
    const el=animation_elts_up[i];
    observer_2.observe(el);
}