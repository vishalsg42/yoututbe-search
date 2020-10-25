import React from 'react';
import SearchBar from './components/SearchBar';
import axios from './services/youtube';
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail';
class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  onKeyWordChange = async (keyword) => {
    console.log("keyword ", keyword);
    let videoList = await axios.get('/search', {
      params: {
        part: 'snippet',
        q: keyword,
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_DATA_API
      }
    })

    this.setState({ videos: videoList.data.items , selectedVideo: videoList.data.items[0] });
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onKeyWordChange} />
        Found {this.state.videos.length} videos.
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
