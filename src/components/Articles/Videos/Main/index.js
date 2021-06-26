import React from 'react';
import VideosList from '../../../widgets/VideosList/videosList';

const VideosMain = () => (
    <div style={{
        marginTop:'5%'
    }}>
    <VideosList
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={10}
    />
    </div>
)

export default VideosMain;