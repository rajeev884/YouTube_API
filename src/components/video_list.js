import React from 'react';
import VideolistItem from './video_list_item';
import {GridList} from 'material-ui/GridList';

const Videolist=(props)=>{
    const videoListItem = props.videos.map((item)=>{
        return <VideolistItem  OnselectedVideo={props.OnselectedVideo} key={item.etag} video={item}/>});
        
    return(
        <div className="col-md-4 roots">
            <GridList className="gridList" cellHeight={180}  >
              {videoListItem}
            </GridList>
        </div>
    );
}
export default Videolist;