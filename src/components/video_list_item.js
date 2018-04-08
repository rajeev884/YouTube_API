import React from 'react';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const VideolistItem=(props)=>{

    return(
            <GridTile className="listitem"
                onClick={()=>props.OnselectedVideo(props.video)}
                key={props.video.etag}
                title={props.video.snippet.title}
                subtitle={<span><b>{props.video.snippet.channelTitle}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
             <img src={props.video.snippet.thumbnails.default.url} />
            </GridTile>
    );
}
export default VideolistItem;