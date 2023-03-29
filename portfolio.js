const sectext = document.querySelector(".sec-text");

const textload = ()=>{
  setTimeout(()=>{
    sectext.textContent= "Designer";
  },0);

  setTimeout(()=>{
    sectext.textContent = "Web-Developer";
  },6000);
}

textload();
setInterval(textload,12000);



// scroll triggres

window.addEventListener('scroll',()=>{
  var reavels=document.querySelectorAll('.reveal');
  for(var i=0; i<reavels.length;i++)
  {
  var windowHeight = window.innerHeight;
  var revalPoint=reavels[i].getBoundingClientRect().top;
  var revaleTop = 50;
 if(revaleTop < windowHeight-revalPoint)
 {
  reavels[i].classList.add('active');
 }
 else{
  reavels[i].classList.remove('active');
 }
}
})