let counter = 0;
let counterText = document.querySelector('.counter')
let resetBtn = document.querySelector('.reset_btn')
let increment = document.querySelector('.increment_counter') 


increment.addEventListener('click', function () {
    counter += 1;

    counterText.innerText = counter;
})

resetBtn.addEventListener('click', function() {
    counterText.innerText = 0;
    counter = 0;
})