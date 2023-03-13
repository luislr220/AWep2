import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


function TaskForm() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [images, setImages] = useState("")
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
      price,
      images
    })

    setTitle('')
    setDescription('')
    setPrice('')
    setImages('')
  }


  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
        <h1 className='text-2xl font-bold text-white mb-3'>Productos</h1>
        <input placeholder="Escribe tu producto"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus

        />

        <input placeholder="Descripción del producto"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          autoFocus
        />

        <textarea placeholder="Escribe la descripcion de tu producto"
          onChange={e => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-4 w-full mb-2"
        ></textarea>

        <input placeholder="Precio del producto"
          onChange={(e) => setImages(e.target.value)}
          value={images}
          autoFocus
        />


        <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
