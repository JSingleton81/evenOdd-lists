let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")
console.log(oddList)
function updateWord(element) {
  usersWord = element.value

  console.log(usersWord)
}

function handleSubmit() {
  let newListItem = document.createElement('div')
  newListItem.innerText = usersWord
  if (usersWord.length % 2 === 0) {
    evenList.appendChild(newListItem)
  } else {
    oddList.appendChild(newListItem)
  }
  resetForm()

  

}

function resetForm () {
  usersWord = ""
  document.getElementById("even-odd-form").reset()
}
 