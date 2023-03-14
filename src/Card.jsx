import React from "react"

let baseUrl = 'https://reddit.com'


export default function Card(props) {
    return (
        
        <div className="card-container">
            <div className="score-and-header-container">
                <div className="score-container">
                    <img className="down-arrow" src="/images/down-arrow-2.svg" />
                    <div className="score">{(props.ups/ 1000).toFixed(0) + "k"}</div>
                    <img className="up-arrow" src="/images/up-arrow-2.svg" />
                </div>
                <header className="header-container">
                    <h6 className="posted-by">Posted by {props.author} on   {new Date(props.created * 1000).toLocaleString('en-US',
                            {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}</h6>

                    <h4 className="post-title">{props.title}</h4>
                    
                </header>
            </div>

            <div className="image-container">
                {props.preview ? (
                    <img className="card-image" src={(props.preview.images[0].source.url).replace(/&amp;/g, "&")} />
                ) : (
                    <img className="reddit-icon" src="/images/reddit-icon-3.svg" />
                )}

            </div>

            <h3 className="comments-container">{props.comments}</h3>
        </div>
    )
}



