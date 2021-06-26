import React from 'react';
import styles from './footer.css';
import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../config';


const footer = () => (
    <div>
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}>
                <img alt="nba logo" src="/images/logo.jpeg"/>
            </Link>
            <div className={styles.right}>
                @MeHealth {CURRENT_YEAR} All rights reserved.
            </div>
        </div>
    </div>
)


export default footer;