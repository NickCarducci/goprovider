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
    if (this.state.onFactors) {
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
          <div
            style={{
              position: "fixed", //salt bank vaults royalty stewardship
              right: "0px", //living commodities at the equator
              top: "0px",
              cursor: "pointer"
            }}
            onClick={() => this.setState({ onFactors: false })}
          >
            back
            {/**i think satan is certain is anything (believe if anything) */}
          </div>
          I'll be{space}
          <a href="https//commie.dev/mod">anything</a>
          {space}you want me{space}
          <a href="https://jester.com.co">to be</a>.
          <h3>
            u/WinPillSeeker anarchy (minarchy) is as much utopian as
            communism... libertarians are{space}
            <a href="https://thumbprint.quora.com">minarchists</a>...
          </h3>
          <a href="https://www.quora.com/Why-does-education-tuition-have-inelastic-demand/answer/Nick-Carducci">
            <Cable
              style={{ width: "100%", maxWidth: "50%" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/q915lw19ig7q96d/price%20contraints%20with%20a%20rational%20and%20or%20coerced%20supply%20and%20a%20nominal%20cardinal%20price%20%282%29.png?raw=1"
              }
              float={"left"}
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </a>
          <h4>
            Why would a rich country have better services?{space}
            <span style={{ color: "grey" }}>
              Doesn’t the marginal benefit rate of substitution for leisure
              occur at the NAIRU maxima? Doesn’t any more unemployment only
              inflate acceleratingly with unnatural social capital and otherwise
              individual use is marginal?
            </span>
            {space}
            Isn’t the non-accelerating inflation rate of unemployment where the
            marginal benefit rate of substitution for leisure is complementary
            to demand?{space}
            <i style={{ color: "cadetblue" }}>
              Isn’t your vote just as significant with a third party as with a
              major party? How is a third party vote thrown away when the
              two-party voters are just as significant, statistically? Isn’t
              voting third party throwing your vote away only if everyone thinks
              that? Does every two-party voter break the tie between the
              parties?
            </i>
            {space}Isn’t the marginal benefit rate of substitution for leisure
            generally deflationary as well as individually useful?{space}
            <span style={{ color: "navy" }}>
              Isn’t invested labor for the rich always non-deflationary
              marginally and inflationary for everyone else in total? How can a
              rich laborer be deflationary and useful?
            </span>
            {space}Doesn’t an accelerated inflation rate of unemployment make a
            potential accelerating deflation rate of employment?{space}
            <i style={{ color: "orange" }}>
              Isn’t a non-accelerating deflation rate of employment absolutely
              the non-accelerating inflation rate of unemployment? Aren’t the
              accelerations over realized productivity positively correlated
              with the job being service work?
            </i>
          </h4>
          <Cable
            style={{ width: "auto", height: "500px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.youtube.com/embed/dpAGack3BrY"
            }
            float={"right"}
            title="https://youtu.be/dpAGack3BrY"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h4>
            Ay caramba,{space}
            <a href="https://huddleup.substack.com/p/how-do-professional-sports-leagues">
              Desportes
            </a>
          </h4>
          That is to say, any particular machine may yield an income which is of
          the nature of a rent, and which is sometimes called a Rent; though on
          the whole, there seems to be some advantage in calling it a
          Quasi-rent. But we cannot properly speak of the interest yielded by a
          machine. If we use the term "interest" at all, it must be in relation
          not to the machine itself, but to its money value. (Alfred Marshall,
          {space}
          <i>
            Principles of Economics by Alfred Marshall, Book Two: Some
            Fundamental Notions Chapter 4, Income, Capital
          </i>
          , 1890)
          <br />
          <div
            style={{ padding: "10px", backgroundColor: "rgb(172, 235, 252)" }}
          >
            <h4 style={{ margin: "4px 0px" }}>Make products not prices</h4>
            But when the division of labour first began to take place, this
            power of exchanging must frequently have been very much clogged and
            embarrassed in its operations. One man, we shall suppose, has more
            of a certain commodity than he himself has occasion for, while
            another has less [and is the price-maker before the market is made].
            The former consequently would be glad to dispose of, and the latter
            to purchase, a part of this superfluity. But if this latter should
            chance to have nothing that the former stands in need of, no
            exchange can be made between them. (Adam Smith,{space}
            <i>
              Wealth of Nations, Book I: On the Causes of Improvement in the
              Productive Powers. On Labour, and on the Order According to Which
              its' Produce is Naturally Distributed Among the Different Ranks of
              the People: On the Origin and Use of Money
            </i>
            , 1776)
          </div>
          <br />
          Monetary theory has no ideological content. It deals with a scientific
          question—how a particular social contrivance works. It may surprise
          most readers to learn that, in today’s terminology, Karl Marx could be
          labeled a “monetarist”—a term that is currently, if incorrectly,
          regarded as almost synonymous with “conservative” or “pro free
          market.” (Milton Friedman, Marx and Money, 27 October 1980. p. The
          Newsweek/Daily Beast Company, p. 95; Hoover Inst.)
          <br />
          <br />
          layoffs will make deflation, better products will get ayoffs
          (technologsts do t seek m0ore problems; I'll take a mudpie to a non
          deflationary job and I will have ONE apple pie.
          <br />
          1. A RECESSION IS A fall of shrinkflation, benefits from essential
          institutions, and layoffs
          <br />
          if the economy settled would be property, what is the dollar vs bond
          <br />
          2. machine rent is how capital wedges labor
          {/*
          Supply and demand comp prices. A recession of less real GDP = shrink + benefits* + layoffs.
          *non-essential institutions need not apply.

          recession summation of machine
          */}
          <h1>Moral rent, disutility of labor, and tragedian art</h1>
          <h2>The Will to Gen</h2>
          Paul starts from the need for a mystery felt by the broad, religiously
          excited masses: he seeks a sacrifice, a bloody phantas­ magoria which
          will stand up in competition with the images of the mystery cults: God
          on the cross, blood-drinking, the urtio mystica with the “sacrifice.”
          He seeks to bring the afterlife (the blissful, atoned afterlife of the
          individual soul) as resurrection into a causal relationship with that
          sacrifice (after the type of Dionysus, Mithras, Osiris). He needs to
          bring the concept guilt and atonement into the foreground, not a new
          way of life (as Jesus himself had demon­ strated and lived) but a new
          cult, a new faith, a faith in a miraculous transformation (
          “redemption” through faith). He understood what the pagan world had
          the greatest need of, and from the facts of Christ’s life and death
          made a quite arbitrary selection, giving everything a new
          accentuation, shifting the emphasis everywhere—he annulled primitive
          Christianity as a matter or principle— The attempt to destroy priests
          and theologians culminated, thanks to Paul, in a new priesthood and
          theology—in a new ruling order and a church. The attempt to destroy
          the exaggerated inflation of the “person” culminated in faith in the
          “eternal person” (in concern for “eternal salvation”—), in the most
          paradoxical excess of personal egoism* This is the humor of the
          situation, a tragic humor: Paul re­ erected on a grand scale precisely
          that which Christ had annulled through his way of living. At last,
          when the church was complete, it sanctioned even the existence of the
          state.
          <h2 style={{ margin: "4px 0px", backgroundColor: "rgb(22, 93, 49)" }}>
            <i style={{ color: "linen" }}>
              This Jesus of Nazareth, the incarnate gospel of love, this "
              Redeemer" bringing salvation and victory to the poor, the sick,
              the sinful-was he not really temptation in its most sinister and
              irresistible form, temptation to take the tortuous path to those
              very Jewish values and those very Jewish ideals?
            </i>
          </h2>
          <div
            style={{ padding: "10px", backgroundColor: "rgb(252, 255, 179)" }}
          >
            O’Prophet, tell your wives and your daughters and the women of the
            believers to draw their cloaks close round them (when they go
            abroad). That will be better, so that they may be recognised and not
            annoyed. Allah is ever Forgiving, Merciful. (Quran 33:59).
          </div>
          A nihilistic religion [like Christianity], sprung from and appropriate
          to a people grown old and tame, having outlived all strong
          instincts—transferred step by step to another milieu, at length
          entering into youthful peoples which have not yet lived at all—very
          curious! The bliss of the close, the fold, the evening preached to
          barbarians and Germans! How thoroughly all that I first had to be
          barbarized, Germanized! To those who had dreamed a Valhalla: who found
          happiness only in war!—A su­ pranational religion preached in a chaos
          where no nations even existed yet—The only way to refute priests and
          religions is this: to show that their errors have ceased to be
          beneficial—that they rather do harm; in short, that their own “proof
          of power” no longer holds good—
          <br />
          <br />
          Nothing is further from Buddhism than the Jewish fanaticism of a Paul:
          nothing would be more repellent to its instincts than this tension,
          fire, un­ rest of the religious man, above all that form of sensuality
          that Christianity has sanctified with the name “love,” Moreover, it is
          the cultured and even the overspirited orders that find satisfaction
          in Buddhism: a race satiated and wearied by centuries of philo­
          sophical contentions, not, however, beneath all culture, like the
          {space}
          <span style={{ backgroundColor: "navy", color: "white" }}>
            <a style={{ color: "white" }} href="https://marginalism.uk/classes">
              classes
            </a>
            {space}from which Christianity arose— Emancipation even from good
            and evil appears to be of the essence of the Buddhist ideal: a
            refined state beyond morality is conceived that is identical with
            the state of perfection, in the presupposition that one needs to
            perform even good actions only for the time being, merely as a
            means—namely, as a means to emancipation from all actions.
          </span>
          <h1>"Faith" or "works"?</h1>— But that "works,” the habit of certain
          works, should engender a certain evaluation and finally a certain
          disposition is as natural as it is unnatural that mere evaluation
          should produce “works.” One must practice deeds, not the strength­
          ening of one’s value-feelings; one must first have some ability— The
          Christian dilettantism of Luther. Faith is a pons asinorum.u The
          background is a profound conviction on the part of Luther and his kind
          of their incapacity for Christian works, a personal fact disguised
          beneath an extreme doubt as to whether activity of all kinds is not
          sin and the work of the Devil: so that the value of existence resides
          in single highly tensed conditions of inactivity (prayer, effusion,
          etc.),— In the last resort he was right: the in­ stincts expressed in
          all the actions of the Reformers are the most brutal that exist. Only
          by an absolute turning away from them­ selves, by absorption in their
          opposite, only as an illusion (“faith”) was existence endurable to
          them.
          <br />
          <br />I like not the agitators dressed up aslieroes, who hide their
          dummy-heads behind the stalking-horse of an ideal; I like not the
          ambitious artists who would fain play the ascetic and the priest, and
          are at bottom nothing but tragic clowns; I like not, again, these
          newest speculators in idealism, the Anti-Semites, who nowadays roll
          their eyes in the patent Christian-Aryan-man-of- honour fashion, and
          by{space}
          <i>
            an abuse of{space}
            <a href="https://commie.dev/anarchy">moralist</a>
            {space}attitudes and agitation dodges, so cheap as to exhaust any
            patience
          </i>
          , strive to excite all the{space}
          <a href="https://reddit.com/r/moralanarchism">blockhead</a>
          {space}elements in the populace.
          <br />
          <br />
          We have in our hands the possibility of idealising the whole earth.
          But what am I talking about courage? we only need one thing here-a
          hand, a free, a very free hand.
          <br />
          <br />
          brotherhood on the basis of sharing food and drink to­ gether after
          the Hebrew-Arabic custom, as “the miracle of tran- substantiation” ;
          <br />
          <br />
          There are only sins against God; men shall not judge acts done against
          men, nor demand a reckoning, except in the name of God.
          <br />
          <br />
          <span style={{ backgroundColor: "darkslategray", color: "white" }}>
            The state of nature is terrible, man is a beast of prey; our
            civilization represents a tremendous triumph over this beast-of-prey
            nature: thus argued Voltaire.{space}
            <i style={{ color: "lightsteelblue" }}>
              He felt the mitigation, the subtleties, the spiritual joys of the
              civilized state; he despised narrowmindedness, also in the form of
              virtue, and the lack of delicatesse, also among ascetics and
              monks.
            </i>
            {space}
            <span style={{ color: "gainsboro" }}>
              The moral reprehensibility of man seemed to preoccupy Rousseau;
              with the words “unjust” and “cruel” one can best stir up the
              instincts of the oppressed who otherwise smart under the ban of
              the{space}
              <i>vetitum</i>
              {space}and disfavor, so their conscience advises them against
              rebellious cravings. Such emancipators seek one thing above all:
              to give their party the grand accents and poses of the higher
              nature.
            </span>
          </span>
          <br />
          <br />
          Rousseau: the rule based on feeling; nature as the source of justice;
          man perfects himself to the extent to which he approaches nature
          (according to Voltaire, to the extent to which he moves away from
          nature). The very same epochs are for one ages of the progress of
          humanity; for the other, times when injustice and inequality grow
          worse. Voltaire still comprehended umanita in the Renaissance sense;
          {space}
          <span style={{ color: "lightskyblue", backgroundColor: "cadetblue" }}>
            There is nothing better than what is good— and good is having some
            ability and using that to create,{space}
            <i>Tuchtigkeit</i>
            {space}(or{space}
            <i>virtu</i>, in the Italian Renaissance sense, as “high culture”);
            he fights for the cause of the “<i>honnetes gens</i>" and "
            <i>de la bonne compagnie</i>“ the cause of taste, of science, of the
            arts, of progress itself and civilization. The fight began around
            1760: the citizen of Geneva and le seigneur de Ferney. Only from
            that moment on Voltaire becomes the man of his century, the
            philosopher, the representative of tolerance and unbelief (till then
            merely{space}
            <i>un bel esprit</i>) Envy and hatred of Rousseau’s success impelled
            him forward, “
            <a href="https://ia803205.us.archive.org/27/items/FriedrichNietzscheTheWillToPower/Friedrich%20Nietzsche%20-%20The%20Will%20to%20Power.pdf#page=97">
              to the heights
            </a>
            .”
          </span>
          <h2>
            Moralistic naturalism: the tracing back of apparently emanci­ pated,
            supranatural moral values to their “nature”: i.e., to natural
            immorality, to natural “utility,” etc.
          </h2>
          <h3>
            I might designate the tendency of these reflections as moral­ istic
            naturalism:{space}
            <span style={{ backgroundColor: "darkslategray", color: "white" }}>
              my task is to translate the apparently emancipated and denatured
              moral values{space}
              <i>
                back into their nature—i.e., into their natural “immorality.”
              </i>
            </span>
          </h3>
          <h4>
            <a href="https://saverparty.xyz/jesus">Jesus</a>
            {space}(run!) starts directly with the condition the “Kingdom of
            Heaven” in the heart, and he does not find the means to it in the
            observances of the Jewish church; the reality of Judaism itself (its
            need to preserve itself) he regards as nothing; he is purely
            inward.—{space}
            <i style={{ color: "grey" }}>
              He likewise ignores the entire system of crude formalities
              governing intercourse with God: he opposes the whole teaching of
              repentance and atonement; he demonstrates how one must live in
              order to feel “deified”—and how one will not achieve it through
              repentance and contrition for one’s sins: “Sin is of no account”
              is his central judgment. Sin, repentance, forgiveness—none of this
              belongs here—it is acquired from Judaism, or it is pagan.
            </i>
            {space}
            <span
              style={{
                fontSize: "12px",
                backgroundColor: "indigo",
                color: "gold"
              }}
            >
              Attempt by antipaganism to found and make itself possible
              philosophically: predilection for the ambiguous figures Of the old
              culture, above all for Plato, that instinctive Semite and
              anti-Hellene —also for Stoicism, which is essentially the work of
              Semites (
              <i>
                —“dignity” as strictness, law, virtue as greatness,
                self-responsi­bility, authority, as supreme sovereignty over
                one’s own person— this is Semitic.
              </i>
              {space}The Stoic is an Arabian sheik wrapped in Greek togas and
              concepts)
            </span>
            <br />
            This is the humor of the situation, a tragic humor: Paul re­-erected
            on a grand scale precisely that which Christ had annulled through
            his way of living. At last, when the church was complete, it
            sanctioned even the existence of the state.
            <br />
            <span
              style={{
                fontSize: "12px",
                backgroundColor: "firebrick",
                color: "white"
              }}
            >
              Jesus starts directly with the condition the “Kingdom of Heaven”
              in the heart, and he does not find the means to it in the
              observances of the Jewish church; the reality of Judaism itself
              (its need to preserve itself) he regards as nothing; he is purely
              inward.— He likewise ignores the entire system of crude
              formalities governing intercourse with God: he opposes the whole
              teaching of repentance and atonement; he demonstrates how one must
              live in order to feel “deified”—and how one will not achieve it
              through repentance and contrition for one’s sins: “Sin is of no
              account” is his central judgment. Sin, repentance,
              forgiveness—none of this belongs here—it is acquired from Judaism,
              or it is pagan.
            </span>
            <br />I like not the agitators dressed up as heroes, who hide their
            dummy-heads behind the stalking-horse of an ideal; I like not the
            ambitious artists who would fain play the ascetic and the priest,
            and are at bottom nothing but tragic clowns; I like not, again,
            these newest speculators in idealism, the Anti-Semites, who nowadays
            roll their eyes in the patent Christian-Aryan-man-of-honour fashion,
            and by an abuse of moralist attitudes and agitation dodges, so cheap
            as to exhaust any patience, strive to excite all the blockhead
            elements in the populace.
            <br />
            <span
              style={{
                fontSize: "12px",
                backgroundColor: "darkviolet",
                color: "white"
              }}
            >
              An apostasy and reversion to the morbid Christian and obscurantist
              ideals? And finally a self-negation and self-elimination on the
              part of an artist, who till then had devoted all the strength of
              his will to the contrary, namely, the highest artistic expression
              of soul and body. And not only of his{space}
              <a style={{ color: "white" }} href="https://wavv.art">
                art
              </a>
              ; of his life as well.
              <br />
              That, as I have said, would have been quite worthy of a great
              tragedian; who like every artist first attains the supreme
              pinnacle of his greatness when he can look down into himself and
              his art, when he can laugh at himself.
            </span>
            <br />
            <br />
            <span
              style={{
                fontSize: "12px",
                backgroundColor: "cadetblue",
                color: "white"
              }}
            >
              [O]ur old morality too is fit material{space}
              <i>for Comedy</i>[. We] have discovered a new plot, and a new
              possibility for the Dionysian drama entitled{space}
              <i>The Soul's Fate</i>-and he will speedily utilise it, one can
              wager safely, the, the great ancient eternal dramatist of the
              comedy of our existence.
            </span>
            <br />
            <br />
            Science—this has been hitherto a way of putting an end to the
            complete confusion in which things exist, by hypotheses that
            “explain” everything—so it has come from the intellect’s dislike of
            chaos.— This same dislike seizes me when I consider myself: I should
            like to form an image of the inner world, too, by means of some
            schema, and thus triumph over intellectual confusion. Morality has
            been a simplification of this kind: it taught that men were known,
            familiar.— Now we have destroyed morality—we have again become
            completely obscure to ourselves! I know that I know nothing of
            myself. Physics proves to be a boon for the heart: science (as the
            way to knowledge) acquires a new charm after morality has been
            eliminated—and because it is here alone that we find consistency, we
            have to construct our life so as to preserve it. This yields a sort
            of practical reflection on the con­ ditions of our existence as men
            of knowledge.
          </h4>
          Nietzsche was interested in the value of life not the non-immoral
          morale impediments. He (Nietzsche, as a nothing) considered anarchists
          as destructive to value.
          <div
            style={{ padding: "10px", backgroundColor: "rgb(252, 195, 179)" }}
          >
            No bitterness or empty hate dictated his vituperations against
            existing values and against the dogmas of his parents and
            forefathers. He knew too well what these things meant to the
            millions who profess them, to approach the task of uprooting them
            with levity or even with haste.{space}
            <a href="https://www.gutenberg.org/files/1998/1998-h/1998-h.htm">
              Those who hastily class him with the anarchists
            </a>
            {space}(or the Progressivists of the last century) fail to
            understand the high esteem in which he always held both law and
            discipline. In verse 41 of this most decisive discourse he truly
            explains his position when he says: “...he who hath to be a creator
            in good and evil—verily he hath first to be a destroyer, and break
            values in pieces.” This teaching in regard to self-control is
            evidence enough of his reverence for law. (Friedrich Nietzsche,
            {space}
            <i>
              Thus Spake Zarathustra "A Book for All and None", Chapter XXXIV:
              Self-Surpassing, Chapter LVI: Old and New Tables. Par. 2.
            </i>
            , 1883-92)
          </div>
          I wish I could find a compliment as he does sometimes in critiques,
          lets just look for his mentions of usufructuary and or responsibility:
          <div
            style={{ padding: "10px", backgroundColor: "rgb(252, 195, 179)" }}
          >
            No one doubted that all the antecedentia of an action were to be
            sought in consciousness, and could be discovered there—as
            “motive”—if only they were sought. Otherwise we should not be free
            to perform them, we should{space}
            <a href="https://www.gutenberg.org/cache/epub/58025/pg58025-images.html">
              not
            </a>
            {space}have been responsible for them. (Friedrich Nietzsche,{space}
            <i>The Twilight of the Idols: The Four Great Errors: 3</i>, 1911)
          </div>
          Anarchy means there is no hierarchy because of the individual use of
          the usufructuary, and technological based margin gains with steady
          prices will not come without action against the state without a test
          of right and where compulsory will voids all liberal rewards of labor
          and trade.
          <div
            style={{ padding: "10px", backgroundColor: "rgb(252, 195, 179)" }}
          >
            <a href="https://theanarchistlibrary.org/library/pierre-joseph-proudhon-what-is-property-an-inquiry-into-the-principle-of-right-and-of-governmen">
              Competition
            </a>
            , sometimes called{space}
            <i>liberty of trade</i>
            {space}[Ricardo], —{space}
            <a href="https://bankingisnot.biz">in a word</a>, property in
            exchange, — will be for a long time the basis of our commercial
            legislation; which, from the economical point of view, embraces all
            civil laws and all government. (Pierre-Joseph Proudhon,{space}
            <i>
              What is Property? An Inquiry into the Principle of Right and of
              Government
            </i>
            , 1840)
          </div>
          <a href="https://comlib.quora.com/What-is-an-anarchist-libertarian-1">
            Doesn't existentialism accentuate life for values from morals
          </a>
          ?
        </div>
      );
    } else if (this.state.onVaumoney) {
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
          <div
            style={{
              position: "fixed", //salt bank vaults royalty stewardship
              right: "0px", //living commodities at the equator
              top: "0px",
              cursor: "pointer"
            }}
            onClick={() => this.setState({ onVaumoney: false })}
          >
            vau.money
          </div>
          <h4 ref={this.cops} style={{ margin: "4px 0px" }}>
            Do cops vote?
          </h4>
          I think only the developmentally disabled and/or injured should
          receive{space}
          <a href="https://2024nj.com/disability">SSDI</a>.
          <br />
          <i>
            For every one who has any idea of the life of the labouring classes
            it is evident that without{space}
            <a href="https://www.reddit.com/r/moralanarchism/comments/ynkqmk/comparing_and_contrasting_bookchin_and_kropotkin/">
              mutual aid being practised
            </a>
            {space}among them on a large scale they never could pull through all
            their difficulties. It is only by chance that a worker’s family can
            live its lifetime without having to face such circumstances as the
            crisis described by the ribbon weaver, Joseph Gutteridge, in his
            autobiography. And if all do not go to the ground in such cases,
            {space}
            <a href="https://theanarchistlibrary.org/library/petr-kropotkin-mutual-aid-a-factor-of-evolution">
              they owe it to mutual help. In Gutteridge’s case it was an old
              nurse, miserably poor herself, who turned up at the moment when
              the family was slipping towards a final catastrophe, and brought
              in some bread, coal, and bedding, which she had obtained on
              credit.
            </a>
            {space}
            In other cases, it will be some one else, or the neighbours will
            take steps to save the family. But without some aid from other poor,
            how many more would be brought every year to irreparable ruin!
          </i>
          <br />
          <i>
            <b>
              Ah yes,{space}
              <a href="https://www.un.org/en/genocideprevention/documents/atrocity-crimes/Doc.15_supplementary%20slaverytrade.pdf#page=3">
                usufructuary rights
              </a>
            </b>
            /material duty
          </i>
          <br />
          <i>
            The day on which, in consequence of the development of the
            revolutionary situation, the governments are swept out by the people
            and disorganization is created in the ranks of the bourgeoisie who
            can only survive through the protection of the State, the insurgent
            people will not wait for any old government in its marvelous wisdom
            to decree economic reforms. They will abolish individual property by
            themselves taking possession, in the name of the whole people and by
            violent expropriation of the whole of social wealth which had been
            accumulated by the work of past generations.{space}
            <a href="https://www.marxists.org/reference/archive/kropotkin-peter/1885/words-of-a-rebel/chapter11.html">
              They will not stop short at expropriating the owners of social
              capital by a decree that will remain a dead letter; they will take
              possession and establish their rights of usufruct immediately.
            </a>
            {space}
            They will organize the workshops so that they continue production.
            They will exchange their hovels for healthy habitations in the
            houses of the well-todo; they will immediately find ways of
            utilizing the riches accumulated in the cities; they will take
            possession of it as if all this wealth had never been stolen from
            them by the bourgeoisie. Once the industrial baron who seized his
            booty from the worker has been evicted, production will continue,
            shaking off the fetters that hinder it, abolishing the speculations
            that kill it, getting rid of the muck that hinders its development,
            and changing it according to the needs of the moment under the
            impetus provided by freedom of work.
          </i>
          <div
            style={{
              position: "fixed", //salt bank vaults royalty stewardship
              right: "0px", //living commodities at the equator
              bottom: "0px",
              cursor: "pointer"
            }}
            onClick={() => this.setState({ onFactors: true })}
          >
            factors
          </div>
        </div>
      );
    } else
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
            position: "relative"
          }}
        >
          Aren’t contracts surrendered? Isn't a contract legal until proven
          otherwise?
          <h2>
            How many apple pies? Every apple pie is getting more expensive{" "}
          </h2>
          Geometric disutility production factors' possibility is twice
          deflationary and diminishing otherwise (one at a time)
          <br />
          <br />
          Isn't marginalism the thread of the individual? The geometric
          proportional mean is aside from arithmetic but for whole pairs between
          units instead of one type. The cardinal slope matrix inside ordinal
          individuals is all but a null-point and so its negation takes a
          non-deflationary supply.
          <br />
          <br />
          <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Physical_imports_and_exports#Physical_trade_by_stage_of_manufacturing">
            <Cable
              style={{ width: "100%" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyout
                  ? ""
                  : "https://www.dropbox.com/s/gdn9zrc8fia203c/Physical%20material%20trade%20goods%20EU%202000-21.png?raw=1"
              }
              float={"right"}
              title=" https://ec.europa.eu/eurostat/statistics-explained/index.php?title=File:Physical_trade_of_goods_by_main_material_category_and_monetary_trade_of_goods,_EU,_2000-21.png"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </a>
          <a href="https://www.quora.com/How-can-one-argue-with-Marx-although-I-am-not-a-Marxist-that-many-interests-of-both-blue-and-white-collar-labor-are-diametrically-opposed-to-those-of-Capital-in-that-Capital-wants-to-pay-least-for-labor-while-labor/answer/Nick-Carducci">
            fdi+import
          </a>
          {/**rich salt */}
          {space}={space}
          <a href="https://saverparty.xyz/poverty">developed</a>
          <br />
          <br />
          <i>
            social insurance as production has it is no insurance (induction of
            non-extractibly-pyramid ponzi scheme)
          </i>
          <br />
          52% 39% 15%
          <br />
          <br />
          (Assuming they overlap) are you one of the 67% pro-immigration, 39%
          ban private-insurance (for universal), 95% occupy wall street
          non-voters?
          <br />
          <br />
          don't non voters want to be{space}
          <a href="https://nonvoters.quora.com">hated</a>?
          {/**war or butter! (commie.dev/police) real inflation smol biz - inflationary job non-
        
        ​one man's non-deflationary job is another man's real inflation giving money away
        

        Ah yes, if you fight fire with fire the whole world turns ablaze.

        I would therefore prefer to burn Property by a slow fire, rather than give it new 
        strength by making a St Bartholomew’s night of the proprietors.

        Truly there is no hope for you. Be gone devil ape!
        */}
          <br />
          <br />
          <i>
            Why does the right wing say a majority of people want to decrease
            immigration when 52% Republicans, 67% Independents/non-voters, and
            83% Democrats don’t?
          </i>
          <br />
          <hr ref={this.utility} />
          Isn't the Jevons' paradox{space}
          <a href="https://comlib.quora.com/Isnt-the-Jevons-paradox-bonkers-1">
            bonkers
          </a>
          ?
          <br />
          In economics, the Jevons paradox (/ˈdʒɛvənz/; sometimes Jevons effect)
          occurs when technological progress or government policy increases the
          efficiency with which a resource is used (reducing the amount
          necessary for any one use), but the falling cost of use increases its
          demand, negating reductions in resource use.
          <br />
          <br />
          As american as apple{space}
          <a href="https://commie.dev">pie</a>. perpetually more cookies with
          perpetually more expensive recipes pulled from the public{space}
          <a href="https://commie.dev/domain">domain</a>
          <br />
          <br />
          Implausible (cannot) use more than one yacht (give it a rest), Oh
          Prophet! How capital will pay the most and consume the most if the
          market is made and prices are the same.
          <br />
          <br />
          <div style={{ backgroundColor: "salmon" }}>
            Only sellers and market makers know unless you discount price
            changes for volume, albeit this is subject to spoofing/painting tape
            by said market makers (for propaganda purposes). I’m not sure how
            disparaging this actually is from real price to volume balance.
          </div>
          <h4>
            Donkey and elephant will do anything for a marginal apple pie{space}
            <span role="img" aria-label="squirrel">
              🐿
            </span>
            {space}we diminish marginal utility.{space}
            <span style={{ color: "cadetblue" }}>
              Why does Mark Levin blame{space}
              <a href="https://crime-data-explorer.fr.cloud.gov/pages/explorer/crime/shr">
                illegal
              </a>
              {space}immigration for rape?
            </span>
            {space}
            <i>Do you think Social Security causes youth to commit crime?</i>
            <a href="https://www.ssa.gov/oact/ProgData/tsOps.html">
              <Cable
                style={{ width: "100%" }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyout
                    ? ""
                    : "https://www.dropbox.com/s/8q8x8tw7rszq2q2/Screen%20Shot%202022-10-31%20at%208.58.03%20PM.png?raw=1"
                }
                float={"right"}
                title="tsOps - https://www.ssa.gov/oact/ProgData/tsOps.html"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </a>
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
          </h4>
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
          <div
            style={{
              position: "fixed", //salt bank vaults royalty stewardship
              right: "0px", //living commodities at the equator
              top: "0px",
              cursor: "pointer"
            }}
            onClick={() => this.setState({ onVaumoney: true })}
          >
            why?
          </div>
          {/**
        
            <Cable
              style={{
                boxShadow: "0px 0px 0px 0px transparent",
                width: "100px",
                transform: "scale(-1,1)"
              }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dropbox.com/s/zgceu1uen2ov9n1/transparentSaverAcorn.png?raw=1"
              }
              float={null}
              title="author"
              scrolling={this.state.scrolling}
              fwd={this.henri}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
            /> */}
        </div>
      );
  }
}

