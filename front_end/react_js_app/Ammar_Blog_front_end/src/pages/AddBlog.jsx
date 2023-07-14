
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
function AddBlog() {
  const [image, setImage] = useState('front_end/react js app1/ammar-blog/src/assets/default.jpg');
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [short_content, setShortContent] = useState('')
  const [content, setContent] = useState('')

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      title,
      author,
      short_content: short_content,
      content,
      'author': 1,
    };

    console.log();
    const response = await fetch('http://127.0.0.1:8000/make_new_blog/',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).catch((e) => {
      console.log(`error = ${e.message}`);
      setError(e);
    });
   
    if(response){
      if(response.ok){
        const re = await response.json();
        setData(re);
        console.log(re);
        setLoading(false);
        setError(null);
        navigate('/')
      }else if(response.status === 400){
        const message = await response.text()
        console.log(`message = ${message}`);

        

      }
    }
    

  }

  return (
    <form className='add-blog-form m-2 p-2' onSubmit={(e, url, blog) => {handleSubmit(e)}}>
       <br />

    <div className="form-group ">
      <label for="title">title</label>
      <input type="text" 
       required 
       value={title}
       className="form-control" 
       id="title" 
       onChange={(e) => setTitle(e.target.value)}
       placeholder='title'
       />
    </div>

    <br />

    <div className="form-group">
      <label for="author">author</label>
      <input type="text" className="form-control"
      id="author"  
      value={author}
      required
      onChange={(e) => setAuthor(e.target.value)}
      placeholder="Enter author name"/>
    </div>
  
    <br />

    <div className="form-group">
      <label for="shortcontent">short content</label>
      <input type="text" 
      className="form-control" 
      id="shortcontent"  
      placeholder="Enter short content"
      value={short_content}
      required
      onChange={(e) => setShortContent(e.target.value)}/>
    </div>

    <br />


  <div className="form-group">
    <label for="content">blog content</label>
    <textarea className="form-control"
     id="content" rows="3"
     value={content}
      required
      onChange={(e) => setContent(e.target.value)}
     placeholder='please type your blog content hear'/>
  </div>

  <br />

  {!loading && <button className="btn btn-primary">Add Blog</button>}
  {loading && <button disabled className="btn btn-primary">Add Blog ....</button>}
  </form>
  )
}

export default AddBlog

