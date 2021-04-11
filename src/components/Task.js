import {Component} from 'react';
import PropType from 'prop-types';
import './task.css';

const button = {
    backgroundColor: 'red',
    borderStyle:'none',
    borderRadius: '5px',
    fontSize:'18px'
}

class Task extends Component {
    parrafos(){
        return {
            fontFamily:'Arial'
        }
    }

    boton(){
        if(this.props.task.done){
            return {
                color:'red'
            }
        }
    }

    render(){
        const {id,title,description,done} = this.props.task;
        return <div style={this.boton()}  key={id}>
                    <h1>{title}</h1>
                    <p style={this.parrafos()}>{id}</p>
                    <p>{description}</p>
                    <p>{done}</p>
                    <button style={button}>X</button>
                </div>
    }
}

Task.propTypes = {
    task: PropType.object.isRequired
}

export default Task;