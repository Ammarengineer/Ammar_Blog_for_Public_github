import { useParams } from "react-router-dom";
import useFetch from "../logic/FetchingData";
import { useNavigate } from "react-router-dom";

function BlogContent() {
    const {id} = useParams();
    const {data: blog, error, loading} = useFetch(`http://127.0.0.1:8000/get_blog/${id}/`);
    const navigate = useNavigate();
    const handleDelete = async () => {
        const response = await fetch(`http://127.0.0.1:8000/delete_blog/${blog.id}/`, {
            method: 'DELETE',

        }).catch((e) => {
            console.log(`e = ${e}`);
        })

        if(response){
            const message = await response.text();
            console.log(`message = ${message}`);
            navigate('/')
        }
    }
  return (
    <div>
        {error && <div> {error} </div>}
        {loading && <div> {loading} </div>}
        
        {blog &&<div>
        <h1 className="text-primary m-2">
            {blog.title}
        </h1>
        <h4 className="text-secondary m-2">
            {blog.short_content}
        </h4>
        <p className="text-dark m-2">
            {blog.content}
        </p>
        <button className="btn btn-danger m-2" onClick={() => handleDelete()}>delete</button>
        </div>}

    </div>
  )
}

export default BlogContent