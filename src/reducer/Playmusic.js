const initalState=false;
const aulterPlayMusic=(state=initalState,action)=>{
    switch(action.type)
    {
        case "ALTERPLAY":
            return !state;
        default:
            return state;
    }
}
export default aulterPlayMusic;