import React from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';
import VideosList from '../widgets/VideosList/videosList';
import styles from './home.css'

const Home = () =>{
    return (
        <div>
            <NewsSlider
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots:true
                }}
            />
            <div style={{
                textAlign:'center'
            }}>
                <h2 style={{
                    marginTop:'5%',
                }}>
                    Articles
                </h2>
                <center><div className={styles.bar}></div></center>
            </div>
            
            <NewsList
                type="card"
                loadmore={true}
                start={3}
                amount={3}
            />
            <VideosList
                type="card"
                title={true}
                loadmore={true}
                start={0}
                amount={3}
            />
        </div>
    )
}

export default Home;