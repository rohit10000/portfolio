export const initialState = {
    page: 2
};
function reducer(state, action){

    switch (action.type){
        case 'SET_PAGE':
            console.log("page updated");
            return {
                ...state,
                page: action.item
            }

        default:
            return state;
    }
}

export default reducer;
