import "./LandingScreen.css";
import { useState } from "react";

function LandingScreen() {


    // const [state, setState] = useState({
    //     bgColor: 'white',
    //     color: 'black',
    // })

    // style={{backgroundColor: state.bgColor, color: state.color}}

    // const changeTheme = (event) => {
    //     if(event.target.checked) {
    //         setStyle({
    //             bgColor: 'black',
    //             color: 'white;',
    //         })
    //     }

    //     else {
    //         setStyle({
    //             bgColor: 'white',
    //             color: 'black',
    //         })
    //     }
    // }


    const [password, setPassword] = useState("Random password will be generated here!");
    const [characters, setCharacters] = useState(8);
    const [uppercase, setUpperCase] = useState(true);
    const [lowercase, setLowerCase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);

    if(characters === 0) {
        setCharacters("");
    }

    function generatePassword() {
        let characterUsed = "";
        
        if(uppercase){characterUsed += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
        if(lowercase){characterUsed += "abcdefghijklmnopqrstuvwxyz"}
        if(numbers) {characterUsed += "0123456789"}
        if(symbols) {characterUsed += "`~!@#$%^&*()_"}

        if(characterUsed.length == 0) {
            alert('At least one type of character must be selected');
            // setPassword("")
        }

        else if(characters < 8) {
            alert('Character Length is below limit!')
        }

        else if(characters > 50) {
            alert('Character Length is above limit!')
        }

        else {
            setPassword("");
            let TemporaryPassword = "";
            for (let i = 0; i < characters; i++) {
                // alert('Please wait... Generating your password')
                let indexValue = Math.floor(Math.random() * characterUsed.length);
                TemporaryPassword += characterUsed[indexValue];
            }
            setPassword(TemporaryPassword);
        }

    }


    function copyonBoard() {
        if(password.length == 0) {
            alert('Nothing to copy! Please generate a Password first');
        }

        else {
            navigator.clipboard.writeText(password);
            alert('Copied to Clipboard !!!')
        }
    }


    return(
        <div id="landing-screen">
            <div id="first">
                <div className="left">
                    <h1>Password Generator</h1>
                </div>

                {/* <div className="right">
                    <input type="checkbox"/>
                    <p>Dark Mode</p>
                </div> */}
            </div>

            <div id="second">
                <div className="left">
                    {/* <input type="text" name="" id="password-generator"/> */}
                    <p id="password-generator">{password}</p>
                </div>

                <div className="right">
                    <i class="fa-solid fa-copy" onClick={copyonBoard}></i>
                </div>
            </div>

            <div id="third">
                <div className="left" >
                    <h4>Select Password length <b>(**8-50 characters**)</b></h4>
                </div>

                <div className="right">
                    <input type="number" name="" id="password-length" value={characters} onChange={(e) => setCharacters(Number(e.target.value))}/>
                </div>
            </div>

            <div id="fourth">
                <input type="checkbox" id="upper-case" checked={uppercase} onChange={(e) => setUpperCase(e.target.checked)} />Include upper case
                <br /> 
                <input type="checkbox" name="Include lower case" id="lower-case" checked={lowercase} onChange={(e) => setLowerCase(e.target.checked)} />Include Lower case <br />
                <input type="checkbox" name="Include numbers" id="number-case" checked={numbers} onChange={(e) => setNumbers(e.target.checked)} />Include Numbers <br />

                <input type="checkbox" name="Include symbols" id="symbol-case" checked={symbols} onChange={(e) => setSymbols(e.target.checked)} />Include Symbols <br />
            </div>

            <div id="fifth">
                <input id="generate-button" type="button" value="Generate Password" onClick={generatePassword} />
            </div>



        </div>
    );
}

export default LandingScreen;