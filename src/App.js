import React from 'react';
import styles from './App.module.css'
import {Cards,Chart,CountryPicker,State,News} from './components';
import {fetchData} from './api';
import coronaImage from './image.jpg'
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import cx from 'classnames';
import toaster from 'toasted-notes';


class App extends React.Component{
state = {
  data:{},
  country:'',
  darklight:true,
}
  async componentDidMount() {
    
    const fetchedData = await fetchData();

    this.setState({ data : fetchedData })
  }

  handleCountryChange=async(country)=>{
    const fetchedData = await fetchData(country);

    this.setState({ data : fetchedData , country:country})
   
  }
  render(){

    const {data,country} = this.state;
    
    return(
      <Tabs>
       
          <TabList>
            <Tab>
              Global
            </Tab>
            <Tab>India</Tab>
            <Tab>News</Tab>
          </TabList>
        <TabPanel>
      <div className={cx(styles.container,this.state.darklight?styles.light:styles.dark)}>
        <img className={styles.image} src={coronaImage} alt='covid'/>
        <button onClick={() => {
          toaster.notify('Wash your Hands properly with Sanitizer. Maintain Social Distancing.. atleast 2 feets apart. Cover your mouth while sneezing', {
            duration: 5000
          })
        }}>
          Say hello
        </button>
        <Cards data ={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data ={data} country={country}/>
        <br/>
        <br/>
        <form>
  <button formaction="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate" className={styles.button}>Donate!</button>
</form>
        <h5>Made by Pratiksha</h5>
      </div>
      </TabPanel>
      <TabPanel>
        <div >
        <State/>
        
        </div>
      </TabPanel>
      <TabPanel>
        <div >
        <News/>
        
        </div>
      </TabPanel>
      </Tabs>
    )
  }
}

export default App;
