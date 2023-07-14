

const all_data = async (url, blog) => {

  let data = null;
  let error = null;
  let loading = false;

  console.log(`blog = ${blog}`)
  
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      
    },
    body: JSON.stringify(blog),
  }).catch((e) => {
    console.log(`e = ${e.message}`)
    
    error = e.message;
    loading = false;
  });


  if (response.ok){
    // let re =await response.json();
    console.log(await response.text())
    // console.log(`re = ${re}`)
    data = await response.json();
    error = null;
    loading = false;
  }
  else{
    console.log('no response');
    loading = true;
  }

  
  

  return {
    data,
    error,
    loading
  }


}

export default all_data

