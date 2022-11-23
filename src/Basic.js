import React from "react";
import Cable from "./Dropwire";
import { UAParser } from "ua-parser-js";

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      onFactors: true,
      trigger: false,
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
    this.plaintiff = React.createRef();
    this.utility = React.createRef();
    this.cops = React.createRef();
  }
  componentDidMount = () => {
    this.handleScroll();
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
    const { pathname } = this.props;
    clearTimeout(this.starttime);
    this.starttime = setTimeout(() => {
      this.check(pathname);
    }, 500);
  };
  check = (pathname) => {
    if (pathname === "/plaintiff") {
      window.scroll(0, this.plaintiff.current.offsetTop);
    } else if (pathname === "/utility") {
      this.setState(
        {
          onFactors: false,
          onVaumoney: false
        },
        () => window.scroll(0, this.utility.current.offsetTop)
      );
    } else if (pathname === "/cops") {
      this.setState(
        {
          onFactors: false,
          onVaumoney: true
        },
        () => window.scroll(0, this.cops.current.offsetTop)
      );
    }
  };
  componentDidUpdate = (prevProps) => {
    const { pathname, basic } = this.props;
    if (
      this.props !== prevProps ||
      basic !== prevProps.basic ||
      pathname !== prevProps.pathname
    ) {
      this.check(pathname);
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.starttime);
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    } //"abolish exchange value" - CJ
    //social capital estranged from the rollover/expiry individual
    //govrent assert the universal. "'capitaism is small gov ad freedom' so much no"
  }; //authority is unique for payment for the transaction requires it,
  //but for instance a distributed database for a death registry, would not
  //acheive trustlessness by the same methods
  refresh = (first) => {
    const width =
      (this.state.ios ? window.screen.availWidth : window.innerWidth) - 20;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    return (
      <div
        style={{
          border: "1px solid rgb(200,200,200)",
          overflow: "hidden",
          //margin: "5px",
          fontFamily: "'Comfortaa', cursive",

          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative",
          cursor: "pointer"
        }}
      >
        If a recession is a loss of real GDP’s shrink- and time-flation,
        expenses before income, and employment, how are people poorer? Isn't a
        recession of realized growth good for labor?{space}
        <a href="https://markethistory.quora.com/What-happens-to-the-real-GDP-during-a-recession-1">
          Otherwise, unless generating equality, their product merely makes
          prices given physical consumption numbers are constant per capita
          throughout history. Does a recession mean there is no money to go
          around
        </a>
        ?
        <br />
        <a href="https://www.ssa.gov/oact/ProgData/assets.html">
          <Cable
            style={{ width: "100%" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dropbox.com/s/sukvhn4qlhb0eoj/Screen%20Shot%202022-10-31%20at%208.56.57%20PM.png?raw=1"
            }
            float={"right"}
            title="assets - https://www.ssa.gov/oact/ProgData/assets.html"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
        </a>
        free at point of purchase == expiry
        <br />
        compulsory will is an easy legal argument (instead of paying them off)
        <br />
        <br />
        Isn't competition of insurance choices "competition" in name alone? How
        can insurance make products instead of prices? How does one compete on
        prices without products or services that save money by their operation?
        Doesn't every successful business save money from an alternative unless
        it's entertainment?
        <h4>
          <a href="https://rolloverinsurance.quora.com/Why-are-anti-finance-people-involuntarily-committed">
            Rollover Insurance
          </a>
          {space}&nbsp;{space}
          <a href="https://commie.dev/banks">Communism</a>
          {space}&nbsp;{space}
          <a href="https://marginalism.uk">Marginalism</a>
          {space}&nbsp;{space}
          <a href="https://bankingisnot.biz">Banking is not a Business</a>
          {space}&nbsp;{space}
          <a href="https://reddit.com/r/sayists">Landed Estate</a>
          {space}&nbsp;{space}
          <a href="https://reddit.com/r/sayists">Intractible Commodity</a>
          {space}as Expiry{space}
          <span style={{ color: "grey" }}>
            [or extensible time to{space}
            <a href="https://economicefficiency.quora.com">outcome</a>
            {space}productivity expenses per hour{space}
            <span style={{ color: "cadetblue" }}>
              <a href="https://scopes.cc">compulsory will</a>
              {space}Scopebook timeclockunlock.com
            </span>
            {space}to{space}
            <span style={{ color: "rgb(195, 151, 103)" }}>
              <a href="https://vaults.quora.com">barter</a>
              {space}collateral away from principal and interest
              {space}
              <a href="https://complementarysupplydemand.quora.com">
                complementing
              </a>
              {space}the{space}
              <a href="https://www.quora.com/What-is-the-difference-between-supply-and-demand-under-communism/answer/Nick-Carducci">
                making-demand
              </a>
            </span>
            {space}rather than extensible commodity (multi-level{space}
            <b>marketing</b>
            {space}not capita
            <span style={{ textDecoration: "line-through" }}>l</span>)]
          </span>
          .
          {/**what kind of mand to man is required for linebacker ever to play zone in the end zone. 
          join the line until someone looks for the fulback to pass */}
        </h4>
        <a href="https://www.reddit.com/r/ethereumnoobies/comments/z093rn/comment/ixcimxb/">
          <Cable
            style={{ width: "100%" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dropbox.com/s/cmn9wx8xtzt2fy2/Screen%20Shot%202022-11-23%20at%2011.32.51%20AM.png?raw=1"
            }
            float={"right"}
            title="'unrecoverable' wallet - https://www.reddit.com/r/ethereumnoobies/comments/z093rn/comment/ixcimxb/"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
        </a>
        <div
          style={{ textDecoration: this.state.openreddit ? "underline" : "" }}
          onClick={() => this.setState({ openreddit: !this.state.openreddit })}
        >
          on mobile && don't use reddit?
        </div>
        <div
          style={{
            fontSize: this.state.openreddit ? "" : "0px"
          }}
        >
          <i>
            I imagine a new ERC-20 geth ethereum network store token allows the
            developer to make new tokens upon a lost private key. Is “printing
            currency” ever disabled by a certain token, or am I wrong about this
            trust-bearing genesis block developer capability?
          </i>
          <br />I did more reading and found a read-only token interface with
          ERC/EIP-1155. Is a plausible improvement proposal to take supply
          generation off-schedule? Can the retired supply records (then) also be
          shared in-network? If that’s impossible, what should I look out for in
          providing my users security of their local private keys, but
          recovering their account as many times as they please? Should I go to
          sleep with my thumb on the 9 for the genesis block’s Wei balance?
          {space}
          <i>
            edit:
            {space}
            <a href="https://developer.kleros.io/en/latest/a-simple-dapp.html">
              Arbitrable
            </a>
            {space}- ERC{space}
            <a href="https://github.com/ethereum/EIPs/issues/792">792</a>
            {space}- intro:
            {space}
            <a href="https://ethereum-magicians.org/t/erc-1080-recoverabletoken-standard/364">
              Recoverable
            </a>
          </i>
          .
          <hr />
          Edit2: I've found geth clique and parity (
          <a href="https://www.alchemy.com/blog/secure-your-nodes-migrating-from-parity-to-geth">
            deprecated
          </a>
          ) aura abstracted
          {space}
          <a href="https://programtheblockchain.com/posts/2018/06/09/reversible-ether/">
            arbiters
          </a>
          {space}(
          <i>
            linked example blog makes an escrow-arbiter "pendingTransferSet"
          </i>
          ), I feel like consensus to arbitrate must use a (<i>programmatic?</i>
          ) jury,{space}
          <i>
            and maybe I{space}
            <b>will</b>
            {space}use clique to relay the consensus use-case
          </i>
          . How does consensus work if all the nodes are on my{space}
          <i>
            digital ocean
            {space}
            <a href="https://hibit.cc">droplet</a>
          </i>
          ?{space}
          <div
            style={{
              color: "cadetblue"
            }}
          >
            Would I just make cron jobs, otherwise have WebRTC, or check for
            main object database and run on last person (for this "jury").
          </div>
        </div>
        <div
          style={{
            position: "fixed", //salt bank vaults royalty stewardship
            right: "0px", //living commodities at the equator
            bottom: "0px",
            cursor: "pointer"
          }}
          onClick={() => this.props.setBasic()}
        >
          more
        </div>
      </div>
    );
  }
}