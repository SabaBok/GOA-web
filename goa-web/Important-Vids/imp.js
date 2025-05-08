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