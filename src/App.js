import React, { useState } from 'react';
import classnames from 'classnames';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Alert } from 'reactstrap';

function App() {

  const [ todos,setTodos ] = useState(['Exercise','Walk']);
  const [ todo,setTodo ] = useState('');
  const [ error,setError ] = useState(false);
  const [ modal,setModal ] = useState(false);
  const [ index,setIndex ] = useState(0);
  const [ visible, setVisible ] = useState(false);
  const onDismiss = () => setVisible(false);

  const handleChange = (e) =>{
    setTodo(e.target.value);
    setError(false);
    setVisible(false);
  }
  const addTodo = ()=>{
    if(todo!== ''){
      console.log(todo);
      let allTodos = [...todos ,todo];
      setTodos(allTodos);
      setTodo('');
    }
    else{
      setError(true);
    }
  }
  const confrimEdit = ()=>{
    let allTodos = [...todos];
    allTodos[index] = todo;
    setTodos(allTodos);
    setModal(false);
    setTodo('');
  }
  const deleteTodo = (index)=>{
    let allTodos = [...todos];
    allTodos.splice(index,1);
    setTodos(allTodos);
    setTodo('');
  }
  const editTodo = (index)=>{
    setModal(true);
    setTodo(todos[index]);
    setIndex(index);
  }
  const clearAll = ()=>{
    console.log(todos);
    if(todos.length === 0) 
      setVisible(true);
    else 
      setTodos([]);
  }

  return (
    <div>
      <div className="container">
      <Alert isOpen={visible} toggle={onDismiss} className='mb-0 mt-2' color="info">
        Todo List is Empty !
      </Alert>
    </div>
    <div className="container-fluid">
      <Modal isOpen={modal}>
            <ModalHeader>Edit Your Todo</ModalHeader>
            <ModalBody>
              <div className="row text-center">
                <div className="col-xs-12 col-sm-12">
                   <input 
                    type="text" 
                    value={todo} 
                    onChange={ e => handleChange(e) }
                    className={ classnames('w-75 m-auto form-control',{ 'is-invalid' : error })}
                    maxLength="32"
                   />
                      
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" outline onClick={ ()=>setModal(false) } >Cancel</Button>
              <Button color="primary" outline onClick={ ()=>confrimEdit() } >Done</Button>
            </ModalFooter>
          </Modal>
        <div className="row text-center">
            <div className="col-xs-12 col-sm-12 col-md-12">
                <h1 className="my-3 text-primary">TODO APP</h1>
            </div>
        </div>

        <div className="row text-center">
            <div className="col-xs-12 offset-sm-4 col-sm-4 col-md-4">
                <input 
                type="text"
                value={todo}
                onChange={ e => handleChange(e) }
                className={ classnames('w-100 p-1 form-control',{ 'is-invalid' : error })}
                maxLength="32"
                />
                <button type="button" onClick={ addTodo } className="my-3 btn btn-primary"><i className="fa fa-plus">
                </i> Add Todo</button>{' '}
                <button onClick={ clearAll } type="button" className="btn btn-danger"><i className="fa fa-trash"></i> Clear All</button>
            </div>
        </div>

        <div className="row text-center">
            <div className="col-xs-12 offset-sm-4 col-sm-4 col-md-4">
                <table className="table table-hover">
                    <tbody>
                    { 
                      todos.map( (t,index) =>{
                        return (
                          <tr key={index}>
                            <td>{index+1})</td>
                            <td>{t}</td>
                            <td>
                              <button onClick={ ()=> deleteTodo(index) } className="btn btn-danger mx-1 del-btn"><i className="fa fa-trash"></i></button>
                              <button onClick={ ()=> editTodo(index) } className="btn btn-success mx-1 edit-btn"><i className="fa fa-edit"></i></button></td>
                          </tr>
                        )
                      })       
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;