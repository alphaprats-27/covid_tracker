import axios from 'axios';
import datas from './news.json'
const url = 'https://covid19.mathdro.id/api';
const URL = 'https://api.covidindiatracker.com/state_data.json';

export const fetchData = async (country) =>{

    let changeableUrl = url;
    if(country)
    {
        changeableUrl=`${url}/countries/${country}`
    }
    try {
        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);

        return {confirmed,recovered,deaths,lastUpdate};
    } catch (error) {
        
    }
}

export const fetchDailyData = async () =>{
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) =>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,

        }))
        return modifiedData;
    } catch (error) {
        
    }
}

    export const fetchCountries = async () => {
        try {
          const { data: { countries } } = await axios.get(`${url}/countries`);
      
          return countries.map((country) => country.name);
        } catch (error) {
          return error;
        }
    }

    export const fetchState = async () => {
        try {
            const {data} = await axios.get(URL);
            const modifiedData = data.map((dailyData) =>({
                state:dailyData.state,
                confirmed:dailyData.confirmed,
                recovered:dailyData.recovered,
                deaths:dailyData.deaths,
                
    
            }))
           
            return modifiedData;
        } catch (error) {
            
        }
    }


    export const fetchNews = () =>{

        try {
          
           if(datas)
           {
            
            const modifiedData = datas.articles.map((dailyData) =>({
                title:dailyData.title,
                description:dailyData.description,
                url:dailyData.url,
                urlToImage:dailyData.urlToImage,
                published:dailyData.publishedAt,
                
                
    
            }))
            console.log(modifiedData);
            return modifiedData;
        }    
    }catch (error) {
            
        }
    }