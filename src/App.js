import React, {Component} from 'react';
import tasks from './sample/tasks.json';
// import Tasks from './components/Tasks.js'
import TaskForm from './components/TaskForm.js';
import './App.css';

class App extends Component {

  state = {
    task:tasks
  }

  render(){
    return <div>
      <TaskForm/>
      {/* <Tasks tasks={tasks}/> */}
    </div> 
  }
  
}

export default App;
