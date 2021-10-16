import classes from './Modal.module.css'
import React from 'react';
import ReactDOM from 'react-dom';
const Backdrop = props => {
    return(
        <div className={classes.backdrop} onClick={props.onClose}>

        </div>
    )
};

const ModalOverlay = props =>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )

}
const portalElement = document.getElementById('overlays')
const Modal = (props) => {
    return(
        <React.Fragment>
        {/* createPortal takes in 2 arguments. 1st is what to partal and 2nd is where to portal */}
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </React.Fragment>

    )

};

export default Modal;