import { useEffect, useState } from 'react';
import './styles.css';
import search from '../../assets/search.svg';
import DetailModal from '../DetailModal';
import EditProductModal from '../EditProductModal';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthProvider/useAuth';
import { Products } from '../../contexts/AuthProvider/types';

function ProductPage() {

    const auth = useAuth();

    const token = auth.token;

    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        axios.get("https://productcatalog-product-catalog.up.railway.app/products/", {
            // axios.get("http://localhost:8080/products/", {        
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(response => {
            setProducts(response.data)
        })

    }, []);
    return (
        <div className='product-card'>
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
                            <th className='show590'>ID</th>
                            <th className='show590'>COD</th>
                            <th>DESCRIÇÃO</th>
                            <th className='show860'>PESO (KG)</th>
                            <th>PREÇO</th>
                            <th>DETALHES</th>
                            <th>EDITAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (

                            <tr key={product.id}>
                                <td className='show590'>{product.id}</td>
                                <td className='show590'>{product.cod}</td>
                                <td>{product.description}</td>
                                <td className='show860'>{product.weight}</td>
                                <td>R$ {product.price}</td>
                                <td><DetailModal /></td>
                                <td><EditProductModal /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductPage