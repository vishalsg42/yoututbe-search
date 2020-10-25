import React from 'react';

const VideoDetail = ({ video }) => {
  console.log("video 123", video);

  if (!video) {
    return '';
  }
  let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={video.id.videoId} />
      </div>
      <div className="ui segment">
        <div className="header">
          <h4 className="ui header">
            {video.snippet.title}
          </h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail;
