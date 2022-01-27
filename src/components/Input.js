import { Input as InputAnt, Button } from 'antd';
import React, { useState } from 'react';
import './Input.css';
import { useAlert } from 'react-alert'

const Input = ({ addItem }) => {

    const inputRef = React.createRef();
    const [error, setError] = useState(false);
    const alert = useAlert();

    const handleChange = (value) => {
        if (value.length > 0) setError(false);
    }

    const onAdd = () => {
        if (inputRef.current.state.value) {
            addItem(inputRef.current.state.value);
            inputRef.current.state.value = '';
        } else {
            setError(true);
            alert.error('Пожалуйста, заполните поле');
        }
    }

    return (
        <div className="input">
            <InputAnt
                className={`input__input" ${error ? "input__input_error" : ''}`}
                ref={inputRef}
                onChange={(e) => handleChange(e.target.value)}
            />
            <Button type="primary" onClick={() => onAdd()}>Submit</Button>
        </div>
    )
}

export default Input;