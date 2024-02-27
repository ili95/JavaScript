let lists=document.getElementsByClassName('pull-down-list')
console.log(lists)
const pullDownButton=document.getElementById('lists')
console.log(pullDownButton)
window.addEventListener('load',function(){
    const pullDownButton=document.getElementById('lists')
})
    pullDownButton.addEventListener('mousemove',function(){
        console.log('のる')
    }) 
    pullDownButton.addEventListener('mouseout',function(){
        console.log('外れる')
    }) 
    pullDownButton.addEventListener('click',function(){
        console.log('クリック')      
     })