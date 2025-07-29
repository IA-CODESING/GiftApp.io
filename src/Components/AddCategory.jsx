import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setImputValue] = useState('')

    const onInputChange = (e) => {
        setImputValue( e.target.value )
    }

    const onSubmit = e => {
        e.preventDefault();
        const cleanInput = inputValue.trim();

        if(cleanInput.length <= 1) return;
        onNewCategory(cleanInput)
        setImputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gift"
                value={inputValue}
                onChange={ onInputChange }
        />
        </form>
    )
}
