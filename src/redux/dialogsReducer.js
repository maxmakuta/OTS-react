

const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = []





const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            return {
                ...state,
                messages: [...state.messages, {
                id: 4, message: action.newMessageElement
            }]

        }
        default:
            return state;
    }

    return state;
}

export const addMesageActionCreator = (newMessageElement) => ({type: ADD_MESSAGE, newMessageElement})




export default dialogsReducer;