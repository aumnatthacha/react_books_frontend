/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './update.css'; // แนะนำให้ใช้ไฟล์ CSS ที่เหมาะสมสำหรับ "Add" หรือจัดรูปแบบตามต้องการ

const Add = () => {
    const navigate = useNavigate()
    const [book, setBook] = useState({
        name: '',
        description: '',
        img: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBook({
            ...book,
            [name]: value,
        });
    };

    const handleAddBook = () => {
        // ทำสิ่งที่คุณต้องการเพิ่มหนังสือลงในรายการที่คุณเก็บไว้ เช่นใช้ฟังก์ชันเพิ่มข้อมูล
    };

    const handleCancel = () => {
        navigate('/')
    };
    
    return (
        <div>
            <h2 className="text-center">Add Book</h2>
            <form className="container-sm">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        ชื่อหนังสือ:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={book.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        คำอธิบาย:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={book.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">
                        URL รูปภาพ:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="img"
                        name="img"
                        value={book.img}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">ตัวอย่างรูปภาพ:</label>
                    <br />
                    <img
                        src={book.img}
                        className="img-fluid resized-image"
                        alt="รูปภาพ"
                    />
                </div>
                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-success form-control" onClick={handleAddBook}>
                        เพิ่มหนังสือ
                    </button>
                    <button type="button" className="btn btn-danger form-control" onClick={handleCancel}>
                        ยกเลิก
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add;

