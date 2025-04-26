let syl = document.querySelector(".sylabus")
let idk = document.querySelector(".idk")

syl.addEventListener("mouseover",function(){
    idk.style.display = "block"
})
syl.addEventListener("mouseout",function(){
    idk.style.display = "none"
})