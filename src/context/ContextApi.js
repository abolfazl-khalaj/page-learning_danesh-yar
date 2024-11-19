import { createContext } from "react";



const InfosUser = createContext({
    infosUserInPresence : {},
    infoUser : {},
    isLogged : false ,
    token : null ,
    login : ()=> {},
    logout : ()=> {},
    getItemsRandomFromArray : ()=> {}
})

export default InfosUser