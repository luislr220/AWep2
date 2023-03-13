import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({ task }) {

const {deleteTask}=useContext(TaskContext)
  return (
    <div className= 'bg-slate-800 text-white p-4 rounded-md m-4'>
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className='text-gray-500 text-sm'>{task.description}</p>
      <h1 className='text-gray-500 text-sm'>{task.price}</h1>
      <h1 className='text-gray-500 text-sm'>{task.images}</h1>
      <button className='bg-red-500 px-2 py-1 roounded-md mt-4 hover:bg-red-400'
      onClick={() => deleteTask(task.id)}>Eliminar producto</button>
    </div>
  );
}

export default TaskCard;
