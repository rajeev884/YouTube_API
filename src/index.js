import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import Videolist from './components/video_list';
import Paper from 'material-ui/Paper';
import Videodetail from './components/video_detail';
import _ from 'underscore';
import API_KEY from '../API';
class App extends Component{

  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideo:null
    };
    this.videoSearch('sadak chaap');
  }
  videoSearch(term) {
    YTSearch({key:API_KEY,term:term},(videos)=>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }
  render(){
    //const videoSearchDebounce = _.debounce(term=>{this.videoSearch(term)}, 300);
    return (
        <MuiThemeProvider>
           <Paper  zDepth={1}  style={{marginTop:"60px",marginBottom:"60px"}} >
            <SearchBar onSearchTerm={term=>this.videoSearch(term)}/>
            <div className="row" style={{margin:"15px"}}>
              <Videodetail  video={this.state.selectedVideo}/>
              <Videolist OnselectedVideo={(selectedVideo)=>{this.setState({selectedVideo})}} videos={this.state.videos}/>
            </div>
          </Paper>
        </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App/>,document.querySelector('.container'));