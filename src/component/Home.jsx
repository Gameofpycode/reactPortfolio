import React from 'react'

//const local functional component
const Home = function (props){
    return(
        <div id="home_page">
            {/* <div className="hireme">
            <marquee behavior="scroll" direction="forword"><h1>text hear</h1></marquee>
            </div> */}
            
            <div className="container">
                <div className="home_right">
                    <div className="square_up"></div>
                    <div className="square_down"></div>
                    <div className="square_center"><img src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?w=996&t=st=1695102363~exp=1695102963~hmac=4cb41a6ddd460b47b71c48259b73c033130a517b06db037cc0611a334e9a0025" alt="" /></div>
                    <div className="home_psd">
                        
                        <div className="img">
                            <img src="https://iconscout.com/free-logo/html5-42" alt="" width={"100%"} height={"100%"} />
                        </div>
                        <div className="img">
                            <img src="https://iconscout.com/free-logo/html5-42" alt="" />
                        </div>
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                        <div className="img">
                            <img src="" alt="" />
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
            </div>
        </div>
    )
};

export default Home