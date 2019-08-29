import React, { Component } from 'react';
import video_banner from '../../assets/img/video-banner-bg.jpg';
import graph1 from '../../assets/img/graph-1.png';

class Video extends Component{
    constructor(props){
        super(props);
        this.state ={
            isHide:false
        }
    }
render(){
            return(
                <div className="video-section">
                    
 
                    <section id="inner-page-banner">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="inner-page-banner-heading hdng">
                                    <h2> VIDEOS</h2>
                                </div>
                                
                                <div class="inner-page-banner-image">
                                    <img src={video_banner}/>
                                </div>
                            </div>
                        </div>
                    </section>

                                    
                    <section id="blouq-content">
                        <div class="container">
                            <div class="blouq-content-inner hq">
                                <h5>The short videos below describe some of the pros and cons associated with two traditional retirement income strategies and our <em> Set It and Leave It </em> approach. </h5>
                            </div>
                        </div>
                    </section>

                    <section class="video-section">
                        <div class="container">
                            <div class="row">
                            <div class="col-md-6">
                            <div class="video-content">
                                <h3> SAFE WITHDRAWAL RATE (SWR)  </h3>
                                <h4> Executive summary </h4>  
                                <ul>
                                    <li> Can be implemented cost-effectively </li>
                                    <li> Requires maintenance </li>
                                    <li>  Market dependent </li>
                                </ul>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                            <div class="video-box">
                                {/* <img src={video1} alt=""/> */}
                                <iframe src="https://player.vimeo.com/video/350372529" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                            </div>
                            </div>
                            </div>
                        </div>
                    </section>


                    <section class="video-section mg-top-10" >
                    <div class="container">
                        <div class="row">
                        <div class="col-md-6">
                        <div class="video-content">
                            <h3> VARIABLE ANNUITIES  </h3>
                            <h4> Executive summary </h4>  
                            <ul>
                                <li> Can guarantee income  </li>
                                <li> No maintenance </li>
                                <li> Typically very expensive </li>
                            </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                        <div class="video-box">
                        {/* <img src={video2} alt=""/> */}
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/350372584" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                       </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    
                    <section class="video-section mg-top-10" >
                    <div class="container">
                        <div class="row">
                        <div class="col-md-6">
                        <div class="video-content">
                            <h3> <em> SET IT AND LEAVE IT </em>  </h3>
                            <h4> Executive summary </h4>  
                            <ul>
                                <li> Low-cost </li>
                                <li> Low maintenance </li>
                                <li> Removes market risk </li>
                            </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                        <div class="video-box">
                        <img src={graph1} alt=""/>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
	

                </div>
            );
        }
    }
export default Video; 