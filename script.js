document.addEventListener('scroll', function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
let links;
let contents;
let link = document.querySelectorAll(".link");
let content = document.querySelectorAll(".contents");
function opentab(tabname){
    // link.addEventListener("click")
    for(links of link){
        links.classList.remove("active-link");
    }
    for(contents of content){
        contents.classList.remove("active-tab");
    }
    // console.log(event.currentTarget);
    // console.log(document.getElementById(tabname));
    event.target.classList.add("active-link");
    for(links of link){
        console.log(links);
    }
    // console.log(event.currentTarget);
    document.getElementById(tabname).classList.add("active-tab");

}


  
    document.querySelector(".bars").addEventListener("click",()=>{
    document.querySelector(".nav").style.right ="0";
    })
    document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".nav").style.right ="-200px";
    })
// for(let i=0;i<3;i++){
// document.querySelectorAll(".skills>*")[i].addEventListener("click",opentab);}
// for(let i=0;i<3;i++){
//     for(let j=1;j<3;j++){
//     link[j].addEventListener("click",()=>{
//         link[i].classList.remove("active-link");
//         content[i].classList.remove("active-tab");
//     })
//     // link[i].addEventListener("click",()=>{
//     //     link[i].classList.add("active-link");
//     // })
// }}
