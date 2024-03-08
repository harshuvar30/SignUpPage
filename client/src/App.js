import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from '../../client/src/components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';

function App() {
  const pageSize = 5;
  const apiKey = "a86141db9baa418e8562752d987d53e9"
  console.log(apiKey);
  const [progress, setProgress] = useState(0);
  const categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
      <div className='pages'>
        <Routes>
         
      {categories.map((category) => (
        <Route
          key={category}
          path={`/${category}`}
          element={<Home setProgress={setProgress} apiKey={apiKey} key={category} pageSize={pageSize} country="in" category={category}/>}
        />
      ))}
        </Routes>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
