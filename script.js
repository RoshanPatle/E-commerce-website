'use strict'

const show_menu=document.querySelector('#menu-bar');
const close_menu=document.querySelector('#close-bar');
const allmenu=document.querySelector('.menu');
const dis=document.querySelector('.dicription');




show_menu.addEventListener('click', function(){

allmenu.classList.remove('hidden')
show_menu.classList.add('hidden')

dis.classList.add('hidden')


})


close_menu.addEventListener('click',function(){
    allmenu.classList.add('hidden')
show_menu.classList.remove('hidden')
dis.classList.remove('hidden');

})



