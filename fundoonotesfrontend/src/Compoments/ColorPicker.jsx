import React, { useState } from 'react';
import '../Style/ColorPicker.css'; // Assuming the CSS is in the same directory

const colors = [
    '#000', '#a53265', '#b65483', '#a1b6c9', '#123456',
    '#678910', '#135910', '#F2927B', '#246810', '#987654',
    '#654321', '#F29677', '#456321', '#987123'
];

export default function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className="color-picker-container" style={{ backgroundColor: selectedColor }}>
            <div className="color-picker">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorSelect(color)}
                    >
                        {selectedColor === color && <span className="checkmark">✔</span>}
                    </div>
                ))}
            </div>
        </div>
    );
}
