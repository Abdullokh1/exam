document.getElementById('darkBtn').addEventListener('click', function(){
  document.body.classList.toggle('dark')
})
let hideVersion = document.getElementById('hideContent');
let openBtn = document.getElementById('searchBtn');
openBtn.addEventListener('click', function(){
  hideVersion.classList.add('show')
})
let close = document.getElementById('closeBtn');

close.addEventListener('click', function(){
  hideVersion.classList.remove('show')
})