const messageWindow = document.getElementById('message-window')
const bigProject = document.getElementById('big-project-box')

// for (const i in projectBoxes) {
//   const project = projectBoxes[i]
//   console.log(project)
//   project.addEventListener('click', toggleBigProject())
// }

document.querySelectorAll('.project-box').forEach(project => {
  project.addEventListener('click', (e) => toggleBigProject(e, project.id))
})

function toggleSendMessage () {
  messageWindow.classList.toggle('hidden')
}

function toggleBigProject (e, id) {
  bigProject.classList.toggle('hidden')
  if (!bigProject.classList.contains('hidden')) {
    const title = document.getElementById(id).innerText
    document.getElementById('bp-title').innerHTML = title
  }
}
