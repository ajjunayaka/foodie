import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import axios from 'axios';




const Signin = () => {
    let navigate = useNavigate()

    const email = useRef();
    const password = useRef();

    const signin = (e) => {
        e.preventDefault()
        let data = {
            email: email.current.value,
            password: password.current.value
        }

        axios.post('http://localhost:4000/signin', data)
            .then((res) => {
                alert(res.data.message)
                if (res.data.message == "login successful") {
                    navigate("/home")
                }
            })

    }
    return (
        <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="images/signin-image.jpg" alt="sing up image" /></figure>
                        <Link to="/" class="signup-image-link">Create an account</Link>
                    </div>
                    <div class="signin-form">
                        <h2 class="form-title">Sign in</h2>
                        <form class="register-form" id="login-form" onSubmit={signin}>
                            <div className="email">
                                <input style={{ width: "350px" }} name="email" type="text" ref={email} placeholder="Your Email" /> <br />
                            </div>
                            <div className="password">
                                <input style={{ width: "350px" }} name="password" type="text" ref={password} placeholder="Password" /> <br />
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" value="login" />
                            </div>
                        </form>
                        {/* <div class="social-login">
                            <span class="social-label">Or login with</span>
                            <ul class="socials">
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signin;