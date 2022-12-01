import React,{useState} from 'react';
import {BsFillVolumeMuteFill,BsFillVolumeOffFill,BsFillVolumeDownFill,BsFillVolumeUpFill} from "react-icons/bs";
import {IoVolumeMedium} from 'react-icons/io5'
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import Slider from '@mui/material/Slider';
function ValueLabelComponent(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };
const VolumeController = () => {
    const [volume, setvolume] = useState(20)
    const changeVolume=(e)=>{
        setvolume(e.target.value);
    }
    return (
        <>
        <div className="text-white flex gap-4 items-center">
            {volume==0?<BsFillVolumeMuteFill/>:volume<=35?<BsFillVolumeDownFill/>:volume<=85?<IoVolumeMedium/>:<BsFillVolumeUpFill/>}
            <div className='w-12 sm:w-36 flex items-center'>
            <Slider
              valueLabelDisplay="auto"
              slots={{valueLabel: ValueLabelComponent}}
              aria-label="custom thumb label"
              defaultValue={volume}
              onChange={e=>changeVolume(e)}
            />
            </div>
        </div>   
        </>
    );
}

export default VolumeController;
