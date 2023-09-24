import { useState, useEffect } from "react";
import axios from "axios";
const Fetch = () => {
    const [ages, setAges] = useState([]);
    const [name, setName] = useState('');



    const fechdata = () => {
        axios.get(` https://api.agify.io?name=${name}`)
            .then((response) => {
                console.log(response)

                setAges([...ages, response.data.age])
            })
            .catch((error) => { console.log(error) })
    }


    const callfetch = () => {

        fechdata();
    }




    return (
        <div> <input type="text" value={name} onChange={(e) => { setName(e.target.value) }}></input>
            <button onClick={() => { callfetch() }}>call</button>

            {ages.map((ele, index) => { return (<p key={index}>{ele}</p>) })}
            <p>{name}</p>
        </div>
    )
}

export default Fetch;