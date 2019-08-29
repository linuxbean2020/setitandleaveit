import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import about_banner from '../../assets/img/about-banner-bg.jpg';
import about_bg from '../../assets/img/about-flower-bg.png';

class AboutUs extends Component{
    constructor(props){
        super(props);
        this.state ={
            isHide:false,
            activeClass:'',
            position:false,
            top:false,
            li1:'',
            li2:'',
            li3:'',
        }
    }


    componentDidMount(){
        window.addEventListener('scroll', () => {
            let activeClass = 'normal';
            let position = false;
            let top = false;
            let li1 = '';
            let li2 = '';
            let li3 = '';

            if(window.scrollY >= 1000 ){
                activeClass = 'is-sticky';
                position = true;
                top = true;
                li1 = 'active';
                li2 = '';
                li3 = '';
            }
            if(window.scrollY >= 1650 ){
                li1 = '';
                li2 = 'active';
                li3 = '';
            }
            if(window.scrollY >= 2350 ){
                li1 = '';
                li2 = '';
                li3 = 'active';
            }
            this.setState({ 
                activeClass:activeClass,
                position:position,
                top:top,
                li1:li1,
                li2:li2,
                li3:li3
             });
         });
    }

 
render(){
         return(
                    <div className="section-about">
                       <section id="inner-page-banner">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="inner-page-banner-heading">
                                        <h2>About</h2>
                                    </div>
                                    
                                    <div class="inner-page-banner-image">
                                        <img src={about_banner}/>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <section id="blouq-content">
                            <div class="container">
                                <div class="blouq-content-inner">
                                    <h5>We created this website as a resource to help investors and retirees make more informed decisions and introduce the <em><span>Set It and Leave It</span> approach.</em> Regardless of the path you choose, our ultimate goal is to help you maximize your financial security and peace of mind.</h5>
                                </div>
                            </div>
                        </section>

                        <section class="tradnitional-section about-fix" id="getFixed" style={{ position: this.state.position ? 'fixed' : '', top: this.state.top ? '0' : '' }}>
                            <div class="container">
                                <div class="row">
                                    <div class="trad-box-inner">
                                        <nav class="navbar" style={{ marginBottom: '0'}}>
                                            <div class="container-fluid">
                                                <ul class="nav">
                                                    <li className={`${this.state.li1}`}> <AnchorLink href="#motivation" class="scrolly"> MOTIVATION </AnchorLink> </li>
                                                    <li className={`${this.state.li2}`}> <AnchorLink href="#mybg" class="scrolly"> MY BACKGROUND </AnchorLink> </li>
                                                    <li className={`${this.state.li3}`}> <AnchorLink href="#evolution" class="scrolly"> EVOLUTION OF SET IT AND LEAVE IT </AnchorLink> </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div id="motivation">
                        <section id="parallax-main" class="inner-page-parallax" style={ { backgroundImage: "url("+about_bg+")" }} >
                            <div class="container">
                                <h2>Motivation</h2>
                            </div>
                        </section>
                        
                        <section id="about-parrallax-main-content">
                            <div class="container">
                                <p><i class="fa fa-plus"></i> When it comes to investing and retirement, the stakes are high. So it is no surprise people turn to <em>financial professionals</em> for advice. Unfortunately, conflicts of interest (e.g., <a href="#">commissions</a> and <a href="#">pay-to-play schemes</a>) encourage many financial professionals and their firms to promote investment products and strategies that are not in the best interests of their clients. Indeed, many of these involve higher fees, more risk, and are tax-inefficient. So this typically translates into significant headwinds for investment performance and retirement planning.</p>

                                <p>The good news is that investors and retirees are becoming increasingly aware of these issues (though often the hard way). While this awareness has fueled a seismic shift towards independent and <a href="#">fee-only</a> advisors for more objective advice, it has also encouraged more people to educate themselves and pursue <em>do-it-yourself</em> approaches.</p>

                                <p>The content and tools here on <span>Set It and Leave It</span> website were created to help educate
                                    investors and retirees so they can make more informed decisions. In addition to framing the retirement income challenge and explaining pros and cons of traditional retirement income strategies, we also present our <span>Set It and Leave It</span> approach. While its ability to lower costs and reduce risk can provide significant benefits, its simplicity and ease of implementation are probably its greatest attributes. Indeed, we believe the intuitive nature of the <span>Set It and Leave It</span> approach can promote greater understanding and help retirees enjoy more peace of mind.</p>
                            </div>
                        </section>
                        </div>

                        <div id="mybg">
                        <section id="parallax-main" class="inner-page-parallax" style={ { backgroundImage: "url("+about_bg+")" }} >
                            <div class="container">
                                <h2>MY BACKGROUND</h2>
                            </div>
                        </section>
                        
                        <section id="about-parrallax-main-content">
                            <div class="container">
                                <p><i class="fa fa-plus"></i> I am a math/finance PhD that landed in the investment world after jumping off the actuarial science track. My analytical background and passion for modeling led me to a career in investment research. I got started doing quantitative research for a small bank here in Florida (where I grew up), but spent most of my career working for big banks in New York and London. I primarily developed investment and risk management strategies for hedge funds, insurance companies, and the banks’ private clients (corporate executives, billionaires, royalty, etc.).</p>

                                <p>I eventually moved back to Florida and established my own investment firm (Aaron Brask Capital, LLC). Since then, I have mostly worked with individuals and families on matters related to financial planning and managing investments. It was this experience (and my own personal needs) that sparked my passion for researching <em>personal</em> investment and financial planning strategies.</p>

                                <p>While the topic of <em>retirement income</em> is probably not as glamorous as generating <em>alpha</em> (above-market returns) via stock selection, I found it to be fascinating. Moreover, it allowed me to leverage two key areas of my experience that would effectively become the essential ingredients of the <span>Set It and Leave It</span> approach.</p>
                                
                                <p>On the one hand, I had worked with many insurance companies to help them understand and manage their risk. So I became intimately familiar with the good, the bad, and the ugly of <em>annuity</em> products. On the other hand, I had conducted much due diligence on exchange traded funds (ETFs) and developed a variety of proprietary, rules-based index strategies. So I also gained a deep understanding of the fundamentals behind <em>dividend-based</em> products and strategies.</p>
                            </div>
                        </section>
                        </div>

                        <div id="evolution">
                            <section id="parallax-main" class="inner-page-parallax" style={ { backgroundImage: "url("+about_bg+")" }}>
                                <div class="container">
                                    <h2>EVOLUTION OF <span>SET IT <small>AND</small> LEAVE IT</span></h2>
                                </div>
                            </section>
                            
                            <section id="about-parrallax-main-content">
                                <div class="container">
                                    <p>Since I began using this strategy in my practice, feedback has been overwhelmingly positive.
                                    Prospects could quickly and intuitively see how their savings translated into retirement
                                    spending. This was a welcome change relative to the rules of thumb (e.g., <span class="c1"> 4% rule </span>) that
                                    required faith in statistical models based on historical market simulations. Moreover, this
                                    approach provided my clients with a greater understanding of retirement income generation
                                    and helped free their free retirement security from the mercy of potentially expensive advisors
                                    or what the market did. </p>
                                    <p> Based on the feedback I received and my success thus far, the strategy has effectively taken on
                                    a life of its own. I came up with the name and developed a business model. The <span> Set It and Leave
                                    It</span> website and tools are the first step, but I have plans to expand and improve. For example, I
                                    have also developed a <span> pre-Set It and Leave It </span> program (not yet online) for those who are still in
                                    the accumulation phase (i.e., not yet near retirement).</p> 
                                    <p> The <span> pre-Set It and Leave It </span> program helps pre-retirees sensibly invest their savings, but lays the
                                    groundwork for a seamless transition into a <span> Set It and Leave It</span> or other retirement strategy
                                    down the road. The goal is to start planning at an earlier stage, manage investments
                                    accordingly, and maximize efficiency to get the most out of one’s savings. This helps minimize
                                    unnecessary fees and tax frictions+++. </p> 
                                    <p> I believe <span> Set It and Leave It </span> is basically just a product of sensible financial engineering and risk
                                    management. However, an overriding goal was to maintain simplicity. I wanted to provide a
                                    refreshing alternative to what many perceive as black boxes<sup>++++</sup>. I believe the end result is a
                                    robust approach to retirement income that resonates with retirees.</p>
                                    <p>  Please feel free to <span class="c1"> <a href="#"> get in touch  </a></span> if you have questions, feedback, or ideas of how to improve and grow <span> Set It and Leave It.</span> </p> 
                                    <p> One of my favorite professors told me something along the lines of <em>“Actuaries are people who think
                        accounting is too exciting!”</em> </p>
                        <p> ++ Warren Buffett and Peter Lynch are well-known for their legendary stock-picking skills, but rock stars of
                        financial planning like William Bengen, Wade Pfau, or Michael Kitces are little-known outside the financial
                        planning community. </p>
                        <p> +++ Prospects have come to me with investments that had appreciated significantly but did not work well with
                        the Set It and Leave It approach. This imposes a choice between paying a tax bill and compromising the
                        strategy. </p>
                        <p> ++++ Black boxes refer to complex strategies where observers may be able to see the input and output, but have
                        little understanding of how results are achieved. </p>
                                </div>
                            </section>
                            
                            </div>




                    </div>
         );
     }
}  

export default AboutUs;