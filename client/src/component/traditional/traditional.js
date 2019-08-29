import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import taditional_banner from '../../assets/img/tradnitional-banner-bg.jpg';
import serviceFlow_bg from '../../assets/img/services-flower-bg.png';
import image1 from '../../assets/img/SWR.gif';
import image2 from '../../assets/img/bb11.png';

class Traditional extends Component{
    constructor(props){
        super(props);
        this.state ={
            isHide:false,
            activeClass:'',
            position:false,
            top:false
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
            let li4 = '';

            if(window.scrollY >= 1340 ){
                activeClass = 'is-sticky';
                position = true;
                top = true;
                li1 = 'active';
                li2 = '';
                li3 = '';
                li4 = '';
            }
            if(window.scrollY >= 2140 ){  
                li1 = '';              
                li2 = 'active';
                li3 = '';
                li4 = '';
            }
            if(window.scrollY >= 5000 ){                
                li1 = '';              
                li2 = '';
                li3 = 'active';
                li4 = '';
            }
            if(window.scrollY >= 7400 ){                
                li1 = '';              
                li2 = '';
                li3 = '';
                li4 = 'active';
            }
            this.setState({ 
                activeClass:activeClass,
                position:position,
                top:top,
                li1:li1,
                li2:li2,
                li3:li3,
                li4:li4
             });
         });
    }

 
render(){
         return(
<div className="traditional-section">

<section id="inner-page-banner">
        <div className="container-fluid">
            <div className="row">
                <div className="inner-page-banner-heading hdng">
                    <h2> Traditional Approaches to Retirement Income </h2>
                </div>

                <div className="inner-page-banner-image" >
                    <img src={taditional_banner}/>
                </div>
            </div>
        </div>
    </section>

    <div className="container">
        <div className="not-sect">
            <p> <span> !</span> <b> NOTE: </b> This is a long page with much content. We have also created short <a href="#"> videos </a> summarizing much of the content below. </p>
        </div>
    </div>

    <section id="blouq-content">
        <div className="container">
            <div className="blouq-content-inner">
                <h3> OVERVIEW </h3>
                <h5> This page describes what we believe are the two primary approaches to generating retirement income: Safe withdrawal rate (SWR) strategies and guaranteed income via annuity products. Our goal is to help retirees understand what options are available, the advantages and disadvantages of each approach, and what incentives financial professionals might have for advocating various products or strategies. We hope this helps retirees make more informed decisions so they can maximize their financial security and peace of mind. </h5>
            </div>
        </div>
    </section>
    <div id="getFixed-sticky-wrapper" className={`sticky-wrapper ${this.state.activeClass}`}>
    <section className="tradnitional-section" id="getFixed" style={{ position: this.state.position ? 'fixed' : '', top: this.state.top ? '0' : '' }}>
        <div className="container">
            <div className="row">
                <div className="trad-box-inner">            



                    <nav className="navbar" style={{marginBottom: '0'}}>
                        <div className="container-fluid">

                            <ul className="nav">
                                <li className={`${this.state.li1}`}> <AnchorLink href="#background" className="scrolly"> BACKGROUND </AnchorLink> </li>
                                <li className={`${this.state.li2}`}> <AnchorLink href="#withdrawal" className="scrolly"> SAFE WITHDRAWAL RATE </AnchorLink> </li>
                                <li className={`${this.state.li3}`}> <AnchorLink href="#varible" className="scrolly"> VARIABLE ANNUITIES </AnchorLink> </li>
                                <li className={`${this.state.li4}`}> <AnchorLink href="#executivesummary" className="scrolly"> EXECUTIVE SUMMARY </AnchorLink> </li>
                            </ul>

                        </div>
                    </nav>

                </div>
            </div>
        </div>
    </section>
</div>
    <div id="background">
        <section id="parallax-main" className="overlay-white" style={ { backgroundImage: "url("+serviceFlow_bg+")" } }>
            <div className="container haddng">
                <h2> BACKGROUND: RETIREMENT INCOME CHALLENGES </h2>
            </div>
        </section>

        <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p> Most people do not have enough savings to live off their portfolios’ natural income (i.e., the dividends and interest). For example, a dividend yield of 2% requires savings on the order of 50x one’s annual spending budget; each $100,000 of spending would require approximately $5 million in savings. Of course, it is possible to find investments with higher yields. However, higher yields are generally associated with higher risk – whether they come from stocks or bonds. </p>

                            <p> When dividends and interest do not provide enough income, retirees are effectively forced to generate synthetic income by chiseling off from their portfolio to maintain the same level of spending. However, one should be careful with this approach because it can be a slippery slope. In particular, one loses the dividends and interest from any parts of the portfolio they sell. So this loss of natural income could require chiseling off more of the portfolio the following year, then even more the next year, and so on. To be sure, one should do their best to avoid a vicious cycle of accelerating portfolio depletion. </p>
                            <p> One factor that makes this situation more difficult to manage is the <em>forced selling</em>. In particular, having to chisel off synthetic income places one’s retirement security at the mercy of the market. Of course, markets can go up and inflate the prices at which holdings are sold – creating a welcome tailwind. However, markets can also experience declines. During these downturns, one must sell more holdings (e.g., more shares of a stock) to generate the same level of synthetic income. Unsurprisingly, this makes market volatility a significant threat to retirement security. </p>
                            <p> Another important factor to consider is inflation. That is, the costs of many goods and services we pay for tend to go up. As a result, one’s spending needs in retirement may increase accordingly. This could exacerbate the issue above by requiring even more synthetic income to be chiseled off from the portfolio. </p>
                            <p> The bottom line is that comprehensive and conservative planning is imperative to monitor and manage these risks. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div id="withdrawal">
        <section id="parallax-main" className="overlay-white" style={ { backgroundImage: "url("+serviceFlow_bg+")" } }>
            <div className="container haddng">
                <h2> SOLUTION #1: THE SAFE WITHDRAWAL RATE (SWR) APPROACH </h2>
            </div>
        </section>

        <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p> The most common approach used to address the retirement income challenges highlighted above is to maintain a balanced portfolio (e.g., stocks and bonds1 ) and a safe withdrawal rate (SWR). </p>

                            <p> <img src={image1} /> <b> A Balanced Portfolio via Fixed Asset Allocation</b> <br/>The standard SWR strategy maintains a balanced portfolio with a fixed asset allocation. That is, one specifies the percentage allocations for stocks and bonds (e.g., 50%/50%) at the outset and then rebalances the portfolio periodically as allocations change due to market movements. One can rebalance to the target allocations at a set frequency (e.g., annually) or when allocations deviate from the target percentage by a pre-specified threshold. </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p> The goal of a balanced portfolio is to provide enough growth to replenish the synthetic income that is chiseled off and keep up with inflation (to avoid the vicious cycle described above). Stock allocations are supposed to provide long-term growth in excess of inflation (a.k.a. real returns) while bond allocations (a.k.a. fixed income) should help mitigate volatility by diversifying the portfolio without compromising purchasing power. Indeed, interest rates and bond yields generally serve as compensation for inflation – so investors can save money without losing purchasing power. </p>
                            <p> If we rely on stocks as the source of growth, then why not allocate 100% to them to get even more growth? While most will likely agree the long-term direction of the stock market is up, the issue is that stocks can be quite volatile. In particular, this can threaten retirement security. For example, consider a situation where stocks decline early in retirement, but then go on to make up those losses and appreciate significantly more thereafter. The issue is that the early declines impose some permanent damage due to the withdrawals at depressed prices – even though the returns turned out to be good over the longer run. Not only would one be selling at depressed prices and locking in losses, but they would actually be selling more holdings to generate the same level of withdrawal. </p>
                            <p> This type of risk highlights the need to balance the threat imposed by market volatility with the need for long-term growth. However, these are not the only factors that determine what the appropriate balance is for a portfolio. </p>
                            <p> <b>Risk tolerance</b><br/>In addition to balancing the need for growth versus risk from market volatility, the asset allocation for a SWR strategy should also integrate one’s risk tolerance. Indeed, it is critical to construct portfolio asset allocations investors will be comfortable with – especially when markets get volatile. A common mistake many investors and advisors make is maintaining allocations to stocks or other risk assets that are too large.</p>
                            <p> When markets are going up, larger stock allocations typically work well and often buoy confidence. However, investors sometimes lose their stomach for risk at the worst time – after markets decline. This can result in selling around market bottoms, locking in significant losses, and missing subsequent rebounds. Suffice to say, this is a situation that should be avoided. It is absolutely critical to ensure investors will be able to stomach potential portfolio declines and stay the course. </p>
                            <p> <b>So what is a sensible withdrawal rate?</b><br/>The natural question many retirees and near-retirees ask is ‘What level of retirement spending is reasonable?’ There is no definitive answer, but there is plenty of research on the topic. One of the most popular rules of thumb has become known as the 4% rule. The idea is to set one’s withdrawals for retirement spending at 4% of their savings in the first year. Then they would adjust that level of withdrawal by inflation in each subsequent year. This approach was based on William Bengen’s pioneering research on the topic. He demonstrated that retirees utilizing this 4% SWR strategy and maintaining balanced portfolios historically experienced little risk of portfolio depletion (note: his original analysis was conducted in 1992).</p>
                            <p> It is worth noting this 4% rule of thumb is independent of the state of the markets (interest rates, stock valuations, dividend yields, etc.). It effectively plans for the worst market scenario – or at least the worst that has occurred. Thus, retirees or advisors pursuing such an approach may be unnecessarily erring too far on the side of caution. For example, our research corroborates the findings of others’ research (e.g., Michael Kitces) in finding that cheaper valuations have historically allowed for higher withdrawal rates. We find this unsurprising as lower valuations effectively translate into higher dividend yields and higher long-term returns. </p>
                            <p> Another popular study which built on Bengen’s research became known as the Trinity study (the real title was Retirement Spending: Choosing a Sustainable Withdrawal Rate) by professors Philip L. Cooley, Carl M. Hubbard, and Daniel T. Walz at Trinity University in Texas. Brushing some of the differences in technical assumptions, this study extended Bengen’s results by looking at the success rates for similar combinations of portfolio compositions, withdrawal rates, and time horizons. That is, instead of focusing exclusively on the SWR that worked across all market periods and catering to the worst case scenario, they considered how often different SWRs were successful. For example, the Trinity Study results could allow one to select a SWR that had an acceptably low rate of failure (rather than a zero-failure rate) while understanding it may involve slightly higher risk. </p>
                            <p> Suffice to say, there are many ways to analyze retirement strategies. These and other studies primarily focus on issues related to market uncertainty. Leveraging historical data can help sift through some of this uncertainty, but it is obviously limited to what has already happened (you know the old saying ‘past performance is not necessarily indicative of future performance’). So some use Monte Carlo simulations to consider scenarios that have not (yet?) occurred but may in the future. </p>
                            <p> The volatility that comes along with stock portfolios is inevitable. Even if unlikely, future market performance might be significantly different than what has happened in the past or what was modeled in simulations. So the market dependence of SWR strategies will always expose them to this risk.  </p>
                            <p> <b>Ongoing research</b><br/>Given the uncertainties highlighted above, some investors and advisors may have to adjust spending and asset allocations along the way as to avoid jeopardizing retirement security. While helpful for managing risk, this dynamic approach may impose some uncertainty and unwelcome changes on retirees and their future spending budgets.</p>
                            <p>While most SWR strategies pursue some variant of the approach described above, it is a deep topic with many moving parts. Accordingly, there is still much active research investigating different strategies for managing retirement income risks. We find the research generally focuses either on dynamically modifying the withdrawal strategies or investigating portfolio and investment strategies as a means of reducing portfolio volatility. Some of the more popular topics include dynamic and threshold-based spending, sequence of return risk, uncorrelated factors and risk premiums, glide paths, annuities, and investments with inflation-based payoffs.</p>
                            <p> <b>Implementation</b><br/>In terms of implementation, investors pursuing SWR strategies may leverage the services of an investment professional or they can do it themselves. While it may be comforting to have someone hold your hand and execute the strategy for you, it is important to consider the costs. For example, consider a 1% advisor fee in the context of a 4% withdrawal rate. This fee would consume approximately 25% of one’s retirement income. Furthermore, if this advisor used expensive mutual funds with fees that were also on the order of 1% (this is unfortunately still very common), then the combined fees (advisor plus mutual fund fees) would consume approximately half of the withdrawal income. Just think, you could work hard all your life just to share half of your retirement income with the financial services industry.</p>
                            <p>Fortunately, some platforms now provide free rebalancing services and other tools that make implementation easier. Moreover, there are a variety of low-cost index funds available to investors. So it possible for investors to manage SWR strategies by themselves in a cost-efficient manner.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p>on William Bengen’s pioneering research on the topic3. He demonstrated that retirees utilizing this 4% SWR strategy and maintaining balanced portfolios historically experienced little risk of portfolio depletion..</p>
                            <p> It is worth noting this 4% rule of thumb is independent of the state of the markets (interest rates, stock valuations, dividend yields, etc.). It effectively plans for the worst market scenario. Thus, retirees or advisors pursuing such an approach may be unnecessarily erring too far on the side of caution. For example, our <span> research </span> and others <span className="a1"> (Kitces) </span> indicates cheaper valuations have historically allowed for higher withdrawal rates. </p>

                            <p> Another popular study which built on Bengen’s research became known as the <span> Trinity study </span>
                                (the real title was Retirement Spending: Choosing a Sustainable Withdrawal Rate) by professors
                                Philip L. Cooley, Carl M. Hubbard, and Daniel T. Walz at Trinity University in Texas. Brushing
                                some of the differences in technical assumptions, this study extended Bengen’s results by
                                looking at the success rates for similar combinations of portfolio compositions, withdrawal
                                rates, and time horizons. That is, instead of focusing exclusively on the highest successful SWR
                                across all market periods and catering to the worst case scenario, they delved deeper by
                                considering how often different SWRs succeeded. For example, the Trinity Study results could
                                allow one to select a SWR that had an acceptably low rate of failure while understanding it
                                involved slightly higher risk. </p>

                            <p> Suffice to say, there are many ways to analyze retirement strategies. The primary challenge is
                                dealing with the uncertainty of market performance. Leveraging historical data can help sift
                                through some of this uncertainty, but it is obviously limited to what has already happened (you
                                know the old saying ‘past performance is not necessarily indicative of future performance’). So
                                some use <em> Monte Carlo<sup>4</sup></em>
                                simulations so they can consider scenarios that have not occurred in
                                the past but may be reasonable. </p>

                            <p> The volatility that comes along with stock portfolios is inevitable. Even if unlikely, future market
                                performance might be significantly different than what has happened in the past or what was
                                modeled in simulations. So the market dependence of SWR strategies will always expose them
                                to market risk. In order to accommodate this risk, some investors and advisors may have to
                                adjust their spending and asset allocations along the way as to avoid jeopardizing retirement
                                security. While helpful for managing risk, this dynamic approach introduces some uncertainty
                                for retirees and their future spending budgets.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p> <b> Ongoing research </b> <br/> While most SWR strategies pursue variants of the approaches described above, it is a deep
                                topic with many moving parts. Accordingly, there is still much active research5
                                addressing the
                                market risk inherent within withdrawal strategies (dynamic and threshold-based spending,
                                sequence of return risk, glide paths, annuities, inflation-based investments, etc.). In general, the
                                research focuses either on dynamically modifying the withdrawal strategies or investigating
                                portfolio and investment strategies as a means of managing the risk. </p>
                            <p> <b> Implementation </b> <br/>
                                In terms of implementation, investors pursuing SWR strategies may leverage the services of an
                                investment professional or they can do it themselves. While it may be comforting to have
                                someone hold your hand and execute the strategy for you, it is important to consider the costs.
                                For example, consider a 1% advisor fee in the context of a 4% withdrawal rate. The fee would
                                consume approximately 25% of one’s retirement income. Furthermore, if this advisor used
                                expensive mutual funds with fees that were also on the order of 1% (this is unfortunately still
                                very common), then the combined fees (advisor plus fund fees) would amount to half of the
                                withdrawal income. Just think, work hard all your life just to share half of your retirement
                                income with the financial services industry. </p>

                            <p> Fortunately, some platforms now provide free rebalancing services and other tools that make
                                implementation easier. Moreover, there are a variety of low-cost index funds available to
                                investors. So it possible for investors to manage SWR strategies by themselves in a cost-efficient
                                manner.
                            </p>

                            <p> <b> SWR summary </b> <br/>
                                The SWR strategy is a popular and time-tested approach backed by much research. There are
                                plenty of advisors, planners, and tools devoted to the strategy. For those who are inclined to
                                do-it-yourself, implementation can be relatively straightforward. In fact, there are multiple
                                platforms that offer free robo- (automated) rebalancing. Implementing SWR without an advisor
                                and using low-cost index funds (e.g., Vanguard) can help retirees save on fees and get the most
                                out of their savings. </p>

                            <p> TOf course, SWR strategies are not perfect. As highlighted above, the one key risk virtually all
                                SWR strategies and related variations have is dependence on market performance. Despite the
                                many research studies and number crunching, the uncertainty due to the strategy’s market
                                dependence means there will always be some guesswork to determine what the true SWR is.
                                Moreover, markets may behave worse than history or simulations anticipate and force some to
                                reduce spending down the road. This can make some retirees nervous. </p>
                            <p> Another drawback of this market dependence is that it effectively forces retirees to steer quite
                                clear of risk because running out of money should be avoided at all costs. As a result, one
                                typically leans toward more conservative assumptions – specifically, lower withdrawal rates. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p> This and the logic behind SWR strategies planning for the worst case market scenarios can
                                induce many to live more conservatively than necessary. </p>
                            <p> There are also potential issues arising from the use of fixed asset allocations. For example, the
                                buying and selling required to maintain fixed allocations can trigger (capital gains) taxes. There
                                is also a more subtle performance implication. While the primary purpose of fixed allocations is
                                to help contain portfolio volatility, it can also systematically constrain growth. The base
                                assumption is that stocks will be the source of growth. However, each time they grow and
                                outpace other parts of the portfolio (e.g, bonds), some of them will be sold with the proceeds
                                being reinvested elsewhere to restore the percentage allocations. So the volatility constraint
                                effectively translates into a constraint on portfolio growth. </p>

                            <p> Lastly, SWR strategies are vulnerable to inflation – or even just the perceived threat of inflation.
                                Historically, stocks and bonds have both declined in the face of inflation or inflation scares6
                                .
                                Indeed, retirement researchers have highlighted the inflationary environments as a potential
                                Achilles heel of SWR strategies. This is due to the double-whammy situation of needing to chisel
                                off more income to cover rising costs at a time when portfolio values have likely declined. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       */}
    </div>




    <div id="varible">
        <section id="parallax-main" className="overlay-white" style={ { backgroundImage: "url("+serviceFlow_bg+")" } }>
            <div className="container haddng">
                <h2> SOLUTION #2: VARIABLE ANNUITY PRODUCTS </h2>
            </div>
        </section>

        <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p> <b>Note:</b> This section focuses on variable annuity products because they are comparable to the SWR strategies above and are one of the most highly marketed types of annuities. You can read about fixed annuities on the Set It and Leave It page or watch our short videos on each of these topics and more. </p>
                            <p> For investors who would like to insure themselves against market risks like those described above, insurance companies offer guaranteed income via annuity products. For example, variable annuity products allow investors to invest in balanced portfolios (similar to those used in SWR strategies) while insuring minimum levels of lifetime income via additional options called riders. Even if the portfolio becomes 100% depleted, the insurance company would step in and make the payments they guaranteed. </p>
                            <p> In theory (and marketing literature), variable annuities could allow one to achieve growth through gains in the underlying portfolio while enjoying peace of mind from knowing they have a guaranteed stream of income. However, it is important to consider the details of these products (especially costs!) before getting too excited. We discuss these details below. </p>
                            <p> <b>The income guarantee</b><br/>The income guarantee that is most comparable to SWR strategies would come from a guaranteed lifetime withdrawal benefit (GLWB) rider. With GLWB, an insurer typically guarantees a minimum-level of annual withdrawals throughout your lifetime, but allows for the level of guaranteed income to increase as the value of the underlying portfolio increases (but not decrease if the portfolio declines).</p>
                            <p> The amount of guaranteed income is usually described as a percentage (e.g., 4%) of your initial investment. Consider a $1 million variable annuity with a 4% income guarantee. From day one, the insurer would guarantee $40,000 (i.e., 4% of $1 million) of annual income for the annuity owner. If the portfolio rose by 10%, then the percentage would be applied to the new, higher portfolio value and raise the minimum guaranteed income to $44,000 per year. However, if the portfolio subsequently declines (or even was even completely depleted), the minimum guaranteed income would remain at $44,000, but could still increase if the portfolio recovered and reached new highs. </p>
                            <p> Guaranteeing a stream of income that can only increase is a desirable feature.  However, this mechanism introduces a dependence on market performance. In particular, this can make a variable annuity vulnerable to inflation – the same double-whammy we described for the SWR strategy above. If inflation rose and asset prices fell, then one would need to withdraw more dollars at a time when the assets are worth less – thus requiring one to liquidate more of their holdings. This could create a situation whereby the guaranteed income would stay level despite rising costs and the cash value of the annuity could quickly deplete. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p> <b>Tax (dis)advantages</b><br/>Another one of the major selling points of annuities is their ability to defer taxes. Indeed, the investments within annuities generally benefit from tax-deferred growth. Just as with qualified retirement accounts (e.g., IRAs), there are no taxes on stock dividends, bond interest, or portfolio rebalancing inside of a variable annuity. This allows investments to compound at a higher rate since Uncle Sam does not take a cut each year. All else equal, this is a significant benefit. However, all else is not equal.</p>
                            <p> Tax-deferred growth is naturally a positive. However, when taking money out of variable annuities, portfolio earnings are distributed first and they are taxed as income (for taxable accounts). If the same investments were held in a standard brokerage account without the annuity wrapper, then gains would be taxed at the capital gains tax rate which is typically lower for investments held for longer than one year. So this higher tax rate on the distributions from an annuity clearly offsets some of the tax deferral benefit accrued inside the annuity. In fact, it could actually make the overall tax impact net negative. That is, the higher tax on earnings could actually outweigh the benefits of the internal tax deferral.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p> <b>The big catch (fees)</b><br/><img src={image2} alt=""/>Regardless of the tax factors above, the guaranteed income is an undeniably attractive feature. In fact, the income guarantees combined with potential portfolio appreciation often sound too good to be true. However, that is because the costs of variable annuities are not always obvious. For starters, the average fee on variable annuity contracts with income guarantees is over 3% per year (even Vanguard’s fees are around 2% for this type of product). While some level of income may be guaranteed, these kinds of fees naturally represent a significant headwind for portfolio growth. In fact, there is some irony to be found in having fees of this magnitude. In conjunction with investor withdrawals, these fees will make portfolio depletion even more likely – hence increasing the need for the guarantee. </p>
                            <p> We suspect many investors and retirees who are being sold variable annuities are not aware of all the fees embedded in these products. For example, 3% annual fees over a typical retirement of, say, 25 years could consume half of one’s portfolio or more. While attempting to shield themselves from the threat of market volatility, some may actually be guaranteeing they lose (via fees) as much as or more than they would in a market crash. </p>
                            <p> <b>Note:</b> Technically, GLWB rider fees are assessed as a percentage of the benefit base. So they could actually be significantly higher when expressed as a percentage of the cash value (where fees are ultimately taken from). </p>
                            <p> <b>Insured insurance</b>An important factor one should consider when purchasing an annuity (or any insurance product) is the creditworthiness of the insurance company. Sure, they may be making promises that sound great, but will they have the ability to live up to their promises? Just as with any corporation, it is possible for an insurance company to default – though it has been rare throughout history. In general, risker insurance companies will offer higher payouts in order to compensate investors for their higher risk status.</p>
                            <p> Fortunately, many states have guaranty programs whereby they regulate and help backup the claims of the insurance companies operating within their state. In practice, a state regulator will generally facilitate the transfer of assets and liabilities to another insurance company who will continue to fulfil the failed firm’s promises. The upshot is that this can provide an added layer of insurance to the guarantees you can get from insurance companies. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>










        {/* <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p><b> The income guarantee </b> <br/>
                                The income guarantee that is most comparable to SWR strategies is the guaranteed lifetime
                                withdrawal benefit (GLWB). With a GLWB, an insurer typically guarantees a minimum-level of
                                annual withdrawals throughout your lifetime. However, it also allows for the level of
                                guaranteed income to increase as the value of the portfolio increases (but not decrease if the
                                portfolio declines).</p>
                            <p> The amount of guaranteed income is usually described as a percentage (e.g., 4%) of your
                                investment balance. Consider a $1 million portfolio with a 4% income guarantee. From day one,
                                the insurer would guarantee $40,000 (i.e., 4% of $1 million) of annual income for the annuity
                                owner. If the portfolio rises by 10%, then the percentage would be applied to the new, higher
                                portfolio value and raise the minimum guaranteed income to $44,000 per year. However, even
                                if the portfolio subsequently declines (or even depletes), the minimum guaranteed income will
                                remain at $44,000 (but still potentially go higher if the portfolio recovers and reaches new
                                highs).</p>

                            <p> Guaranteeing a stream of income that can potentially increase (but not decrease) is naturally a
                                desirable feature. However, this mechanism introduces a dependence on market performance.
                                In particular, the income will only increase when the portfolio grows. However, as we described
                                above for the SWR strategy, this can make a variable annuity with the GLWB vulnerable to
                                inflation too. If inflation rises and asset prices fall, then one would need to withdraw more
                                dollars at a time when the assets are worth less – thus requiring one to liquidate more assets.
                                On balance, the potential growth of income is a nice feature, but the mechanism through which
                                it works may expose one to inflation risk. </p>


                            <p> <b> Tax (dis)advantages </b> <br/>
                                Another one of the major selling points of annuities is their ability to defer taxes. Indeed, the
                                investments within annuities generally benefit from tax-deferred growth. Just as with qualified
                                retirement accounts (e.g., IRAs <sup>8 </sup> ), there are no taxes on stock dividends, bond interest, or
                                portfolio rebalancing inside of a variable annuity. This allows investments to compound at a
                                higher rate since Uncle Sam does not take a cut each year. All else equal, this is a significant
                                benefit. However, all else is not equal.
                            </p>
                            <p> Tax-deferred growth is naturally a positive. However, when taking money out of variable
                                annuities, portfolio earnings are distributed first and they are taxed as income (for taxable
                                accounts). If the same investments were held in a standard brokerage account without the
                                annuity wrapper, then gains would be taxed at the typically lower capital gains tax rate. So this
                                higher tax rate on the distributions clearly offsets some of the tax deferral benefit accrued
                                inside the annuity. In fact, it could actually make the overall tax impact net negative. That is, the
                                higher tax on earnings could outweigh the benefits of tax deferral. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        {/* <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p><b> The big catch (fees) </b> <br/>
                                <img src={image2} alt=""/> Regardless of the tax factors above, the guaranteed income is
                                an undeniably attractive feature. In fact, the income
                                guarantees combined with potential portfolio appreciation
                                often sound too good to be true. However, that is because the
                                costs of variable annuities are not always obvious. For
                                starters, the average fee on variable annuity contracts with
                                income guarantees is over 3% per year (even Vanguard’s is
                                around 2%). While some level of income may be guaranteed,
                                these kinds of fees naturally represent a significant headwind
                                for portfolio growth. In fact, we see some irony in observing that fees of this magnitude in
                                conjunction with withdrawals will make portfolio depletion even more likely – hence increasing
                                the need for the guarantee.</p>

                            <p> We suspect many investors and retirees who are being sold variable annuities are not aware of
                                all the fees embedded in these products. For example, 3% annual fees over a typical retirement
                                of, say, 25 years could consume half of one’s portfolio or more. While attempting to shield
                                themselves from the threat of market volatility, some may actually be guaranteeing they lose
                                (via fees) as much as they would in a market crash or more. Note: Technically, GLWB rider fees
                                are assessed as a percentage of the benefit base9
                                . So they could actually be significantly higher
                                when expressed as a percentage of the cash value (where fees are ultimately taken from).
                            </p>

                            <p> <b> Insured insurance </b> <br/>
                                An important factor one should consider when purchasing an annuity (or any insurance
                                product) is the creditworthiness of the insurance company. Sure, they may be making promises
                                that sound great, but will they have the ability to live up to their promises? Just as with any
                                corporation, it is possible for an insurance company to default – though it has been rare
                                throughout history. In general, risker insurance companies will offer higher payouts in order to
                                compensate investors for their higher risk status. </p>


                            <p> Fortunately, many states have guaranty programs whereby they regulate and help backup the
                                claims of the insurance companies operating within their state. In practice, a state regulator will
                                generally facilitate the transfer of assets and liabilities to another insurance company who will
                                continue to fulfil the failed firm’s promises. So this can provide an added layer of insurance to
                                the guarantees promised by insurance companies. </p>
                            <p> <b> Variable annuity summary </b> <br/>
                                In our view, the main attraction for variable annuities is the potential to obtain guaranteed
                                income for the rest of your life that has the ability to increase. Moreover, guaranty programs
                                are setup in many states to back up the claims and payouts of insurance companies that might
                                default (a historically rare phenomenon). Annuities also offer the potential tax deferral benefits
                                so that investments can compound at a higher rate. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        {/* <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p>Despite the simplicity with which variable annuities benefits are often presented, they are
                                highly complex products. We do not believe many people understand the mechanics of these
                                products in the context of taxation or inflation. For example, the tax deferral benefits are offset
                                by the earnings being distributed first and taxed as income. Moreover, higher inflation would
                                likely result portfolio declines and thus make the higher income guarantees less likely at the
                                precise time when they would be useful.</p>

                            <p> Notwithstanding the above issues, the biggest drawback is probably their high fees. This may
                                not be surprising given insurance companies are the only entities that can provide income
                                guarantees linked to lifespans. The end result is that many people effectively overpay to insure
                                income streams, in our view.</p>

                            <p> It is important to be sure you are aware of the good and bad points before purchasing a
                                variable annuity. Indeed, most products impose surrender periods during which one must pay a
                                penalty to get money out. These periods can be as long as 10 years and impose penalties of
                                10% or more (though the penalties typically fall by 1% per year until it drops to zero or the
                                surrender period expires). </p>

                        </div>
                    </div>
                </div>
            </div>
        </section> */}



    </div> 

    <div id="executivesummary">
        <section id="parallax-main" className="overlay-white" style={ { backgroundImage: "url("+serviceFlow_bg+")" } }>
            <div className="container haddng">
                <h2> EXECUTIVE SUMMARY </h2>
            </div>
        </section>
        <section className="b1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content-bg">
                            <p> Below we provide executive summaries for the SWR strategies and variable annuity products described above as well as a table to present a side-by-side comparison based on multiple factors we believe are important to most retirees. </p>
                            {/* <p> The table below summarizes the advantages and disadvantages of SWR strategies and variable annuities in the context of multiples factors that are likely important to retirees. </p> */}

                            <br/><h3>Safe Withdrawal Rate (SWR) Summary</h3><br/>
                            <p>The SWR strategy is a popular and time-tested approach backed by much research. There are plenty of advisors, planners, and tools devoted to the strategy. For those who are inclined to do-it-yourself, implementation can be relatively straightforward. In fact, there are multiple platforms that offer free robo (automated) rebalancing. Implementing SWR without an advisor and using low-cost index funds (e.g., Vanguard) can help retirees save on fees and get the most out of their savings.</p>
                            <p>Of course, SWR strategies are not perfect. As highlighted above, the one key risk virtually all SWR strategies and related variations have is dependence on market performance. Despite the many research studies and number crunching, the uncertainty due to the strategy’s market dependence means there will always be some guesswork to determine what the true SWR is. Moreover, markets may behave worse than they have historically or what simulations may have anticipated. So this can forcibly impose retirement spending cuts down the road.</p>
                            <p>Another drawback of market dependence is that it effectively forces retirees to steer clear of risk because running out of money should be avoided at all costs. As a result, one typically leans toward more conservative assumptions – specifically, lower withdrawal rates. This and the logic behind SWR strategies planning for the worst case market scenarios can induce many to live more conservatively than necessary.</p>
                            <p>There are also potential issues arising from the use of fixed asset allocations. For example, the buying and selling required for maintaining fixed allocations triggers (capital gains) taxes. This can make market volatility even more burdensome. Maintaining fixed allocations can also impose another more subtle drag on performance by systematically constraining portfolio growth. The base assumption is that stocks will be the source of growth. However, each time they grow and outpace other parts of the portfolio (e.g, bonds), some of the stock allocation will be sold with the proceeds being reinvested elsewhere in the portfolio to restore the allocations. </p>
                            <p>The last issue with SWR strategies we highlight is its vulnerability to inflation – or even just the perceived threat of inflation. Historically, stocks and bonds have both declined in the face of inflation or inflation scares. Indeed, retirement researchers have highlighted inflationary environments as a potential Achilles heel of SWR strategies. This is due to the double-whammy risk stemming from the need to chisel off more income to cover rising costs at a time when portfolio values have likely declined.</p>
                            <p><b>Note:</b> Our Set It and Leave It approach specifically addresses the risks we highlighted above.</p>


                            <br/><h3>Variable Annuity Summary</h3><br/>
                            <p>In our view, the main attraction for variable annuities is the potential to obtain guaranteed income for the rest of your life that has the ability to increase. Moreover, guaranty programs are setup in many states to back up the claims and payouts of insurance companies that might default (a historically rare phenomenon). Annuities also offer the potential tax deferral benefits so that investments can compound at a higher rate.</p>
                            <p>Despite the simplicity with which variable annuities benefits are often presented, they are highly complex products. We do not believe many people understand the mechanics of these products in the context of their fees, taxation, or how they will perform in an inflationary environment. For example, the tax deferral benefits are offset by the earnings being distributed first and taxed as income. Moreover, higher inflation would likely result portfolio declines and thus make the higher income guarantees less likely at the precise time when they would be useful.</p>
                            <p>Notwithstanding the above issues, we believe the biggest drawback of variable annuities is their high fees. This may not be surprising given insurance companies have an effective monopoly in that they are the only entities that can provide income guarantees linked to lifespans. In our view, the end result is that many people effectively overpay to insure streams of income.</p>
                            <p>It is important to be sure you are aware of the good and bad points before purchasing a variable annuity. Indeed, most products impose surrender periods during which one must pay a penalty to withdraw their money. These periods can be as long as 10 years and impose penalties of 10% or more (though the penalties typically fall by 1% per year until it drops to zero or the surrender period expires).</p>

                            <br/><h3>Side-by-side Comparison</h3><br/>
                            <table className="table">
                                <thead>
                                    <th> </th>
                                    <th> Safe Withdrawal Rate (SWR) </th>
                                    <th> Variable Annuity </th>
                                </thead>

                                <tbody>

                                    <tr>
                                        <td><b> Robustness of income </b> </td>
                                        <td> The SWR strategy is typically
                                            determined by using historical
                                            and Monte Carlo simulations to
                                            determines what withdrawal rate
                                            is safe (hence the name). </td>
                                        <td> Those purchasing a guaranteed minimum
                                            withdrawal benefit (GLWB) rider will receive
                                            a guaranteed minimum level of income that
                                            could rise but will not go down. </td>
                                    </tr>


                                    <tr>
                                        <td> <b> Market risk </b> </td>
                                        <td> Both income and principal are
                                            naturally dependent on market
                                            performance.
                                        </td>
                                        <td> The principal is exposed market risk but the
                                            income is guaranteed. However, the
                                            potential increases in income are subject to
                                            market risk. </td>
                                    </tr>

                                    <tr>
                                        <td> <b> Inflation risk </b> </td>
                                        <td> Inflation poses a double-whammy
                                            threat to SWR strategies since
                                            higher withdrawals are likely to
                                            occur at a time when portfolio
                                            values are depressed.
                                        </td>
                                        <td> The same double-whammy risk applies to
                                            the portfolio principal, but is limited to the
                                            extent the income is guaranteed. </td>
                                    </tr>


                                    <tr>
                                        <td> <b> Fees </b> </td>
                                        <td> SWR strategies can be
                                            implemented in an efficient
                                            manner using low-cost, taxefficient funds and either manual
                                            or robo-rebalancing. Costs can be
                                            significantly higher if one uses an
                                            advisors and/or more expensive
                                            mutual funds. </td>
                                        <td> Fees for variable annuities rank as some of
                                            the highest in the financial services industry.
                                            For example, the average (total) fee for
                                            variable annuities with incomes guarantees
                                            is over 3%.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td> <b> Tax </b> </td>
                                        <td> In addition to taxes on dividends and interest, the portfolio
                                            rebalancing and chiseling will
                                            result in capital gains taxes. </td>
                                        <td> Variable annuities will benefit from tax deferral on the investment. However,
                                            earnings come out first and are taxed as
                                            income. This can actually make the net tax
                                            impact negative </td>
                                    </tr>

                                    <tr>
                                        <td> <b> Transparency </b> </td>
                                        <td> The SWR process itself is
                                            transparent (chiseling away from
                                            the portfolio for income).
                                            However, its success or failure is
                                            clouded by market noise and the
                                            ability of one to understand the
                                            historical and/or Monte Carlo
                                            simulations used to determine
                                            the SWR. </td>
                                        <td> On the surface, the benefits of variable
                                            annuities with income guarantees may
                                            sounds straightforward. However, these are
                                            complex derivatives instrument with high
                                            embedded costs and potential tax
                                            disadvantages.
                                        </td>
                                    </tr>


                                    <tr>
                                        <td> <b> Liquidity </b> </td>
                                        <td> SWR strategies typically invest in
                                            liquid, marketable securities and
                                            are thus as liquid as the
                                            underlying investments. </td>
                                        <td> The liquidity of most variable annuity
                                            products is minimal due to their surrender
                                            periods. Investors must pay penalties as high
                                            as 10% to get out of the product for time
                                            periods up to 10 years. </td>
                                    </tr>

                                </tbody>

                            </table>

                            {/* <p style={{ paddingTop:'20px'}}> The stakes high with retirement (you only get one chance to make it work) and SWR strategies
                                are not without risk. Accordingly, some annuity salesman may use that in their pitch to get
                                people to (often unknowingly) overpay to insure themselves against that risk however slight it
                                may be – via variable annuities. </p>
                            <p> In our view, this is often still just a choice between market risk and overpaying for insurance.</p>

                            <h4 className="vari"> “In our view, this translates into a choice between market risk and overpaying for insurance.” </h4>

                            <p> While we did not discuss them above, there are also fixed (not variable) annuities and they
                                typically involve significantly lower fees. Recent research<sup>+</sup>
                                <span className="abc"> [+ Pfau, Tomlinson, Edessess, Swedroe, etc.] </span> shows how fixed annuities can be integrated with balanced portfolios to improve
                                outcomes for SWR strategies – thereby reducing their market dependence. Our <span> Set It and Leave
                                    It </span> program further reduces retirement income dependence on market performance while
                                sporting other benefits such as lower required maintenance, lower costs, increased taxefficiency, and improved legacy outcomes. <span> Learn more about Set It and Leave It </span> and how it uses
                                innovative financial engineering and risk management to achieve these benefits. </p> */}

                            <p className="abc"> + In the context of a bond, a higher yield is usually a direct indication that the issuer has a higher risk of default
                                (i.e., you are less likely to get paid back). The situation is similar for stocks. Higher (dividend) yields typically
                                occur when the market sniffs out some potential risks and pushes share prices down. The lower share price
                                makes the dividend yield higher (since it is calculated by dividing the trailing dividends by the share price) but
                                also indicates potential risk to future dividends. </p>
                            <p className="abc"> + It is also important to consider and mitigate (e.g., insure against) risks that could potentially derail a retirement
                                plan. </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div> 

    <div className="container">
        <div className="row new-text">
            <p> <sup>1</sup> We focus on just stocks and bonds here for simplicity. It is possible to invest in other asset classNamees as well. Moreover, it is generally sensible to also hold a small allocation of liquid cash or near-cash investments. </p>
            <p> <sup>2</sup> If stocks suffered a 50% decline, then one would have to sell twice as many shares for the same level of withdrawal</p>
            <p> <sup>3</sup> One key detail left out of Bengen’s analysis was the impact of taxes. His analyses effectively assumed retirement
                assets were kept in a Roth IRA. This is a critical detail that must be accounted for during retirement planning.
                Indeed, taxation on dividends and interest, portfolio rebalancing, and traditional IRA withdrawals can significantly
                alter the results. </p>
            <p> <sup>4</sup> Monte Carlo simulations are used to create and analyze randomly generated scenarios. The parameters (e.g.,
                returns, volatilities, and correlations) used to create these scenarios are based on existing (historical) data in an
                effort to generate realistic scenarios. </p>

            <p> <sup>5</sup> William Bengen, the Trinity study (Cooley, Hubbard, and Walz), Michael Kitces, and Wade Pfau are some of the
                top retirement researchers.</p>
            <p> <sup>6</sup> For bonds, the link is direct. Higher inflation typically leads to higher interest rates and this makes bond prices fall. For stocks, the market reaction has been similar – effectively making the present value of future earnings lower when discounted by higher rates. </p>
            <p> <sup>7</sup> In this context, the word variable refers to the variability of the underlying investments (i.e., stocks) within the annuity product. </p>
            <p> <sup>8</sup>IRA = Individual Retirement Account </p>
            <p> <sup>9</sup>The benefit base is the value of the portfolio used to calculate the income guarantee. To be clear, it is not a cash
                value and is only relevant for calculating the level of guaranteed income. </p>
        </div>
    </div>





                     </div>
            );
        }
      }
    export default Traditional;