import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

export default function DetailPost() {
    const apiUrl = "http://localhost:3000";
    const {id} = useParams();
    const [DetailPost, setDetailPost] = useState ([])
    useEffect(() => {
        axios.get(`${apiUrl}/posts/${id}`).then(Response => {
            console.log(Response.data);
            setDetailPost(Response.data)
        })
    },[])
    
    
    return(
        <>
        <div  className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{DetailPost.title}</h5>
                {DetailPost.image && <img src={`${apiUrl}/${DetailPost.image}`} alt="Immagine articolo" className="card-img-top mb-3" />}
                <p className="card-text">{DetailPost.content}</p>
                <button className="btn btn-danger" onClick={() => handleDelete(DetailPost.id)}>Cancella</button>
                <a href={`/ListaPost/${DetailPost.id}`}>Dettaglio del post</a>
            </div>
        </div>
        <h1>POST {id}</h1>
        </>

    )
}