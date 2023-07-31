var type = new Typed(".descrip", {
    strings: ["Coder","Skater","Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
}); 

window.addEventListener("scroll", () =>{

    var reveals = document.querySelectorAll('.reveal');
    
    for(var i=0;i < reveals.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }

    }
})