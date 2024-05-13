const input = document.querySelector('input')
const button = document.querySelector('button')

button.addEventListener('click', ()=>{
  
  if (input.value == '72TMS8071972BGJ') {
    window.open('page2.html', '_self')
  } else {
    alert('Invalid, tracking number must be a combination of alphanumeric characters of 5-50 characters in length.')
  }
  
})
