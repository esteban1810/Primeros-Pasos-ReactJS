import React, {Component} from 'react';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks.js'
import TaskForm from './components/TaskForm.js';
import './App.css';

class App extends Component {

  state = {
    task:tasks,
    visible:true
  }

  addTask = async(title,description)=>{
    let newTask = {
      title,
      description,
      id:this.state.task.length,
      done:false
    }
    this.state.task.push(newTask);
    this.setState({})

  }

  render(){
    return <div>
      <TaskForm addTask={this.addTask}/>
      < Tasks tasks={tasks}/>
    </div> 
  }
  
}

export default App;
