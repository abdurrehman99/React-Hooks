import React , { useState } from 'react';

function TodoItem(props) {
    // let [name , setname ] = useState('Ebad');
    // const nameChange = (e)=>{
    //     setname(e.target.value);
    // }
    return (
        <div>
            <h2>hello tt</h2>
            <h2>{ props.name }</h2>
            <h2>{ props.todo }</h2>
        </div>
    )
}

export default TodoItem;
