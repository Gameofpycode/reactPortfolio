import React from 'react'
// import ""
// import 'bootstrap/dist/css/bootstrap.css';

//const local functional component
const Home = function (props){
    return(
        <div id="home_page col-12">
            {/* <div className="hireme">
            <marquee behavior="scroll" direction="forword"><h1>text hear</h1></marquee>
            </div> */}
            
            <div className="container col-12">
                <div className="home_right">
                    <div className="square_up"></div>
                    <div className="square_down"></div>
                    <div className="square_center"><img src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?w=996&t=st=1695102363~exp=1695102963~hmac=4cb41a6ddd460b47b71c48259b73c033130a517b06db037cc0611a334e9a0025" alt="" /></div>
                    <div className="home_psd">
                        
                        <div className="img">
                            <img src="https://ik.imagekit.io/6xlvknckc/male-programmer-5743382-4846824.webp?updatedAt=1695284193290" alt="" width={"100%"} height={"100%"} />
                        </div>
                        <div className="img">
                            <img src="https://img.freepik.com/premium-photo/development-web-site-with-css-code-creation-style-sheet-improve-website_671359-198.jpg?size=626&ext=jpg&ga=GA1.2.2128482742.1689869008&semt=ais" alt=""
                            width={"100%"} height={"100%"} />
                        </div>
                        <div className="img">
                            <img src="https://ik.imagekit.io/6xlvknckc/website-development-5984576-4971246.webp?updatedAt=1695284192748" alt=""
                            width={"100%"} height={"100%"} />
                        </div>
                        <div className="img">
                            <img src="https://ik.imagekit.io/6xlvknckc/3d-javascript-logo-design-free-png.webp?updatedAt=1695283778358" alt="" 
                            width={"100%"} height={"100%"}/>
                        </div>
                        <div className="img">
                            <img src="https://ik.imagekit.io/6xlvknckc/3d-python-programming-language-logo-free-png.webp?updatedAt=1695283777352" alt=""
                            width={"100%"} height={"100%"} />
                        </div>
                        <div className="img">
                            <img src="https://ik.imagekit.io/6xlvknckc/web-developer-4788760-3988051%20fly.webp?updatedAt=1695283906103" alt=""
                            width={"100%"} height={"100%"} />
                        </div>
                        <div className="img">
                            <img src="https://ik.imagekit.io/6xlvknckc/web-developer-4367727-3659200%20fly%202.webp?updatedAt=1695283906100" alt="" 
                            width={"100%"} height={"100%"}/>
                        </div>
                        
                    </div>
                    

                </div>
                <div className="home_left">
                   <div className="left_home_body">
                   <div className="heading">
                        <h1>Python Full Stack</h1>
                        <h1>Dvelopment Course</h1>
                    </div>
                    <div className="text">
                        <ul className="text_list">
                            <li>The Python Fullstack Training conducted with real time and completely practical training</li>

                            <li>We impart complete knowledge in this Python Fullstack Training and you will get real time exposure to course content.</li>

                            <li>You can schedule your Python Fullstack training classes on weekdays  at your suitable time slots</li>

                            <li>We can arrange for weekend Python Fullstack classes for you at flexible timings</li>
                        </ul>
                    </div>
                    <div className="btns">
                        <button clas="dow" >Download Syllabus</button>
                        <button clas="enq" >Cource Enquiery</button>

                    </div>
                   
                   </div>

                </div>
        <div className="register"> 
          <div className="card p-2 rounded-1 py-3">
            <span className="fs-3 text-center">Register For Free Demo Session</span>
          <div className="row">
          <div>
           <label htmlFor='name' className="form-label">Your Name</label>
                  <input type="text" placeholder='Enter Name' className='form-control'/>
           </div>
          <div>
           <label htmlFor='phone' className="form-label">Mobile Number</label>
                  <input type="text" placeholder='Phone' className='form-control' />
           </div>
            <div>
            <label htmlFor='Email' className="form-label">Email</label>
                  <input type="text" placeholder='Phone' className='form-control' />
 
            </div>
            <div>
            <label htmlFor="course" className="form-label">Select Course</label>
                  <select className='form-control'>
                    <option value="mern">MERN</option>
                    <option value="mern">python full stack</option>
                    
                    <option value="mern">Java full stack</option>
                    <option value="mern">data scince</option>
                    <option value="mern">cloud computing</option>
                  </select>
            </div>
            <div className="btn1">
            <button >Join Now</button>
            </div>
          </div>

           

            
              
            
           
             
    
            
          </div> 
        </div>
        </div> 
        </div>
       
    )
};

export default Home