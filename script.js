var counter=60;
var h1=document.querySelector('h1');
var button=document.querySelector('button');

button.addEventListener('click',function(){
    setInterval(function(){
        if(counter>0){
        h1.textContent = --counter;
        }
    },1000);

})
