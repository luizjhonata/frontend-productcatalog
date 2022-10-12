import React from 'react';
import edit from '../../assets/edit.svg';
import Modal from 'react-modal';
import './styles.css';
import modalImg from '../../assets/curva11.png';

const customStyles = {
    content: {
        margin: '50px 11px 50px 11px',
        paddingTop: '20px',
        height: 'fit-content',
        inset: 'inherit',
    },
};

Modal.setAppElement('#root')

function EditModal() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

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
                            <input type="text" placeholder='C11JGSDN80' />
                        </div>
                        <div className='field-modal'>
                            <h2>DESCRIPTION: </h2>
                            <input type="text" placeholder='CURVA 11º BOLSA DN80' />
                        </div>
                        <div className='field-modal'>
                            <h2>WEIGHT:</h2>
                            <input type="text" placeholder='23' />
                        </div>
                        <div className='field-modal'>
                            <h2>PRICE:</h2>
                            <input type="text" placeholder='200' />
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

export default EditModal