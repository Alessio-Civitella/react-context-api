import { useState, useEffect } from 'react';
import axios from 'axios'
const apiUrl = "http://localhost:3000"



function Home() {

    const newPost = {
        title: '',
        image: '',
        content: '',
      };

  const [formData, setFormData] = useState(newPost);
  const [articles, setArticles] = useState([]);

  

  

  const handleChange = (e) => {
    const { name, value,} = e.target;
    
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (formData.title && formData.content) {
      axios.post(`${apiUrl}/posts`, formData).then((Response) => {
        setArticles([...articles, formData]);
        setFormData(newPost);
      })
    // }
  };

  const handleDelete = (postId) => {
    const updatedArticles = articles.filter(post => post.id !== postId);
    axios.delete(`${apiUrl}/posts/${postId}`).then((Response) => {})
    setArticles(updatedArticles);
  };

  useEffect(() => {
    if (formData.publish) {
      alert('Hai selezionato di pubblicare l’articolo!');
    }
  }, [formData.publish]);

  return (
    <div className="container mt-5">
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titolo</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Inserisci il titolo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">URL Immagine</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Inserisci l'URL dell'immagine"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Contenuto</label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Inserisci il contenuto"
          />
        </div>
        <button type="submit" className="btn btn-primary">Aggiungi</button>
      </form>

      
    </div>
  );
}

export default Home;