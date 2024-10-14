import { useMemo, useState } from "react"

export default function BudgetForm() {

    const [budget, setBudget] = useState(0)

    // const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     const invalidChars = ["e", "E", "+", "-"]
    //     if (invalidChars.includes(e.key)) {
    //         e.preventDefault()
    //     }
    // }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(+e.target.value)
    }

    const isValid = useMemo(() => {
        // const budgetNumber = parseFloat(budget)
        // return isNaN(budgetNumber) || budget === ""
        return isNaN(budget) || budget <= 0
    }, [budget])

    return (
        <form className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                    Definir presupuesto
                </label>
                <input
                    id="budget"
                    type="number"
                    className="w-full bg-white border border-gray-200 p-2"
                    placeholder="Define tu presupuesto"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                // onKeyDown={handleOnKeyDown}
                />
            </div>

            <input
                type="submit"
                value="Definir Presupuesto"
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40"
                disabled={isValid}
            />
        </form>
    )
}
