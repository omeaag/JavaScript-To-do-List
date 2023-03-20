let taskInput = document.getElementById("task");
let taskList = document.getElementById("list");
let allLielements = document.querySelectorAll("#list > li");

let idNO = localStorage.getItem('idNO') ? Number(localStorage.getItem('idNO')) : 0 ;




let closeBtn = `<button 
id = "closeBtn"
onclick="removeElement(parentNode)" 
style="padding: 13px;" type="button" 
class="close"  
data-dismiss="toast"
aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>`;

const addHTML = (todo) => {
    let liDOM = document.createElement("li");

    liDOM.id = todo.id;

    taskList.append(liDOM);
     
    liDOM.innerHTML = `${todo.text}${closeBtn}`;
 
    liDOM.addEventListener("click",markElement);
    
    taskInput.value = "";

    taskInput.focus();
}


function startWindow() {
   const todos = JSON.parse(localStorage.getItem("todos"));

   if(!todos){

       localStorage.setItem("todos",JSON.stringify([]));

   } else {

    todos.forEach(todo => {

        addHTML(todo);

        localStorage.setItem("todos",JSON.stringify(todos));


    });

   }
}
startWindow();


//yeni list ögesi ekleme fonks.
function newElement(){

    if(taskInput.value.trim() === ""){

        $(".error").toast('show');

    }else{

        const todo = {
            text: taskInput.value,
            isCompleted: false,
            id: idNO,
        };

        const todos = JSON.parse(localStorage.getItem("todos"));

        todos.push(todo);

        localStorage.setItem("todos",JSON.stringify(todos));
        
        addHTML(todo);

        $(".success").toast('show')

        idNO ++;

        localStorage.setItem('idNO',idNO);

    }


}


//liste elemanını silme fonks.
function removeElement(e){

    e.remove(); //elemenı sildik

    let todos = JSON.parse(localStorage.getItem("todos"));
    
    todos = todos.filter(td => td.id != e.id);

    localStorage.setItem("todos",JSON.stringify(todos));

}

//yeni eklenen li öğelerine "checked" işlemi yaptık
function markElement(){

    this.classList.toggle("checked");

}


taskInput.addEventListener("keypress",(e) => {

    if(e.key == "Enter"){document.getElementById("liveToastBtn").onclick()}

})






// //localStorage AREA

