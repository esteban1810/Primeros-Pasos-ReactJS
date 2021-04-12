import {Component} from 'react';

export default class TaskForm extends Component {

    state = {
        title:'',
        description:''
    }

    onSubmit = e => {
        e.preventDefault();
    }

    writing = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            <input name="title" placeholder="Write a task" value={this.state.title}  type="text" onChange={this.writing}/>
            <br/>
            <br/>
            <textarea name="description" placeholder="Write a Description" value={this.state.description} onChange={this.writing}></textarea>
            <br/>
            <br/>
            <input type="submit" value="Enviar"/>
        </form>
    }
}