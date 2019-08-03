var button = document.querySelector('#button');
var model  = document.querySelector('#modal');
var close  = document.querySelector('#close');

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
});

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});


setTimeout(function () { 
  modal.classList.remove('modal_active');
}, 5000);
