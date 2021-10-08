let burger = document.querySelector(".burger")
let lines = document.querySelectorAll(".burger div")
burger.addEventListener("click",()=>{
    lines[0].classList.toggle("first-line")
    lines[1].classList.toggle("middle")
    lines[2].classList.toggle("last-line")
    let popIt = document.querySelector(".popit")
    popIt.classList.toggle("popOn")
})
