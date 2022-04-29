const options = document.querySelectorAll('.option');
const submit = document.querySelector('.submit');
const number = document.querySelector('.number');

submit.addEventListener('click',function(){
    document.body.classList.toggle('active');
})

options.forEach(function(item){
    item.addEventListener('click',function(e){
        number.textContent = e.currentTarget.dataset.id;
    })
})