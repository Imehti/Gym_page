//-------------------Toggle Menu For Phone-----------------
let $=document
let hideMenu=$.querySelector('#hideMenu')
let showMenu=$.querySelector('#bars')
let navLinks=$.querySelector(".nav_links")

showMenu.addEventListener('click',function(){
    navLinks.style.right='0'
})
hideMenu.addEventListener('click',function(){
    navLinks.style.right='-150px'
})
