import React from "react"

let baseUrl = 'https://reddit.com'


export default function Card(props) {
    return (
        <div className="card-container">
            <div className="score-and-header-container">
                <div className="score-container">
                    <img className="down-arrow" src="/src/assets/down-arrow.png" />
                    <div className="score">{(props.ups/ 1000).toFixed(0) + "k"}</div>
                    <img className="up-arrow" src="/src/assets/up-arrow.png" />
                </div>
                <header className="header-container">
                    <h6 className="posted-by">Posted by {props.author} on   {new Date(props.created * 1000).toLocaleString('en-US',
                            {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}</h6>

                    <h4 className="post-title"><a href={baseUrl + props.permalink} target="_blank" />{props.title}</h4>
                </header>
            </div>

            <div className="image-container">
                {props.preview ? (
                    <img className="card-image" src={(props.preview.images[0].source.url).replace(/&amp;/g, "&")} />
                ) : (
                    <img className="reddit-icon" src="/src/assets/reddit-icon2.png" />
                )}

            </div>

            <h3 className="comments-container">{props.comments} comments</h3>
        </div>
    )
}



