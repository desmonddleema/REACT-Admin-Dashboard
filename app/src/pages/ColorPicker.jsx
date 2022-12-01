import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';

import { useStateContext } from '../contexts/ContextProvider';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};

const ColorPicker = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-2 p-2 md:m-10 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="App" title="Color Picker" />
      <div className='text-center'>
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap"> 
          <div>
            <p 
              className="text-2xl font-semibold mt-2 mb-4" 
              style={{color: (currentMode==='dark'?'gray':'black')}}
            >Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              inline 
              modeSwitcher = { false }
              showButtons = { false}
              change={change}
            />
          </div>
          <div>
            <p 
              className="text-2xl font-semibold mt-2 mb-4"
              style={{color: (currentMode==='dark'?'gray':'black')}
            }
            >Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              inline 
              modeSwitcher = { false }
              showButtons = { false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker