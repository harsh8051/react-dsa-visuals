import { Route, Routes } from 'react-router-dom';
import './App.css'
import SideNav from './layouts/SideNav'
import { componentsList } from './resource/components.ts'
import NotFound from './layouts/NotFound.tsx';
import renderPageComponent from './layouts/redner-page.tsx';

function App() {

  return (
    <>
      <SideNav componentsList={componentsList} />
      <div className="container">
          <Routes>
            {
              componentsList.map((comp,index) => renderPageComponent(comp,index))          
            }
            <Route path={"*"} element={<NotFound />} />
          </Routes>
      </div>
    </>
  )
}

export default App
