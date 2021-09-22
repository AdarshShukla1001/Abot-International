burger=document.querySelector(".burger");
// line=document.getElementsByClassName("line");
navbar=document.querySelector('.navbar');

navList=document.querySelector('.nav-list');
rightNav=document.querySelector('.rightNav');
// console.log("hello")

burger.addEventListener("click",()=>{
    // console.log("clicked")

    // console.log("clicked");
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})