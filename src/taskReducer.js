// reducer function 
export default function tasksReducer(state, action) {

    switch (action.type) {
        case "NEW_TASK":
            return [...state, action.payload]
        case "DELETE_TASK": {
            const id = action.id;
            return state.map((task) => task.id !== id)
        }
        case "TOGGLE_TASK_CHECKBOX":

            // logic toggle toggle check box
            {
                const id = action.payload.id
                const taskToChange = state.find(task => task.id === id)
                const changedTask = { ...taskToChange, done: !taskToChange.done }
                return state.map(task => task.id !== id ? task : changedTask)

            }



        default: {
            throw Error('unknown action')
        }

    }


}
