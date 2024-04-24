import React from 'react';
import './DashboardPage.css';
import Page1 from './alternate/page1';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Page2 from './alternate/page2';
const DashboardPage = () => {
    const [dropdownActive1, setDropdownActive1] = useState(false);
    const [dropdownActive2, setDropdownActive2] = useState(false);
    const [dropdownActive3, setDropdownActive3] = useState(false);
    const [dropdownActive4, setDropdownActive4] = useState(false);
    const [dropdownActive5, setDropdownActive5] = useState(false);
    const [dropdownActive6, setDropdownActive6] = useState(false);
    const [dropdownActive7, setDropdownActive7] = useState(false);
    const navigate = useNavigate();
    
    const goToPage = async () => {
        try {
            navigate("/page1");
        } catch (error) {
            console.error(error);
        }
    }
    const goToSign = async () => {
        try {
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }
    const goToPage2 = async () => {
        try {
            navigate("/page2");
        } catch (error) {
            console.error(error);
        }
    }
    const sidebar1 = async () => {
        try {
            navigate("/sidebar1");
        } catch (error) {
            console.error(error);
        }
    }
    const sidebar2 = async () => {
        try {
            navigate("/sidebar2");
        } catch (error) {
            console.error(error);
        }
    }
    const sidebar3 = async () => {
        try {
            navigate("/sidebar3");
        } catch (error) {
            console.error(error);
        }
    }
    const sidebar4 = async () => {
        try {
            navigate("/sidebar4");
        } catch (error) {
            console.error(error);
        }
    }

    const buttoClicked1 =() => {
        setDropdownActive1(!dropdownActive1); 
    }
    const buttoClicked2 =() => {
        setDropdownActive2(!dropdownActive2); 
    }
    const buttoClicked3 =() => {
        setDropdownActive3(!dropdownActive3); 
    }
    const buttoClicked4 =() => {
        setDropdownActive4(!dropdownActive4); 
    }
    const buttoClicked5 =() => {
        setDropdownActive5(!dropdownActive5); 
    }
    const buttoClicked6 =() => {
        setDropdownActive6(!dropdownActive6); 
    }
    const buttoClicked7 =() => {
        setDropdownActive7(!dropdownActive7); 
    }
    
    return (
        <div className="dashboard">
            <header>
                <div className="container">
                    <div id="branding">
                        <h1>The Haunt</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><a onClick={goToSign} href="#"> Home </a> </li>
                            <li><a onClick={goToPage2} href="#"> Services </a></li>
                            <li><a onClick={goToPage} href="#"> About </a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="showcase">
                <div className="container">
                    <h1>Haunted Houses</h1>
                    <div className="image-container">
                        <img src="beast.png" alt="Image 1" />
                        <img src="edge.png" alt="Image 2" />
                    </div>
                    <div className="sidebar">
                        <div className="sidebar-item" onClick={sidebar1} href="#">Discounts</div>
                        <div className="sidebar-item" onClick={sidebar2} href="#">Purchase</div>
                        <div className="sidebar-item" onClick={sidebar3} href="#">Security</div>
                        <div className="sidebar-item" onClick={sidebar4} href="#">Waiver</div>
                    </div>
                </div>
            </section>

            <div className="main-content">
                <div className="content">
                <div className="scrollable-content">
                <div className="card" onClick={buttoClicked1}>
                            <h3>What is the scariest haunted house in town?</h3>
                        </div>
                        {dropdownActive1 && <div className="dropdown">
                            
                            <p>The scariest haunted house in town is The Beast. Enter if you dare!</p>
                        </div>}
                        <div className="card" onClick={buttoClicked2}>
                            <h3>What is the most popular haunted house?</h3>
                        </div>
                        {dropdownActive2 && <div className="dropdown">
                            <p>The most popular haunted house is The Edge Of Hell. It attracts thousands of visitors every year.</p>
                        </div>}
                        <div className="card" onClick={buttoClicked3}>
                            <h3>Which haunted house has the longest waiting line?</h3>
                        </div>
                        {dropdownActive3 && <div className="dropdown">
                            <p>The haunted house with the longest waiting line is The Beast. Be prepared to wait for hours!</p>
                        </div>}
                        <div className="card" onClick={buttoClicked4}>
                            <h3>What is the scariest room in the haunted house?</h3>
                        </div>
                        {dropdownActive4 && <div className="dropdown">
                            <p>The scariest room in The Edge Of Hell is Jack Houlehan's Bedroom. It will send shivers down your spine!</p>
                        </div>}
                        <div className="card" onClick={buttoClicked5}>
                            <h3>Which haunted house has the best special effects?</h3>
                        </div>
                        {dropdownActive5 && <div className="dropdown">
                            <p>The haunted house with the best special effects is The Edge Of Hell. You won't believe your eyes!</p>
                        </div>}
                        <div className="card" onClick={buttoClicked6}>
                            <h3>What is the most haunted room in the haunted house?</h3>
                        </div>
                        {dropdownActive6 && <div className="dropdown">
                            <p>The most haunted room in The Beast is the execution chamber. Ghostly encounters guaranteed!</p>
                        </div>}
                        <div className="card" onClick={buttoClicked7}>
                            <h3>Which haunted house has the scariest maze?</h3>
                        </div>
                        {dropdownActive7 && <div className="dropdown">
                            <p>The haunted house with the scariest maze is The Edge Of Hell. Find your way out if you can!</p>
                        </div>}
                        {/* Add more cards or content as needed */}
                    </div>
                </div>
            </div>

            <div></div>

            <footer>
                <p>My Website, Copyright &copy; 2024</p>
            </footer>
        </div>
    );
};

export default DashboardPage;