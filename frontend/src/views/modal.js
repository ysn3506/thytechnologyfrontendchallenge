import React from 'react';
import PropTypes from "prop-types";
import Button from '../components/button';


function Modal({closeAction, content, withButton }) {

    const handleClose = () => closeAction && closeAction()

    return (
        <div className='flight-modal' onClick={handleClose}>
            <div className='flight-inner'>
                {content}
                {withButton && <Button content={"KAPAT"} onClickAction={handleClose} classes="search-input-button"/>}
            </div>
        </div>
    );
}

Modal.propTypes = {
    closeAction: PropTypes.func,
    content: PropTypes.string,
    withButton:PropTypes.bool
}

export default Modal;