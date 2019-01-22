import {Friends, Parties} from '../types'
import * as actions from '../constants/actions'

export function friendsReducer (state: Friends = {friends: []}, action: any): Friends {
    switch(action.type){
        case actions.ADD_FRIEND:
            let newArray = state.friends.slice()
            newArray.push({name: action.name})
            return {...state, friends: newArray}
    }
    return state;
}

export function partiesReducer (state: Parties = {parties: []}, action: any): Parties {
    switch(action.type){
        case actions.ADD_PARTY:
            let newArray = state.parties.slice()
            newArray.push({name: action.name, friends_ids: [], debts:[[]]} )
            return {...state, parties: newArray }
    }
    return state;
}
