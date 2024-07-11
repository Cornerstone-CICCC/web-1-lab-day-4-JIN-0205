
const form = document.querySelector('form')
const employeeList = document.querySelector('#employeeList')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  const firstname = formData.get('firstname')
  const lastname = formData.get('lastname')
  const email = formData.get('email')
  const hire_date = formData.get('hire_date')
  const photo = formData.get('photo')

  const reader = new FileReader()
  reader.onload = function (e) {
    const row = document.createElement('tr')
    row.innerHTML = `
      <td><img src="${e.target.result}" width="50"></td>
      <td>${firstname}</td>
      <td>${lastname}</td>
      <td>${email}</td>
      <td>${hire_date}</td>
      <td><button type="button" id="deleteBtn">Delete</button></td>
    `
    employeeList.appendChild(row)

    row.querySelector('#deleteBtn').addEventListener('click', deleteEmployee)
  }
  reader.readAsDataURL(photo)

  form.reset()
})

function deleteEmployee(e) {
  const row = e.target.closest('tr')
  const select = confirm('Are you sure you want to delete this employee?')
  if (select) {
    row.remove()
  } 
}



