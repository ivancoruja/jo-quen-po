const items = document.querySelectorAll('.items')

items.forEach((item)=>{
    item.addEventListener(('click'), () => {
        item.style.textDecoration = 'line-through';
        item.style.backgroundColor = 'grey'
    })

})