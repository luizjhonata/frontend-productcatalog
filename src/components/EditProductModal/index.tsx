import React, { useState } from 'react';
import edit from '../../assets/edit.svg';
import Modal from 'react-modal';
import './styles.css';

interface EditProductModalProps {
    productCod: string;
    productDescription: string;
    productWeight: number;
    productPrice: number;
}

const customStyles = {
    content: {
        margin: '50px 11px 50px 11px',
        paddingTop: '20px',
        height: 'fit-content',
        inset: 'inherit',
    },
};

Modal.setAppElement('#root')

function EditProductModal({productCod, productDescription, productWeight, productPrice} : EditProductModalProps) {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const [cod, setCod] = useState<string>(productCod);
    const [description, setDescription] = useState<string>(productDescription);
    const [weight, setWeight] = useState<number>(productWeight);
    const [price, setPrice] = useState<number>(productPrice);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div >
            <img src={edit} alt="Ver Detalhes" onClick={openModal} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className='container-modal'>
                    <div className='edit-content'>
                        <div className='container-close-button'>
                            <button className='close-button' onClick={closeModal}>X</button>
                        </div>
                        <div className='field-modal'>
                            <h2>COD:</h2>
                            <input type="text" value={cod} onChange={(event) => setCod(event.target.value)} />
                        </div>
                        <div className='field-modal'>
                            <h2>DESCRIPTION: </h2>
                            <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
                        </div>
                        <div className='field-modal'>
                            <h2>WEIGHT:</h2>
                            <input type="number" value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))} />
                        </div>
                        <div className='field-modal'>
                            <h2>PRICE:</h2>
                            <input type="number" value={price} onChange={(event) => setPrice(parseFloat(event.target.value))} />
                        </div>
                        <div className='container-save-button'>
                            <button className='save-button'> Salvar Alterações </button>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default EditProductModal