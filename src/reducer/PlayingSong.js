const initalState={
    trackName:"",
    songUrl:"",
    type:"single",
    songimgUrl:"",
    index:0,
    singerData:[]

}
const playsong=(state=initalState,action,payload)=>{
    switch(action.type)
    {
        case "PLAYSONG":
            return {...state,trackName:action.payload.trackName,songUrl:action.payload.songUrl,songimgUrl:action.payload.songimgUrl,index:action.payload.index,singerData:action.payload.singerData}
        default:
            return state;
    }
}
export default playsong;