
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Alert } from '@mui/material';
function App() {
  const [Principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [intrest,setIntrest]=useState(0)
  const[isprinciple,setIsPrinciple]=useState(true)
  const[israte,setIsrate]=useState(true)
  const[isyear,setIsyear]=useState(true)

  const validate =(e)=>{
  const name = e.target.name
  const value = e.target.value 
   /* console.log(name,value);
  console.log(!!value.match(/^[0-9]*$/)); */

  if (!!value.match(/^[0-9]*$/)) {
    if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }else if(name=='rate'){
      setRate(value)
      setIsrate(true)
      }
    else{
      setYear(value)
      setIsyear(true)
  }
  }else{
  if(name=='principle'){
    setPrinciple(value)
    setIsPrinciple(false)
  }else if(name=='rate'){
    setRate(value)
    setIsrate(false)
    }
  else{
    setYear(value)
    setIsyear(false)}
}

}
const handleReset=()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsrate(true)
  setIsyear(true)
  setIntrest(0)
}

const handleCalculate =(e)=>{
e.preventDefault()
if(Principle=="" || rate=="" || year==""){
  alert('please fill the form completely')
}
else{
  setIntrest((Principle*rate*year)/100)
}
}
  return (
    <>
     <div style={{backgroundColor:'black',height:'100vh'}}className='d-flex justify-content-center align-items-center '>
      <div style={{backgroundColor:'white',width:'400px'}}className='p-4 rounded shadow'>
<h1>Simple Intrest App</h1>
<p>Calculate Your Simple Intrest Easily</p>
<div style={{backgroundColor:'orange'}}className='p-3 mt-3 rounded d-flex justify-content-center align-items-center flex-column'>
<h1 className='fw-bold'>₹{intrest}</h1>
<p>Total simple intrest</p>
</div>

<form className='mt-2' onSubmit ={handleCalculate}>
  <div className="mb-3">
  <TextField id="outlined-basic" label="$Principle amount" variant="outlined"value={Principle||""} className='w-100' onChange={(e)=>validate(e)}name='principle'/>
  {!isprinciple&&
    <p className='text-danger'>*Invalid Input</p>
    }
  </div>
  <div className="mb-3">
  <TextField id="outlined-basic" label="Rate of intrest(p.a)%" variant="outlined" value={rate||""} className='w-100'onChange={(e)=>validate(e)}name='rate' />
  {!israte&&
  <p className='text-danger'>*Invalid Input</p>}
  </div>
  <div className="mb-3">
  <TextField id="outlined-basic" label="Year(yr)" variant="outlined" value={year||""} className='w-100'onChange={(e)=>validate(e)}name='year' />
{ !isyear&&
 <p className='text-danger'>*Invalid Input</p>}
  </div>
  <div className="mb-3 d-flex justify-content-between">
<Button variant="contained"color="success"style={{width:'130px',padding:'15px'}}disabled={isprinciple && israte && isyear?false:true}type='submit'>Calculate</Button>
<Button variant="outlined"color="primary"style={{width:'130px',padding:'15px'}}onClick={handleReset}>Reset</Button>
  </div>
</form>
      </div>
      </div> 
    </>
  )
}

export default App
