import React, { useEffect, useState } from 'react'
import BookService from '../../services'
import {useNavigate} from 'react-router-dom'

const Overview = () => {
  const navigate = useNavigate()
  const [ books, setBooks ] = useState([])

  const fetchBooks = async()=>{
    try {
      const { data } = await BookService.getAll();
      setBooks(data)
    } catch (error) {
      alert('Error fetching books')
    }
  }

  const handleDelete = async (id) => {
    try {
      await BookService.delete(id);
      fetchBooks();
    } catch (error) {
      alert('Error deleting book')

    }
  }

  useEffect(()=>{
    fetchBooks()
  }, [])

  return (
    <div>
      <h1>Libros</h1>
      <button onClick={()=>navigate('/form')}>Nuevo libro</button>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button onClick={() => navigate(`/form/${book.id}`)}>Editar</button>
                <button onClick={() => handleDelete(book.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Overview