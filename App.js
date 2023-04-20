 import {BrowserRouter  , Routes , Route} from 'react-router-dom';
import SignIn from './components/SignIn';
 import SignUp from './components/SignUp';
 import Home from './components/Home';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import About from './components/About'
import Addpost from './components/Addpost';


 

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/addpost' element={<Addpost/>}/>
        
     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

 
