import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function Food(props) {
    const [draw, setDraw] = useState([])
    const [inp1, setInp1] = useState('')
    const [inp2, setInp2] = useState('')
    const [inp3, setInp3] = useState('')
    const [inp4, setInp4] = useState('')
    const [file, setFile] = useState('');


    function handleSave() {
        let obj = {
            img: file,
            category: inp1,
            foodname: inp2,
            definition: inp3,
            price: inp4,

        }

        draw.push(obj)
        setDraw([...draw])
    }
    function handleFile(value) {
        let readerFile = new FileReader()
        readerFile.readAsDataURL(value)
        readerFile.onload = () => {
            setFile(readerFile.result)
        }
    }

    return (
        <div>
            <div className='food-name d-flex flex-column gap-3'>
                <div className='d-flex gap-3'>
                    <input type="file" onChange={(e) => { handleFile(e.target.files[0]) }} className='form-control px-3' placeholder='Rasmga yo`l' />
                    <input type="text" onChange={(event) => setInp2(event.target.value)} className='form-control px-3' placeholder='Taom nomi' />
                </div>
                <div><textarea className='form-control' onChange={(event) => setInp3(event.target.value)} placeholder='Ta`rif ' style={{ height: "120px" }} /></div>
                <div className='d-flex gap-3'>
                    <input type="text" onChange={(event) => setInp4(event.target.value)} className='form-control px-3' placeholder='Narxi' />
                    <Form.Select aria-label="Default select example" onChange={(event) => setInp1(event.target.value)} >
                        <option value="Category1">Category1</option>
                        <option value="Category2">Category2</option>
                        <option value="Category3">Category3</option>
                    </Form.Select>
                </div>
                <div className='d-flex justify-content-center'>
                    <button onClick={handleSave} className='btn btn-warning fw-bold'>Qo'shish</button>
                </div>
            </div>


            <table className="table mt-3">
                <thead>
                    <tr><th>T/r</th>
                        <th>Rasm</th>
                        <th>Taom Nomi</th>
                        <th>Ta'rif</th>
                        <th>Narxi</th>
                        <th>Kategory</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        draw.map((item, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td><img style={{ width: "70px" }} src={item.img} alt="" /></td>
                                <td>{item.foodname}</td>
                                <td>{item.definition}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                            </tr>
                        })
                    }



                </tbody>
            </table>
        </div>
    );
}

export default Food;