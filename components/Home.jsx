import '../styles/home.css'
import images from '../images/mainfood.jpg'


const Home = () => {
    return (
<div className="home">

 <nav className='navabar'>
<div className="logo">
<h1>Stories <span>.</span></h1></div>
<div className="links">
    <ul>
        <li><a href="">Home</a> </li>
        <li><a href="">About</a> </li>
        <li><a href="">Foods</a> </li>
        <li><a href="">Lifestyle</a> </li>
        <li><a href="">Contact Us</a> </li>
        
    </ul>
</div>
 </nav>

 <div className="container">
    <div className="image">
<img src={images} alt="no image" />
    </div>
    <div className="content">
     <div className="c1">
     <h3 >Featured Posts</h3>
        <h1 >I am A Blogger &amp; I Love Foods</h1>
        <p >A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
        <button className='readmore'><a href="#" >Read More</a></button>
     </div>
        <button className='b1'><a href="">FORWARD</a></button>
        <button className='b2'><a href="">NEXT</a></button>
        
    </div>
 </div>

 </div>



  
       
      );
}
 
export default Home;






