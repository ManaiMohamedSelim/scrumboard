import React from 'react'
import { Droppable } from "react-beautiful-dnd";
import Task from './Task';

function Column(props) {

    const { columnId, column } = props

    return (
        <Droppable droppableId={columnId} key={columnId}>
            {(provided, snapshot) => {
                return (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                            background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500
                        }}
                    >
                        {column?.items?.map((item, index) => {
                            return (
                                <Task
                                    key={index}
                                    index={index}
                                    item={item}
                                />
                            );
                        })}
                        {provided.placeholder}
                    </div>
                );
            }}
        </Droppable>
    )
}

export default Column
