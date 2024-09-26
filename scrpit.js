
console.log("scrpit is runing")

const hamburger=document.getElementById("hamb");
const navbar_menu=document.getElementById("navbar-menu");

// function for hamburger navbar
hamburger.addEventListener("click", (e)=>{
        if(navbar_menu.style.display=="none"){
            navbar_menu.style.display="block";
        }   
        else{
            navbar_menu.style.display="none";
        }
})


var typed = new Typed('#element', {
    strings: [' front-End Development', 'Web designer', 'Graphic designer', 'wordpress'],
    typeSpeed: 50,
});
