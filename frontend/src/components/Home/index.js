import { Link } from 'react-router-dom'
import './style.css'


const Home = ()=>{
    
    return (
    <div className='Componethome'>
      <div className='logregGeneral'>
    <Link className='loggeneral' to='/login'> Login</Link>
    <Link className='reggeneral' to='/register'> Register</Link>
    </div>
    
    </div>
    )
}

export default Home