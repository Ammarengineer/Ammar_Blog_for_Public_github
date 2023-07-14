import { Link } from "react-router-dom"


function NotFoundPage() {
  return (
    <div className="p-2 m-3">
        <h1 className="text-dark">
        Not Found 
    </h1>
    <Link to='/'>Back to home page !!!</Link>
    </div>
  )
}

export default NotFoundPage