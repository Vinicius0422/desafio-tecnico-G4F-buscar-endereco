import React from 'react';
import './input.css';

interface InputProps {
    disabled?: boolean;
    label: string;
    type: string;
    value: string;
}

export const Input = ({ disabled, label, type, value }: InputProps) => {

    return(
        <div className="inputContainer flexColumn">
            <label className="inputLabel">{label}</label>
            <input className="inputBox inputNotAllowed" type={type} value={value} disabled />
        </div>
    )
}