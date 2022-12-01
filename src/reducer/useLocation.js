const initalLocation=""
const userLocation=(state=initalLocation,action)=>{
    switch(action.type){
        case "USERLOCATION":
            return action.payload;
        default:
            return state;
    }
}
export default userLocation;