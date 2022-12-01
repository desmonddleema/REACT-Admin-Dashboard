import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

import { useStateContext } from '../contexts/ContextProvider';

const Calender = () => {
  const { currentMode } = useStateContext();
  return (
    <div className={`m-2 p-2 md:m-10 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl ${currentMode==='dark' ? 'dark' : ''}`}>
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={ new Date(2021, 0, 10) }
      >
        <Inject services={[Day, Week, Month, WorkWeek, Month, Agenda, Resize, DragAndDrop]} /> 
      </ScheduleComponent>
    </div>
  )
}

export default Calender