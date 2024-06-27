import React, { useState, useEffect } from 'react';
import { useAuth } from '../Auth/Store_Token/Utils_Token';
import { useParams } from 'react-router-dom';
import './UpdatePage.css';
export default function Updatepage() {
    const { Authorization } = useAuth();
    const { id } = useParams(); 

    const [contact, setContact] = useState({
        username: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await fetch(`${window.location.origin}/api/form/single/contact/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': Authorization
                    }
                });
                const data = await response.json();
                setContact(data);
            } catch (error) {
                console.error(error);
            }
        };
        if (id) {
            fetchContact();
        }
    }, [id, Authorization]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${window.location.origin}/api/form/users/update/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Authorization
                },
                body: JSON.stringify(contact)
                
            });
            alert("Update successfully")
            setContact({
                username:"",
                email:"",
                phone:""
            })
            
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='updatepage'>
           
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={contact.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Update Contact</button>
            </form>
        </div>
    );
}
