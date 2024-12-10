import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task/Task';
import './column.css';

const Column = ({ stage, tasks, onDelete}) => {
    return (
        <div className="column">
            <h3 className="column-title">{stage}</h3>
            <Droppable droppableId={stage}>
                {(provided, snapshot) => (
                    <div
                        className={`task-list ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => (
                            <Task key={task._id} task={task} index={index} onDelete={onDelete}/>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
