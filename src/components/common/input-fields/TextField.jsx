import React, { useEffect, useState } from 'react'
import proptypes from 'prop-types'

const TextField = (props) => {

  //#region props
  const {
    name,
    label,
    value,
    error,
    onChange,
    onBlur,
    type,
    disabled,
    required,
    readOnly,
    errorMessage,
    placeHolder
  }  = props;
  
  //#region variables
  const [loacalValue, setLocalValue] = useState(value);

  //#region change events
  const handleChange = (e) => {
        setLocalValue(e.target.value)
   }

   //#region useeffect
   useEffect(() => {
          setLocalValue(value)
   }, [value])

   useEffect(() => {
        if(onChange) {
            onChange(name,loacalValue)
        }
    }, [loacalValue])

  //#region return
return (
    <div className="form-group">
            {
                    label !== "" &&
                    <label htmlFor={name}>
                            {label}
                            {required && <span className="text-danger">*</span>}
                    </label>
            }
            <input 
                 type={type}
                 name={name}
                 className={`form-control ${error ? 'is-invalid' : ''}`} 
                 id={name}
                 placeholder={placeHolder}
                 onChange={handleChange}
                 onBlur={onBlur}
                 value={loacalValue}
                 readOnly={readOnly}
                 disabled={disabled} />
            {
                    error &&
                    <div className="invalid-feedback">
                            {errorMessage}
                    </div>
            }
    </div>
)
}

TextField.propTypes = {
    name: proptypes.string.isRequired,
    label: proptypes.string,
    value: proptypes.string,
    error: proptypes.bool,
    onChange: proptypes.func,
    onBlur: proptypes.func,
    placeholder: proptypes.string,
    type: proptypes.string,
    disabled: proptypes.bool,
    required: proptypes.bool,
    readOnly: proptypes.bool,
    errorMessage: proptypes.string,
    placeHolder: proptypes.string
}

TextField.defaultProps = {
    type: "text",
    disabled: false,
    required: false,
    readOnly: false,
    errorMessage: "",
    placeHolder: "" ,
    onChange: () => {},
}


export default TextField