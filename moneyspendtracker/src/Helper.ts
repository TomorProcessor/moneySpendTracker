import store, {State} from "./StoreReducer";

export function getSortedStoredYears(): Array<number> {
    const actualState: State = store.getState();
    const result: Array<number> = [];
    for (let i:number = 0; i < actualState.elements.length; i++) {
        if (result.includes(actualState.elements[i].date.getFullYear())) continue;
        result.push(actualState.elements[i].date.getFullYear());
    }
    result.sort();
    return result;
}

export function getStoredYearSpendings(year: number): Map<number, number> {
    const actualState: State = store.getState();
    const result: Map<number, number> = new Map<number, number>();
    for (let i: number = 0; i < actualState.elements.length; i++) {
        const actYear: number = actualState.elements[i].date.getFullYear();
        if (actYear !== year) continue;
        const actMonth: number = actualState.elements[i].date.getMonth();
        const actAmount: number = actualState.elements[i].amount;
        let actSpendigForMonth: number;
        if (result.has(actMonth)) {
            actSpendigForMonth = result.get(actMonth)! + actAmount;
        } else {
            actSpendigForMonth = actAmount;
        }
        result.set(actMonth, actSpendigForMonth);
    }
    return result;
}

export function getMaxSpendingStoredYearSpendings(spendings: Map<number, number>): number {
    let maxSpending: number = 0;
    spendings.forEach((value: number) => {
       if (maxSpending < value) maxSpending = value;
    });
    return maxSpending;
}