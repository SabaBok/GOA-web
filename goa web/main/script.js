let syl = document.querySelector(".sylabus")
let idk = document.querySelector(".drop-sylab")

syl.addEventListener("mouseover",function(){
    idk.style.display = "block"
})
syl.addEventListener("mouseout",function(){
    idk.style.display = "none"
})


let p = document.querySelector(".soci")
let socis = document.querySelector(".drop-socials")
let kkk = document.querySelector(".socials")
p.addEventListener("mouseover",function(){
    socis.style.display = "block"
    socis.addEventListener("mouseout",function(){
        this.style.display = "none"
    })
})
