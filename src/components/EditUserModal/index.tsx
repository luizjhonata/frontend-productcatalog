import React from 'react';
import edit from '../../assets/edit.svg';
import Modal from 'react-modal';
import './styles.css';

const customStyles = {
    content: {
        margin: '50px 11px 50px 11px',
        paddingTop: '20px',
        height: 'fit-content',
        inset: 'inherit',
    },
};

Modal.setAppElement('#root')

function EditUserModal() {

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
                            <h2>NAME:</h2>
                            <input type="text" value="NOME DO USUÁRIO" />
                        </div>
                        <div className='field-modal'>
                            <h2>USERNAME: </h2>
                            <input type="text" placeholder='luizjhonata' />
                        </div>
                        <div className='field-modal'>
                            <h2>PASSWORD:</h2>
                            <input type="text" placeholder='SENHA' />
                        </div>
                        <div className='field-modal'>
                            <h2>ADMIN:</h2>
                            <div>
                                <input type="checkbox" checked />
                            </div>
                        </div>
                        <div className='container-save-button'>
                            <button className='save-button'> Salvar Alterações </button>
                        </div>
                    </div>
                </div>

            </Modal >
        </div >
    )
}

export default EditUserModal