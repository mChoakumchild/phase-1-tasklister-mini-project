let form = document.querySelector("#create-task-form") // form containing child elements like textbox and submit
let taskDescriptionText = document.querySelector("#new-task-description") // textbox
let taskList = document.querySelector("ul#tasks") // Where user input goes
let taskHeader = document.querySelector("h2") 
let prioritytable = {Red: "High Priority", Yellow: "Medium Priority", Green: "low Priority" }
document.addEventListener("DOMContentLoaded", () => {
//let deleteB;

});
let num = 0;
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k"]
let deleteB;

form.addEventListener("submit", (e) => {
  e.preventDefault()//keep from refreshing
  num +=1;
  usrInfo(alphabet,num)
    // let abx = document.querySelector(`#${CSS.escape(indx)}`);
    // taskList.remove(abx)
    //deleteChecker(num);
  return num
});


// function usrInfo (alphabet,num) {
//   Outer form
//   let descrBox = document.createElement('form')
//   descrBox.id = alphabet[num]
//   descrBox.className = "userPost"
function usrInfo(alphabet,num) { 
// Text box title
  let newTask = document.createElement('li')

  newTask.innerText = taskDescriptionText.value
  colorChecker(newTask)
  //newTask.id = alphabet[num];
  //descrBox.append(newTask)
//Usr text box
  let usrTxt = document.createElement('input')
  usrTxt.id = alphabet[num];
  
// Deletion Button
  let deleteB = document.createElement('button')
  deleteB.innerText = "Delete"
  deleteB.type = "delete"
  //deleteB.id = alphabet[num];
  deleteB.class = "usrInput"

  // appending
  taskList.append(newTask)
  newTask.append(usrTxt)
  newTask.append(deleteB)
  
}


taskList.addEventListener("click", (e) => { 
  e.preventDefault()
 
  let indx = e.target.closest('li');
  if (!indx) return;
  console.log(e.target)
  if (e.target.matches("button")){
    indx.remove();
    num -= 1;
  }
  return num;
  });

// 2 functions below called by the submit event


// function deleteChecker(num){
//   for (let i = 0; i < num; i++) 
//   {
//     if (deleteB.id == i) 
//     {
//       let indx = deleteB.id;
//       let abx = document.querySelector(`#${CSS.escape(indx)}`);
//       taskList.remove(abx)
//     }
//   }
// }


// Priority Options
function makepriorityoptions (taskList) {
  let newTaskopt = document.createElement('select')
  
  // Create option tags for high, medium, and low priority
  let taskTextOne = document.createElement('option')
  taskTextOne.innerText = taskTextOne.value = `${prioritytable.Red}`
  let taskTextTwo = document.createElement('option')
  taskTextTwo.innerText = taskTextTwo.value = `${prioritytable.Yellow}`
  let taskTextThree = document.createElement('option')
  taskTextThree.innerText = taskTextThree.value = `${prioritytable.Green}`
  newTaskopt.append(taskTextOne, taskTextTwo, taskTextThree)
  taskHeader.append(newTaskopt)  
  
}
// Change color of text depending on value.


makepriorityoptions(taskList);

function colorChecker(newTask) { 
  let selectElement = document.getElementsByTagName("select")[0];

  if (selectElement.value == prioritytable.Red){ 
    newTask.style.color = "red";
    console.log(newTask.style.color)
  }
  else if(selectElement.value == prioritytable.Yellow){ 
    newTask.style.color = "yellow";
  }
  else if (selectElement.value == prioritytable.Green){ 
    newTask.style.color = "green";
  }
  return newTask;
}




// makepriorityoptions(taskList);

// function colorChecker (newTask) { 
// let selectElement = document.getElementsByTagName("select")[0];

// if (selectElement.value == prioritytable.Red){ 
//     newTask.innerText.fontcolor("red")

//   // taskList.querySelectorAll("li.input").forEach(el => {
//   //   console.log(el.value.innerText)
//   //     console.log(el.innerText.fontcolor("red"));
//   //     console.log(el)
//   // })
// }

// else if(selectElement.value == prioritytable.Yellow){ 
//   taskList.querySelectorAll("li").forEach(el => {
//     console.log(el)
//     el.style.color = "yellow";
//    })
//  }
//  else if (selectElement.value == prioritytable.Green){ 
//   taskList.querySelectorAll("li").forEach(el => {
//     console.log(el)
//     el.style.color = "green";
   
//    })
//  }
// }





