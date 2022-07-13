<script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})