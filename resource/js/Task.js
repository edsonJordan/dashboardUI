class sendTask {
    constructor(){
        this.sends=[];
        this.index=0;
    }
    setTask(sendData){
        this.sends.push({id: this.index+sendData, idDelete: sendData + this.index + sendData, item: sendData});
        this.index++;
    }
    getTask(){
        return this.sends;
    }
}
class Task extends sendTask{
    constructor(sends){
        super(sends)
        this.task=[this.sends];
        this.new=null;        
    }
    setNewTask(){
        //this.new =  this.send.filter(x => !this.task.includes(x));
    }
    getNewTask(){
        const task= this.getTask();
        this.new=task.at(-1);
        return this.new;
    }
    paintTask(node, task){
       const itemList = document.getElementById(node);   
       itemList.innerHTML +=
       `<li class="list__todo-list" id="${task.idDelete}">
            <form action="" class="form__todo-list" >
                <input type="checkbox" name="" id="${task.id}" >
                <label for="${task.id}" class="cursor-pointer">
                    ${task.item}
                </label>
            </form>
            <a href="#" att-dele="${task.idDelete}" class="deleted label__todo-list z-50 	">                                   

            </a>                                    
        </li>`;
        //<input  type="submit" id="${task.idDelete}" class="hidden" value="">
    }
    deleteTask(className, task){  
    }
}
const task = new Task();
document.getElementById('taskForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = {};
    const formData = new FormData(e.target);
	for (const key of formData.keys()) {
		data[key] = formData.get(key);
	}
    task.setTask(data.search);   
    task.paintTask("lisTasks", task.getNewTask())
    e.target.reset();
})
    document.getElementById('lisTasks').addEventListener('click', (e)=>{
        const nodeName= e.target.nodeName;
        if(nodeName === 'A'){
            e.preventDefault()

            /* Delete task */
           const idDelete = e.target.getAttribute('att-dele');            
            const sendHistorial = task.sends;      
           const indexSelected = sendHistorial.findIndex(x => x.idDelete === idDelete);
           sendHistorial.splice(indexSelected, 1)           
           document.getElementById(idDelete).remove();
        }
    })
    

