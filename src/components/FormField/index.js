import React from 'react';

    function FormField({label,tipo, name ,valor, onChange}){
        return (
        <div>
            <label>
            {label}
            <input
                type={tipo}
                value={valor}
                name={name}
                onChange={onChange}
            />
            </label>
        </div>
        )
    }

export default FormField;