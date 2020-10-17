import React from "react";
import "./post.css";
import verified from "./images/verified.svg";
import comments from "./images/comments.svg";
import share from "./images/share.svg";
import like from "./images/like.svg";
import send from "./images/send.svg";
import downArrow from "./images/down-arrow.svg";


const Posts = (props) => {
    return(
        <div className="post">
            <div className="post__wrapper">
                <div className="post__item">
                    <img className="post__img" src={props.author.photo} alt="avatar"/>
                </div>
                <div className="post__item">
                    <div className="blocks-info">
                        <div className="blocks-info__item">

                            <strong className="blocks-info__name">{props.author.name}</strong>
                            <img className="blocks-info__verified" src={verified} alt="verified"/>
                            <span className="blocks-info__nickname">{props.author.nickname}</span>
                            <span className="blocks-info__date">{props.date}</span>
                        </div>

                        <div className="blocks-info__item">
                            <img className="arrow-down" src={downArrow} alt="arrow-down"/>
                        </div>
                    </div>
                    <div className="content">
                        <p className="content__text">{props.content}</p>
                        <img className="content__img" src={props.image} alt="content img"/>
                        <div className="icons">
                            <div className="icon__item">
                                <img className="icon__img comments__img" src={comments} alt=""/>
                                <span>482</span>
                            </div>
                            <div className="icon__item">
                                <img className="icon__img share__img" src={share} alt=""/>
                                <span>146</span>
                            </div>
                            <div className="icon__item">
                                <img className="icon__img like__img" src={like} alt=""/>
                                <span>887</span>
                            </div>
                            <div className="icon__item">
                                <img className="icon__img send__img" src={send} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts;