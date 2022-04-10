import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
           <div className='navbar'>
                <img src="/images/cv.png" alt="" />
                <div className='navbar_links'> 
                     <a href="">About</a>
                     <a href="">My work</a>
                     <a href="">Resume</a>
                </div>
                <div className='hamburger'>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
          <div className='main_container'>
                <div className='box flex center'>
               
                    <div>
                      <h1 className='main_title'>Hi, i'm Avishag Ilan  <i></i> </h1>
                      <p className='big_text secondery_color'>
                        A 3'rd year B.A student & 1'st year M.A student for <br />
                        instructional design & an ambitious UX/UI designer
                      </p>
                    </div>   
                </div> 
                <div className='box flex center'>
                      {/* <div className=''>
                          <img src="/images/avatarImage.jpg" alt="" />
                      </div>
                      <div>
                        <h1>hellooooooooooo</h1>
                      </div> */}
                </div>

                  <div className='box'>

                  </div>
                
                <div id='footer' className='flex flex_bottom between'>
                      <p>
                          All rights reserved by Avishag Ilan 2021
                      </p>
                      
                   <div className='link-spacing'>
                       <a href=""><i className="fa-brands fa-linkedin"></i></a>
                       <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                       <a href=""><i className="fa-brands fa-whatsapp-square"></i></a>
                       <a href=""><i className="fa-brands fa-google"></i></a>
                       <a href=""><i className="fa-brands fa-instagram"></i></a>
                   </div>
                 
                       
                </div>

          </div>
    </div>
  );
}

export default App;
