import React from "react";
import './MySelect.module.css';
const MySelect = ({options, defaultValue, value, onChange})=> {
return(
    <select className="mySelect"
    value={value}
    onChange={event => onChange(event.target.value)}
        >
            
        <option disabled value="">{defaultValue}</option>
        {options.map(option =>
            <option key={option.value} value={option.value}>
                {option.name}

            </option>
            
            )}
    </select>
    
    
    );


};
export default MySelect;