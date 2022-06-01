import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';

import AddTask from './add-task';
import axios from 'axios';



let ToDo = () => {

    let [card, setCard] = useState(
        <div className=" my-5 m-auto spinner-grow text-dark" role="status">
            <span className=" visually-hidden">Loading...</span>
        </div>
    )
    let loadTasks = () => { };
    useEffect(() => {
        loadTasks = () => {
            Axios.get('http://20.224.43.111/api/showtasks')
                .then(res => {
                    let newCard;
                    let listCard = res.data;
                    listCard.reverse();
                    if(listCard.length > 0){
                        newCard = listCard.map((el) => {
                            let isimportant = "card text-white h-100 w-100 p-3"
                            isimportant = (el.important) ? isimportant + " bg-danger " : isimportant + " bg-success "
                            return (
                                <div className='p-2 col-12 col-sm-6 col-md-4'>
                                    <div className={isimportant}>
                                        <div className="card-header">
                                            <h5 className="card-title">{el.text}</h5>
                                        </div>
                                        <div className="card-body">
                                            <button type="button" onClick={removeCard.bind(this, el.id)} className="btn btn-outline-light">Usuń zadanie</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    else{
                        newCard = <h4 className='my-5 m-auto'>Brak zadań.</h4>
                    }
                    


                    setCard(newCard);
                })
                .catch(err => {
                    console.error(err);
                    setCard(<h4 className='my-5 m-auto'>Wystąpił błąd w połączeniu z bazą.</h4>);
                });
        }
        loadTasks();

    }, []);

    let removeCard = (id) => {
        axios.post('http://20.224.43.111/api/removetask', { idcard: id })
            .then(res => {
                console.log(res);
                loadTasks();
            })
            .catch(err => {
                console.log(err)
            })


    }
    return (
        <div className='m-3'>

            <AddTask />
            <div className='row-100 mt-3 d-flex flex-wrap '>
                {card}
            </div>


        </div>

    )
}
export default ToDo