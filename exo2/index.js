function askTask()
{
    let text=prompt("Please give a task");
    let task=document.createElement("LI");
    let textnode=document.createTextNode(text);
    task.appendChild(textnode);
    let list=document.getElementById("taskList");
    list.insertBefore(task,list.childNodes[0]);
    let nombre=document.getElementById("taskList").childElementCount;
    console.log(nombre)
    document.getElementById('nbreTask').innerText=nombre;  
}