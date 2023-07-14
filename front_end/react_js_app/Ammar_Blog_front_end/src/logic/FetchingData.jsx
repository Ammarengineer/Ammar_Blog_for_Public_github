import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
    

  
  
  const all_data = async () => {
    const response = await fetch(url, {
      method: "Get"
    }).catch((e) => {
      console.log(`e = ${e.message}`)
      setError(e.message);
      setLoading(false)
    });

    
    // statusRespons = await re.response;
    if (response){
      if(!response.ok){
        setError(null)
      }
      else{
        const re = await response.json();
        // console.log(`re.response = ${re.response}`)
        console.log(re)
        if(re.results){
          setData(re.results)
          console.log(`re.results , re.results.title = ${re.results.title}`)
        }
        else{
          setData(re)
          console.log(`re , re.title = ${re.title}`)
        }
        
        setLoading(false);
      }
    }


  }

  useEffect( () => {
    console.log('useEffect function ran !!!');
    try{
      all_data();
    }catch(e){
      console.log(e)
    }
    
  }, [url]);

  return {
    data,
    error,
    loading
  }

}

export default useFetch