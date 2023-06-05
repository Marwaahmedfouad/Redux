import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import { Suspense } from 'react';
import Home from './Components/Home/Home'
import AddMovie from './Components/AddMovie/AddMovie'
import UpdateMovie from './Components/UpdateMovie/UpdateMovie'

const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'addmovie', element: <AddMovie /> },
      { path: 'updatemovie/:id', element: <UpdateMovie /> }
    ]
  }
])

function App() {
  return <>
    <Suspense fallback={<div className="text-center pt-5">Loading...</div>}>
      <div className='MainBackground'>
        <RouterProvider router={router} />
      </div>
    </Suspense>
  </>
}

export default App;
