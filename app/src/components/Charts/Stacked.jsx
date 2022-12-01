import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirectie, Inject, Legend, Category, StackingColumnSeries, Tooltip, SeriesDirective } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const  Stacked = ({ height, width }) => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      height={height}
      width={width}
      id="stackChart"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border:{width:0} }}
      tooltip={{enable:true}}
      legendSettings={{background: (currentMode==='dark'? '#6b6b6b': '#fff' )}}
      background={ currentMode==='dark'? '#33373E': '#fff' }
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index)=> (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default Stacked