
import './Login.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div className='box1'>
  
      <div class="box">
        <div class="inner-box">
          <div class="forms-wrap">
            <form action="index.html" autocomplete="off" class="sign-in-form">
              <div class="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Vdd-VpHyFzhAmYv2wT5E7V-Ki_O_ejwZFg&usqp=CAU" alt="easyclass" />
                <h4>Register here!</h4>
              </div>

              <div class="heading">
                <h2>Welcome</h2>
                <a><img className="google"src="https://th.bing.com/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?pid=ImgDet&rs=1"></img></a>
                <br></br>
                <h6>--------Or--------</h6>
                <br></br>
                <h6>Already have an account?</h6>
                <a href="#" class="toggle">Log In</a>
              </div>

              <div class="actual-form">
                <div class="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Name'
                    required
                  />
                  
                </div>

                <div class="input-wrap"> 
                  <input
                    type="password"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder="Password"
                    required
                  />
                  
                </div>
                <div class="input-wrap"> 
                  <input
                    type="email"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Email'
                    required
                  />
                  
                </div>
                <div class="input-wrap"> 
                  <input
                    type="date"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='DOB'
                    required
                    />
                </div>
                    
                <div class="input-wrap"> 
                  <input
                    type="text"
                    minlength="7"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Gender'
                    required
                  />
                  
                </div>

                <div class="text">
                <input type="checkbox"></input> By signing up, I agree to the Terms of Services and Privacy Policy
                </div>
                <br>
                </br>
                <Link to="/signup"><input type="submit" value="Login In" class="sign-btn" /></Link>
            
              </div>
            </form>

            
          </div>

          <div class="carousel">
            
            <img className="wall" style={{height:"500px"}} src="https://t3.ftcdn.net/jpg/04/77/94/70/360_F_477947081_y0s9A6JgGXoCrxdnMPaIqSE0EObp1dzl.jpg"></img>

           
          </div>
        </div>
      </div>
   

 
    </div>
    
  )
  }
}

export default Login
