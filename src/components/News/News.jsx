import React, {useState, useEffect} from 'react';
import { fetchNews } from '../../api';
import styles from './News.module.css';

import cx from 'classnames';
const News = ()=>{

    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{ 
        const fetchAPI = async() =>{
             setDailyData(await fetchNews());
        }

        
        fetchAPI();
        
    },[]);
    const items = dailyData.map((item) =>
   
    <div className={styles.card}>
  
    <img src={item.urlToImage} alt="Loading" className={cx(styles.float,styles.clearfix)}></img>
                    <h7 className={styles.para2}>{item.title}</h7>
                   
<br/> 
<h7 className={styles.para1}>{item.description}</h7>
<br/>                           

<a className={styles.para1} href={item.url}>Visit Link</a>
<br/>
<h8 className={styles.para}>Date of publication:{item.published}</h8>
</div>

    );

   
   
    
return (
    <div className={styles.box}>
        <h1 className={styles.center}>{items}</h1>
    </div>
);
};

export default News