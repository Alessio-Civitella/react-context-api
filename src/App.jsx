 import 'bootstrap/dist/css/bootstrap.min.css';
 import Home from './components/pages/Home'
 import ChiSiamo from './components/pages/ChiSiamo';
 import ListaPost from './components/pages/ListaPost';
 import DetailPost from './components/pages/DetailPost';
 import AppLayout from "./components/AppLayout"
 

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<AppLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/ChiSiamo" element={<ChiSiamo/>}/>
            <Route path="/ListaPost" element={<ListaPost/>}/>
            <Route path="/ListaPost/:id" element={<DetailPost/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )  
}