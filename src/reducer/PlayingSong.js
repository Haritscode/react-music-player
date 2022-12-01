const initalState={
    trackName:"",
    songUrl:"",
    type:"single",
    songImgUrl:"",
    index:0,
    singerName:[]

}
const playsong=(state=initalState,action,payloac)=>{
    switch(action.type)
    {
        case "PLAYSONG":
            return {...state,trackName:action.payload.trackName,songUrl:action.payload.songUrl,songImgUrl:action.payload.songimgUrl,index:action.payload.index,singerName:action.payload.singerName}
        default:
            return state;
    }
}
export default playsong;