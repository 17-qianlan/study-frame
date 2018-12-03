export default {
    filterArr: state => {
        console.log(state);
        return state.arr.filter(i => i >3 );
    }
}