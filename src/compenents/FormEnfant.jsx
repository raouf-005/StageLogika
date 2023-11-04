import React, { useContext } from "react";
import "../styles/form.css";
import { ChildContext, ChildForm } from "./ChildProvider";

function FormEnfant() {
    const { ChildData, setChildData } = useContext(ChildContext);
    const { formValue, setFormValue, modify, setModify } = useContext(
        ChildForm
    );

    const handleChange = ({ target }) => {
        setFormValue((prevFormValue) => ({
            ...prevFormValue,
            [target.name]: target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (modify) {
            const newChildData = ChildData.map((child) =>
                child.matricule === modify.matricule ? formValue : child
            );
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
    };

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
            formValue.matricule
        );
    };

    return (
        <form className="formStyling" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Nom">Nom de l'enfant</label>
                <input
                    type="text"
                    id="Nom"
                    name="nom"
                    value={formValue.nom}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="Prenom">Prénom de l'enfant</label>
                <input
                    type="text"
                    id="Prenom"
                    name="prenom"
                    value={formValue.prenom}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="Matricule">Matricule</label>
                <input
                    type="text"
                    id="Matricule"
                    name="matricule"
                    value={formValue.matricule}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="Lieunaiss">Lieu de naissance</label>
                <input
                    type="text"
                    id="Lieunaiss"
                    name="lieunaiss"
                    value={formValue.lieunaiss}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="Datanaiss">Date de naissance</label>
                <input
                    type="date"
                    id="Datenaiss"
                    name="datenaiss"
                    value={formValue.datenaiss}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="Photo">Photo de l'enfant</label>
                <input
                    type="file"
                    id="Photo"
                    name="photo"
                    value={formValue.photo}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="parent">Parents:</label>
                <select
                    name="parent"
                    id="parent"
                    value={formValue.parent}
                    onChange={handleChange}
                    
                >
                    <option value="parent1">parent1</option>
                    <option value="parent2">parent2</option>
                    <option value="parent3">parent3</option>
                </select>
            </div>

            <button type="submit" disabled={!checkForm()}>
                Submit
            </button>
        </form>
    );
}

export default FormEnfant;
