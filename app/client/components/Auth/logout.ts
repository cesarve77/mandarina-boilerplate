import {client} from '../../App'


export const logout = () => {
    localStorage.removeItem('mandarina__AuthToken')
    sessionStorage.removeItem('mandarina__AuthToken')
    return client.resetStore().then(() => {
        client.writeData({data: {token: ""}})
    }).catch(() => console.error('logout'))
}

// @ts-ignore
window.logout = logout
