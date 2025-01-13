 import 'bootstrap/dist/css/bootstrap.min.css';
 import Home from './components/pages/Home'
 import ChiSiamo from './components/pages/ChiSiamo';
 import ListaPost from './components/pages/ListaPost';
 import DetailPost from './components/pages/DetailPost';
 import AppLayout from "./components/AppLayout"
 import GlobalContext from './components/Context/GlobalContext';
 

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  const NavMenu =[
    {
        path: "/",
        title:"Home",
    },
    {
        path:"/ChiSiamo",
        title:"Chi siamo"
    },
    {
        path:"/ListaPost",
        title:"Lista post"
    }
]

  const globalProviderValue= {NavMenu};
  return (
    <GlobalContext.Provider value= {globalProviderValue}>
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
    </GlobalContext.Provider>
  )  
}