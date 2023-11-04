import React , { useContext,useState,createContext } from "react";

const ChildContext = createContext()
const ChildForm=createContext()



export const ChildProvider=({children})=>{
    const [ChildData,setChildData]=useState([
        {
            nom: "nom1",
            prenom: "prenom1",
            matricule: "matricule1",
            lieunaiss: "lieunaiss1",
            datenaiss: "datenaiss1",
            photo: "photo1",
            parent: "parent1"
        },
        {
            nom: "nom2",
            prenom: "prenom2",
            matricule: "matricule2",
            lieunaiss: "lieunaiss2",
            datenaiss: "datenaiss2",
            photo: "photo2",
            parent: "parent2"
        },
        {
            nom: "nom3",
            prenom: "prenom3",
            matricule: "matricule3",
            lieunaiss: "lieunaiss3",
            datenaiss: "datenaiss3",
            photo: "photo3",
            parent: "parent3"
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
