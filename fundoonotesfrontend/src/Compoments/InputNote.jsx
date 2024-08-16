import React, { useState } from 'react'
import '../Style/search.css'
import IconBaar from './IconBaar';





export default function InputNote() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleOpen = () => {
        setIsExpanded(true)
    }

    const handleToggle = () => {
        setIsExpanded(false);
    };

    return (
        <>
            <div className={`note-input ${isExpanded ? 'expanded' : ''}`}>
                {isExpanded && (
                    <div className="note-form">
                        <input type="text" placeholder="Title" className="title-input" />
                    </div>
                )}
                <div className="note-header" onClick={handleOpen}>
                    <input
                        type="text"
                        placeholder="Take a note..."
                        className={`note-input-field ${isExpanded ? 'expanded-field' : ''}`}
                    />
                </div>
                {isExpanded && (
                    <div className="note-footer">
                        <IconBaar />
                        <span className="close-btn" onClick={handleToggle}>Close</span>
                    </div>
                )}

            </div>
        </>
    )
}

