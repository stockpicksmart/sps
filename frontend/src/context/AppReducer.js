export default (state, action) => {
    switch(action.type) {
        case 'setImg1':
            state.img1 = action.payload.img
            return {
                ...state,
                img1: state.img1
            }
        case 'setImg2':
            state.img2 = action.payload.img
            return {
                ...state,
                img2: state.img2
            }
        default:
            return state;
    }
}