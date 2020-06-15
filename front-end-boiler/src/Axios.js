
import React, { useState, useEffect } from "react";
import axios from 'axios';


function Axios () {
    const [forms, setForms] = useState([]);
    const [chapter, setChapter] = useState(1);
    const [book, setBook] = useState("");
  

    const handleChange = event => {
      setChapter(event.target.value);
     
    };

    const handleSubmit = e => {
      setBook(e.target.value);
    };
  
  
    const options = {
        headers: {
            "x-rapidapi-key": "",
            "x-rapidapi-host" : "",
            "useQueryString" : "true"
          },   
    }


    useEffect(() => {
      
    axios.get(``, options)
          .then(response => {
             setForms([response.data]);  
        })
        .catch(err => {
          console.log(err);
        });
    },[chapter, book]);
    if (!forms) {
      return <h1>Loading...</h1>;
    }
  
    return (
      <div className="forms">
  
      
      </div>
    
    );
  }
  
  export default Axios;