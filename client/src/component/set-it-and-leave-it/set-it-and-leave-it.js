import React, { Component } from 'react';
import setleave_banner from '../../assets/img/graph.png';
import graph1 from '../../assets/img/graph-1.png';

class SetItAndLeaveIt extends Component{
    constructor(props){
        super(props);
        this.state ={
            isHide:false
        }
    }

 
render(){
            return(
                <div className="set-and-leave-it-section">
                    
                    <section id="inner-page-banner">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="inner-page-banner-heading hdng">
                                    <h2> Set It and Leave It Retirement Income Strategy </h2>
                                </div>

                                <div className="inner-page-banner-image">
                                    <img src={setleave_banner}/>
                                </div>

                            </div>
                        </div>
                    </section>

                   
                    <div className="container">
                        <div className="not-sect nst">
                            <p> <span> !</span> <b> NOTE: </b> We have also created short <a href="#"> videos </a> summarizing much of the material below. </p>
                        </div>
                    </div>

                    <section id="blouq-content">
                        <div className="container">
                            <div className="blouq-content-inner">
                                <h3> OVERVIEW </h3>
                                <h5>The <span className="c22"> Set It and Leave It </span> approach specifically addresses many of the risks associated with standard safe withdrawal rate (SWR) strategies. In particular, it can remove take market risk out of retirement income and manage inflation risks more precisely. <span className="c22"> Set It and Leave It </span> also reduces the need for ongoing rebalancing. This can help retirees keep or spend more of their savings by eliminating advisor fees and tax friction. </h5><br/>
                                <h5> Transparency and understanding, seeing a more direct link between one’s asset and retirement spending. </h5> <br/>
                                <h5> Critical elements </h5>
                                <ul className="over-text">
                                    <li> - Pre-chiseling </li>
                                    <li> - Better understanding and use of dividends. </li>
                                </ul> <br/>
                                <h5> Other benefits <br/> More precisely calibrates to the market environment </h5>
                                <ul className="over-text">
                                    <li> - Requires little if any management <i className="fa fa-arrow-right" aria-hidden="true"></i> Lower fees </li>
                                    <li> - Systematically manage chiseling at the outset </li>
                                    <li> - Performance </li>
                                </ul> <br/>
                                <h5> There are just two primary changes when setting up one’s portfolio. </h5> <br/>
                                <h5> Less risk ?</h5>
                                <ul className="over-text">
                                    <li> - Effectively exchanging market risk for business risk for income and isolating market risk
                                        with heirs. </li>
                                    <li> - Better inflation hedge </li>
                                </ul>
                            </div>
                        </div>
                    </section>


                    <section class="income-chalange-box">
                        <div class="container">
                            <div class="row">
                                <div class="chalnge-inner">
                                    <h3> BACKGROUND: RETIREMENT INCOME CHALLENGES <br/> <em> ASDF </em></h3>
                                    <h4> “ASDF.” </h4>

                                    <p> Much research<sup>+</sup> [+ William Bengen, Trinity study, Wade Pfau, etc.] has been done on what level of spending is reasonable relative to one’s savings. </p>

                                    <h5> ADVANTAGES </h5>
                                    <ul>
                                        <li> More intuitive and transparent – less guesswork </li>
                                        <li> Lower fees </li>
                                        <li> Less risk </li>
                                    </ul>

                                    <h5> DISADVANTAGES </h5>
                                    <ul>
                                        <li> Still involves an annuity (though this part can be minimized by using deferred annuities) </li>
                                    </ul>
                                    <img class="cimg" src={graph1} alt=""/>
                                    <div class="inner-22">
                                        <h4> “asdf.” </h4>
                                        <p> While we did not discuss them above, there are also fixed (not variable) annuities and they typically involve significantly lower fees. Recent research<sup>+</sup> <span class="acd">[+ Pfau, Tomlinson, Edessess, Swedroe, etc.]</span> shows how fixed annuities can be integrated with balanced portfolios to improve outcomes for SWR strategies – thereby reducing their market dependence. Our <em> Set It and Leave It </em> program further reduces retirement income dependence on market performance while sporting other benefits such as lower required maintenance, lower costs, increased taxefficiency, and improved legacy outcomes. Learn more about <em> Set It and Leave It </em> and how it uses innovative financial engineering and risk management to achieve these benefits. </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            );
        }
    }
export default SetItAndLeaveIt; 