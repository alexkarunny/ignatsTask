import {UserType} from "../HW8";

type ActionCreatorsType =
    | ReturnType<typeof sortUpAC>
    | ReturnType<typeof sortDownAC>
    | ReturnType<typeof checkAgeAC>

export const homeWorkReducer = (state: UserType[], action: ActionCreatorsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort':
            const copyArray = [...state]
            if (action.payload === 'up') copyArray.sort((a, b) => a.name > b.name ? 1 : -1 )
            else if(action.payload === 'down') copyArray.sort((a, b) => a.name > b.name ? -1 : 1 )
            return copyArray

        case 'check': {
            return state.filter(user => user.age > action.payload)
        }
        default:
            return state
    }
}

export const sortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    }
}
export const sortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    }
}
export const checkAgeAC = () => {
    return {
        type: 'check',
        payload: 18
    }
}