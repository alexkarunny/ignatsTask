const LOADING = 'LOADING'

export type StateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

type ActionType = LoadingACType

export const loadingReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

type LoadingACType = {
    type: typeof LOADING,
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingACType  => {
    return {
        type: LOADING,
        isLoading
    }
}