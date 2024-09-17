import React, { useState, createContext } from 'react';
import '../Style/ColorPicker.css'; // Assuming the CSS is in the same directory
import { useParams } from 'react-router-dom';
import { colorChange } from '../Services/NoteService';


const colors = [
    "#000", "#a53265", "#123456",
    "#678910", "#135910", "#987654",
    "#654321", "#F29677", "#456321", "#987123",
    "#BB86FC",
    "#03DAC6",
    "#CF6679",
    "#E0E0E0",
    "#3A3A3A",
    "#B0BEC5",
    "#FFB74D",
    "#80CBC4"
];

export default function ColorPicker({ setNoteCreated, input, handleCol }) {

    const UserContext = createContext()

    const { id } = useParams();
    const [selectedColor, setSelectedColor] = useState('');

    const send = async (color) => {

        const res = await colorChange(id, color);

        setNoteCreated(true)
        console.log(res);
    }

    const handleColorSelect = (color) => {
        setSelectedColor(color);
        handleCol(color)
        if (!input && color) {
            send(color);
        }

    };

    return (
        <>
            <UserContext.Provider value={selectedColor}>
                <div className="color-picker-container" style={{ backgroundColor: selectedColor }}>
                    <div className="color-picker">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
                                style={{ backgroundColor: `${colors[index]}` }}
                                onClick={() => handleColorSelect(colors[index])}
                            >
                                {selectedColor === color && <span className="checkmark">✔</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </UserContext.Provider>
        </>
    );
}
