
import { Link } from 'react-router-dom';
import '../Styles/style.css'
const Landing_Page = () => {
  return (
    <>
      <div className='landing_main'>
        <div className='land_img_holder' >
          <img className='land_img' src='/Landing.jpg' alt="" />
        </div>
        <div  className='landing_text'>
          <h1>10X Team 04</h1>
          <button className='Enter'><Link to={'/postView'}>ENTER</Link></button>
        </div>
      </div>
    </>
  )
}

export default Landing_Page;