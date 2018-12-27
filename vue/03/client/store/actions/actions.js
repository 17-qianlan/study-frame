//主要用来操作异步的数据,否则用mutations
export default {
    asyncUpdateCount(state){
        return new Promise(resolve => {
            setTimeout(() => {
                state.commit("updateCount");
                resolve();
            },5000)
        })
    }
}