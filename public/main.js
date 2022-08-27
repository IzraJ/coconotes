const deleteText = document.querySelectorAll('.fa-trash')
const editText = document.querySelectorAll('.fa-pen-to-square')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteTask)
})



document.getElementById('add').addEventListener("click", editTask)

function setTaskname(name){
    const x = document.getElementById('taskX');
    if(x){
        x.textContent = name
    }
}

async function editTask(){
    // i need to find a way to pull in the original taskname
    const sName = document.getElementById('taskX').innerText
    const tName = document.getElementById('textInput').value
    console.log(sName)
    console.log(tName)
    try{
        const response = await fetch('editTask', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            'taskName': sName,
            'taskNameS': tName
              
            })
          })
        const data = await response.json()
        console.log(data)
        
    }catch(err){
        console.log(err)
    }
}

async function deleteTask(){
    
    const tName = this.parentNode.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('deleteTask',{
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'taskNameS': tName
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}