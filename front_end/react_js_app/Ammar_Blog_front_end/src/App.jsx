import PageNavbar from './widgets/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBlog from './pages/AddBlog'
import BlogContent from './widgets/BlogContent'
import SignUp from './pages/SignUp'
import NotFoundPage from './pages/NotFoundPage'


function App() {
  
  return (
    
      <Router>
          <div className="App">
            <PageNavbar/>
              <div className="content">
                
                  <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path = '/add' element = { <AddBlog/>}/>
                    <Route path = '/blogs/:id'  element = {<BlogContent/>}/>
                    <Route path='/signUp' element={<SignUp/>}></Route>
                    <Route path= '*' element={<NotFoundPage/>}></Route>
                    
                  </Routes>
                
              </div>
          </div>
      </Router>
   
  );
}

export default App;
