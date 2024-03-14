"use client";

import React, { ReactElement, useEffect, useState } from "react";

import { Game } from "@/scripts/GameModel";
import { Post } from "@/scripts/Post";

import '@/css/Modal.css'


interface Props {
    className?: string;
    post?: Post;
    game?: Game;
    breakpoint?:number;
    //onClose: Function;
}

const Modal = ({className, post, game, breakpoint}: Props) => {
    const [width, setWidth] = useState(1366);
    const [height, setHeight] = useState(768);
    const [mobile, setMobile] = useState(false);
    const [modalClassname, setModalClassname] = useState("modal-content");
    const [modal, setModal] = useState(false);

    
    

    

    useEffect(() =>{
        const {innerWidth: width, innerHeight: height} = window;
        setWidth(width);
        setHeight(height);

        if (breakpoint && (height && width < breakpoint )) {
            setModalClassname("modal-content-fullscreen");
            setMobile(true)
        } else {
            setModalClassname(modalClassname);
            setMobile(false);
        }

        if(modal) {
            document.body.classList.add('active-modal');
        } else {
            document.body.classList.remove('active-modal');
        }
    }, [])
    
    const toggleModal = () => {
        setModal(!modal);
    }

    //if (game) modalClassname += " game-modal"
    
    function thumbnail(thumbnail: string | undefined) {
        return (
            <div className="game_thumbnail">
                <img src={thumbnail} alt={`${game?.title} game thumbnail`} onError={({ currentTarget}) => {
                    currentTarget.onerror = null;
                    currentTarget.src = './assets/images/default-game-thumbnail.png';
                }} />
            </div>
        )
    }
    
    function contentType(thumbnail: boolean = false, type: string | undefined):ReactElement {
        var t_bool = thumbnail? "thumbnail" : "";

        if (type===undefined || type==="") return (<></>)
        if (type==="image") {
            //setImage(true);
            return (<img className={`image ${t_bool}`} src={post?.url} alt="/assets/images/default.jpg"></img>);
            
        } else if (type==="iframe") {
            //setYT(true);
            return (<iframe className={`video ${t_bool}`} width="560" height="315" src={post?.url} title="YouTube video player" /*frameborder="0"*/ allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>);
        } else if (type==="video"){
            var fileExt = post?.url.split('.').pop();
            //setVideo(true);
            return (
            <video>
                <source className={`image ${t_bool}`} src={post?.url} type={`video/${fileExt}`}/>
                Browser does not support HTML video
            </video>)
        }
        else return(<></>)
    }

    if (post) {
        return (
            <>
            {!mobile && (
                <div className={`open-modal ${className}`} onClick={toggleModal}> 
                {contentType(true, post?.type)}
                <div className="cover"></div>
            </div>
            )}
            {mobile && (
                <>
                <div className={`open-modal ${className}`} onClick={toggleModal}>
                    <div>
                        {contentType(true, post?.type)}
                    </div>
                    <div className="meta-data">
                        <div>
                            <h2 className="secondary-label">{post?.title}</h2>
                            <h3><i>{post?.discipline} | {post?.project} {post?.year}</i></h3>
                        </div>
                        <div className="description text">
                            <p>
                                {post?.description}
                            </p>
                        </div>
                    </div>
                    
                </div>
                </>
            )
            }
            {modal && (
                <div className="modal-container">
                    <div onClick={toggleModal} className="overlay" />
                    <div className={`${modalClassname}`}>
                        <button className="close-modal" onClick={toggleModal}>[X]</button>
                        <div className="secondary-label">
                            <h2>{post?.title}</h2>
                        </div>
                        <div className="viewport-body">
                            {contentType(false, post?.type)}
                            
                        </div>
                        <div>
                            {post?.year} {post?.discipline} {post?.project}
                        </div>
                        <div className="description">
                            {post?.description}
                        </div>
                    </div>
                </div>
            )}
            </>
        )
    }
    else if (game) 
    {
        return (
            <>
            {!mobile && (
                <div className={`open-modal ${className}`} onClick={toggleModal}> 
                    <div className="cover">
                    {thumbnail(game?.thumbnail_url)}
                    </div>
                    
                    <div className="game-title">
                    {game?.title}
                    </div>
                    
                
            </div>
            )}
            {mobile && (
                <>
                <div className={`open-modal ${className}`} onClick={toggleModal}>
                    <div>
                    {thumbnail(game?.thumbnail_url)}
                    </div>
                    <div className="meta-data">
                        <div>
                            <h2 className="secondary-label">{game?.title}</h2>
                            <h3><i> {game?.year}</i></h3>
                        </div>
                        <div className="description text">
                            <p>
                                {game?.description}
                            </p>
                        </div>
                    </div>
                    
                </div>
                </>
            )}
            {modal && (
                <div className="modal-container">
                    <div onClick={toggleModal} className="overlay" />
                    <div className={`${modalClassname}`}>
                        <button className="close-modal" onClick={toggleModal}>[X]</button>
                        <div className="secondary-label">
                            <h2>{game?.title}</h2>
                        </div>
                        <div>
                            {game?.year}
                        </div>
                        <div className="viewport-body">
                            {((!game?.mobile && !mobile) || (game?.mobile && mobile)) && (
                                <>
                                {contentType(false, game?.type)}
                                <iframe frameBorder="0" src="https://itch.io/embed-upload/9895434?color=333333"  width="640" height="724"><a href="https://billyshouse.itch.io/tetris-clone">Play Tetris Clone on itch.io</a></iframe>
                                </>
                                
                            )}
                            {!game?.mobile && mobile && (
                                <div>
                                    this game is not mobile enabled
                                </div>
                            )}
                        </div>
                        
                        <div className="description">
                            {game?.description}
                        </div>
                    </div>
                </div>
            )}
            </>
        )
    } else {
        return (
            <></>
        )
    }
    
}



export default Modal;