import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Parent from './components/Parent'
import Student from './components/Student'
import Teacher from './components/Teacher'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/student' element={<Student/>}/>
            <Route path='/teacher' element={<Teacher/>}/>
            <Route path='/parent' element={<Parent/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
