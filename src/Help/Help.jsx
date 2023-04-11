import React from "react";
import '../Help/help.css';
import qwuestion from '../img/help-pic.jpg';

const Help = ({ helpActive }) => {
    return (
    <section className={helpActive ? 'help active' : 'help'}>
        <div className="container">
            <div className="help-content">
                <div>
            <h1>Help page</h1>
            <p>If you have a question about bookmark - you will find an answer here.</p></div>
            <img src={qwuestion} alt="pic" width="200px" heigth="150px"/>
            </div>
            <div className="help-details">
                <details >
                    <summary>What is the bookmark web app?</summary>
                    <p>You can add booky to your home screen. Booky can then be used in a similar way to a regular app.</p>
                </details>
                <details>
                    <summary>What is a bookmark?</summary>
                    <p>A bookmark is a link to a webpage that you want to find quickly. At booky, you can name your bookmarks, add notes.</p>
                </details>
                <details>
                    <summary>How do I add a bookmark?</summary>
                    <p>Select the button "New bookmark" on the start page.</p>
                </details>
                <details>
                    <summary>How do I edit a bookmark?</summary>
                    <p>Simply move your mouse over the bookmark and select one of the icons:</p>
                </details>
            </div>
        </div>
    </section>)
}


export default Help;