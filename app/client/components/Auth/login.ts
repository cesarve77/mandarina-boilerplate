import {client} from '../../App'

export const  login = async (token,stay=false) =>  {
    if (stay) {
        localStorage.setItem('mandarina__AuthToken', token)
    }else{
        sessionStorage.setItem('mandarina__AuthToken', token)
    }
    return client.resetStore().then(()=>{
        client.writeData({data:{token}})
    })
}

