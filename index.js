let hamburger = document.getElementById("hamburger")
let list = document.getElementsByClassName("header__item__list")[0]
let ulTwo = document.getElementsByClassName('main__item__list')[0]
let aside = document.getElementsByClassName('main__aside')[0]
let open = false

hamburger.addEventListener('click' , () =>{
    
    if (open == false) {
        open = true
        aside.classList.add('menu')
        ulTwo.classList.add('main__item__list--two')
    }else{
        open = false
        aside.classList.remove('menu')
        ulTwo.style.display = "none"
        ulTwo.classList.remove('main__item__list--two')
    }
    
})

