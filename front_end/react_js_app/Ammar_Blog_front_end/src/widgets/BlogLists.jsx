
import {Link} from 'react-router-dom';
function BlogLists({blogs, title}) {

    console.log(`blogs = ${blogs}`);
    

   
    
  return (
    <div className="blog-list">
        <h2 className="text-secondary">
            {title}
        </h2>
        {blogs.map((blog) => (

            <div className="shadow   m-2 bg-body rounded" key={blog.id}>
            <div className="container-12">
            <Link className='btn btn-light p-4 w-100' to={`blogs/${blog.id}`}>
                <div className="text-primary text-start ">
                    {blog.title}
                </div>
                <p className="text-primary text-start fst-italic">
                    {blog.author_name}
                </p>
               
                </Link>
                </div>

            </div>
            ))}
    </div>
  )
}

export default BlogLists