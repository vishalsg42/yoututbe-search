import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  let { videos, onVideoSelect } = props;
  const renderedVideo = videos.map(item => {
    return <VideoItem onVideoSelect={onVideoSelect} key={item.id.videoId} video={item} />;
  });
  return (
    <div className="ui relaxed divided list">
      {renderedVideo}
    </div>
  )
}

export default VideoList;
