let lists=document.getElementsByClassName('pull-down-list')
console.log(lists)
const pullDownButton=document.getElementById('lists')
console.log(pullDownButton)
window.addEventListener('load',function(){
    const pullDownButton=document.getElementById('lists')
})
    pullDownButton.addEventListener('mouseover',function(){
        console.log('のる')
        pullDownButton.setAttribute('style','background-color:blue;')    
    }) 
    pullDownButton.addEventListener('mouseout',function(){
        console.log('外れる')
        pullDownButton.removeAttribute('style','background-color:red;')
    }) 
    pullDownButton.addEventListener('click',function(){
        console.log('クリック')
        pullDownButton.setAttribute('style','background-color:green;')      
     })