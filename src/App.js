import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
//Switch tells route that at any time, only 1 route should take precedence. eg. if /contact component is loaded, don't load /:post_id too

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy some milk"},
      {id: 2, content: "play MarioKart"}
    ]
  }

  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="todo-app container">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
          </Switch>
          {/* <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteToDo={this.deleteToDo}/>
          <AddTodo addTodo={this.addTodo} /> */}
        </div>
      </BrowserRouter>
    );
  }  
}

export default App;
