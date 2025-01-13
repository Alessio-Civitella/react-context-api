import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home'
import ChiSiamo from './components/pages/ChiSiamo';
import ListaPost from './components/pages/ListaPost';
import DetailPost from './components/pages/DetailPost';
import AppLayout from "./components/AppLayout"
import GlobalContext from './components/Context/GlobalContext';
import { useEffect, useState } from 'react';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

export default function App() {

  const apiUrl = "http://localhost:3000";
  const [articles, setArticles] = useState([]);

  const NavMenu = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/ChiSiamo",
      title: "Chi siamo"
    },
    {
      path: "/ListaPost",
      title: "Lista post"
    }
  ]

  const getPost = () => {
    axios.get(`${apiUrl}/posts`)
      .then((Response) => {
        const fetchedData = Response.data?.data || [];
        setArticles(fetchedData);
        console.log(Response.data);

      })
      .catch((error) => {
        console.error("Errore durante il recupero dei post:", error);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  const globalProviderValue = { NavMenu, articles };
  return (
    <GlobalContext.Provider value={globalProviderValue}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ChiSiamo" element={<ChiSiamo />} />
            <Route path="/ListaPost" element={<ListaPost />} />
            <Route path="/ListaPost/:id" element={<DetailPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}