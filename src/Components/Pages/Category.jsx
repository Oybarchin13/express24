import React from 'react';

function Category(props) {
    return (
        <div>
          <div className='category-name'>
                <input type="text" className='form-control py-2 px-3' placeholder='Kategoriya nomi' />
               <div className='d-flex justify-content-center'>
               <button className='btn btn-warning fw-bold'>Qo'shish</button>
               </div>
            </div>  
        </div>
    );
}

export default Category;