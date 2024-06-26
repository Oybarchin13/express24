import React from 'react';
import StyleTemplete from './StyleTemplete';
import logo from "../../../Img/image 15.png"
import icon1 from "../../../Img/icon1.png"
import icon2 from "../../../Img/icon2.png"
import icon3 from "../../../Img/icon3.png"
import icon4 from "../../../Img/icon4.png"
import icon5 from "../../../Img/icon5.png"
import { IoIosMenu } from "react-icons/io";
import { LuUserCircle } from "react-icons/lu";
import Qoshish from '../Pages/Qoshish';
import Arizalar from '../Pages/Arizalar';
import Foydalanuvchilar from '../Pages/Foydalanuvchilar';
import { Link } from 'react-router-dom';

function AdminTemplete({ children }) {
    return (
        <div>
            <StyleTemplete className='w-100 d-flex'>
                <div className="menu shadow position-sticky top-0 z-2">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <ul className='p-0'>
                            <Link to={"/"} className='text-dark' style={{ textDecoration: "none" }}>
                                <li className='d-flex py-2 px-3 rounded mb-2 '>
                                    <div className="list-icon pe-3"><img src={icon1} alt="" /></div>
                                    <div><span className='fw-bold fs-6'>Arizalar</span><span className='span-teg2'>Yetib kelgan arizalarni kuzatishingiz mumkin</span></div>
                                </li>
                            </Link>
                            <Link to={"/yetkazilgan"} className='text-dark' style={{ textDecoration: "none" }}>
                                <li className='d-flex py-2 px-3 rounded  mb-2'>
                                    <div className="list-icon pe-3"><img src={icon2} alt="" /></div>
                                    <div><span className='fw-bold fs-6'>Yetkazilgan</span><span className='span-teg2'>Yetkazilgan taomlar ro'yxati bilan tanishing</span></div>
                                </li>
                            </Link>
                            <li className='d-flex py-2 px-3 rounded  mb-2'> <div className="list-icon pe-3"><img src={icon3} alt="" /></div> <div><span className='fw-bold fs-6'>Statistika</span><span className='span-teg2'>Diagrammalar bilan ishlangan statistika</span></div></li>
                            <Link to={"/qoshish"} className='text-dark' style={{ textDecoration: "none" }}>
                                <li className='d-flex py-2 px-3 rounded  mb-2'>
                                    <div className="list-icon pe-3"><img src={icon4} alt="" /></div>
                                    <div><span className='fw-bold fs-6'>Qo'shish</span><span className='span-teg2'>Yangi kategoriya/taom qo'shish</span></div>
                                </li>
                            </Link>
                            <Link to={"/foydalanuvchilar"} className='text-dark' style={{ textDecoration: "none" }}>
                                <li className='d-flex py-2 px-3 rounded  mb-2'>
                                    <div className="list-icon pe-3"><img src={icon5} alt="" /></div>
                                    <div><span className='fw-bold fs-6'>Foydalanuvchilar</span><span className='span-teg2'>Rollarni biriktirishingiz mumkin</span></div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className='d-flex flex-column flex-row'>
                    <header className='border  d-flex justify-content-between align-items-center'>
                        <div className='menu-icon fs-2'><IoIosMenu /></div>
                        <div className='user-icon fs-2'><LuUserCircle /></div>
                    </header>
                    <div className='py-3 px-5'>
                        {children}
                    </div>
                </div>
            </StyleTemplete>
        </div>
    );
}

export default AdminTemplete;