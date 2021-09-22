const navSlide=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav_links');
    const navLinks=document.querySelectorAll('.nav_links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');   
        // console.log("hello");
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation="";
            }
            else{
                link.style.animation=`navLinkFade 1s ease forwards ${index/(7+1)}s`
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();