function clickHTML(){
    document.querySelector("#info").innerHTML=
  "Has hecho click en el botón con evento HTML"
   document.querySelector("#info").style.background="orange";
  }

const listenerEvent = document.querySelector('#listener');
listenerEvent.addEventListener('click', function() {
 document.querySelector("#info").innerHTML='Has hecho click en el botón con addEventListener';
  document.querySelector("#info").style.background="blue";
});

const handlerEvent = document.querySelector('#handler');
handlerEvent.onclick = function() {
  document.querySelector("#info").innerHTML='Has hecho click en el botón con event handler';
    document.querySelector("#info").style.background="green";
};
                      
                      