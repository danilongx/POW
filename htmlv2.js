function addTeams(){

  // datos del formulario
  const name = document.getElementById('name').value
  document.getElementById('name').value = '';
  const profile =  document.getElementById('profile').value
  document.getElementById('profile').value = '';

  const section = document.getElementById('cardContainer')

  const createDiv =  document.createElement('div')
  createDiv.className = 'card'

  const createImg =  document.createElement('img')
  createImg.src = './IMAGES/defecto.jpg'
  createImg.style.width = '30%'
  createImg.style.borderRadius = '10px'
  createImg.style.objectFit = 'cover'

  const createSpace =  document.createElement('div')
  createSpace.style.width = '10%';

  const createP =  document.createElement('p')
  createP.textContent = name + ' ' + profile

  const btnDellete =  document.createElement('button');
  btnDellete.textContent = 'Borrar'

   
  
  btnDellete.addEventListener('click', () =>{
    deleteTeam(createDiv)
  })

  

  createDiv.appendChild(createImg)
  createDiv.appendChild(createSpace)
  createDiv.appendChild(createP)
  createDiv.appendChild(btnDellete)

  section.appendChild(createDiv)

}


function deleteTeam(div){
  div.remove()
}