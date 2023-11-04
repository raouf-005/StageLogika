import React, { useContext } from "react";
import '../styles/table.css'
import {ChildContext,ChildForm} from './ChildProvider'


const ChildTable = () => {
   const {ChildData,setChildData}=useContext(ChildContext)
   const {formValue, setFormValue,modify,setModify} =useContext(ChildForm)
   // i didn't create a separate file for modifying and deleting child due to the function simpliity
   const deleteChild = (matricule) => {
        
        setChildData(ChildData.filter((child) => {
            return child.matricule !== matricule
        }))
    }

    const modifyChild = (matricule) => {
        const childToModify = ChildData.find(child => child.matricule === matricule);
        setFormValue(childToModify);
        setModify(childToModify)
        

    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Matricule</th>
                    <th>Lieu de naissance</th>
                    <th>Date de naissance</th>
                    <th>Photo</th>
                    <th>Parent</th>
                
                </tr>
            </thead>
            <tbody>
                {ChildData.map((child) => {
                    return (
                        <tr key={child.matricule}>
                            <td>{child.nom}</td>
                            <td>{child.prenom}</td>
                            <td>{child.matricule}</td>
                            <td>{child.lieunaiss}</td>
                            <td>{child.datenaiss}</td>
                            <td>{child.photo}</td>
                            <td>{child.parent}</td>
                            <td>
                                <button onClick={()=>modifyChild(child.matricule)}>Modifier</button>
                                <button onClick={()=>deleteChild(child.matricule)}>Deleted</button>
                            </td>
                        </tr>
                    )
                })  }
            </tbody>
        </table>
    )
}

export default ChildTable 