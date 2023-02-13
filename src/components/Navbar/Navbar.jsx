import React from 'react'
import './Navbar.css'
import images from '../../constants/index'




const Navbar = () => {

const [togleMenu, setToggleMenu] = React.useState(false)

  return (
   
      <div className='news__navbar container'>
        
          <div className="news__navbar-logo margin-left">
              <img src={images.logo} alt="" />
          </div>
          <div className="news__navbar-links ">
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">New</a></li>
                <li><a href="">Popular</a></li>
                <li><a href="">Trending</a></li>
                <li><a href="">Categories</a></li>
              </ul>
          </div>
         
          <div className='news__navbar-smallscreens'>
           {!togleMenu && 
           <img src={images.iconMenu} alt="" onClick={() => {setToggleMenu(true)}} className="menuIcon"/>
           } 
        

        {togleMenu && (
          <div className='news__navbar-smallscreens_menu '>
            <img src={images.closeMenu} alt="" onClick={() => {setToggleMenu(false)}} className="closeMenuIcon"/>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">New</a></li>
                <li><a href="">Popular</a></li>
                <li><a href="">Trending</a></li>
                <li><a href="">Categories</a></li>
              </ul>
          </div>
        )}
              
          </div>
      </div>
      
   
  )
}

export default Navbar