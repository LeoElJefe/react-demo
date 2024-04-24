import React from 'react';
import './Page2.css'; // Create and import a CSS file for Page2
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
    const navigate = useNavigate();
    
    const goToDashboard = async () => {
        try {
            navigate("/DashboardPage");
        } catch (error) {
            console.error(error);
        }
    }
    const goToPage = async () => {
        try {
            navigate("/page1");
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <div className="services-page">
            <header>
                <div className="container">
                    <div id="branding">
                        <h1>The Haunted Services</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><a onClick={goToDashboard} href="#">Home</a></li>
                            <li className="current"><a href="#">Services</a></li>
                            <li><a onClick={goToPage} href="#">About</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="showcase">
                <div className="container">
                    <h1>Our Spooky Services</h1>
                    <section className="service">
                        <h2>The Haunted House</h2>
                        <p>
                            The Haunted House offers a heart-pounding experience with its terrifying corridors, chilling surprises, and a thrill you won't forget.
                        </p>
                    </section>
                    
                    <section className="service">
                        <h2>The Ghostly Maze</h2>
                        <p>
                            The Ghostly Maze provides a truly haunting experience with its spine-tingling scares and eerie atmosphere. It's not for the faint of heart.
                        </p>
                    </section>
                </div>
            </section>

            <footer>
                <p>Haunted Services, All rights reserved &copy; 2022</p>
            </footer>
        </div>
    );
};

export default Page2;
