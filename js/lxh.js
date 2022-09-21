document.addEventListener("DOMContentLoaded",()=>{
    const slider = document.querySelectorAll(".slide");
    const nutBack= document.querySelector(".back");
    const nutNext= document.querySelector(".next");
    const header= document.querySelector(".header");
    
// header 
    window.addEventListener("scroll",()=>{
        if(window.pageYOffset>100){
            header.classList.add("active");
        }
        else{
            header.classList.remove("active");
        }
    });


// end header 


//slide
    // auto slide 
    var auto = setInterval(autocd, 3000);

    // end auto slide 


    slider.forEach((slide,index)=>{
        slide.style.transform = `translateX(${index * 100}%)`;
    });
    var chuyendong = 0;
    var maxslide = slider.length - 1;

    nutBack.addEventListener("click",()=>{
        clearInterval(auto);
        (chuyendong == 0 )?chuyendong=maxslide:chuyendong--;
        slider.forEach((slide,index)=>{
            slide.style.transform = `translateX(${100*(index - chuyendong)}%)`;
        });
    });
    nutNext.addEventListener("click",()=>{
        clearInterval(auto);
        (chuyendong == maxslide )?chuyendong=0:chuyendong++;
        slider.forEach((slide,index)=>{
            slide.style.transform = `translateX(${100*(index - chuyendong)}%)`;
        });
    });
    function autocd(){
        (chuyendong == maxslide )?chuyendong=0:chuyendong++;
        slider.forEach((slide,index)=>{
            slide.style.transform = `translateX(${100*(index - chuyendong)}%)`;
        });
    }

// smooth

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

});