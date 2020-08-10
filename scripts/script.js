const messageWindow = document.getElementById('message-window')
const bigProject = document.getElementById('big-project-box')

// for (const i in projectBoxes) {
//   const project = projectBoxes[i]
//   console.log(project)
//   project.addEventListener('click', toggleBigProject())
// }

document.querySelectorAll('.project-box').forEach(item => {
  item.addEventListener('click', () => toggleBigProject())
})

function toggleSendMessage () {
  messageWindow.classList.toggle('hidden')
}

function toggleBigProject () {
  bigProject.classList.toggle('hidden')
}
