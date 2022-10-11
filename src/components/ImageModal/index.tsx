import React from 'react'
import details from '../../assets/details.svg';
import Modal from 'react-modal';
import './styles.css'
import modalImg from '../../assets/curva11.png';

const customStyles = {
    content: {
        top: '20%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
    },
};

Modal.setAppElement('#root')

function ImageModal() {

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
                <button className='close-button' onClick={closeModal}>X</button>
                <img className='img-detail' src={modalImg} alt="Detalhamento Produto" />


            </Modal>
        </div>
    )
}

export default ImageModal