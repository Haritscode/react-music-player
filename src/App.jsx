import {useEffect} from 'react'
import Sidebar from "./components/Sidebar";
import Discover from "./pages/Discover";
import Player from './components/Player/Player'
import Recommend from "./components/Recommend";
import {Routes,Route } from "react-router-dom";
import SongPage from "./pages/SongPage";
import {useSelector,useDispatch} from 'react-redux';
import axios from "axios";
function App() {
  const songDetails=useSelector(state=>state.selectedDetails);
  const songData=useSelector(state=>state.playsong)
  const dispatch=useDispatch();
  const userLocation=useSelector(state=>state.userLocation);
  const getLocation=async()=>{
    const location=await axios.get("https://geolocation-db.com/json/2725d960-5eef-11ed-9b62-857a2b26943e");
    dispatch({type:"USERLOCATION", payload:location.data.country_code})
  }
  useEffect(() => {
    getLocation()
  }, []);
  return (
    <>
      <div className="flex flex-col justify-between w-screen h-screen overflow-x-hidden">
        <div className="flex justify-start w-full bg-gradient-to-br from-black to-[#121286]">
          <div className="hidden md:block">
          <Sidebar/>
          </div>
          <div className="flex flex-col lg:flex-row w-fit overflow-hidden lg:w-full justify-between gap-12 px-5 mt-12 lg:mt-0">
            <Routes>
              <Route path="/" element={<Discover/>}/>
              <Route path="/playlist" element={<SongPage songDetails={songDetails}/>}/>
              <Route path="/playing" element={<SongPage songDetails={songData}/>}/>
            </Routes>
            <Recommend/>
          </div>
        </div>
        <div className="fixed bottom-0">
          <Player/>
        </div>
      </div>
      
    </>
  );
}

export default App;
