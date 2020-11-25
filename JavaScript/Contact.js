const scriptURL = 'https://script.google.com/macros/s/AKfycbzpExCoqZ08rWot17QWXZtnk0VovQr9QQCroOfwqk7NHrfdvKI/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us! We Will Send a Response Shortly"))
    .catch(error => console.error('Error!', error.message))
})
