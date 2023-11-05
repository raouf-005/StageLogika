import React, { useContext,useRef} from "react";
import "../styles/form.css";
import { ChildContext, ChildForm } from "./ChildProvider";

  //there is only one problem one modyfing a child info the file must be rentred from the start

    function FormEnfant() {
        const { ChildData, setChildData } = useContext(ChildContext);
        const { formValue, setFormValue, modify, setModify } = useContext(ChildForm);
        const fileInputRef = useRef(null);
        

        const handleChange = ({ target }) => {
                setFormValue((prevFormValue) => ({
                    ...prevFormValue,
                    [target.name]: target.name === "photo"?target.files[0].name:target.value,
                }));
            
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            
            if (modify) {
                const newChildData = ChildData.map((child) => {
                    if (child.matricule === modify.matricule) {
                        
                        return formValue;
                    }
                    return child;
                });
                setChildData(newChildData);
                setModify("");
            } else {
                setChildData((prevChildData) => [...prevChildData, formValue]);
            }
            setFormValue({
                nom: "",
                prenom: "",
                matricule: "",
                lieunaiss: "",
                datenaiss: "",
                photo: "",
                parent: "",
            });
            fileInputRef.current.value = "";
        };
//the check form funtion check both when updating the value or set a new value when updating you can't change the matricule 
//the modify button while get disabled the moment you change the matricule even if u replaced with an existing matricule that doesn't match the matricule of the child that we want to change
// it will not work
        const checkForm = () => {
            if (modify) {
                return formValue.matricule === modify.matricule;
            }

            return (
                formValue.nom &&
                formValue.prenom &&
                formValue.lieunaiss &&
                !ChildData.find((child) => child.matricule === formValue.matricule) &&
                formValue.datenaiss &&
                formValue.matricule &&
                formValue.parent
            );
        };

        return (
            <form className="formStyling" onSubmit={handleSubmit}>
                <h1>ChildForm</h1>
                <div className="inputContainer">
                    <label htmlFor="Nom">Nom de l'enfant <span className="obligedSYmbol">&lowast;</span></label>
                    <input
                        type="text"
                        id="Nom"
                        name="nom"
                        value={formValue.nom}
                        onChange={handleChange}
                        className="inputStyling"
                        placeholder="Entrer le nom"
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="Prenom">Prénom de l'enfant <span className="obligedSYmbol">&lowast;</span></label>
                    <input
                        type="text"
                        id="Prenom"
                        name="prenom"
                        value={formValue.prenom}
                        onChange={handleChange}
                        className="inputStyling"
                        placeholder="Entrer le prenom"
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="Matricule">Matricule <span className="obligedSYmbol">&lowast;</span></label>
                    <input
                        type="text"
                        id="Matricule"
                        name="matricule"
                        value={formValue.matricule}
                        onChange={handleChange}
                        className="inputStyling"
                        placeholder="Entrer le matricule"
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="LieuNaiss">Lieu de naissance <span className="obligedSYmbol">&lowast;</span></label>
                    <input
                        type="text"
                        id="LieuNaiss"
                        name="lieunaiss"
                        value={formValue.lieunaiss}
                        onChange={handleChange}
                        className="inputStyling"
                        placeholder="Entrer le lieu de naissance"
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="DateNaiss">Date de naissance <span className="obligedSYmbol">&lowast;</span></label>
                    <input
                        type="date"
                        id="DateNaiss"
                        name="datenaiss"
                        value={formValue.datenaiss}
                        onChange={handleChange}
                        className="inputDateStyling"
                        placeholder="Entrer la date de naissance"
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="Photo">Photo</label>
                    <input
                        type="file"
                        id="Photo"
                        name="photo"
                        ref={fileInputRef}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="Parent">Parent <span className="obligedSYmbol">&lowast;</span></label>
                    <select
                    name="parent"
                    id="Parent"
                    value={formValue.parent}
                    onChange={handleChange}
                    className="inputStyling"   
                    
                >
                    <option value="" >Choose a parent</option>
                    <option value="parent1">parent1</option>
                    <option value="parent2">parent2</option>
                    <option value="parent3">parent3</option>
                </select>
                </div>
                <button 
                type="submit"
                disabled={!checkForm()}
                className="submitButton"
                >
                    {modify ? "Modifier" : "Ajouter"}
                </button>
            </form>
        );
    }

    export default FormEnfant;

   