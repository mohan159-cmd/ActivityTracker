import React from 'react'

const LoadingBar = () => {
    return (
        <div className='d-flex'
           style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <div class="spinner-grow text-primary" role="status">
            </div>
            <div class="spinner-grow text-secondary" role="status">
            </div>
            <div class="spinner-grow text-success" role="status">
            </div>
            <div class="spinner-grow text-danger" role="status">
            </div>
            <div class="spinner-grow text-warning" role="status">
            </div>
            <div class="spinner-grow text-info" role="status">
            </div>
            <div class="spinner-grow text-light" role="status">
            </div>
            <div class="spinner-grow text-dark" role="status">
            </div>
        </div>
    )
}

export default LoadingBar