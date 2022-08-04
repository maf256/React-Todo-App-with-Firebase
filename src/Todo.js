import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'
import './Todo.css'


export default function Todo  ({item}) {
  return (
    <li>
        <div>
            <input type="checkbox" />
            <span>{item}</span>
        </div>
        <button>{<FaRegTrashAlt size={20}/>}</button>
    </li>
  )
}
