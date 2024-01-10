import { useState } from "react";

function Atom() {
    const admin = {
        name : "josy",
        password: "12345" 
    }
    const [user, setUser] = useState(admin);

    sessionStorage.setItem("auth", JSON.stringify(admin));
    const auth = JSON.parse(sessionStorage.getItem("auth"))
    const {name,password} = auth
     
    const data = "false"
    console.log(JSON.parse(data));

    console.log(auth);


    const handleClick = () => {
        console.log(user);
        setUser(preData => preData += 1);
    }
    return (
        <>
            <button type="button" onClick={handleClick}>
                click Me
            </button>
            {name}
            {password}
        </>
    )
}
export default Atom;