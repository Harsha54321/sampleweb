import React, { useActionState } from 'react'
import "./Dashboard.css"

export default function Dashboard() {

  const addTodoAction = (todos, formData) => {
    const timings = formData.get("timings")
    const subject = formData.get("subject")

    if (!timings.trim() || !subject.trim()) return todos;

    const newEntry = {
      id: Date.now(),
      timings,
      subject,
    }
    return [...todos, newEntry]
  }

  const deleteAction = (todos, formData) => {
    const id = Number(formData.get("id"))
    return todos.filter((item) => item.id !== id)
  }

  const [todos, addAction] = useActionState(addTodoAction, [])
  const [updatedTodos, deleteActionFn] = useActionState(deleteAction, todos)

  const finalTodos = updatedTodos.length ? updatedTodos : todos;

  return (
    <div className='page'>
      <div className='container'>
        <h2 className='title'>Class Timings</h2>

        <form action={addAction} className='form'>
          <input type="text" name='timings' placeholder='Enter timings' className='input' />
          <input type="text" name='subject' placeholder='Enter subject' className='input' />
          <button type='submit' className='addButton'>Add Class</button>
        </form>

        <table className='classTable'>
          <thead>
            <tr>
              <th>Timing</th>
              <th>Subject</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {finalTodos.map((items) => (
              <tr key={items.id}>
                <td data-label="Timing">{items.timings}</td>
                <td data-label="Subject">{items.subject}</td>

                <td data-label="Delete">
                  <form action={deleteActionFn}>
                    <input type="hidden" name='id' value={items.id} />
                    <button className='deleteButton'>Delete</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
