import React from 'react';
import AdminTemplete from '../AdminTemplete/AdminTemplete';
import { Route, Routes } from 'react-router';
import Category from './Category';
import Food from './Food';
import { Link } from 'react-router-dom';

function Qoshish(props) {
    return (
        <AdminTemplete>
            <div className='title'>
                <h2 className='fw-bold'>Qo'shish</h2>
                <p>Yangi kategoriya/taom qo'shish</p>
            </div>
            <div className='ctegory-btn'>
                <Link to = {"ctegory"} className='btn btn-warning fw-bold me-3'>Kategoriya</Link>
                <Link to = {"food"} className='btn btn-warning fw-bold'>Taom</Link>
            </div>
            {/* <div className='category-name'>
                <input type="text" className='form-control py-2 px-3' placeholder='Kategoriya nomi' />
               <div className='d-flex justify-content-center'>
               <button className='btn btn-warning fw-bold'>Qo'shish</button>
               </div>
            </div> */}
            {/* <div className='d-flex flex-column gap-3'>
                <div className='d-flex gap-3'>
                    <input type="text" className='form-control px-3' placeholder='Rasmga yo`l' />
                    <input type="text" className='form-control px-3' placeholder='Taom nomi' />
                </div>
                <div><textarea  className='form-control' placeholder='Ta`rif ' style={{height:"160px"}} /></div>
                <div className='d-flex gap-3'>
                    <input type="text" className='form-control px-3' placeholder='Narxi' />
                    <input type="text" className='form-control px-3' placeholder='Kategoriya' />
                </div>
            </div> */}
            <Routes>
                <Route path='ctegory' element = {<Category/>}></Route>
                <Route path='food' element = {<Food/>}></Route>
            </Routes>
        </AdminTemplete>
    );
}

export default Qoshish;