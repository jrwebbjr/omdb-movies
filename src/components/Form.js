import { useEffect } from "react";
import { useState } from "react";

export default function Form(props){
    const [ formData, setFormData ] = useState({
        searchTerm: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.moviesearch(formData.searchTerm)
    }

    return (
    <div>
        <form className="search" onSubmit={handleSubmit}>
            <input type="text"
            name="searchTerm"
            onChange={handleChange}
            value={formData.searchTerm}
            />
            <input type="submit" value="Search for Movie" />
        </form>
    </div>
    )
}