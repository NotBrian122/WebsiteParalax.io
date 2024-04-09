const title =document.querySelector('.title')
const curt1 =document.querySelector('.curt1')
const curt2 =document.querySelector('.curt2')
const buk1 =document.querySelector('.buk1')
const pop1 =document.querySelector('.pop1')
const pop2 =document.querySelector('.pop2')
const seat2 =document.querySelector('.seat2')

document.addEventListener('scroll',function(){
    let value =window.scrollY
    
    title.style.marginTop = value* 1.1 + 'px'

    curt1.style.marginLeft = -value * 1.1 + 'px'
    curt2.style.marginLeft = +value * 1.1 + 'px'
    //bucket translateion 
    buk1.style.marginBottom = -value * .15 + 'px'
    //popcorn translation 
    pop1.style.marginBottom = -value * .4 + 'px'
    pop2.style.marginBottom = -value * .25 + 'px'

    seat2.style.marginBottom = -value * .25 + 'px'
    seat2.style.marginLeft = -value * 1.25 + 'px'
})