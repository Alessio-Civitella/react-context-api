import { useState, useEffect } from 'react';
import AppCard from "../AppCard";
import axios from 'axios';
import GlobalContext from '../Context/GlobalContext';
import { useContext } from 'react';

export default function ListaPost() {
    const {articles} = useContext(GlobalContext)
    const apiUrl = "http://localhost:3000";
    // const [articles, setArticles] = useState([]);

    const handleDelete = (postId) => {
        axios.delete(`${apiUrl}/posts/${postId}`)
            .then(() => {
                const updatedArticles = articles.filter(post => post.id !== postId);
                setArticles(updatedArticles);
            })
            .catch((error) => {
                console.error("Errore durante l'eliminazione del post:", error);
            });
    };

    

   

    return (
        <div className="mt-4">
            {Array.isArray(articles) && articles.map((article) => (
                <AppCard key={article.id} article={article} apiUrl={apiUrl} handleDelete={handleDelete} />
            ))}
        </div>
    );
}
