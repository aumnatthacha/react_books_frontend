/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './update.css';

const Update = () => {
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const navigate = useNavigate()
    const [books, setbooks] = useState({
        name: '',
        description: '',
        img: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setbooks({
            ...books,
            [name]: value,
        });
    };

    const handleUpdatebooks = () => {

    };


    const handleCancel = () => {
        navigate('/')
    };
    return (
        <div>
            <h2 className="text-center">Update Books</h2>
            {updateSuccess && (
                <div className="alert alert-success form-label" role="alert">

                </div>
            )}
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
                        value={books.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">
                        ประเภท:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="type"
                        name="type"
                        value={books.description}
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
                        value={books.imageURL}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">ตัวอย่างรูปภาพ:</label>
                    <br />
                    <img
                        src={books.imageURL}
                        className="img-fluid resized-image"
                        alt="รูปภาพ"
                    />
                </div>
                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-success form-control" onClick={handleUpdatebooks}>
                        อัปเดตหนังสือ:
                    </button>
                    <button type="button" className="btn btn-danger form-control" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;
