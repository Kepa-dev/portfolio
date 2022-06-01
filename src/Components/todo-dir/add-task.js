import React from 'react';
import ToDo from './todo';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

let AddTask = () => {
    let [task, setTask] = useState('');
    let [isImportant, setImportant] = useState(false);
    let addNewTask = () => {
        let newTask = { id: 0, text: task, important: isImportant };
        Axios.post('http://20.224.43.111/api/addtask', newTask)
        .then(res=>{
            console.log(res);
            window.location.reload();
        })
        .catch(err=>{
            console.log(err);
        })
        
    }
    
    



    return (
        <div className='inputs w-75 '>
            <div className="mb-3 p-3">
                <label for="exampleInputPassword1" className="form-label ">Treść Zadania: </label>

                <input onChange={(e) => { setTask(e.target.value) }} type="text" className="form-control  " />
            </div>

            <div class="mb-3 form-check">
                <input onChange={(ev) => { setImportant((ev.target.checked) ? true : false) }} type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Czy zadanie jest ważne?</label>
            </div>


            <button className="btn btn-success m-1 " onClick={addNewTask} >Dodaj</button>
        </div>

    )
};
export default AddTask;
