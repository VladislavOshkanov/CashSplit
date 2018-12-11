import * as actions from '../constants/actions'


export interface Friends {
    addFriend: (name : String) => any;
    removeFriend: (index: String) => any;
}
export interface Parties {
    addParty: (name : String) => any;
    removeParty: (index: String) => any;
}
function action(type: any, payload: any) : any {
    return {type, ...payload}
  }
  
//   export const placesAutocomplete: PlacesAutocompleteRequest = {
//     request: request => action(constants.PLACES_REQUEST, {request}),
//     success: (request, response) => action(constants.PLACES_SUCCESS, {request, response}),
//     failure: request => action(constants.PLACES_FAILURE, {request}),
//     updatePlaceDetails: (index, details) => action(constants.UPDATE_PLACE_DETAILS, {index, details})
//   }

export const parties : Parties = {
    addParty: (name: String) => action(actions.ADD_PARTY, {name}),
    removeParty: (index: String) => action(actions.REMOVE_PARTY, {index})
}