import {createStore, Reducer} from "redux";

// Define the constants for the action types
export const DELETE_ELEMENT: string = 'DELETE_ELEMENT';
export const ADD_ELEMENT: string  = 'ADD_ELEMENT';
export const MODIFY_YEAR: string = 'MODIFY_YEAR';

// Define the interfaces for the actions
interface DeleteElementAction { type: typeof DELETE_ELEMENT; id: string; }
interface AddElementAction { type: typeof ADD_ELEMENT; element: DataElement; }
interface ModifyYearAction {type: typeof MODIFY_YEAR; year: number}

// Define the union type for the actions
export type Action = DeleteElementAction | AddElementAction | ModifyYearAction;

// Define the interface for the state
export interface State { elements: Array<DataElement>; year: number}

function initializeStoreElements(): Array<DataElement> {
    const elements: Array<DataElement> = [];
    elements.push({
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    });
    elements.push({ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) });
    elements.push({
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 3, 28),
    });
    elements.push({
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    });
    return elements;
}

// Define the initial state
const initialState: State = { elements: initializeStoreElements(), year: 2020 };
export interface DataElement {id: string, title: string, amount: number, date: Date}

const storeReducer:Reducer<State, Action> = ( state = initialState, action )  => {
    let newElements: Array<DataElement> = state.elements;
    let selectedYear: number = state.year;
    if (action.type === DELETE_ELEMENT) {
        newElements = [];
        let actYearFound: boolean = false;
        for (let i: number = 0; i < state.elements.length; i++) {
            if ("id" in action && state.elements[i].id !== action.id) {
                if (state.elements[i].date.getFullYear() === selectedYear) actYearFound = true;
                newElements.push(state.elements[i]);
            }
        }
        if (!actYearFound && newElements.length > 0) selectedYear = newElements[0].date.getFullYear();
    } else if (action.type === ADD_ELEMENT) {
        newElements = [...state.elements];
        if ("element" in action) {
            if (newElements.length === 0) selectedYear = action.element.date.getFullYear();
            newElements.push(action.element);
        }
    } else if (action.type === MODIFY_YEAR) {
        if ("year" in action) {
            selectedYear = action.year;
        }
    }
    return {
        elements: newElements,
        year: selectedYear
    }
};

const store = createStore(storeReducer);

export default store;

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