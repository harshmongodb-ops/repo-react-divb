import { lazy,Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthRoute from './AuthRote';
import './App.css';

const Login = lazy(()=>import('./components/Login'))
const Dashboard = lazy(()=>import('./components/Dashboard'))
const AddUser = lazy(()=>import('./components/AddUser'))
const EditUser = lazy(()=>import('./components/EditUser'))

function App() {
  return (
    <Suspense fallback={<div className='loading'>...Loading</div>}>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
       <Route path="/addUser" element={<AuthRoute><AddUser /></AuthRoute>} />
       <Route path='/edit-user/:id' element={<AuthRoute><EditUser/></AuthRoute>} />
    </Routes>
    </Suspense>
  );
}

export default App;
