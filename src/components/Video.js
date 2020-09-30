import React from 'react'

const Video = ({ videoSrcURL, videoTitle}) =>  {
    return (
        <div style={{ maxWidth: '', margin: '0 auto'}}>
            <iframe src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"

            webkittallowfullscreen="true"
            allowFullScrean/>
        </div>
    )
}


export default Video;