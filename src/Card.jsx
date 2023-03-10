import React from "react"


export default function Card () {
    return (
        <div className = "card-container">
            <div className = "score-and-header-container">
                <div className = "score-container">
                    <img className = "down-arrow" src = "/src/assets/down-arrow.png"/>
                    <div className = "score">60.3K</div>
                    <img className = "up-arrow" src = "/src/assets/up-arrow.png"/>
                </div>
                <header className = "header-container">
                    <h6 className = "posted-by">Posted by u/joeklein9</h6>
                    <h1 className = "post-title">Elon Musk just posted a picture of Twitter's architecture</h1>
                </header>
            </div>
            <img src = "/src/assets/placeholder.png"/>
            <h3 className = "comments-container">20.9K comments</h3>
        </div>
    )
}