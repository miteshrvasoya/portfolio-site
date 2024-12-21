import React from 'react';
import "./Header.css";

function Header() {
    return (<>
        <div className="Header">
            <div className="subdiv1">
                <p>Mitesh V</p>
                <ul className="menus">
                    <li><a href="#firstDivId">Home</a></li>
                    <li><a href="#projectsPageId">Projects</a></li>
                    <li><a href="#thirdDivId">About</a></li>
                </ul>
                {/*<ul className="menus2">*/}
                {/*    <li>*/}
                {/*        <a href="#contactPageId">Contact</a>*/}
                {/*    </li>*/}
                {/*</ul>*/}

            </div>
        </div>
    </>);
}

export default Header;