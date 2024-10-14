export type BudgetActions =
  | { type: "add-budget"; payload: { budget: number } }
  | { type: "delete-budget"; payload: { budget: number } };

export type BudgetState = {
  budget: number;
};

export const initialState: BudgetState = {
  budget: 0,
};

export const budgetReducer = (state: BudgetState = initialState, action: BudgetActions) => {
  return state;
};
