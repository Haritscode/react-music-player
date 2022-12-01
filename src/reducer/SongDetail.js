const initalState={
    trackName:"",
    songUrl:"",
    singerName:[],
    songimgUrl:"",
    songId:"",
    index:"",
}
const selectedDetails=(state=initalState,action)=>{
    switch(action.type)
    {
        case "SONGDATA":
            return {...state,trackName:action.payload.trackName,songUrl:action.payload.songUrl,songimgUrl:action.payload.songimgUrl,index:action.payload.index,singerName:action.payload.singerName};
        default:
            return state;
    }
}
export default selectedDetails;