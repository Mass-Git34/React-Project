import React from 'react';
import './TaskOne.css'; // Import the CSS file for styling

const TaskOne = () => {
    return (
        <div className="container">
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="box">
                    Page {index + 1}
                </div>
            ))}
        </div>
    );
};

export default TaskOne;
