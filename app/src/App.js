import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent} from '@syncfusion/ej2-react-popups';

//COMPONENTS
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';

//PAGES
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages';

import { useStateContext } from './contexts/ContextProvider';
import './App.css';

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode==='dark'? 'dark' : ''}>
        <BrowserRouter> 
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{zIndex: 1000}}>
                    <TooltipComponent content="Settings" position='Top'>
                        <button 
                            type="button" 
                            className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
                            style={{background:currentColor, borderRadius: '50%'}}
                            onClick={()=> { setThemeSettings(true) }}
                        >
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>

                {activeMenu ? (
                    <div className='w-60 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div>
                ): (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar />
                    </div>
                )}

                <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-60' : 'flex-2'}`}>
                    <div className='bg-main-bg dark:bg-main-dark-bg fixed md:static navbar w-full'>
                        <Navbar />
                    </div>
                

                    {/* Routes*/}
                    <div>
                        { themeSettings && <ThemeSettings /> }
                        <Routes>
                            {/* Dashboard */}
                            <Route path='/' element={<Ecommerce />} />
                            <Route path='/Professional-Admin-Dashboard/' element={<Ecommerce />} />
                            <Route path='/Professional-Admin-Dashboard/ecommerce' element={<Ecommerce />} />

                            {/* Pages */}
                            <Route path='/Professional-Admin-Dashboard/orders' element={<Orders />} />
                            <Route path='/Professional-Admin-Dashboard/employees' element={<Employees />} />
                            <Route path='/Professional-Admin-Dashboard/customers' element={<Customers />} />

                            {/* Apps */}
                            <Route path='/Professional-Admin-Dashboard/kanban' element={<Kanban />} />
                            <Route path='/Professional-Admin-Dashboard/editor' element={<Editor />} />
                            <Route path='/Professional-Admin-Dashboard/calendar' element={<Calendar />} />
                            <Route path='/Professional-Admin-Dashboard/color-picker' element={<ColorPicker />} />

                            {/* Apps */}
                            <Route path='/Professional-Admin-Dashboard/line' element={<Line />} />
                            <Route path='/Professional-Admin-Dashboard/area' element={<Area />} />
                            <Route path='/Professional-Admin-Dashboard/bar' element={<Bar />} />
                            <Route path='/Professional-Admin-Dashboard/pie' element={<Pie />} />
                            <Route path='/Professional-Admin-Dashboard/financial' element={<Financial />} />
                            <Route path='/Professional-Admin-Dashboard/color-mapping' element={<ColorMapping />} />
                            <Route path='/Professional-Admin-Dashboard/pyramid' element={<Pyramid />} />
                            <Route path='/Professional-Admin-Dashboard/stacked' element={<Stacked />} />

                        </Routes>
                    </div>

                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App