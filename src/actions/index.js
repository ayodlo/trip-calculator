//Constants
import {
    CALCULATE_OWES,
    CHANGE_BUYER,
    CHANGE_INVOLVED,
    CHANGE_INVOLVED_BUYER,
    CHANGE_PARTICIPANT_INPUT,
    CLEAR_ITEM_INPUT,
    CLEAR_PARTICIPANT_INPUT,
    CREATE_OWES_OBJECT,
    ON_ADD_PARTICIPANT,
    ON_ADD_PURCHASE,
    ON_COST_CHANGE,
    ON_DELETE_PARTICIPANT,
    ON_DELETE_PURCHASE,
    ON_PARTICIPANTS_ERROR,
    ON_TITLE_ERROR,
    SET_ITEM_INPUT,
    SET_TITLE_INPUT
} from '../constants';

export const calculateOwes = (purchases) => {
    return {
        type: CALCULATE_OWES,
        payload: purchases
    }
}

export const changeBuyer = (buyer, index) => {
    return {
        type: CHANGE_BUYER,
        payload: { buyer, index }
    }
}

export const changeInvolved = (involved, index) => {
    return {
        type: CHANGE_INVOLVED,
        payload: { involved, index }
    }
}

export const changeInvolvedBuyer = (buyer, participants, index) => {
    return {
        type: CHANGE_INVOLVED_BUYER,
        payload: { buyer, participants, index }
    }
}

export const changeParticipantInput = participant => {
    return {
        type: CHANGE_PARTICIPANT_INPUT,
        payload: participant
    }
}

export const clearItemInput = item => {
    return {
        type: CLEAR_ITEM_INPUT
    }
}

export const clearParticipantInput = participant => {
    return {
        type: CLEAR_PARTICIPANT_INPUT
    }
}

export const createOwesObject = owesObject => {
    return {
        type: CREATE_OWES_OBJECT,
        payload: owesObject
    }
}

export const onAddParticipant = participant => {
    return {
        type: ON_ADD_PARTICIPANT,
        payload: participant
    }
}

export const onAddPurchase = purchase => {
    return {
        type: ON_ADD_PURCHASE,
        payload: purchase
    }
}

export const onCostChange = (cost, index) => {
    return {
        type: ON_COST_CHANGE,
        payload: { cost, index }
    }
}

export const onDeleteParticipant = index => {
    return {
        type: ON_DELETE_PARTICIPANT,
        payload: index
    }
}

export const onDeletePurchase = index => {
    return {
        type: ON_DELETE_PURCHASE,
        payload: index
    }
}

export const onParticipantsError = error => {
    return {
        type: ON_PARTICIPANTS_ERROR,
        payload: error
    }
}

export const onTitleError = error => {
    return {
        type: ON_TITLE_ERROR,
        payload: error
    }
}

export const setItemInput = item => {
    return {
        type: SET_ITEM_INPUT,
        payload: item
    }
}

export const setTitleInput = title => {
    return {
        type: SET_TITLE_INPUT,
        payload: title
    }
}