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
<h5>{item.title}</h5>

                                  
<h6>Visit Link:{item.url}</h6>
<h6>Date of publication:{item.published}</h6>

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