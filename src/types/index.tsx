export interface Friend {
    name: String
}
export interface Friends {
    friends: Array<Friend>
}
export interface Party {
    name: String;
    friends_ids: Array<Number>
    debts: Array<Array<Number>>
}

export interface Parties {
    parties: Array <Party>
}

export interface State {
    friends: Friends
    parties: Parties
}