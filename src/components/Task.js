import {Component} from 'react';

class Task extends Component {
    render(){
        const {id,title,description,done} = this.props.task;
        return <div key={id}>
                    <h1>{title}</h1>
                    <p>{id}</p>
                    <p>{description}</p>
                    <p>{done}</p>
                </div>
    }
}

export default Task;