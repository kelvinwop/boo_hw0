import './App.css';
import FrontPage from './pages/frontpage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/loginpage';

const $ = require('jquery');
window.$ = $;
require('bootstrap');

const router = createBrowserRouter([
  {
    path: "/",
    element: (<FrontPage />)
  },
  {
    path: "login",
    element: (<LoginPage />)
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
