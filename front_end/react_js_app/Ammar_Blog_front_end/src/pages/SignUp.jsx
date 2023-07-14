import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import defaultImgae from '../assets/defaultImgae.jpg'
// import fimage from '.'
function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(defaultImgae);

    
    const onImageChange = (event) => {
      let fileList = event.target.files;
      console.log(`typeof  = ${typeof(fileList)}`)
      if (fileList) {
        
        setImage(URL.createObjectURL(fileList[0]));
      }
      console.log(`event.target.files = ${event.target.files.length}`)
     }

     const handleSubmit =async (e) => {
      e.preventDefault();

      // const response = await fetch('', {
      //   body:
      // })

    }
  return (
    
  
  <form className='add-blog-form m-2 p-2' 
  // onSubmit={(e, url, blog) => {handleSubmit(e)}}
  >
       <br />

       <div className="form-group text-center">
        <img src={image} alt="no image" style={{"width": "200px"}} />
       </div>
    <br />

    <div className="form-group text-center">
      <input type="file" onChange={onImageChange}/>
    </div>
      <br />
    <div className="form-group">
      <label for="fullName">fullName</label>
      <input type="text" 
       required 
       value={fullName}
       className="form-control" 
       id="fullName" 
       onChange={(e) => setFullName(e.target.value)}
       placeholder='fullName'
       />
    </div>

    <br />

    <div className="form-group">
      <label for="email">email</label>
      <input type="text" className="form-control"
      id="email"  
      value={email}
      required
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter email "/>
    </div>
  
    <br />

    <div className="form-group">
      <label for="password">password</label>
      <input type="password" 
      className="form-control" 
      id="password"  
      placeholder="Enter short content"
      value={password}
      required
      onChange={(e) => setPassword(e.target.value)}/>
    </div>

    <br />


 
  <br />

  <button className="btn btn-primary">Add User</button>

  {/* {!loading && <button className="btn btn-primary">Add Blog</button>}
  {loading && <button disabled className="btn btn-primary">Add Blog ....</button>} */}
  </form>

  )
}

export default SignUp