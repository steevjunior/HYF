function askTask()
{
    let taskName=prompt("Please give a task name");
    let taskItem=document.createElement("LI");
    let listNode=document.createTextNode(taskName);
    taskItem.appendChild(listNode);
    let list=document.getElementById("taskList");
    list.insertBefore(taskItem,list.childNodes[0]);
    let nombre=document.getElementById("taskList").childElementCount;
    console.log(nombre)
    document.getElementById('nbreTask').innerText=nombre;  
}