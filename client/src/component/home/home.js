import React, { Component } from 'react';
import slide1 from '../../assets/img/slide1.jpg';
import slide2 from '../../assets/img/slide2.jpg';
import slide3 from '../../assets/img/slide3.jpg';
import service1 from '../../assets/img/presentation.png';
import service2 from '../../assets/img/idea.png';
import service3 from '../../assets/img/calculation.png';
import service1_bg from '../../assets/img/educate-bg.jpeg';
import service2_bg from '../../assets/img/innovate-bg.jpeg';
import service3_bg from '../../assets/img/calculate-bg.jpeg';
import howuseit_bg from '../../assets/img/use-it-bg.png';
import use_it_image from '../../assets/img/use-it-image.jpg';
import peacemindBg from '../../assets/img/peace-mind-bg.png'
import peacemindImage from '../../assets/img/peace-mind-image.jpg';
import easyuse_bg from '../../assets/img/easy-use-bg.png';
import easyuse_img from '../../assets/img/easy-use-image.jpg';




import Carousel from 'react-bootstrap/Carousel'

class Home extends Component{
   constructor(props){
       super(props);
       this.state ={
           isHide:false
       }
   }

    render(){
        return(
              <div className="home-section">
                        <section id="home" style={{padding: '0'}}>
                                                       
                            <Carousel fade>
                            <Carousel.Item>
                            <div class="overlay"></div>
                                <img
                                className="d-block w-100"
                                src={slide1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>Retirement income so easy you can do it yourself, but we are happy to help.</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div class="overlay"></div>
                                <img
                                className="d-block w-100"
                                src={slide2}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>A retirement income solution you can understand with less risk and lower fees.</h3>
                            
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div class="overlay"></div>
                                <img
                                className="d-block w-100"
                                src={slide3}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Use our site to educate yourself and determine which retirement strategy is best for you.</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                           
                        </section>

                           
    <section id="services-main">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4">
                    <div className="service-item-image" style={ { backgroundImage: "url("+service1_bg+")" } }>
                        <div className="service-item-content"><span className="bg-text">E</span>
                           
                            <div className="service-box">
                                <div className="service-box-icon">
                                    <img src={service1}/>
                                </div>
                            </div>
                            <div className="sec-title mrgn-b-2">
                                <h5><a href="traditional.html">EDUCATE</a></h5>
                            </div>
                            
                            <div className="sec-content mrgn-b-2">
                                <p className="lh-17">Learn about traditional solutions for retirement income. Pros and cons, risks and fees, conflicts of interest, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 col-sm-4">
                    <div className="service-item-image" style={ { backgroundImage: "url("+service2_bg+")" } }>
                        <div className="service-item-content"><span className="bg-text">I</span>
                           
                            <div className="service-box">
                                <div className="service-box-icon">
                                    <img src={service2}/>
                                </div>
                            </div>
                           
                            <div className="sec-title mrgn-b-2">
                                <h5><a href="set-it-and-leave-it.html">INNOVATE</a></h5>
                            </div>
                            <div className="sec-content mrgn-b-2">
                                <p className="lh-17">Learn how to build a robust and growing stream of income while reducing your retirement’s dependence on market performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 col-sm-4">
                    <div className="service-item-image" style={ { backgroundImage: "url("+service3_bg+")" } }>
                        <div className="service-item-content"><span className="bg-text">C</span>
                           
                            <div className="service-box">
                                <div className="service-box-icon">
                                    <img src={service3}/>
                                </div>
                            </div>
                            
                            <div className="sec-title mrgn-b-2">
                                <h5><a href="tool.html">CALCULATE</a></h5>
                            </div>
                            <div className="sec-content mrgn-b-2">
                                <p className="lh-17">Quickly and easily investigate retirement feasibility and portfolio options by plugging in a few key figures.</p>
                            </div>
               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="parallax-main" style={ { backgroundImage: "url("+howuseit_bg+")" } }>
        <div className="container">
            <h2 className="cl1">WHO CAN USE IT</h2>
        </div>
    </section>
    

    <section id="site-content-main" style={{background: '#e5b8b7'}}>
        <div className="container">
            <div className="row">
               
                <div className="col-md-offset-1 col-md-push-5 col-md-6 col-sm-6">
                    <div className="site-image-box">
                        <img src={use_it_image}/>
                    </div>
                </div>
                
                <div className=" col-md-pull-7 col-md-5 col-sm-6">
                    <div className="site-content-box">
                        <ul>
                            <li><strong>Retirees:</strong> Investigate retirement feasibility
                                and portfolio options to generate robust,
                                increasing streams of income.</li>

                            <li><strong>Pre-retirees:</strong> It’s never too early to start
                                planning! Learn how to start investing
                                toward a Set It and Leave It retirement.</li>

                            <li><strong>Financial planners:</strong> Create income-based
                                asset allocations for your clients. <a href="contact.html">Contact us</a>
                                to learn about our affiliate program.</li>
                        </ul>
                        
                        <a href="tool.html" className="light-btn" style={{background: '#953835', borderColor: '#953835'}}>Start Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="parallax-main" style={ { backgroundImage: "url("+peacemindBg+")" } }>
        <div className="container">
            <h2 className="cl2"> PEACE OF MIND</h2>
        </div>
    </section> 


    <section id="site-content-main" style={{ background: '#b8cce4' }}>
        <div className="container">
            <div className="row">

                <div className="col-md-6 col-sm-6">
                    <div className="site-image-box">
                        <img src={peacemindImage}/>
                    </div>
                </div>

                <div className="col-md-offset-1 col-md-5 col-sm-6">
                    <div className="site-content-box">
                        <ul>
                            <li><strong>Transparency:</strong> Understand precisely where
                                your retirement income comes from.</li>

                            <li><strong>Reduce risk:</strong> Taking market risk out of your
                                retirement strategy can reduce risk.</li>

                            <li><strong>Lower fees:</strong> Reducing or eliminating advisor
                                and fund fees means more money for you.</li>

                            <li><strong>Improve performance:</strong> Target more income or
                                legacy wealth via innovative risk management.</li>
                        </ul>
                        
                        <a href="set-it-and-leave-it.html" className="light-btn" style={{background: '#4f80bd', borderColor: '#4f80bd'}}>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="parallax-main" style={ { backgroundImage: "url("+easyuse_bg+")" } }>
        <div className="container">
            <h2 className="cl3"> EASY TO USE</h2>
        </div>
    </section>

    <section id="site-content-main" style={{ background: '#abfba7'}}>
        <div className="container">
            <div className="row">

                <div className="col-md-offset-1 col-md-push-5 col-md-6 col-sm-6">
                    <div className="site-image-box">
                        <img src={easyuse_img}/>
                    </div>
                </div>

                <div className=" col-md-pull-7 col-md-5 col-sm-6">
                    <div className="site-content-box">
                        <ul>
                            <li><strong>Learn:</strong> Use the website to learn about
                                traditional retirement income strategies and
                                compare them to Set It and Leave It.</li>

                            <li><strong>Analyze:</strong> Sign up for our tool to start
                                investigating retirement feasibility and
                                retirement income solutions.</li>

                            <li><strong>Get help:</strong> Please get in touch if you would like
                                help with our tools, general financial planning,
                                or investment needs.</li>
                        </ul>
                        
                        <a href="tool.html" className="light-btn" style={{background: '#00b050', borderColor: '#00b050'}} >Start Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>  



              </div>
            );
  }
}

export default Home;