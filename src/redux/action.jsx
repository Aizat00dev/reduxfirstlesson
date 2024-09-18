import  { types } from './types'

export function changeTitleAction(){
    return{
        type: types.CHANGE_TITLE
    }
}

export function changeAboutTitleAction(){
    return{
        type: types.CHANGE_ABOUT_TITLE
    }
}

export function withParamsAction(){
    return{
        type: types.WITH_PARAMS,
        payload: 'hello geeks'
    }
}

export function fromInput(input){
    return{
        type: types.FROM_INPUT,
        payload: input
    }
}

export function asyncFunctionAction() {
    return function (){
        setTimeout(() => {
            alert('hello')
        },2000)
    }
}

function getUsersAction(users){
    return{
        type: types.USERS,
        payload: users
    }
}

export function fetchUsersAction(){
    return async function (dispatch) {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        dispatch(getUsersAction(data))
    }
}