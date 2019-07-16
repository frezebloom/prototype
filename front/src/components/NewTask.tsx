import * as React from 'react'
import { useState } from 'react';

import Button from './Button'
import { ITypeTasks } from "../store/typeTasks/types";

import '../styles/newTask.scss'

interface NewTaskProps {
  options: ITypeTasks[],
  sendTask: (type: string) => void;
}

const NewTask: React.FC<NewTaskProps> = props => {

  const [task, setTask] = useState('Уточнение ГЦМР');

  const eventClickButton = () => {
    props.sendTask(task);
  }

  return (
    <div className="newTask">
      <div className="newTask-header">    
        Создать новую задачу
      </div>
      <div className="newTask-body">
        <select onChange={(e) => setTask(e.target.value)} className="newTask-select">
          {props.options.map((item, index) => 
            <option 
              value={item.type_name} 
              key={index}>
              {item.type_name}
            </option>
          )}
        </select>
    
        <div onClick={eventClickButton} className="newTask-button-wrapper">
          <Button name="Отправить" />
        </div>
      </div>
    </div>
  )
}

export default NewTask;