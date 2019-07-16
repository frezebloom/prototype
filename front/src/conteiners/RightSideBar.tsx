import * as React from 'react'
import { useEffect } from "react";
import { connect } from "react-redux";

import { ApplicationState } from "../store";

import { IOrderCards } from "../store/orderCards/types";

import { ITaskList } from "../store/taskList/types";
import { ITypeTasks } from "../store/typeTasks/types";

import { fetchRequestTaskList, fetchSuccess, createNewTask } from "../store/taskList/actions";
import { fetchRequestTypeTasks } from '../store/typeTasks/actions'

import NewTask from '../components/NewTask';
import TaskList from '../components/TaskList';

import '../styles/sidebar.scss'

interface PropsFromState {
  orderCards: IOrderCards[];
  taskList: ITaskList[];
  typeTasks: ITypeTasks[];
  loadingTaskList: boolean;
  errorsTaskList?: string;
  loadingTypeTasks: boolean;
  errorsTypeTasks: string;
}

interface PropsFromDispatch {
  fetchRequestTaskList: typeof fetchRequestTaskList;
  fetchRequestTypeTasks: typeof fetchRequestTypeTasks;
  fetchSuccess: typeof fetchSuccess;
  createNewTask: typeof createNewTask;
}

type AllProps = PropsFromState & PropsFromDispatch;

const taskListHeaders: Array<string> = [
  "Статус",
  "№",
  "Обновлён",
  "Тип"
];

const RightSideBar: React.FC<AllProps> = props => {
  
  useEffect(() => {
    props.fetchRequestTaskList();
    props.fetchRequestTypeTasks();
  }, []);

  const sendTask = (type: string) => {
    const task = {
      type: type,
      maps: props.orderCards
    }
    
    props.createNewTask(task)
  }

  return (
    <div className="sidebar">
      <NewTask 
        options={props.typeTasks} 
        sendTask={sendTask}
      />
      <TaskList
        headers={taskListHeaders} 
        taskList={props.taskList}
      />
    </div>
  )
}

const mapStateToProps = ({ orderCards, taskList, typeTasks }: ApplicationState) => ({
  orderCards: orderCards.data,
  typeTasks: typeTasks.data,
  taskList: taskList.data,
  loadingTaskList: taskList.loading,
  errorsTaskList: taskList.errors,
  loadingTypeTasks: typeTasks.loading,
  errorsTypeTasks: typeTasks.errors
});

const mapDispatchToProps = {
  fetchRequestTaskList,
  fetchRequestTypeTasks,
  fetchSuccess,
  createNewTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSideBar);