import BlogLists from '../widgets/BlogLists';
import useFetch from '../logic/FetchingData';
import { useEffect } from 'react';
import Loading from '../widgets/Loading';

function Home() {

  const {data: blogs, loading, error} = useFetch('http://127.0.0.1:8000/');


  useEffect(()=>{
    console.log('useEffect Home ran');
  },[]);

     
  return (
    <div className="m-2">
        <h2>HomePage</h2>
        {error && <div className="text text-danger">{error}</div>}
        {loading && <Loading/>}
        {blogs && <BlogLists blogs ={blogs} title = "All Blogs"   />}
    </div>
  )
}

export default Home

