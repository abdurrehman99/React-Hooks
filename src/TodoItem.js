import React, { useState,useEffect } from 'react';

let t = true;
function TodoItem(props) {
    useEffect( ()=>{
        console.log('Age intialized');
    },[]);

    useEffect( ()=>{
        if(age === '0') ;
        else console.log('Age Changed '+age);
    });

    var [age , setAge] = useState('0');

    const ageChange = ()=>{
        setAge(Number(age) + 1);
    }
    return (
        <div>
            {age}
            <button onClick={ageChange} >Grow</button>
        </div>)
}

export default TodoItem;
