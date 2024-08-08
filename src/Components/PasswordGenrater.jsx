import React, { useState } from 'react';
import './PasswordGenrater.css';

function PasswordGenrater() {
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeUpperCase, setIncludeUpperCase] = useState(false);
    const [includeLowerCase, setIncludeLowerCase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
    const [password, setPassword] = useState('');

    function updateLengthValue(event) {
        setPasswordLength(event.target.value);
    }

    function generatePassword() {
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const specialChars = '@#!$%^&*()';

        let allChars = '';
        if (includeUpperCase) allChars += upperCaseChars;
        if (includeLowerCase) allChars += lowerCaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSpecialChars) allChars += specialChars;

        if (allChars === '') {
            alert('Please select at least one character type');
            return;
        }

        let generatedPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            generatedPassword += allChars[randomIndex];
        }

        setPassword(generatedPassword);
    }

    return (
        <div className='body'>
            <div className="container1">
                <input type="text" value={password} disabled />
                <div className="row1">
                    <label htmlFor="PasswordLength">
                        Password Length: <span>{passwordLength}</span>
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="30"
                        value={passwordLength}
                        id="PasswordLength"
                        onChange={updateLengthValue}
                    />
                </div>
                <div className="row1">
                    <label htmlFor="upperCase">Include upper case (A-Z)</label>
                    <input
                        type="checkbox"
                        id="upperCase"
                        name="upperCase"
                        checked={includeUpperCase}
                        onChange={(e) => setIncludeUpperCase(e.target.checked)}
                    />
                </div>
                <div className="row1">
                    <label htmlFor="lowerCase">Include lower case (a-z)</label>
                    <input
                        type="checkbox"
                        id="lowerCase"
                        name="lowerCase"
                        checked={includeLowerCase}
                        onChange={(e) => setIncludeLowerCase(e.target.checked)}
                    />
                </div>
                <div className="row1">
                    <label htmlFor="numbers">Include numbers (0-9)</label>
                    <input
                        type="checkbox"
                        id="numbers"
                        name="numbers"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                </div>
                <div className="row1">
                    <label htmlFor="specialChar">Special characters (@ # ! $ % ^ & * )</label>
                    <input
                        type="checkbox"
                        id="specialChar"
                        name="specialChar"
                        checked={includeSpecialChars}
                        onChange={(e) => setIncludeSpecialChars(e.target.checked)}
                    />
                </div>
                <button className="btn btn-primary" onClick={generatePassword}>
                    Generate Password
                </button>
            </div>
        </div>
    );
}

export default PasswordGenrater;
