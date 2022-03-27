import react from "react";

const ToDoList = (props) => {
    
    return (
        <>
            <div className="toDo-style">
                <i class="far fa-times-circle" onClick={() => {
                    props.onSelect(props.id)
                }}></i>
                <li> {props.text}</li>
            </div>
        </>

    )
};

export default ToDoList;