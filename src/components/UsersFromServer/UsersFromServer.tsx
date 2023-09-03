import { useState, useEffect } from "react";
import "./UsersFromServer.css";
import { Card } from "../Card/UserCard"
interface User {
  "id": number
  "name": string
  "username": string
  "email": string
  "address": object,
  "phone": string
  "website": string
  "company": object
}
export function UsersFromServer() {
  const [items, setItems] = useState<User[]>([]);
  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users")
      const result = await data.json()
      setItems(result)
    }
    fetchItems()
  }, [])
  return (
    <div className="example">
      {items.map(item => <Card key={item.id} name={item.name} email={item.email} id={item.id} />)}
    </div>

  )
}