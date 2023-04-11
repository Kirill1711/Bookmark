import React from "react";
import './about.css';
import privat from '../img/private.jpg';
import speed from '../img/speed.jpg';
import available from '../img/available.jpg';


const About = ({ aboutActive }) => {
    return (<main className={aboutActive ? 'about-container active' : 'about-container'}>
    <section className="about-dark">
        <div className="container">
        <div className="about">
        <h1 className="about-title">What is bookmark?</h1>
        <h2 className="about-subtitle">Bookmark is an online bookmark manager with a focus on simplicity, customizability, privacy, and speed.</h2>
        </div>
        </div>
    </section>
    <section className="section">
        <div className="container">
            <div className="section-container">
                <div className="section-text">
                    <h2>Private bookmarks.</h2>
                    <p>With booky, you can store your favorite
                         links online in private collections. All your bookmarks are kept
                          confidential and are only visible to you.</p>
                </div>
                <img width='300px' height='300px' src={privat}></img>
            </div>
        </div>
    </section>
    <section className="section">
        <div className="container">
            <div className="section-container">
            <img width='400px' height='300px' src={speed}></img>
                <div className="section-text">
                    <h2>Fast and accessible.</h2>
                    <p>We take great pride in providing you with an accessible site that's
                         both fast and easy to use. Organize your bookmarks in collections and
                          categories.</p>
                </div>
            </div>
        </div>
    </section>
    <section className="section">
        <div className="container">
            <div className="section-container">
                <div className="section-text">
                    <h2>Available everywhere.</h2>
                    <p>At home or on the go?
                         No problem with our mobile web app! Your bookmarks can be
                          accessed and managed from anywhere on desktop or mobile.</p>
                </div>
                <img width='300px' height='300px' src={available}></img>
            </div>
        </div>
    </section>
        </main>
    )
}

export default About;