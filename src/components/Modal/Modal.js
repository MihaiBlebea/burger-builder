import React from 'react';
import './Modal.css';

function Modal(props)
{
    let classes = ['modal-wrapper'];

    if(props.open === true)
    {
        classes.push('open');
    }

    return (
        <div className={classes.join(' ')}>
            <div className="modal">
                <div className="head">
                    <a className="btn-close trigger" onClick={props.toggle.bind(this)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
