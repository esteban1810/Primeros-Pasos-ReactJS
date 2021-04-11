import {Component} from 'react';
import Task from './Task.js'

class Tasks extends Component {
    render(){
        return this.props.tasks.map(e=>
            <Task task={e}/>
        )
          
    }
}

export default Tasks;