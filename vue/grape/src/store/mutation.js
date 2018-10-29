export default{
    addItemNum(state,num){
        state.itemNum+=num;
    },
    remberId(state,id){
        state.answerid.push(id)
    },
    clock(state){
        state.timer=setInterval(()=>{
            state.allTime++;
        },1000)
    },
    stopClock(state){
        clearInterval(state.timer);
    }
}