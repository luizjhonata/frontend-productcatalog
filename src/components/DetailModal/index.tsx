import React from 'react'
import details from '../../assets/details.svg';
import Modal from 'react-modal';
import './styles.css'
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

function DetailModal() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div >
            <img src={details} alt="Ver Detalhes" onClick={openModal} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            style={customStyles}
            >
                <div className='container-modal'>
                    <button className='close-button' onClick={closeModal}>X</button>
                    <img className='img-detail' src={modalImg} alt="Detalhamento Produto" />
                </div>

            </Modal>
        </div>
    )
}

export default DetailModal