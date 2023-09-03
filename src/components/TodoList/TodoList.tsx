import { useState, useEffect } from "react";
import "./TodoList";

interface Props {
    "id": number
}
interface Todo {
    "userId": number
    "id": number
    "title": string
    "completed": boolean
}
export function TodoList(props: Props) {
    const [items, setItems] = useState<Todo[]>([]);
    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${props.id}`)
            const result = await data.json()
            setItems(result)
        }
        fetchItems()
    }, [])
    if (items.length > 0) {
        return (
            <ul> {items.splice(0, 5).map(item => <li key={item.id}>{item.title}</li>)}</ul>
        )
    }
}