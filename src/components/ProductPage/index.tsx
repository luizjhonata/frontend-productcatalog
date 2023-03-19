import { useEffect, useState } from 'react';
import './styles.css';
import searchIco from '../../assets/search.svg';
import DetailModal from '../DetailModal';
import EditProductModal from '../EditProductModal';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthProvider/useAuth';
import { Products } from '../../contexts/AuthProvider/types';
import { toast } from 'react-toastify';
import { urlApi } from '../../services/api';

function ProductPage() {

    const auth = useAuth();

    const token = auth.token;

    const [products, setProducts] = useState<Products[]>([]);

    const [loadProducts, setLoadProducts] = useState("");

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onSearch({ loadProducts })
    }

    async function onSearch(values: { loadProducts: string; }) {
        if (values.loadProducts) {
            await axios.get(`${urlApi}/products/cod/${values.loadProducts}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then(response => {
                const result = response.data;
                if (Object.keys(result)[0] == undefined) {
                    toast.warning('Product not finded',
                        {
                            position: "top-center",
                            autoClose: 2500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                }
                else {
                    setProducts(response.data)
                }
            });

        }
        else {
            toast.warning('Type a valid code',
                {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
        }
    }

    useEffect(() => {
        const productsToload = loadProducts;
        axios.get(`${urlApi}/products/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(response => {
            setProducts(response.data);
        })

    }, []);
    return (
        <div className='product-card'>
            <div className='product-search-container'>
                <form className='form' onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Digite o código do produto"
                        value={loadProducts}
                        onChange={(e) => setLoadProducts(e.target.value)}
                    />
                    <button className='search-button' type="submit">
                        <img src={searchIco} alt="" />
                    </button>
                </form>
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
                                <td className='show860'>{product.weight.toFixed(1)}</td>
                                <td>R$ {product.price.toFixed(2)}</td>
                                <td><DetailModal
                                    detailImg={product.details} />
                                </td>
                                <td><EditProductModal
                                    productCod={product.cod}
                                    productDescription={product.description}
                                    productPrice={product.price}
                                    productWeight={product.weight} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductPage