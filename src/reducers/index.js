//Constants
import {
    CALCULATE_OWES,
    CHANGE_BUYER,
    CHANGE_INVOLVED,
    CHANGE_INVOLVED_BUYER,
    CHANGE_PARTICIPANT_INPUT,
    CLEAR_ITEM_INPUT,
    CLEAR_PARTICIPANT_INPUT,
    ON_ADD_PARTICIPANT,
    ON_ADD_PURCHASE,
    ON_COST_CHANGE,
    ON_DELETE_PARTICIPANT,
    ON_DELETE_PURCHASE,
    SET_ITEM_INPUT,
    SET_TITLE_INPUT
} from '../constants';

//Dependencies
import { combineReducers } from 'redux';

const itemInputReducer = (state = '', action) => {
    switch (action.type) {
        case SET_ITEM_INPUT:
            return action.payload;
        case CLEAR_ITEM_INPUT:
            return '';
        default:
            return state;
    }
}

const itemsReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const owesObjectReducer = (state = {}, action) => {
    switch (action.type) {
        case CALCULATE_OWES:
            const initOwesObject = (purchases) => {
                //Initialize owesBreakDown object
                const owesBreakDown = {}

                //Initialize name & items keys nested within owesBreakDown
                purchases.forEach(purchase => {
                    purchase.involved.forEach(currentPerson => {
                        owesBreakDown[currentPerson] = {};
                        owesBreakDown[currentPerson]["items"] = [];
                    })
                })

                //Populate the items key for each participant
                purchases.forEach(purchase => {
                    const { involved, buyer, item, cost } = purchase;
                    const split = (cost / (involved.length + 1));
                    //Populate the items array
                    involved.forEach(currentPerson => {
                        owesBreakDown[currentPerson]["items"].push({ "item": item, "buyer": buyer, "split": Number(split) });
                    })
                })
                return owesBreakDown;
            }

            //Populate the peopleOwed object nested in owesBreakdown 
            const populatePeopleOwed = (owesObject) => {
                for (const person in owesObject) {
                    owesObject[person]['peopleOwed'] = {};
                    owesObject[person]['items'].forEach(item => {
                        //Check if a value already exists for the buyer of the current item
                        if (!owesObject[person]['peopleOwed'][item['buyer']]) {
                            owesObject[person]['peopleOwed'][item['buyer']] = Number(0);
                        }
                        //Add current item's split value to what the current person owes the buyer of this item
                        owesObject[person]['peopleOwed'][item['buyer']] += Number(item['split'].toFixed(2));
                    })
                }
                return owesObject;
            }

            const getDifferences = (owesObject) => {
                Object.keys(owesObject).forEach(p1 => {
                    Object.keys(owesObject).forEach(p2 => {
                        if (p1.toString() !== p2.toString()) {
                            const p1OwesP2 = Number(owesObject[p1]['peopleOwed'][p2]);
                            const p2OwesP1 = Number(owesObject[p2]['peopleOwed'][p1]);
                            if (p1OwesP2 < p2OwesP1) {
                                owesObject[p2]['peopleOwed'][p1] = Number(p2OwesP1 - p1OwesP2);
                                delete owesObject[p1]['peopleOwed'][p2];
                            }
                        }
                    })
                })
                return owesObject;
            }
            if (!action.payload) return state;
            return getDifferences(populatePeopleOwed(initOwesObject(action.payload)));
        default:
            return state;
    }
}

const participantReducer = (state = '', action) => {
    switch (action.type) {
        case CHANGE_PARTICIPANT_INPUT:
            return action.payload;
        case CLEAR_PARTICIPANT_INPUT:
            return '';
        default:
            return state;
    }
}

const participantsReducer = (state = [], action) => {
    switch (action.type) {
        case ON_ADD_PARTICIPANT:
            return [...state, action.payload];
        case ON_DELETE_PARTICIPANT:
            return state.filter((participant, index) => {
                return index !== action.payload;
            })
        default:
            return state;
    }
}

const purchasesReducer = (state = [], action) => {
    switch (action.type) {
        case CHANGE_BUYER:
            return state.map((purchase, index) => {
                if (index === action.payload.index) {
                    return { ...purchase, buyer: action.payload.buyer }
                }
                return purchase;
            })
        case CHANGE_INVOLVED:
            return state.map((purchase, index) => {
                if (index === action.payload.index) {
                    return {
                        ...purchase,
                        involved: [...action.payload.involved]
                    }
                }
                return purchase;
            })
        case CHANGE_INVOLVED_BUYER:
            return state.map((purchase, index) => {
                if (index === action.payload.index) {
                    return {
                        ...purchase,
                        involved:
                            action.payload.participants.filter((participant) => {
                                return participant !== action.payload.buyer
                            })
                    }
                }
                return purchase;
            })
        case ON_ADD_PURCHASE:
            return [...state, action.payload]
        case ON_COST_CHANGE:
            return state.map((purchase, index) => {
                if (index === action.payload.index) {
                    return { ...purchase, cost: action.payload.cost }
                }
                return purchase;
            })
        case ON_DELETE_PURCHASE:
            return state.filter((purchase, index) => {
                return index !== action.payload;
            })
        default:
            return state;
    }
}

const titleInputReducer = (state = '', action = {}) => {
    switch (action.type) {
        case SET_TITLE_INPUT:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    item: itemInputReducer,
    items: itemsReducer,
    owesObject: owesObjectReducer,
    participant: participantReducer,
    participants: participantsReducer,
    purchases: purchasesReducer,
    title: titleInputReducer,
})