import { UserTypes } from "./constants"

export const newCustomer = (user) => {
    let newUser = { ...user, type: UserTypes.CUSTOMER }

    return newUser
}
export const newSeller = (user) => {
    let newUser = { ...user, type: UserTypes.SELLER }

    return newUser
}
export const newAdmin = (user) => {
    let newUser = { ...user, type: UserTypes.ADMIN }

    return newUser
}
