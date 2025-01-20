

//onMobileScreenSize
window.addEventListener("DOMContentLoaded", function () {
    function crossAndHamburger() {
        let nav = document.querySelector("nav");
        let cross = document.getElementById("cross");
        let btn = document.querySelector("#btn");


        if (cross) {

            cross.addEventListener("click", function () {
                nav.classList.add("disp2");

            })
        }
        // nav.style.visibility = "visible"



        if (btn) {

            let ct = 0;

            btn.addEventListener("click", function () {
                if (ct == 0) {
                    nav.classList.add("disp")
                    ct = 1;
                }
                else {
                    // nav.classList.add("navAnimate")

                    nav.classList.remove("disp")
                    nav.classList.remove("disp2");
                    ct = 0;
                }
            })

        }
    }
    crossAndHamburger();
})

//Typing Effect (Not in Use)
function typingEffect() {
    let profession = document.querySelector("#profession");

    let works = ["Web-Development", "Web Designing", "C-Programming", "Git and GitHub"];


    let i = 0;
    let ch = 0;

    setInterval(function () {

        profession.innerHTML = `${works[i].slice(0, ch)}|`;
        if (ch == (works[i].length + 1)) {
            ch = 0;
            i++;
            if (i == works.length) {
                i = 0;
            }
        }
        ch++;

    }, 200)
}

function navbarShowOnScrollUp()
{
let navy = document.querySelector("#navbar")
let scrollBack = 0;
window.addEventListener("scroll", function (dets) {

    let scrollCurrent = this.scrollY;
    if (scrollCurrent > scrollBack) {
        navy.style.display = "none"


    }
    else {
    
        navy.style.display = "flex";
        navy.style.backgroundColor = " rgb(31, 28, 28)";
    }
    // rgb(107, 106, 106)

    scrollBack = scrollCurrent;

})

}

function circularloader(){
let loader = document.querySelector(".loader");


window.addEventListener("DOMContentLoaded", function () {
    loader.classList.add("not-show")
    
})
}



// client's work showcase
function workShowCase(){

    const worksList = document.querySelectorAll(".worksList");
    let works = document.querySelector("#works");
    // By default it should be scrolled
    // works.scrollLeft = 100;
   
    let slideArrow1 = document.querySelector("#slideArrow1");
    let slideArrow2 = document.querySelector("#slideArrow2");

    // slideArrow2.style.display = "none"
   slideArrow1.addEventListener("click",function(){
    works.scrollBy({left : 200,behavior:"smooth"});
    // slideArrow2.style.display = "block"
   })
   slideArrow2.addEventListener("click",function(){
    works.scrollBy({left : -200,behavior:"smooth"});
   })
    // works.addEventListener("wheel",function(event){
    //     event.preventDefault();
    //     this.scrollLeft += event.deltaY;
    // })

let slider = document.querySelectorAll("#slider");

let click = document.querySelectorAll(".click")
let img1 = [
    { name: "PLFarm1", src: "./img/work_Section_Images/musicNightShow.jpeg" }
]
let img2 = [{ name: "PLFarm1", src: "./img/kg (1).png" },
{ name: "PLFarm1", src: "./img/work_Section_Images/kg (2).png" },
{ name: "PLFarm1", src: "./img/work_Section_Images/kg (3).png" }
]
let img3 = [{ name: "PLFarm1", src: "./img/cd (1).png" },
{ name: "PLFarm1", src: "./img/work_Section_Images/cd (2).png" },
{ name: "PLFarm1", src: "./img/work_Section_Images/cd (3).png" },
{ name: "PLFarm1", src: "./img/work_Section_Images/cd (4).png" },
{ name: "PLFarm1", src: "./img/work_Section_Images/cd (5).png" },
{ name: "PLFarm1", src: "./img/work_Section_Images/cd (6).png" }
]

function clientWebsite( limiter,k,imgNo) {

    for (let i = 0; i < limiter; i++) {
        // console.log("hello")
        let div = document.createElement("div");
        div.setAttribute("id", `${i}`)
        click[k].appendChild(div)
        div.classList.add("changer")
        // div.innerText = `${i}`
// let circle = document.querySelectorAll("div");
        function change() {
            div.addEventListener("click", function () {
                let cr = this.getAttribute("id");
                // this.classList.toggle("red");
                slider[k].innerHTML = ` <a href="${imgNo[cr].src}" target="_blank"><img class="imgage" src="${imgNo[cr].src}" alt=""></a>`
                let img = document.querySelector(".imgage");
                img.classList.add("animeBro")
                // if(circle[cr])



            })
        }
        // div.style.backgroundColor = "black";
        change();
    }
}
// clientWebsite(3,1,img3);
// clientWebsite(3,2,img2);
// clientWebsite(3,3,img2);
// clientWebsite(1,0,img1);
}



//mouse pointer
function customMousePointer(){
    let mousePointerDot = document.querySelector(".mousePointerDot");
    let mousePointer = document.querySelector(".mousePointer");
    
    window.addEventListener("mousemove",function(dets){

        
        let x = dets.pageX + "px";
        let y = dets.pageY + "px";
        mousePointerDot.style.left = x;
        mousePointerDot.style.top = y;
        mousePointer.style.left = x;
        mousePointer.style.top = y;
        mousePointerDot.classList.remove("shown"); 
        mousePointer.classList.remove("widthHuge");
    })
    
    
    
    let item = document.querySelectorAll(".item");
    
    let anch = document.querySelectorAll("a");
    console.log(anch)
    for(let i =0;i<23;i++)
        {
            anch[i].addEventListener("mousemove",function(){
                mousePointerDot.style.width = "5em"; 
                mousePointerDot.style.height = "5em" ;
                mousePointerDot.style.backgroundColor = "white" ;
                mousePointerDot.style.opacity = "0.6" ;
            
               mousePointer.style.display = "none";
            })
            anch[i].addEventListener("mouseleave",function(){
                mousePointerDot.style.width = "0.3em" ;
                mousePointerDot.style.height = "0.3em" ;
                mousePointerDot.style.opacity = "1" ;
                // mousePointerDot.style.backgroundColor = "red" 
                
               mousePointer.style.display = "block";
            })
        }  

}











//scrolling animation
function onViewPortComeAction()
{
document.addEventListener("DOMContentLoaded", function() {

function persona( btnClass,sectionToBeSelected){

    
    const footer = document.querySelector(sectionToBeSelected);
    const workBtn = document.querySelector(btnClass);
    let education = document.getElementById("education");
    let skills = document.getElementById("skills");


    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the footer is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the expanded class to trigger the width transition
        //   footer.classList.add('view');
 
        workBtn.classList.add("active2");
        // education.classList.add("animateRight")
        // skills.classList.add("animateLeft")
        // footer.classList.add("animateDTT")
        // footer.classList.add("animateSection");
        //   console.log("target view comes into viewport")

          // Optionally stop observing after the action is performed
        //   observer.unobserve(entry.target);
        }
        else{
        workBtn.classList.remove("active2");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(footer);

}

persona(".work","#works")
persona(".about","#about")
persona(".contact","#ContactPage")
persona(".intro","#profileSection")

  });
}


function navItemUnderAnimation(){
    let spp = document.querySelectorAll(".special");
    
    // NavItem Animation Logic
    
    let special = document.querySelectorAll(".special");
    
    for(let i=0;i<4;i++)
        {
    
            special[i].addEventListener("mouseenter",function(){
                special[i].classList.add("s");
            })
            special[i].addEventListener("mouseleave",function(){
                special[i].classList.remove("s");
            })
        }
    
    
}



// Calling the Functions

onViewPortComeAction();

circularloader();
navbarShowOnScrollUp();
// navItemUnderAnimation();
workShowCase();
customMousePointer();
// typingEffect();


document.addEventListener("DOMContentLoaded", function() {

    function sectionToAnimateFun(animationStuff,sectionToAnimate)
    {
        console.log(animationStuff,sectionToAnimate)
    
    const sec = document.querySelector(sectionToAnimate);
    const animateStuff = document.querySelector(animationStuff);
    console.log(animateStuff)
    // const worksListSection = document.querySelector(".itsAnimate");s
    
        const observerOptions = {
          root: null, // Use the viewport as the root
          rootMargin: '0px',
          threshold: 0.0 // Trigger when 50% of the footer is visible
        };
    
        const observerCallback = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Add the expanded class to trigger the width transition
    sec.classList.add(animateStuff)
         
    
              // Optionally stop observing after the action is performed
            //   observer.unobserve(entry.target);
            }
            // else{
            workBtn.classList.remove("active2");
            educationSection.classList.remove("animateRight")
            skillsSection.classList.remove("animateLeft")
            // }
          });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(sec);
    
   
    
    }
    sectionToAnimateFun(".animateRight",".skillClass");
      });