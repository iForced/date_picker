enum Actions {
    SET_DAY = 'SET_DAY',
    SET_MONTH = 'SET_MONTH',
    SET_YEAR = 'SET_YEAR',
    SET_NAME = 'SET_NAME',
}

type InitialStateType = {
    day: number
    month: number
    year: number
    name: string
}
type SetDayActionType = ReturnType<typeof setDay>
type SetMonthActionType = ReturnType<typeof setMonth>
type SetYearActionType = ReturnType<typeof setYear>
type SetNameActionType = ReturnType<typeof setName>
type ActionsType =
    SetDayActionType
    | SetMonthActionType
    | SetYearActionType
    | SetNameActionType

const now = new Date()
export const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] //not use
export const initialState: InitialStateType = {
    day: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
    name: days[now.getDay() - 1] //not use
}

export const dateReducer = (state: InitialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case Actions.SET_DAY:
            return {...state, day: action.day}

        case Actions.SET_MONTH:
            return {...state, month: action.month - 1, day: 1}

        case Actions.SET_YEAR:
            return {...state, year: action.year}

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