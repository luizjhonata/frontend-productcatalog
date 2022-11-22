import React from 'react';
import './styles.css';
import search from '../../assets/search.svg';
import DetailModal from '../DetailModal';
import EditProductModal from '../EditProductModal';

function ProductPage() {
    return (
        <div className='product-card'>
            {/* <h2 className='product-title'>PRODUTOS</h2> */}
            <div className='product-search-container'>
                <input type="text" placeholder="Digite o código do produto" />
                <button className='search-button'>
                    <img src={search} alt="" />
                </button>

            </div>
            <div>
                <table className='product-table'>
                    <thead>
                        <tr>
                            <th className='show510'>ID</th>
                            <th className='show510'>COD</th>
                            <th>DESCRIÇÃO</th>
                            <th className='show850'>PESO</th>
                            <th>PREÇO</th>
                            <th>DETALHES</th>
                            <th>EDITAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='show510'>1</td>
                            <td className='show510'>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td className='show850'>16</td>
                            <td>R$ 200.02</td>
                            <td><DetailModal /></td>
                            <td><EditProductModal /></td>
                        </tr>
                        <tr>
                            <td className='show510'>2</td>
                            <td className='show510'>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td className='show850'>16</td>
                            <td>R$ 200.02</td>
                            <td><DetailModal /></td>
                            <td><EditProductModal /></td>
                        </tr>
                        <tr>
                            <td className='show510'>3</td>
                            <td className='show510'>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td className='show850'>16</td>
                            <td>R$ 200.02</td>
                            <td><DetailModal /></td>
                            <td><EditProductModal /></td>
                        </tr>
                        <tr>
                            <td className='show510'>4</td>
                            <td className='show510'>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td className='show850'>16</td>
                            <td>R$ 200.02</td>
                            <td><DetailModal /></td>
                            <td><EditProductModal /></td>
                        </tr>
                        <tr>
                            <td className='show510'>5</td>
                            <td className='show510'>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td className='show850'>16</td>
                            <td>R$ 200.02</td>
                            <td><DetailModal /></td>
                            <td><EditProductModal /></td>
                        </tr>
                        <tr>
                            <td className='show510'>6</td>
                            <td className='show510'>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td className='show850'>16</td>
                            <td>R$ 200.02</td>
                            <td><DetailModal /></td>
                            <td><EditProductModal /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>)
}

export default ProductPage