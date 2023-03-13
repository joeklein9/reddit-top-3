import React from "react"

export default function Navbar () {
    return (
    <>
        <navbar className = "navbar-container">
            <img className = "navbar-icon" src = "/src/static/white-reddit-icon.svg"/>
            <h3 className = "navbar-text">Top 5 Posts of All Time by Subreddit</h3>
        </navbar>
    </>
    )
}