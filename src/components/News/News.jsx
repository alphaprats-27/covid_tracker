import React, {useState, useEffect} from 'react';
import { fetchNews } from '../../api';
import styles from './News.module.css';
import { Card, CardContent, Grid} from '@material-ui/core';

const News = ()=>{

    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{ 
        const fetchAPI = async() =>{
             setDailyData(await fetchNews());
        }

        
        fetchAPI();
        
    },[]);
    const items = dailyData.map((item) =>
    <Grid item component={Card}   className={styles.card} >
                    <CardContent>
<h6 >{item.title}</h6>

                                  
<h7 className={styles.para1}>Visit Link:{item.url}</h7>
<br/>
<h8 className={styles.para}>Date of publication:{item.published}</h8>

                    </CardContent>

                </Grid>

    );

   
   
    
return (
    <div className={styles.box}>
        <h1 className={styles.center}>{items}</h1>
    </div>
);
};

export default News