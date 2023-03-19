import axios from 'axios';
import { useEffect, useState } from 'react';
import { IUser } from '../../contexts/AuthProvider/types';
import { useAuth } from '../../contexts/AuthProvider/useAuth';
import { urlApi } from '../../services/api';
import EditUserModal from '../EditUserModal';
import './styles.css';

function UserPage() {

    const auth = useAuth();

    const token = auth.token;

    const [users, setUser] = useState<IUser[]>([]);

    useEffect(() => {
            axios.get(`${urlApi}/users/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(response => {
            setUser(response.data)
        })

    }, []);
    return (

        <div className='user-card'>
            <div>
                <table className='user-table'>
                    <thead>
                        <tr>
                            <th className='show510'>ID</th>
                            <th>NAME</th>
                            <th>USERNAME</th>
                            <th>ADMIN</th>
                            <th>EDITAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className='show510'>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td className='user-admin'><input type="checkbox" checked /></td>
                                <td><EditUserModal /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserPage