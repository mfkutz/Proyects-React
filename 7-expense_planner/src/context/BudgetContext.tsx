import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
}

//CONTEXT
export const BudgetContext = createContext<BudgetContextProps>(null!)

type BudgetProviderProps = {
    children: ReactNode
}

//PROVIDER
export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (
        <BudgetContext.Provider
            value={{ state, dispatch }}
        >

            {children}
        </BudgetContext.Provider>
    )
}