import React from 'react'

export const IdleScreenModal= ({showModal, handleClose, remainingTime}) => {

    return(
    <div class="screen-saver" show={showModal} onHide={handleClose}></div>
    )
}
