let syl = document.querySelector(".sylabus")
let idk = document.querySelector(".drop-sylab")

syl.addEventListener("mouseover",function(){
    idk.style.display = "block"
})
syl.addEventListener("mouseout",function(){
    idk.style.display = "none"
})

let social = document.querySelector(".socials")
let socDrop = document.querySelector(".socials-drop")
social.addEventListener("mouseover",()=>{
    social.style.top= "67px"
    social.style.height = "160px"
    socDrop.style.display = "block"
})
social.addEventListener("mouseout", ()=>{
    social.style.top= "0px"
    social.style.height = ""
    socDrop.style.display = "none"
})


let allSylabExpand = document.querySelector(".hidden-sylab-expand")
let sylabShower = document.querySelector(".side-syl")
let hidenSylab = document.querySelector(".hidden-sylab")
let allSylabsShown = false
sylabShower.addEventListener("click", e =>{
    if(allSylabsShown == false){
        allSylabExpand.style.height = "auto"
        allSylabsShown = true;
        hidenSylab.style.backgroundColor = "#ffffff36"
    }else{
        allSylabExpand.style.height = "0px"
        allSylabsShown = false
        hidenSylab.style.backgroundColor = "transparent"
    }
})


let sylCard = document.querySelectorAll(".syl-card")
for(let i of sylCard){
    let div = i.querySelector("div")
    let h4 = i.querySelector("h4")
    let debounce = false 
    h4.addEventListener("click", e =>{
        if(debounce == false){
            div.style.height = "auto"
            debounce = true
            i.style.backgroundColor = "#ffffff3f"
        }else{
            div.style.height = "0px"
            debounce = false
            i.style.backgroundColor = "transparent"
        }
    })
}


let burger = document.querySelector(".burger")
let sideBar = document.querySelector("#side-bar")   
burger.addEventListener("click", e =>{
    sideBar.style.transform = "translateX(0px)"
})
let escaper = document.querySelector(".escape")  
escaper.addEventListener("click", e =>{
    sideBar.style.transform = "translateX(100%)"
})

let nika = document.querySelector(".nika").querySelector("img")
let nikaOpen = false
nika.addEventListener("click", e =>{
    let panel = document.querySelectorAll(".kaka")
    if(nikaOpen == false){
        panel[0].style.display = "block"
        panel[1].style.display = "block"
        nikaOpen = true
    }else{
        panel[0].style.animation = "deSpawn 0.5s ease-in-out"
        panel[1].style.animation = "deSpawn 0.5s ease-in-out"

        setTimeout(() => {
            panel[1].style.display = "none"
            panel[0].style.display = "none"
            nikaOpen = false
            panel[0].style.animation = "spawn 0.5s ease-in-out"
            panel[1].style.animation = "spawn 0.5s ease-in-out"
        }, timeout = 500);


    }
})
