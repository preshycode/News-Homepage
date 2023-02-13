import React from 'react'
import './Header.css'
import images from '../../constants/index'
import blogData from './blogData'
import Blog from './Blog'
import components from './components'
import Component from './Component'

const Header = () => {
  return (
    <div class="parent">
        <div class="div1"><img src={images.desktopBg} alt="" width="100%" /></div>
        <div class="div2"><h1>The Bright Future of Web 3.0?</h1></div>
        <div class="div3"><p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?</p>
            <button type='button'>READ MORE</button></div>
        <div class="div4"><h1>New</h1>
            {blogData.data.map((blog) => <Blog title={blog.title} text={blog.text} key={blog.title}/>)}
        </div>
        <div class="div5">
            {components.data.map((component) => <Component img={component.img} num={component.num} title={component.title} text={component.text} key={component.num} />)}
            </div>
    </div>
  )
}

export default Header