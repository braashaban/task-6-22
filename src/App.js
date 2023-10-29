
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Pages/Home/Home';

import Page from './Pages/Page/Page';
import Collection from './Pages/Collection/Collection';
import Android from './Pages/Android/Android';
/* import CardsImgs from './Componets/CardsImgs/CardsImgs';
import Power from './Componets/Power/Power';
import Features from './Componets/Features/Features';
import Accordient from './Componets/Accordient/Accordient';
import SliderImg from './Componets/SiderImg/SliderImg';
 */
function App() {
  return (
<>
<Routes>
<Route path='/' element={< Home/>}></Route>
<Route path='/collection' element={< Collection/>}></Route>
<Route path='/Page' element={< Page/>}></Route>
<Route path='/Android' element={< Android/>}></Route>
</Routes>

  </>
  );
}

export default App;


{/* <CardsImgs />
<Power/>
<Features />
<Accordient />
<SliderImg />
</> */}