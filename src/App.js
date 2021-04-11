import React, {Component} from 'react';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks.js'
import './App.css';

class App extends Component {

  state = {
    task:tasks
  }

  render(){
    return <div>
      <Tasks tasks={tasks}/>
    </div> 
  }
  
}

export default App;
