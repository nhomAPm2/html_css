document.addEventListener("DOMContentLoaded",function(){
    var intro = document.querySelector(".intro");
    setTimeout(function(){
       intro.classList.add("hide_intro");
    }, 6200);

    var avt = document.getElementsByClassName("k1");
    var tria = document.getElementsByClassName("fa-solid");
    for (let i = 0; i < avt.length; i++) {
        avt[i].addEventListener("mouseover",function(){
            tria[i].classList.add("active");
        });
        avt[i].addEventListener("mouseout",function(){
            tria[i].classList.remove("active");
        });

    } ;      
   

    


});