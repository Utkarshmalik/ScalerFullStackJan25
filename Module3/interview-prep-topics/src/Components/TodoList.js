
import React from "react";

class TodoList extends React.Component{


    constructor(props){
        console.log('Constructor: Setting up initial state and bindings.');

        super(props);

        this.state={searchValue:"", todos:[],loading:true}

    }

    handleInputChange = (event)=>{

        this.setState({searchValue:event.target.value})

    }

    handleAddTodo = ()=>{
        this.setState({todos:[...this.state.todos, this.state.searchValue],searchValue:""});
    }

    componentDidMount(){
        console.log('Component Did Mount: Fetching initial to-do items.');

     setTimeout(()=>{
        const todoItemFromAPI = ['Learn React','Read a Book'];
        this.setState({todos:[...todoItemFromAPI],loading:false});
     },2000)
    }

    componentDidUpdate(){
       console.log('Component Did Update:');
    }

    componentWillUnmount(){
        console.log('Component Will Unmount: Cleaning up resources.');

    }


    render(){

        console.log('Render: Rendering the to-do list.');

        return <div>

            <h1> My To-Do List </h1>

            {
                this.state.loading && <h4> Loading Items ... </h4>
            }
            

            <ul>

                { !this.state.doading && 

                    this.state.todos.map((todo, index)=>(
                        <li key={index}> {todo}  </li>
                    ))
                }

            </ul>

            <input value={this.state.searchValue} onChange={this.handleInputChange} type="text"/>

            <button onClick={this.handleAddTodo} > Add To-do </button>

        </div>
    }


}

export default TodoList;