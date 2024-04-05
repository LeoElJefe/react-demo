import React from 'react';
import './DashboardPage.css';
import Page1 from './page1';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
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
                        <div className="sidebar-item">Discounts</div>
                        <div className="sidebar-item">Purchase</div>
                        <div className="sidebar-item">Security</div>
                        <div className="sidebar-item">Waiver</div>
                    </div>
                </div>
            </section>

            <div className="main-content">
                
                <div className="content">
                    <h1>Welcome to the Dashboard</h1>
                    <div className="card">
                        <h2>Card Title</h2>
                        <p>This is some content inside a card.</p>
                    </div>
                    {/* Other main content goes here */}
                </div>
            </div>

            <div></div>

            <footer>
                <p>My Website, Copyright &copy; 2022</p>
            </footer>
        </div>
    );
};

export default DashboardPage;