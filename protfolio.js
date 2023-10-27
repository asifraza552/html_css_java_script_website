
let abc = document.querySelectorAll('a');

abc.forEach( a => {
    a.addEventListener('click',function() {
      abc.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
        
    });
});

let menu = document.getElementById('togle');
let sidenav = document.getElementById('sidenav');
sidenav.style.width="0px";

menu.onclick=function(){
  if (sidenav.style.width=="0px") {
    sidenav.style.width="100%";
  }
  else{
    sidenav.style.width="0px";
  }
}

//#togle{