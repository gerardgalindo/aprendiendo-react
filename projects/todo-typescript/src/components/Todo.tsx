import {TodoId, type Todo as TodoType} from '../types'


interface Props extends TodoType {
    onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({id}: TodoId) => void
}

// type Props = TodoType


export const Todo:React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleteTodo}) => {
    
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        onToggleCompleteTodo({
            id,
            completed: event.target.checked
        })
    }
    
    return (
        <div>
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={handleChangeCheckbox}
                //onChange={(event) => {
                //    onToggleCompleteTodo({id, completed: event.target.checked})
                //}}
            />
            <label>{title}</label>
            <button 
                className="destroy"
                onClick={() => {
                    onRemoveTodo({id})
                }}
            />
        </div>
    )
}