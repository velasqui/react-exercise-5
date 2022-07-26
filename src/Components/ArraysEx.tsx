import { useState, Fragment } from 'react';
import './ArraysEx.css'

interface Pet {
    name: string;
    type: string;
    id: number;
};

function ArraysEx() {
    const [colors, setColors] = useState([
        'Red', 
        'Orange', 
        'Yellow'
    ]);
    const [pets, setPets] = useState([
        {name: 'Rhea', type: 'Cat', id: 517},
        {name: 'Luna', type: 'Cat', id: 248},
        {name: 'Gino', type: 'Dog', id: 796},
    ]);

    const addColor = (color: string) => {
        setColors([...colors, color])
    };

    return (
        <>
            <h1>Arrays Exercise 5</h1>
                <h3>Colors</h3>
                    <ol>
                        {colors.map((color, i) => <li key={i}>{color}</li>)}
                    </ol>
                    <div>
                        <button onClick={() => addColor('Aqua')}>Add Aqua</button>
                        <button onClick={() => addColor('Purple')}>Add Purple</button>
                        <button onClick={() => addColor('Tan')}>Add Tan</button>
                    </div>
                <h3>Pets</h3>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                        {pets.map(pet => 
                            <tr>
                                <td key={pet.id}>{pet.name}</td>
                                <td key={pet.id}>{pet.type}</td>
                                <button>Delete</button>
                            </tr>)
                        }
                    </table>
        </>
    )
}

export default ArraysEx