import images from '../images/mainfood.jpg'
import '../styles/addpost.css'


const Addpost = () => {

    
    return ( 
        <>
        <div className="addpost">

            <div className="image">
        <img src={images} alt="no image" />
            </div>
            
            <div className="addpost-form">
                <h1>ADD POST</h1>
                <form action="" >
                    <div >
                    <label >Author</label>
                    <input type="text" placeholder="Author"/>
                    <label >Title</label>
                    <input type="text" placeholder="title of the post" />
                    <label >Summary</label>
                    <input type="text" placeholder="summary of the post" />
                    <label >Image</label>
                    <input type="text" placeholder="image of the post"/>
                    <label >Location</label>
                    <input type="text" placeholder="location of the post"/>
                    <input type="submit" value="Submit form" />
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default Addpost;