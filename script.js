const pullDownButton=document.getElementById('lists')
const pullDownParents=document.getElementById('pull-down')
const pullDownChild=document.querySelectorAll('.pull-down-list')
const currentList=document.getElementById('current-list')
pullDownChild.forEach(function(list){
    list.addEventListener('click',function(){
        const value=list.innerHTML
        currentList.innerHTML=value
        console.log(value)
    })
})
window.addEventListener('load',function(){
    const pullDownButton=document.getElementById('lists')
})
    pullDownButton.addEventListener('mouseover',function(){
        this.setAttribute('style','background-color:blue;')
        console.log('乗ったら青色')    
    }) 
    pullDownButton.addEventListener('mouseout',function(){
        this.removeAttribute('style','background-color:red;')
        console.log('外れて赤色')
    }) 
    pullDownButton.addEventListener('click',function(){
        console.log('クリック')
        if(pullDownParents.getAttribute('style')=='display:block;'){
            pullDownParents.removeAttribute('style','display:block;')
            console.log('非表示')
        }else{
            pullDownParents.setAttribute('style','display:block;')
            console.log('表示')
        }
    })