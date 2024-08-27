// TodoList.jsx

function TodoList({ todoList }) {
    return (
        <ul className="space-y-2">
            {todoList.map((listItem, index, handleToggle) => {
                return <li id={index} key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-200">
                    <span className="text-gray-800">{listItem.item}</span>
                    <div> 

                    <button
                    onClick={()=> handleToggle(listItem.id)}
                        className="bg-blue-500 text-white rounded-lg px-2 py-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-500 mx-2"
                        disabled
                    >
                        Done
                    </button>
                    <button
                        className="bg-red-500 text-white rounded-lg px-2 py-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        disabled
                    >
                        Delete
                    </button>
                    </div>
                </li>

            })}

{/* 
            <li className="flex items-center justify-between p-2 rounded-lg bg-gray-200">
                <span className="text-gray-800">Sample Todo 2</span>
                <button
                    className="bg-red-500 text-white rounded-lg px-2 py-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    disabled
                >
                    Delete
                </button>
            </li> */}
        </ul>
    );
}

export default TodoList;
