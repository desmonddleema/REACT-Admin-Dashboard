import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className="mt-24 md:m-10 m-2 md:p-10 p-2 rounded-3xl bg-white dark:bg-secondary-dark-bg">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index)=> (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Orders;

