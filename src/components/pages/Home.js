import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Home.css";

// function to create webpage
function Home() {
    // background image
    const backgroundStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Peaceful-Background.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '100vh',
    };
    // webpage contents
    return (
        <div className="home-container" style={backgroundStyle}>
            <div className="row">
                {/* hero */}
                <div className="hero row">
                    <section className="self-container col-lg-5 col-md-12">
                        <img
                            src={process.env.PUBLIC_URL + '/Images/selfie.png'}
                            id="selfie"
                            alt="My selfie"
                        />
                        <h1 id="name">Russel Richard.</h1>
                    </section>
                    <section className="col-lg-4 col-md-12">
                        <p className="statement">
                            A Frontend Web Developer, helping people turn their ideas into
                            amazing webpages.
                        </p>
                    </section>
                </div>
                {/* main page  */}
                <div className="row home-body">
                    <section className="works col-lg-12">
                        <Link to="projects" role="button" >
                            Design |
                        </Link>
                        <Link to="projects" role="button" >
                            | Build |
                        </Link>
                        <Link to="resume" role="button" >
                            | Develop
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;
