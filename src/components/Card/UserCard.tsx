import { useState } from "react";
import "./UserCard.css";
import { TodoList } from "../TodoList/TodoList"
export interface Props {
  urlImg?: string
  name: string
  email: string
  id: number
  // backgroundColor:string




}
export function Card(props: Props) {
  const [toDo, setToDo] = useState<boolean>(false);
  return (
    <div className="Card">
      <p className="text" id="textname">{props.name}</p>
      <p className="text">{props.email}</p>
      {/* <TodoList id={props.id}/> */}
      <button onClick={() => setToDo(true)} >Click here to display TodoList</button>
      <div>{toDo ? <ul className="ulToDo"><TodoList id={props.id} /></ul> : null}</div>
    </div>
  );
}
