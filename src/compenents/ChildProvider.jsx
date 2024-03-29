import React , { useState,createContext ,useRef} from "react";
export const ChildContext = createContext()
export const ChildForm=createContext()


// i used like an existing array of children to make the user more comfortable when he is testing the app

export function ChildProvider({children}){
    const [ChildData,setChildData]=useState([
        {
            nom: "nom1",
            prenom: "prenom1",
            matricule: "matricule1",
            lieunaiss: "lieunaiss1",
            datenaiss: new Date().toJSON().slice(0, 10),
            photo: "",
            parent: "parent1"
        },
        {
            nom: "nom2",
            prenom: "prenom2",
            matricule: "matricule2",
            lieunaiss: "lieunaiss2",
            datenaiss: new Date().toJSON().slice(0, 10),
            photo: "",
            parent: ""
        },
        {
            nom: "nom3",
            prenom: "prenom3",
            matricule: "matricule3",
            lieunaiss: "lieunaiss3",
            datenaiss: new Date().toJSON().slice(0, 10),
            photo: "",
            parent: ""
        },
      ])
      const [formValue, setFormValue] = useState({
        nom: "",
        prenom: "",
        matricule: "",
        lieunaiss: "",
        datenaiss: "",
        photo: "",
        parent: ""
    });
    const [modify, setModify] = useState('')
    
        return(

        <ChildForm.Provider value={{formValue,setFormValue,modify,setModify}}>
        <ChildContext.Provider value={{ChildData,setChildData}}>
            {children}
        </ChildContext.Provider>
        </ChildForm.Provider>
    )



}
