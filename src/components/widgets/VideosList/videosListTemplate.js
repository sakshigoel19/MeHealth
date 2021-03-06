import React from 'react';
import styles from './videosList.css';

import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardInfo';

const VideosListTemplate = (props) => {
    return props.data.map( (item,i) => (
        <Link to={`/videos/${item.id}`} key={i} style={{ textDecoration: 'none' }}>
            <div className={`row ${styles.videoListItem_wrapper}`}>
                <div className={`col-4 ${styles.left}`}
                    style={{
                        background:`url(/images/videos/${item.image})`
                    }}
                >
                    <div></div>
                </div>
                <div className={`col-8 ${styles.right}`}>
                    <CardInfo teams={props.teams} team={item.team} date={item.date}/>
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    ))
}

export default VideosListTemplate;