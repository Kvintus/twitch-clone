import { AnyAction, Reducer } from 'redux'
import {SIGN_IN, SIGN_OUT} from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

const redu = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload}
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null}
        default:
            return state
    }
}

export default (redu as Reducer)