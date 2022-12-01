import React from 'react';

import { Header, LineChart } from '../../components';

const Line = () => {
  return (
    <div className="mt-24 m-4 p-10 md:m-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  )
}

export default Line;