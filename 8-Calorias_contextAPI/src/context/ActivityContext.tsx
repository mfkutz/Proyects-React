import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activity-reducers";
import { categories } from "../data/categories";
import { Activity } from "../types";

type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch: Dispatch<ActivityActions>
    caloriesConsumed: number
    caloriesBurned: number
    netCalories: number
    categoryName: (category: Activity["category"]) => string[]
    isEmptyActivities: boolean
}

export const ActivityContext = createContext<ActivityContextProps>(null!) //or ({} as ActivityContextProps) works too

export const ActivityProvider = ({ children }: ActivityProviderProps) => {

    //Here things to share (useReduce, logic, states, etc)
    const [state, dispatch] = useReducer(activityReducer, initialState)

    //Contadores
    const caloriesConsumed = useMemo(() => state.activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [state.activities])
    const caloriesBurned = useMemo(() => state.activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [state.activities])
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [state.activities])

    const categoryName = useMemo(() => (category: Activity["category"]) => categories.map(cat => cat.id === category ? cat.name : ""), [state.activities])
    const isEmptyActivities = useMemo(() => state.activities.length === 0, [state.activities])

    return (
        <ActivityContext.Provider value={{ state, dispatch, caloriesConsumed, caloriesBurned, netCalories, categoryName, isEmptyActivities }}>
            {children}
        </ActivityContext.Provider>

    )
}