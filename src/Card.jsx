import React from "react"

let base_url = 'https://reddit.com'


export default function Card (props) {
    return (
        <div className = "card-container">
            <div className = "score-and-header-container">
                <div className = "score-container">
                    <img className = "down-arrow" src = "/src/assets/down-arrow.png"/>
                    <div className = "score">{props.ups}</div>
                    <img className = "up-arrow" src = "/src/assets/up-arrow.png"/>
                </div>
                <header className = "header-container">
                    <h6 className = "posted-by">Posted by {props.author}</h6>
                    <h4 className = "post-title">{props.title}</h4>
                    <a href={ base_url + props.permalink } target="_blank"/> Link
                </header>
            </div>

            <div className = "image-container">
                <img className = "card-image" src = {(props.preview.images[0].source.url).replace(/&amp;/g, "&")}/>
            </div>
            
            <h3 className = "comments-container">{props.comments} comments</h3>
        </div>
    )
}