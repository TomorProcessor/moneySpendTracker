import {createStore, Reducer} from "redux";

// Define the constants for the action types
export const DELETE_ELEMENT: string = 'DELETE_ELEMENT';
export const ADD_ELEMENT: string  = 'ADD_ELEMENT';

// Define the interfaces for the actions
interface DeleteElementAction { type: typeof DELETE_ELEMENT; id: string; }
interface AddElementAction { type: typeof ADD_ELEMENT; element: DataElement; }

// Define the union type for the actions
export type Action = DeleteElementAction | AddElementAction;

// Define the interface for the state
export interface State { elements: Array<DataElement>; }

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
        date: new Date(2021, 2, 28),
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
const initialState: State = { elements: initializeStoreElements() };
export interface DataElement {id: string, title: string, amount: number, date: Date}

const storeReducer:Reducer<State, Action> = ( state = initialState, action )  => {
    let newElements: Array<DataElement> = [];
    if (action.type === DELETE_ELEMENT) {
        for (let i: number = 0; i < state.elements.length; i++) {
            if ("id" in action && state.elements[i].id !== action.id) {
                newElements.push(state.elements[i]);
            }
        }
    } else {
        newElements = [...state.elements];
        if ("element" in action) {
            newElements.push(action.element);
        }
    }
    console.log(newElements);
    return {
        elements: newElements
    }
};

const store = createStore(storeReducer);

export default store;