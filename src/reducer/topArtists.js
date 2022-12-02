const TopArtists=(state=[],action)=>{
    switch(action.type)
    {
        case "TOPARTISTS":
            return [...action.payload];
        default:
            return state;
    }

}
export default TopArtists;