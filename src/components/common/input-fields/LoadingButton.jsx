import React from 'react'
import proptypes from 'prop-types'

const LoadingButton = (props) => {

  //#region props
  const {
    name,
    onClick,
    loading,
    disabled
  } = props; 

  //#region return
  return (
    <button class="btn btn-primary" type="button" onClick={onClick} disabled={disabled || loading}>
        {
            loading && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        }
        {name}
    </button>
  )
}

LoadingButton.propTypes = {
  name: proptypes.string,
  onClick: proptypes.func,
  loading: proptypes.bool,
  disabled: proptypes.bool
}

LoadingButton.defaultProps = {
  name: "SIGN IN",
  onClick: () => {},
  loading: false,
  disabled: false
}



export default LoadingButton