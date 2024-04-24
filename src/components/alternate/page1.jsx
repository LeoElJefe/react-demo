import React from 'react';

import { useNavigate } from 'react-router-dom';

const Page1 = () => {
    const navigate = useNavigate();
    
    const goToDashboard = async () => {
        try {
            navigate("/DashboardPage");
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
        <div className="about-page">
            <header>
                <div className="container">
                    <div id="branding">
                        <h1>About The Haunt</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><a onClick={goToDashboard} href="#">Home</a></li>
                            <li><a onClick={goToPage2} href="#">Services</a></li>
                            <li className="current"><a href="#">About</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="showcase">
                <div className="container">
                    <h1>About Our Haunted Houses</h1>
                    <section className="haunted-house">
                        <h2>The Beast</h2>
                        <p>
                            The Beast is our most terrifying haunted house. With its dark corridors and chilling surprises, it's sure to give you a thrill you won't forget.
                        </p>
                    </section>
                    
                    <section className="haunted-house">
                        <h2>Edge of Hell</h2>
                        <p>
                            Edge of Hell is not for the faint of heart. With its spine-tingling scares and eerie atmosphere, it's a truly haunting experience.
                        </p>
                    </section>
                </div>
            </section>

            <footer>
                <p>My Website, Copyright &copy; 2022</p>
            </footer>
        </div>
    );
};

export default Page1;