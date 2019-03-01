nbreTask.textContent=document.getElementById("taskList").childElementCount
function askTask()
{
    let taskName=document.getElementById("inputTask").value;

    // create element 
    // give the text to the new element or any value to any attribute it can have
    // then append it to his parent

    let taskItem=document.createElement("LI");
    taskItem.innerText=taskName
    let list=document.getElementById("taskList");    

    let btn=document.createElement("button");
    btn.innerText="Delete";
    btn.onclick=deleteli;
    taskItem.appendChild(btn);
    
    list.insertBefore(taskItem,list.childNodes[0]);
    let nombre=document.getElementById("taskList").childElementCount;


    document.getElementById('nbreTask').innerText=nombre; 
    document.getElementById('inputTask').value="";
}


function deleteli()
{
    let list=document.getElementById("taskList"); 
    list.removeChild(this.parentNode);
    nbreTask.textContent=document.getElementById("taskList").childElementCount

}