import { useEffect, useState } from "react"
import { Hello } from "./Hello";
import { Button } from 'antd';

export const Demo = () => {

    const [name, setName] = useState("John DOE");
    const languages = ["Goun", "Tori", "Fon"];

    useEffect(() => {
        console.log("Component Loaded !");
    }, []);

    useEffect(() => {
        console.log(`var name has length = ${name.length}`);
    })

    return (
        <>
            {name ? <Hello name={name}/> : "Enter your Name"}
            <br />
            <input 
                type="text"
                defaultValue={name}
                onChange={(e) => {setName(e.target.value)}}
            />

            <ul>
                {languages.map((language) => (
                    <li key={language}>
                        {language}
                        <button onClick={() => {console.log("Button CLicked : " + language)}}>select</button>
                    </li>
                ))}
            </ul>

            <Button type="primary" danger >
                Say Hi :)
            </Button>
        </>
    )
}