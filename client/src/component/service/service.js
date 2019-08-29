import React, { Component } from 'react';
import { Accordion,Card,Button  } from 'react-bootstrap';
import Slider from "react-slick";

import service_banner from '../../assets/img/services-banner-ng.jpg';
import service_bg from '../../assets/img/services-flower-bg.png';
import innovate_bg from '../../assets/img/innovate-bg.jpeg';

class Service extends Component{
    constructor(props){
        super(props);
        this.state ={
            isHide:false
        }
    }

accordian(e) {
    alert(e.target);
    console.log(e.target);
}    
 
render(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

            return(
                <div className="service-section">
                        <section id="inner-page-banner">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="inner-page-banner-heading">
                                        <h2> SERVICES </h2>
                                    </div>

                                    <div className="inner-page-banner-image">
                                        <img src={service_banner}/>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="blouq-content">
                            <div className="container">
                                <div className="blouq-content-inner">
                                    <h5>Need some help? You can rely on us for genuine and competent advice. Whether you are a do-it-yourselfer looking for a little guidance or you want help building and executing your entire financial plan, we are here to help. </h5>
                                </div>
                            </div>
                        </section>

                                            
                        <section id="parallax-main" className="overlay-white" style={ { backgroundImage: "url("+service_bg+")" } }>
                            <div className="container">
                                <h2>SOLUTIONS <span className="light-cl"> (NOT SALES) </span> </h2>
                            </div>
                        </section>

                        <section className="solution-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="sloution-inner">
                                            <span className="bg-text">T</span>
                                            <h3> TRUST </h3>
                                            <p> We maintain a fiduciary standard when working with our clients – always looking out for their best interests. </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="sloution-inner">
                                            <span className="bg-text">C</span>
                                            <h3> COMPETENCE </h3>
                                            <p> Leverage the same analytical background and expertise that went into the Set It and Leave It strategy and tools. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="parallax-main" className="overlay-white" style={ { backgroundImage: "url("+service_bg+")" } }>
                            <div className="container">
                                <h2> Services </h2>
                            </div>
                        </section>

                        <section id="service-slider">

                        <Slider  {...settings}>
        <div >
                     <div className="service-item-image" style={ { backgroundImage: "url("+innovate_bg+")" } }>
                            <div className="service-item-content"><span className="bg-text">S</span>

                                <div className="sec-title mrgn-b-2">
                                    <h6>SET IT AND LEAVE IT</h6>
                                </div>
                                <div className="sec-content mrgn-b-2">
                                    <p className="lh-17">Let us help you plan and implement your <span> Set It and Leave It </span> retirement.</p>
                                </div>

                                <ul>
                                    <li> White glove service </li>
                                    <li> Retirement feasibility and planning </li>
                                    <li> Execute plan: Set up accounts, allocate assets, direct cash flows, etc. </li>
                                    <li> Optional monitoring and reporting services<sup> <i className="fa fa-arrow-up" aria-hidden="true"></i> </sup>.</li>
                                </ul>

                                <div className="read-more-link"><a href="contact.html" className="normal-btn">Get Started</a></div>
                            </div>
                        </div>
        </div>
        <div>
        <div className="service-item-image" style={ { backgroundImage: "url("+innovate_bg+")" } }>
                            <div className="service-item-content"><span className="bg-text">S</span>

                                <div className="sec-title mrgn-b-2">
                                    <h6>STRATEGY &amp; PLANNING</h6>
                                </div>
                                <div className="sec-content mrgn-b-2">
                                    <p className="lh-17">Leverage our expertise to help achieve your goals and mitigate risk. </p>
                                </div>

                                <ul>
                                <li> Thorough due diligence – not just rules of thumb </li>
                                <li> Income planning, asset allocation, asset location
                                </li><li> Tax efficient investment strategy, retirement account planning, etc.
                                </li><li> No challenge is too big or too small </li>
                            </ul>

                                <div className="read-more-link"><a href="contact.html" className="normal-btn">Get Started</a></div>
                            </div>
                        </div>
        </div>
        <div>
        <div className="service-item-image" style={ { backgroundImage: "url("+innovate_bg+")" } }>
                            <div className="service-item-content"><span className="bg-text">I</span>

                                <div className="sec-title mrgn-b-2">
                                    <h6>INVESTING</h6>
                                </div>
                                <div className="sec-content mrgn-b-2">
                                    <p className="lh-17">We can select and manage investments that best suit your needs. </p>
                                </div>

                                <ul>
				    <li>For savers still building a nest egg or retirees </li>
					<li>Low-cost, tax-efficient index funds </li>
					<li>Custom, tax-harvested equity portfolios </li>
					<li>Cash management via CDs and bonds </li>
					<li>Bond ladders </li>
					</ul>

                                <div className="read-more-link"><a href="contact.html" className="normal-btn">Get Started</a></div>
                            </div>
                        </div>
        </div>
        <div>
        <div className="service-item-image" style={ { backgroundImage: "url("+innovate_bg+")" } }>
                            <div className="service-item-content"><span className="bg-text">A</span>

                                <div className="sec-title mrgn-b-2">
                                    <h6>ANNUITIES &amp; INSURANCE</h6>
                                </div>
                                <div className="sec-content mrgn-b-2">
                                    <p className="lh-17">We help assess risks and determine which products, if any, make sense for you </p>
                                </div>

                                <ul>
					<li> Holistic risk assessment </li>
					<li> Find products with best combination of features and pricing/payouts </li>
					<li> Source quotes from multiple vendors </li>
					<li>  Access institutional pricing for fixed annuities </li>
                  </ul>

                                <div className="read-more-link"><a href="contact.html" className="normal-btn">Get Started</a></div>
                            </div>
                        </div>
        </div>

        <div>
        <div className="service-item-image" style={ { backgroundImage: "url("+innovate_bg+")" } }>
                            <div className="service-item-content"><span className="bg-text">A</span>

                                <div className="sec-title mrgn-b-2">
                                    <h6>ANNUITIES &amp; INSURANCE</h6>
                                </div>
                                <div className="sec-content mrgn-b-2">
                                    <p className="lh-17">We help assess risks and determine which products, if any, make sense for you </p>
                                </div>

                                <ul>
					<li> Holistic risk assessment </li>
					<li> Find products with best combination of features and pricing/payouts </li>
					<li> Source quotes from multiple vendors </li>
					<li>  Access institutional pricing for fixed annuities </li>
                  </ul>

                                <div className="read-more-link"><a href="contact.html" className="normal-btn">Get Started</a></div>
                            </div>
                        </div>
        </div>

        
    </Slider>


{/* 
        <div className="container-fluid">
            <div className="row">
                <div className="owl-carousel owl-theme pd-top-40">

                    <div className="item">
                        <div className="service-item-image" style={ { backgroundImage: "url("+innovate_bg+")" } }>
                            <div className="service-item-content"><span className="bg-text">S</span>

                                <div className="sec-title mrgn-b-2">
                                    <h6>SET IT AND LEAVE IT</h6>
                                </div>
                                <div className="sec-content mrgn-b-2">
                                    <p className="lh-17">Let us help you plan and implement your <span> Set It and Leave It </span> retirement.</p>
                                </div>

                                <ul>
                                    <li> White glove service </li>
                                    <li> Retirement feasibility and planning </li>
                                    <li> Execute plan: Set up accounts, allocate assets, direct cash flows, etc. </li>
                                    <li> Optional monitoring and reporting services<sup> <i className="fa fa-arrow-up" aria-hidden="true"></i> </sup>.</li>
                                </ul>

                                <div className="read-more-link"><a href="contact.html" className="normal-btn">Get Started</a></div>
                            </div>
                        </div>
                    </div>
                    
  


                    <div className="item">
                        <div className="service-item-image" style={ { backgroundImage: "url("+innovate_bg+")" } }>
                            <div className="service-item-content"><span className="bg-text">S</span>

                                <div className="sec-title mrgn-b-2">
                                    <h6>STRATEGY &amp; PLANNING</h6>
                                </div>
                                <div className="sec-content mrgn-b-2">
                                    <p className="lh-17">Leverage our expertise to help achieve your goals and mitigate risk. </p>
                                </div>

                                <ul>
                                <li> Thorough due diligence – not just rules of thumb </li>
                                <li> Income planning, asset allocation, asset location
                                </li><li> Tax efficient investment strategy, retirement account planning, etc.
                                </li><li> No challenge is too big or too small </li>
                            </ul>

                                <div className="read-more-link"><a href="contact.html" className="normal-btn">Get Started</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="item">
                        <div className="service-item-image" style={ { backgroundImage: "url("+innovate_bg+")" } }>
                            <div className="service-item-content"><span className="bg-text">I</span>

                                <div className="sec-title mrgn-b-2">
                                    <h6>INVESTING</h6>
                                </div>
                                <div className="sec-content mrgn-b-2">
                                    <p className="lh-17">We can select and manage investments that best suit your needs. </p>
                                </div>

                                <ul>
				    <li>For savers still building a nest egg or retirees </li>
					<li>Low-cost, tax-efficient index funds </li>
					<li>Custom, tax-harvested equity portfolios </li>
					<li>Cash management via CDs and bonds </li>
					<li>Bond ladders </li>
					</ul>

                                <div className="read-more-link"><a href="contact.html" className="normal-btn">Get Started</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="item">
                        <div className="service-item-image" style={ { backgroundImage: "url("+innovate_bg+")" } }>
                            <div className="service-item-content"><span className="bg-text">A</span>

                                <div className="sec-title mrgn-b-2">
                                    <h6>ANNUITIES &amp; INSURANCE</h6>
                                </div>
                                <div className="sec-content mrgn-b-2">
                                    <p className="lh-17">We help assess risks and determine which products, if any, make sense for you </p>
                                </div>

                                <ul>
					<li> Holistic risk assessment </li>
					<li> Find products with best combination of features and pricing/payouts </li>
					<li> Source quotes from multiple vendors </li>
					<li>  Access institutional pricing for fixed annuities </li>
                  </ul>

                                <div className="read-more-link"><a href="contact.html" className="normal-btn">Get Started</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </section>

    <section id="parallax-main" className="overlay-white" style={ { backgroundImage: "url("+service_bg+")" } }>
        <div className="container">
            <h2> PRICING </h2>
        </div>
    </section>
    
    <section id="pricing-accordian">
        <div className="container">
            <div className="pricing-accordian-inner">
                {/* <div className="single-service-tab">
                    <div onClick={this.accordian} className="toggle">
                        <div className="toggle-title ">
                            <h3>
                                <i></i>
                                <span className="title-name">Planning and advisory work (including <span className="c22"> Set It and Leave It)</span></span>
                            </h3>
                        </div>

                        <div className="toggle-inner">
                            <p> Our base rate is $250 per hour, but we find most clients prefer fixed fees. So we typically estimate the scope of work required for a particular project and propose a fixed fee. </p>

                                <p> <b> Note</b> We may reduce or waive fees in cases where you transact annuities or other insurance products through us. </p>
                        </div>
                    </div>
                    
                    <div onClick={this.accordian} className="toggle">
                        <div className="toggle-title ">
                            <h3>
                                <i></i>
                                <span className="title-name">Investment management</span>
                            </h3>
                        </div>

                        <div className="toggle-inner">
                            <p>Investment management services are typically charged as a percentage of assets ++ , though we do offer fixed fees in some cases.</p>
                        </div>
                    </div>
                    
                    <div onClick={this.accordian} className="toggle">
                        <div className="toggle-title ">
                            <h3>
                                <i></i>
                                <span className="title-name">Annuities and Insurance</span>
                            </h3>
                        </div>

                        <div className="toggle-inner">
                            <p>We do not charge fees for annuities or insurance products clients transact through us. However, the products themselves embed fees – some of which are paid out to us as commissions from the insurance companies</p>
                        </div>
                    </div>
                    
                    <div onClick={this.accordian} className="toggle">
                        <div className="toggle-title ">
                            <h3>
                                <i></i>
                                <span className="title-name">Satisfaction Guarantee</span>
                            </h3>
                        </div>

                        <div className="toggle-inner">
                            <p>If you are not 100% pleased with our services for any reason, just let us know how we can make things right. We will do our best to make you a satisfied customer, but can just as easily waive our fees or initiate a refund where applicable+++ .</p>
                        </div>
                    </div>

                </div> */}
                
                
<Accordion >
  <Card>
  {/* <i className="icons"></i> */}
    <Card.Header>
    
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Planning and advisory work (including <span class="c22"> Set It and Leave It)</span>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      {/* <i className="icons"></i> */}
          <p> Our base rate is $250 per hour, but we find most clients prefer fixed fees. So we typically estimate the scope of work required for a particular project and propose a fixed fee. </p>
          <p> <b> Note</b> We may reduce or waive fees in cases where you transact annuities or other insurance products through us. </p></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Investment management
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body> <p>Investment management services are typically charged as a percentage of assets ++ , though we do offer fixed fees in some cases.</p></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      Annuities and Insurance
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body> 
            <p>We do not charge fees for annuities or insurance products clients transact through us. However, the products themselves embed fees – some of which are paid out to us as commissions from the insurance companies</p>   
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
      Satisfaction Guarantee
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body> 
      <p>If you are not 100% pleased with our services for any reason, just let us know how we can make things right. We will do our best to make you a satisfied customer, but can just as easily waive our fees or initiate a refund where applicable+++ .</p>
           </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

                
            </div>
        </div>
    </section>

    <section style={{padding: '30px 0 0'}}>
        <div className="container">
            <div className="p-teaxt">
                    <p> + For those who like the idea of Set It and Leave It but still prefer a little help along the way, we can provide monitoring and reporting services for an annual fixed fee. We help ensure your financial security by tracking the progress of your plan and helping you manage any changes that come your way. </p>
                    <p> ++ These investment management fees range from 0.25% – 1.0% per year. </p>
                    <p> +++ Applies only to fees paid to us directly from clients for planning, advisory, or investment management services. This does not apply to insurance products. See advisory agreement for details. </p>
                </div>
        </div>
    </section>

                </div>
            );
        }
    }
export default Service; 