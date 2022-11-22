import React from 'react'
import EditUserModal from '../EditUserModal';
import './styles.css';

function UserPage() {
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
                        <tr>
                            <td className='show510'>1</td>
                            <td>JHONATA LUIZ</td>
                            <td>luizjhonata</td>
                            <td className='user-admin'><input type = "checkbox" checked /></td>
                            <td><EditUserModal/></td>

                        </tr>
                        <tr>
                            <td className='show510'>2</td>
                            <td>JOÃO GOMES</td>
                            <td>joaogomes</td>
                            <td className='user-admin'><input type = "checkbox" value = "unchecked" disabled readOnly/></td> 
                            <td><EditUserModal/></td>                       
                        </tr>
                        <tr>
                            <td className='show510'>3</td>
                            <td>JOSÉ OLIVEIRA</td>
                            <td>jose</td>
                            <td className='user-admin'><input type = "checkbox" value = "unchecked" disabled readOnly/></td>
                            <td><EditUserModal/></td>
                        </tr>
                        <tr>
                            <td className='show510'>4</td>
                            <td>MARIA FERNANDA</td>
                            <td>maria</td>
                            <td className='user-admin'><input type = "checkbox" checked/></td>
                            <td><EditUserModal/></td>
                        </tr>
                        <tr>
                            <td className='show510'>5</td>
                            <td>RENATA SANTOS</td>
                            <td>renata</td>
                            <td className='user-admin'><input type = "checkbox" value = "unchecked" disabled readOnly/></td>
                            <td><EditUserModal/></td>
                        </tr>
                        <tr>
                            <td className='show510'>6</td>
                            <td>RODRIGO PESSOA</td>
                            <td>rodrigo</td>
                            <td className='user-admin'><input type = "checkbox" value = "unchecked" disabled readOnly/></td>
                            <td><EditUserModal/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserPage