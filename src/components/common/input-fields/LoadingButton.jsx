import React from 'react'
import proptypes from 'prop-types'

const LoadingButton = (props) => {

  //#region props
  const {
    name,
    onClick,
    loading,
    disabled,
    btnColor,
    iconName
  } = props; 

  //#region return
  return (
    <button 
        className={`btn ${btnColor ? btnColor : 'btn-primary'} d-flex align-items-center justify-content-center px-3 py-2`} 
        type="button" 
        onClick={onClick} 
        disabled={disabled || loading}>
        {loading && (
            <span 
                className="spinner-border spinner-border-sm me-2" 
                role="status" 
                aria-hidden="true">
            </span>
        )}
        <div className="d-flex align-items-center gap-2">
            {iconName && <i className={`${iconName} fs-5 mb-1`}></i>}
            <div>{name}</div>
        </div>
    </button>
  )
}

LoadingButton.propTypes = {
  name: proptypes.string,
  onClick: proptypes.func,
  loading: proptypes.bool,
  disabled: proptypes.bool,
  className: proptypes.string,
  btnColor: proptypes.string,
  iconName: proptypes.string
}

LoadingButton.defaultProps = {
  name: "SIGN IN",
  onClick: () => {},
  loading: false,
  disabled: false,
  btnColor: "btn-primary",
  iconName: ""
}



export default LoadingButton