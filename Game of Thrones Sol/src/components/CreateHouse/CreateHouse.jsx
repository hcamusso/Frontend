import React from 'react';
import { useDispatch } from 'react-redux';
import { createHouse } from '../../redux/actions';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
    const [input, setInput] = React.useState({
        name: "",
        region: "",
        words: "",
    })
    const handleInputChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const dispatch = useDispatch()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createHouse(input))
    }
    //  store.subscribe(() => {
    //     console.log(store.getState())  // esto consologuea el estado del store
    //  })
    
    return (
        <div>

            <form action="" onSubmit={handleSubmit}>
                <label>Name: </label>
                <input name="name" placeholder='Nombre' onChange={handleInputChange}></input>
                <label>Region: </label>
                <input name="region" placeholder='Nombre' onChange={handleInputChange}></input>
                <label>Words: </label>
                <input name="words" placeholder='Nombre' onChange={handleInputChange}></input>
                <button type="submit" onClick={handleSubmit}>Create</button>
                {/* {console.log(input)} */}
            </form>
        </div>
    );
};

export default CreateHouse;
