import React from 'react'
import './styles.css'
import search from '../../assets/search.svg';
import edit from '../../assets/edit.svg';
import details from '../../assets/details.svg';

function ProductPage() {
    return (
        <div className='product-card'>
            <h2 className='product-title'>Produtos</h2>
            <div className='product-search-container'>
                <h2></h2>
                <input type="text" placeholder="Digite o código do produto" />
                <img src={search} alt="" />

            </div>
            <div>
                <table className='product-table'>
                    <thead>
                        <tr>
                            <th className='show510'>Id</th>
                            <th className='show510'>Cod</th>
                            <th>Description</th>
                            <th className='show850'>Weight</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='show510'>1</td>
                            <td className='show510'>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td className='show850'>16</td>
                            <td>R$ 200.02</td>
                            <td><img src={details} alt="Ver Detalhes" /></td>
                            <td><img src={edit} alt="Editar Produto" /></td>
                        </tr>
                        <tr>
                            <td className='show510'>1</td>
                            <td className='show510'>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td className='show850'>16</td>
                            <td>R$ 200.02</td>
                            <td><img src={details} alt="Ver Detalhes" /></td>
                            <td><img src={edit} alt="Editar Produto" /></td>
                        </tr>
                        <tr>
                            <td className='show510'>1</td>
                            <td className='show510'>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td className='show850'>16</td>
                            <td>R$ 200.02</td>
                            <td><img src={details} alt="Ver Detalhes" /></td>
                            <td><img src={edit} alt="Editar Produto" /></td>
                        </tr>
                        <tr>
                            <td className='show510'>1</td>
                            <td className='show510'>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td className='show850'>16</td>
                            <td>R$ 200.02</td>
                            <td><img src={details} alt="Ver Detalhes" /></td>
                            <td><img src={edit} alt="Editar Produto" /></td>
                        </tr>
                        <tr>
                            <td className='show510'>1</td>
                            <td className='show510'>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td className='show850'>16</td>
                            <td>R$ 200.02</td>
                            <td><img src={details} alt="Ver Detalhes" /></td>
                            <td><img src={edit} alt="Editar Produto" /></td>
                        </tr>
                        <tr>
                            <td className='show510'>1</td>
                            <td className='show510'>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td className='show850'>16</td>
                            <td>R$ 200.02</td>
                            <td><img src={details} alt="Ver Detalhes" /></td>
                            <td><img src={edit} alt="Editar Produto" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>)
}

export default ProductPage