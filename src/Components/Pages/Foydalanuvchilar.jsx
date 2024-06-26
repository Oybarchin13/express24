import React, { useState } from 'react';
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import AdminTemplete from '../AdminTemplete/AdminTemplete';

function Foydalanuvchilar(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user, setUsers] = useState([
        {
            userName: "Abdulaziz Ochilov",
            TelefonRaqami: "+998 93 234 10 23",
            Roli: "Admin",

        },
        {
            userName: "Ergashev Islom",
            TelefonRaqami: "+998 97 888 12 35",
            Roli: "Yetkazuvchi",

        },
        {
            userName: "Samidullayev Bahodir",
            TelefonRaqami: "+998 97 888 12 35", 
            Roli: "Foydalanuvchi",

        }
    ])



    return (
        <AdminTemplete>
            <div className="title">
                <h2 className='fw-bold'>Foydalanuvchilar</h2>
                <p className='text-warning'>Rollarni biriktirishingiz mumkin</p>
            </div>
            <div className="table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>To'liq ismi</th>
                            <th>Telefon raqami</th>
                            <th>Roli</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((v, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{v.userName}</td>
                                    <td>{v.TelefonRaqami}</td>
                                    <td>{v.Roli}</td>
                                    <td className='fs-5 d-flex gap-3'>
                                        <span onClick={handleShow} className='text-dark'><FiEdit3 /></span>
                                        <span className='text-danger'><RiDeleteBin6Line /></span>
                                    </td>

                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>











            <Modal show={show} onHide={handleClose} className='p-5'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center mb-5 mt-3 fs-4'>Foydalanuvchi uchun rol tanglang</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-4'>
                    <Form.Select aria-label="Default select example">
                        <option>Admin</option>
                        <option>Yetkazuvchi</option>
                        <option>Foydalanuvchi</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button style={{ width: "180px" }} className='text-white fw-bold' variant="danger" onClick={handleClose}>
                        Bekor qilish
                    </Button>
                    <Button style={{ width: "180px" }} className='fw-bold' variant="warning" onClick={handleClose}>
                        Saqlash
                    </Button>
                </Modal.Footer>
            </Modal>
        </AdminTemplete>
    );
}

export default Foydalanuvchilar;