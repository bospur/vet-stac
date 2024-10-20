
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TodoList } from './TodoList'
import {describe, it, expect} from '@jest/globals'
import { todosFakeData, TodoStatus } from '../../domain'

const onRemoveTodo = (id: string) => {
  todosFakeData.filter((todo) => todo.id !== id)
}

const onChageStatus = (id: string) => {
  todosFakeData.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        status: todo.status === TodoStatus.Active ? TodoStatus.Completed : TodoStatus.Active
      }
    }

    return todo
  })
}

 
describe('TodoList', () => {
  it('Сообщение при пустных данных', () => {
    render(<TodoList data={[]} onRemoveTodo={onRemoveTodo} onChageStatus={onChageStatus} />)

    const noDataText = screen.getByText('Добавьте задачу')
 
    
 
    expect(noDataText).toBeInTheDocument()
  })

  it('Список отбражается при верных данных', () => {
    render(<TodoList data={todosFakeData} onRemoveTodo={onRemoveTodo} onChageStatus={onChageStatus} />)

    const todo = screen.getByText('Написать код')

    expect(todo).toBeInTheDocument();
  })
})