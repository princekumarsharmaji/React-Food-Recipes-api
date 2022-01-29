import { useState , useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Receipes from './Components/Receipes';
import Axios from 'axios';

function App() {
  const[search,setSearch] = useState("paneer");
  const changeHandler = (e)=>{
    setSearch(e.target.value)};
    const[receipe,setReceipe] = useState([]);

    const APP_ID = "292f8b64";
    const APP_KEY = "1f1aa686fd0c1ee49d60c7ccbf520ea4";

    useEffect(()=>{
      getReceipes();
    },[])

    const getReceipes=(async ()=>{
      const response = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      console.log(response)
      setReceipe(response.data.hits)
    });
    function searchOnClick(){
      getReceipes()
    }
  
    return(
    <div>
 
 <Header search = {search} changeHandler = {changeHandler} searchOnClick={searchOnClick}/>;
 <Receipes receipe = {receipe} />

</div>
)
}

export default App;
