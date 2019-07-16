import * as React from 'react'

import { ITaskList } from "../store/taskList/types";

import '../styles/table.scss'
import '../styles/taskList.scss'

interface TaskListProps {
  headers: Array<string>
  taskList: ITaskList[];
}

const TaskList: React.FC<TaskListProps> = ( {headers, taskList} ) => {

  return (
    <div className="task-list">
      <div className="table-wrapper-right">
        <table>
          <thead>
            <tr>
              {headers.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {taskList.map(item => (
              <tr
                key={item.id}
              >
                <td>
                  <div className={item.status} />
                </td>
                <td>{item.id}</td>
                <td>{item.updated}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="task-list-footer"></div>
      
    </div>
  )
}

export default TaskList;