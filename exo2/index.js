nbreTask.textContent=document.getElementById("taskList").childElementCount
function askTask()
{
    let taskName=document.getElementById("inputTask").value;
    let taskItem=document.createElement("LI");
    let listNode=document.createTextNode(taskName);
    taskItem.appendChild(listNode);
    let list=document.getElementById("taskList");
    list.insertBefore(taskItem,list.childNodes[0]);
    let nombre=document.getElementById("taskList").childElementCount;
    console.log(nombre)
    document.getElementById('nbreTask').innerText=nombre; 
    document.getElementById('inputTask').value="";
}