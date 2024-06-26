import React, { useState } from 'react';
import AdminTemplete from '../AdminTemplete/AdminTemplete';

function Yetkazilgan(props) {

    const [user, setUsers] = useState([
        {
            userName: "Abdulaziz Ochilov",
            TaomNomi: "Osh",
            Narxi: 20000,
            Soni: 2,
            UmumiyNarx: 40000,
            TelefonRaqami: "+998 97 888 10 27",
            Izoh: "Lorem ipsum"
        },
        {
            userName: "Ergashev Islom",
            TaomNomi: "Osh",
            Narxi: 20000,
            Soni: 1,
            UmumiyNarx: 20000,
            TelefonRaqami: "+998 97 888 12 35",
            Izoh: "Lorem ipsum"
        },
        {
            userName: "Samidullayev Bahodir",
            TaomNomi: "Manti",
            Narxi: 5000,
            Soni: 10,
            UmumiyNarx: 40000,
            TelefonRaqami: "+998 93 234 10 23",
            Izoh: "Lorem ipsum"
        },
        {
            userName: "To'ramurodov Shoislom",
            TaomNomi: "Big Lavash ",
            Narxi: 24000,
            Soni: 3,
            UmumiyNarx: 72000,
            TelefonRaqami: "+998 90 375 67 15",
            Izoh: "Lorem ipsum"
        }
    ])



    return (
        <AdminTemplete>
            <div className="title">
                <h2 className='fw-bold'>Yetkazilgan</h2>
                <p>Yetib kelgan arizalarni kuzatishingiz mumkin</p>
            </div>
            <div className="table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>To'liq ismi</th>
                            <th>Taom nomi</th>
                            <th>Narxi</th>
                            <th>Soni</th>
                            <th>Umumiy narx</th>
                            <th>Telefon raqami</th>
                            <th>Izoh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((v, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{v.userName}</td>
                                    <td>{v.TaomNomi}</td>
                                    <td>{v.Narxi}</td>
                                    <td>{v.Soni}</td>
                                    <td>{v.UmumiyNarx}</td>
                                    <td>{v.TelefonRaqami}</td>
                                    <td>{v.Izoh}</td>
                                </tr>
                            })
                        }

                        

                    </tbody>
                </table>
            </div>
        </AdminTemplete>
    );
}

export default Yetkazilgan