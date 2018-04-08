import React from 'react';

const Videodetail=(props)=>{
    if(!props.video){
        return<div>Loading...</div>;
    }
    const url=`https://www.youtube.com/embed/${props.video.id.videoId}`
    return(
        <div className=" col-md-8 video-detail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div><b>{props.video.snippet.title}</b></div>
                <div>{props.video.snippet.description}</div>
            </div>
        </div>
    );
}
export default Videodetail;