import { Link } from 'react-router-dom'
import './style.css'


const Home = ()=>{
    
    return (
    <div className='Componethome'>
      <div className='logregGeneral'>
    <Link className='loggeneral' to='/login'> Login</Link>
    <Link className='reggeneral' to='/register'> Register</Link>
    </div>
    {/* <div className='divwordhome'>
      <h3 className='wordhome'>Whether you're after an old favourite or inspiration for something new, we have the perfect recipe. Most popular recipe collections this week.
</h3>
    </div> */}
    </div>
    )
}

export default Home