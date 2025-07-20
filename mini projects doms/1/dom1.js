const buttonselector = document.querySelectorAll('.button');
console.log(buttonselector);
const body = document.querySelector('body')
buttonselector.forEach(function(button) {
    button.addEventListener('click' , function(e){
      if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id
      }
      else if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
      }
      else if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id
      }
      else if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id
      }
      
    })
})