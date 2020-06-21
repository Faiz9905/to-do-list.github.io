const list = document.getElementById('list');
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const total = document.getElementById('total');
const completedTask = document.getElementById('compl');





const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";

let id = 0;
const LIST = new Array();

function getTotalTask(LIST){
    var count = 0;
    for(let i = 0; i < LIST.length; i++){
           if(LIST[i].trash == false){
               count++;
           }
    }

    return count;
}
function getCompletedTask(LIST){
    var count = 0;
    for(let i = 0; i < LIST.length; i++){
        if(LIST[i].done == true && LIST[i].trash == false){
            count++;
        }
    }

    return count;
}
function getCompletedTaskAndTrash(LIST){
    var count = 0;
    for(let i = 0; i < LIST.length; i++){
        if(LIST[i].done == true && LIST[i].trash == false){
            count++;
        }
    }

    return count;
}

function updateTotalTask(totalTask){

      total.innerText = totalTask;
    //   completedTask.innerText = completed;
//    const set =  ` <span id="counter">Total : ${total}, Completed : ${completed}</span> `; 
//    const place = "beforeend";
//    if(total == 1)
//       count.insertAdjacentHTML(place, set);
}

function updateCompletedTask(complted){
    completedTask.innerText = complted;
}







function addToDo(toDo, id, done, trash){
    if(trash){ return ;}

    const DONE = done ? CHECK : UNCHECK;
    const text = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id= "${id}"></i>
                    <p class="text ">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id= "${id}"></i>
                  </li>
                `;


    


const position = "beforeend";

list.insertAdjacentHTML(position, text);
}

btn.addEventListener('click', function(even){
   // if(event.keyCode == 13){
        var toDo = input.value;
        if(toDo){
            addToDo(toDo, id, false, false);
           
            LIST.push(
                {
                name : toDo,
                id : id,
                done : false,
                trash : false,
                }
            );

            input.value = "";
            id++;
            
        }
        const totalTask = getTotalTask(LIST);
       
        updateTotalTask(totalTask);
        
   // }
    
});





//Comple TODO
function completeToDo(element){
    
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
    let compeltedTask = getCompletedTask(LIST);
    updateCompletedTask(compeltedTask);
}

//Remove TODO

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;

    const totalTask = getTotalTask(LIST);
    const completedTask = getCompletedTask(LIST);
    updateTotalTask(totalTask);
    updateCompletedTask(completedTask);
}



list.addEventListener("click", function(event){


    const element = event.target;
    const elementJob = element.getAttribute("job");


    if(elementJob == "complete"){
            completeToDo(element);
    }
    else if(elementJob == "delete"){
            removeToDo(element);
    }
});



