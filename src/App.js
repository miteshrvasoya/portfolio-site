import './App.css';
import Header from "./components/Header";
import ProfilePic from "./assets/Profile Pic.png";
import ScrollBtn from "./assets/ScrollBtn.png";
import GitHubIcon from "./assets/GitHub.png";
import LinkedInIcon from "./assets/LinkedIn.png";
import TwitterIcon from "./assets/Twitter.png";
import ShopCartImg from "./assets/ShopCart.png"
import ArchPortFolioImg from "./assets/arch_portfolio.png"
import Footer from "./components/Footer";


function App() {
    return (<div className="App">
        <div className="first-div" id="firstDivId">
            <Header/>
            <div className="subdiv1">
                <div className="contentDiv">
                    <p className="title">Hi, I'm <p>Mitesh Vasoya.</p></p>
                    <p className="desTitle">Full Stack Developer</p>
                    <div className="btns">
                       <span>
                           <a href="#contactPageId" className="contactBtn">
                            Contact
                           </a>
                       </span>
                        <span>
                            <a href="#projectsPageId">View My Projects</a>
                        </span>
                    </div>
                </div>
                <div className="imgDiv">
                    <div className="profilePic">
                        <img src={ProfilePic} alt="ProfilePic"/>
                    </div>
                    <div className="btns2">
                        <a href="https://www.linkedin.com/in/mitesh-vasoya-250533190/" target="_blank">
                            <img src={LinkedInIcon} alt="LinkedIn"/>
                        </a>
                        <a href="https://github.com/mites-vasoya" target="_blank">
                            <img src={GitHubIcon} alt="GitHubIcon"/>
                        </a>
                        <a href="https://twitter.com/MiteshVasoya54" target="_blank">
                            <img src={TwitterIcon} alt="Twitter"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="scrollImgDiv">
                <a href="#projectsPageId">
                    <img src={ScrollBtn} alt="Scroll Btn" className="scollImg"/>
                </a>
            </div>
        </div>
        <div className="projectsPage" id="projectsPageId">
            <div className="titleDiv">
                <p className="title">
                    Projects
                </p>
            </div>
            <div className="cardsContainer">
                <div className="cardGrid">
                    <div className="card">
                        <img src={ShopCartImg} alt="" className="cardBgImg"/>
                        <div className="titleDiv">
                            <p className="title">tracScore</p>
                        </div>
                        <div className="contentDiv">
                            <p className="content">
                                TracScore is a feature-rich cricket score tracking platform built using Angular, Node.js, PostgreSQL, and Redis, offering real-time ball-by-ball commentary, live scorecards, player performance analytics, and tournament management features such as team selection, customizable points systems, and dynamic score tracking, all while providing a seamless user experience through secure authentication and optimized data caching.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={ShopCartImg} alt="" className="cardBgImg"/>
                        <div className="titleDiv">
                            <p className="title">ShopCart</p>
                        </div>
                        <div className="contentDiv">
                            <p className="content">
                                ShopCart is a comprehensive e-commerce website that caters to the needs of both buyers
                                and
                                sellers. With its user-friendly interface, customers can easily navigate and make
                                purchases,
                                communicate with the admin for support, and conveniently add products to their cart and
                                wishlist. Sellers can manage orders efficiently, communicate with buyers, and keep track
                                of
                                product inventory. The website also offers registered user accounts, allowing customers
                                to
                                track their orders and receive personalized recommendations. ShopCart aims to provide a
                                seamless shopping experience by incorporating essential functionalities for a smooth
                                transaction process.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={ArchPortFolioImg} alt="" className="cardBgImg"/>
                        <div className="titleDiv">
                            <p className="title">Architecture Portfolio</p>
                        </div>
                        <div className="contentDiv">
                            <p className="content">
                                Architecture Portfolio is a sleek and modern portfolio website specifically designed for
                                architects to
                                showcase their projects and expertise. The website features an interactive landing page
                                that
                                captivates visitors with stunning visuals and provides an engaging introduction to the
                                architect's work. With its clean and professional design, UniqArch offers architects a
                                stylish platform to display their work and establish a strong online presence in the
                                industry.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="contactPageTitle">
                    <p className="title">
                        Contact
                    </p>
                </div>
            </div>

        </div>
        <div className="contactPage" id="contactPageId">
            <div className="contactFormDiv">
                <form id="formId" className="contactForm">
                    <div className="title">
                        <p>Send Me a Message</p>
                    </div>
                    <span className="span1">
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                     </span>
                    <span className="span2">
                        <input type="text" placeholder="Email"/>
                    </span>
                    <span className="span3">
                        <input type="text" placeholder="Subject"/>
                     </span>
                    <span className="span4">
                         <input type="text" placeholder="Enter Message"/>
                    </span>
                    <span>
                         <input type="button" value="Send" className="submitBtn"/>
                    </span>
                </form>
                <div className="myInfoDiv">
                    <div className="mailDiv">
                        <p className="title">Email Me At</p>
                        <p className="mailId">mrvasoya2001@gmail.com</p>
                    </div>
                    <div className="socialMediaLinks">
                        <p className="title">Find Me At</p>
                        <div className="links">
                            <a href="https://www.linkedin.com/in/mitesh-vasoya-250533190/" target="_blank">
                                <img src={LinkedInIcon} alt="LinkedIn"/>
                            </a>
                            <a href="https://github.com/mites-vasoya" target="_blank">
                                <img src={GitHubIcon} alt="GitHubIcon"/>
                            </a>
                            <a href="https://twitter.com/MiteshVasoya54" target="_blank">
                                <img src={TwitterIcon} alt="Twitter"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>);
}

export default App;
