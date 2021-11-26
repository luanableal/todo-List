
let banco = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'Netflix', 'status': 'checked'}
]

const criarTarefa = (texto, checado) => {
    const tarefa = document.createElement('label');
    tarefa.classList.add('todo__item');
    tarefa.innerHTML = 
   `<input type="checkbox" ${checado}>
    <div>${texto}</div>
    <input type="button" value="X"
    ${data}>`

    function DataInclusao(){
        let data = new Date
       document.getElementById('data').value = data.getDay()+'/'+data.getMonth()+'/'+data.getFullYear();
     }

     document.getElementById('todoList').appendChild(tarefa);

    }
