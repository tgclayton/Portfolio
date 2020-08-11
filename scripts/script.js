const messageWindow = document.getElementById('message-window')
const bigProject = document.getElementById('big-project-box')

document.querySelectorAll('.project-box').forEach(project => {
  project.addEventListener('click', (e) => toggleBigProject(e, project.id))
})

function toggleSendMessage () {
  document.getElementById('message-form').reset()
  messageWindow.classList.toggle('hidden')
}

function formSubmit () {
  const message = document.getElementById('message-form')
  message.submit()
  message.reset()
}

// Pulls content out of hidden inner divs in small project boxes and displays in large project window
function toggleBigProject (e, id) { 
  bigProject.classList.toggle('hidden')
  if (!bigProject.classList.contains('hidden')) {
    const title = document.getElementById(id).innerText
    const descSource = document.getElementById(id + '-desc').innerHTML
    const linkSource = document.getElementById(id + '-links').innerHTML
    document.getElementById('bp-title').innerHTML = title
    document.getElementById('project-description-content').innerHTML = descSource
    document.getElementById('project-links-content').innerHTML = linkSource
  }
}
