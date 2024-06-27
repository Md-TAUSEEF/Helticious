import React, { useState, useEffect } from 'react';
import { useAuth } from '../Auth/Store_Token/Utils_Token';
import { NavLink } from 'react-router-dom';
import './Admin.css';
const AdminDashboard = () => {
    const [contacts, setContacts] = useState([]);
    const { Authorization } = useAuth(); 

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch(`${window.location.origin}/api/form/getall`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': Authorization
                    }
                });
                const data = await response.json();
                setContacts(data.alluser);
            } catch (error) {
                console.error(error);
            }
        };
        fetchContacts();
    }, [Authorization]);

    const handleDelete = async (id) => {
        try {
            await fetch(`${window.location.origin}/api/form/contact/delet/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Authorization
                }
            });
            setContacts(contacts.filter(contact => contact._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='Admindashboard'>
            <h2>Contact List</h2>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact._id}>
                        <strong>{contact.username}</strong> - {contact.email} - {contact.phone} - {contact.msg}
                        <button onClick={() => handleDelete(contact._id)}>Delete</button>
                        <NavLink to={`/update/${contact._id}`}>
                            <button>Update</button>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
