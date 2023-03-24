import './App.css';
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import {Route, Routes} from 'react-router-dom'
/* ------------------------------- COMPONENTS ------------------------------- */
import NavBar from './components/NavBar';
import ButtonAnimates from './components/ButtonsAnimated/ButtonAnimates';
import NeonEffects from './components/NeonEffects/NeonEffects';
import CristalEffect from './components/CristalEffect/CristalEffect';
import BackgroundAnimated from './components/BackgroundAnimated/BackgroundAnimated';
import Container3d from './components/3d/Container3d';
import Slider from './components/slider/Slider';
import BrandScroll from './components/brands/BrandScroll';
import Theme from './components/treme/Theme';

function App() {
  return (
    <div>
      <NavBar/>
      <div className='pt-5 '>
        <Routes>
          <Route path='/' element={<ButtonAnimates/>}/>
          <Route path='/neoneffect' element={<NeonEffects/>}/>
          <Route path='/cristaleffect' element={<CristalEffect/>}/>
          <Route path='/bganimated' element={<BackgroundAnimated/>}/>
          <Route path='/3d' element={<Container3d/>}/>
          <Route path='/slider' element={<Slider/>}/>
          <Route path='/brand' element={<BrandScroll/>}/>
          <Route path='/theme' element={<Theme/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
