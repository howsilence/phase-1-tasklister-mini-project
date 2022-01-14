const thisFuckinThing = document.querySelector("#new-task-description")
document.addEventListener("DOMContentLoaded", () => {
  // your code here
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
    createEle(thisFuckinThing.value)
  });})

function createEle(toDo){
  const liEle = document.createElement('li');
  const subBut = document.createElement("button");
  subBut.textContent = "x"
  liEle.textContent = `${toDo} `;
  document.querySelector("#tasks").appendChild(liEle);
  subBut.addEventListener("click", (e)=>{
    e.target.parentNode.remove();
  })
  liEle.appendChild(subBut);
};
