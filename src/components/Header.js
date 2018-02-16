import React from 'react'

const Header = () => {
    return (
        <nav className="nav m-b-medium">
            <div className="nav-wrapper">
                <div className="container">
                <a href="#!" className="brand-logo center">Fling</a>
                <a href="#!" data-activates="mobile-menu" className="button-collapse"><i className="icon-arrows-hamburger2"></i></a>
                {/* <ul className="right hide-on-med-and-down">
                    <li><a href="#">item1</a></li>
                    <li><a href="#">item2</a></li>
                    <li><a href="#">item3</a></li>
                    <li><a href="#">item4</a></li>
                </ul> */}
                {/* <ul className="side-nav" id="mobile-menu">
                    <li><a href="#">item1</a></li>
                    <li><a href="#">item2</a></li>
                    <li><a href="#">item3</a></li>
                    <li><a href="#">item4</a></li>
                </ul> */}
                </div>
            </div>
        </nav>
    )
}

export default Header