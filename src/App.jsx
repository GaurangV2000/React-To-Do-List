import react, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {

    const [inputList, setinputList] = useState();
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setinputList(event.target.value);

    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setinputList("");

    };

    const deleteItems = (id) => {

        setItems((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id;
            })
        })
    }


    return (
        <>
            <div className="main_div">
                <div className="center-div">
                    <br />
                    <h1>TO-DO LIST</h1>
                    <br />
                    <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>
                    <ol>
                        {items.map((itemVal, index) => {
                            return <ToDoList key={index} id={index} text={itemVal} onSelect={deleteItems} />;
                        })
                        }
                    </ol>
                </div>

            </div>
        </>
    )
};

export default App;