import { useState, useReducer } from 'react';



import './App.css';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import tasksReducer from './taskReducer';
let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: false }, {
    id: 1, text: 'Watch a puppet show', done: false
  },
  { id: 2, text: 'Lennon Wall pic', done: true }
]
function App() {
  // const [tasks, setTasks] = useState(initialTasks);
  // alter to use state i a using useReducer
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)


  const handleAddTask = (text) => {

    // const newObject = {
    //   id: nextId++,
    //   text: text, done: false
    // }
    // setTasks([...tasks, newObject]);
    // alternative to above task
    dispatch({
      type:'NEW_TASK',
      payload:{
        id:nextId++,
        text,
        done:false
      }

    })

  }


  // ok now here handlers
  function handleDeleteTask(taskId) {

    // logic version 1
    // setTasks(tasks.filter((task) => task.id !== taskId));
    // logic version 2
    dispatch({
      type:'DELETE_TASK',

    })

  }

  function handleChangeTask(task) {
    // console.log('changing task', task)
    // setTasks(tasks.map((t) => t.id === task.id ? task : t))

    dispatch({
      type:'TOGGLE_TASK_CHECKBOX',
      payload:{id:task.id}
    })
  }


  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}

      />

    </>
  );
}

export default App;
