import React from 'react';

function TodoItem(props) {
   
    return (
        <div>
            <h3>{ props.index+1 }) { props.name } <i className='fa fa-trash'></i></h3>
        </div>
    )
}

export default TodoItem;
