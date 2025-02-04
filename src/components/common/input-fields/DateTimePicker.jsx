import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import proptypes from 'prop-types'

const DateTimePicker = (props) => {

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
   const handleDateChange = (date) => {
    setLocalValue(date);
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
     <div className="">
       <DatePicker 
        selected={loacalValue} 
        placeholderText={placeHolder || 'Select Date and Time'}
        onChange={handleDateChange} 
        showTimeSelect 
        dateFormat="Pp" 
        className="datepicker-input" />
     </div>
  );
};


DateTimePicker.propTypes = {
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

DateTimePicker.defaultProps = {
    type: "text",
    disabled: false,
    required: false,
    readOnly: false,
    errorMessage: "",
    placeHolder: "" ,
    onChange: () => {},
}


export default DateTimePicker;