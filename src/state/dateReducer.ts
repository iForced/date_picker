enum Actions {
    SET_DAY = 'SET_DAY',
    SET_MONTH = 'SET_MONTH',
    SET_YEAR = 'SET_YEAR',
    SET_NAME = 'SET_NAME',
}

type InitialStateType = {
    day: null | number
    month: null | number
    year: null | number
    name: null | string
}
type SetDayActionType = ReturnType<typeof setDay>
type SetMonthActionType = ReturnType<typeof setMonth>
type SetYearActionType = ReturnType<typeof setYear>
type SetNameActionType = ReturnType<typeof setName>
type ActionsType = SetDayActionType | SetMonthActionType | SetYearActionType | SetNameActionType

export const initialState: InitialStateType = {
    day: null,
    month: null,
    year: null,
    name: null
}

export const dateReducer = (state: InitialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case Actions.SET_DAY:
            return {...state, day: action.day}

        case Actions.SET_MONTH:
            return {...state, month: action.month}

        case Actions.SET_YEAR:
            return {...state, year: action.year}

        case Actions.SET_NAME:
            return {...state, name: action.name}

        default:
            return state
    }
}

export const setDay = (newDay: number) => {
    return {
        type: Actions.SET_DAY,
        day: newDay,
    } as const
}
export const setMonth = (newMonth: number) => {
    return {
        type: Actions.SET_MONTH,
        month: newMonth,
    } as const
}
export const setYear = (newYear: number) => {
    return {
        type: Actions.SET_YEAR,
        year: newYear,
    } as const
}
export const setName = (newName: string) => {
    return {
        type: Actions.SET_NAME,
        name: newName,
    } as const
}