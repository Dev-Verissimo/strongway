let hamburger = document.getElementById("hamburger")
let list = document.getElementsByClassName("header__item__list")[0]
let ulTwo = document.getElementsByClassName('header__item__list--two')
let aside = document.getElementsByClassName('main__aside')[0]
let open = false

hamburger.addEventListener('click' , () =>{
    
    if (open == false) {
        open = true
        aside.classList.add('menu')
        ulTwo.style.display = "flex"
    }else{
        open = false
        aside.classList.remove('menu')
    }
    
})

