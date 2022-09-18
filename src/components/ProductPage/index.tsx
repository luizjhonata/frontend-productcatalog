import React from 'react'
import './styles.css'

function ProductPage() {
    return (
        <div className='product-card'>
            <h2 className='product-title'>Produtos</h2>
            <div>
                <table className='product-table'>
                    <thead>
                        <tr>
                            <th>Cod</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>C11JGSDN80</td>
                            <td>CURVA 11º BOLSA DN80</td>
                            <td>R$ 200.02</td>
                        </tr>
                        <tr>
                            <td>C45JGSDN80</td>
                            <td>CURVA 45º BOLSA DN80</td>
                            <td>R$ 267.02</td>
                        </tr>
                        <tr>
                            <td>EBFDN100</td>
                            <td>EXTREMIDADE BOLSA FLANGE DN100</td>
                            <td>R$ 299.02</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>)
}

export default ProductPage