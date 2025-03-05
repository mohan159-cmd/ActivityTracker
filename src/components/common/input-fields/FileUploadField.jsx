import React, { useEffect, useRef, useState } from 'react'
import proptypes from 'prop-types'
import { Button } from 'bootstrap';
import LoadingButton from './LoadingButton';

const FileUploadField = (props) => {

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
  const fileInputRef = useRef(null);
  const [loacalValue, setLocalValue] = useState(value);

  //#region change events
  const handleChange = (ev) => {
      const { files } = ev.target;
      const file = files[0];
      setLocalValue(file)
   }

   //#region click events
   const onClearFile = () => {
        setLocalValue(null);
   }

   const handleClick = () => {
        if (fileInputRef.current) {
                fileInputRef.current.click();
        }
   };

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
           loacalValue 
           ? <div className='child-row-margin-10'>
                <div>{loacalValue.name}</div>
                <div onClick={onClearFile}>Remove File</div>
             </div>
           : <>
                <input 
                    type="file"
                    name={name}
                    className={`form-control ${error ? 'is-invalid' : ''}`} 
                    id={name}
                    placeholder={placeHolder}
                    onChange={handleChange}
                    onBlur={onBlur}
                    value={loacalValue}
                    readOnly={readOnly}
                    disabled={disabled}
                    hidden
                    ref={fileInputRef} />
                <div>
                <button 
                    name={label}
                    onClick={handleClick}
                    class="btn btn-primary">
                        <div className='child-row-margin-10 align-item-center'>
                          <div className=''><i class="bi bi-upload"></i></div>
                          <div>{label}</div>
                        </div>
                </button>
                </div>
                {
                error &&
                <div className="invalid-feedback">
                        {errorMessage}
                </div>
                }
             </>
       
        }
    </div>
)
}

FileUploadField.propTypes = {
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

FileUploadField.defaultProps = {
    type: "text",
    disabled: false,
    required: false,
    readOnly: false,
    errorMessage: "",
    placeHolder: "" ,
    onChange: () => {},
}


export default FileUploadField