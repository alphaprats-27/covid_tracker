import React, {useState, useEffect} from 'react';
import { fetchState } from '../../api';
import styles from './State.module.css';
import CountUp from 'react-countup';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
        
      '&:nth-of-type(even)': {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      },
      
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      margin:0,
    
      
    },

  });





  const State = () => {
    const classes = useStyles();

    

    
      const[gh,setgh] = useState(1);
        
      const[statee,setstatee] = useState('');
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{ 
        const fetchAPI = async() =>{
             setDailyData(await fetchState());
        }

        
        fetchAPI();
        
    },[]);

   
    function handleClick(e) {
     

     setstatee(e);
     if(gh===1)
     setgh(0);
     else
      setgh(1);
    }
    
if(gh===1)
{
     return(
     
        <div className={styles.list}>
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >State</StyledTableCell>
            <StyledTableCell align="right">Confirmed</StyledTableCell>
            <StyledTableCell align="right">Recovered</StyledTableCell>
            <StyledTableCell align="right">Deaths</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {dailyData.map((row) => (
            <StyledTableRow key={row.state}>
              <StyledTableCell component="th" scope="row" onClick={()=>handleClick(row.state)}>
                {row.state}
              </StyledTableCell>
              <StyledTableCell align="right"><CountUp start={0} end={row.confirmed} duration={2.5} separator=","/></StyledTableCell>
              <StyledTableCell align="right"><CountUp start={0} end={row.recovered} duration={2.5} separator=","/></StyledTableCell>
              <StyledTableCell align="right"><CountUp start={0} end={row.deaths} duration={2.5} separator=","/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
          
  }else
          {

           
           if(statee==='Andhra Pradesh')
           {
            return(
              
              <div className={styles.body1}>
              <br/>
              <button onClick={()=>handleClick(statee)}>Back</button>
              
              <div className={styles.hey}>
                <h1 className={styles.yo} >Andhra Pradesh Testing Centres</h1>
                
                </div>
               
              <br/>
                <div className={styles.row}>
             <div className={styles.column}>
                       <div className={styles.card}>
                            <h4>Govt. Medical College</h4>
                                           
                           
                            <h5>Anathpur</h5>
                            
                      </div>
                      </div>
                      <div className={styles.column}>
                      <div className={styles.card}>
                           <h4>Govt. Medical College</h4>
                                          
                          
                           <h5>Anathpur</h5>
                     </div>
                     </div>
                     <div className={styles.column}>
                     <div className={styles.card}>
                          <h4>Govt. Medical College</h4>
                                         
                         
                          <h5>Anathpur</h5>
                    </div>
                    </div> <div className={styles.column}>
                    <div className={styles.card}>
                         <h4>Govt. Medical College</h4>
                                        
                        
                         <h5>Anathpur</h5>
                   </div>
                   </div> <div className={styles.column}>
                   <div className={styles.card}>
                        <h4>Govt. Medical College</h4>
                                       
                       
                        <h5>Anathpur</h5>
                  </div>
                  </div> <div className={styles.column}>
                  <div className={styles.card}>
                       <h4>Govt. Medical College</h4>
                                      
                      
                       <h5>Anathpur</h5>
                 </div>
                 </div>
                      
                     <div className={styles.he}>

                     </div>  
    
                </div>
                </div>
                
            )}
           else{
      return(
       
<div>
<button>Back</button>
</div>

    )}}

};



export default State;