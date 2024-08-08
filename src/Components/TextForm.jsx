import React from 'react';
export default function TextFrem(props) {
  function handelUpperCase() {
    let textArea = document.getElementById('text')
    let text = textArea.value;
    let uppercase = text.toUpperCase()
    textArea.value = uppercase
  }
  function handelLowerCase() {
    let textArea = document.getElementById('text')
    let text = textArea.value;
    let lowercase = text.toLowerCase()
    textArea.value = lowercase
  }
  function countWordsAndCharacters() {
    let textArea = document.getElementById('text');
    let text = textArea.value;
    // Count words
    let words = text.split(/\s+/).filter(function (n) { return n !== '' }).length;
    // Count characters
    let characters = text.length;
    let summary = document.getElementById('summary')
    summary.innerHTML = `Words: ${words}, Characters: ${characters}`
  }
  function preview() {
    let textArea = document.getElementById('text')
    let text = textArea.value;
    let preview = document.getElementById('preview')
    preview.innerHTML = text;
  }
  function handelRemoveExtraSpaces() {
    let textArea = document.getElementById('text')
    let text = textArea.value;
    let removeExtraSpaces = text.replace(/\s+/g, ' ')
    textArea.value = removeExtraSpaces
  }
  function handelCopyToClipBoard() {
    let textArea = document.getElementById('text')
    let text = textArea.value;
    if (!navigator.clipboard) {
      console.log('Clipboard API not supported')
    }
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard successfully!');
      })
      .catch(err => {
        console.error('Failed to copy text to clipboard:', err);
      });
  }
  function handelClearText() {
    let textArea = document.getElementById('text')
    textArea.value = '';
  }
  function speak() {
    let synth = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance();
    voice.text = document.getElementById("text").value;
    voice.lang = "en-US";
    synth.speak(voice);
  }
 
  return (
    <div>
      <div className="mb-3">
        <textarea id='text' className={`form-control mt-5 ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'}`} name="text" rows="8" placeholder='Enter text here' onChange={() => {
          countWordsAndCharacters();
          preview();
        }}></textarea>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-copy ${props.mode === 'light' ? 'text-dark' : 'text-white'}`} viewBox="0 0 16 16" id='copyIcon' onClick={handelCopyToClipBoard}>
          <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
        </svg>
      </div>
      <button className='btn btn-primary mx-1 my-1' id='upperCase' onClick={() => { handelUpperCase(); preview() }}>Upper Case</button>
      <button className='btn btn-primary mx-1 my-1' onClick={() => { handelLowerCase(); preview() }}>Lower Case</button>
      <button className='btn btn-primary mx-1 my-1' onClick={handelRemoveExtraSpaces}>Remove Extre Spaces</button>
      <button className='btn btn-primary mx-1 my-1' onClick={handelCopyToClipBoard}>Copy To Clipboard</button>
      <button className='btn btn-primary mx-1 my-1' onClick={speak}>Text To Speech</button>
      {/* <button className='btn btn-primary mx-1 my-1' onClick={}>..........</button> */}
      <button className='btn btn-primary mx-1 my-1' onClick={handelClearText}> Clear </button>
      <h2 className={`mt-2 ${props.mode === 'light' ? 'text-dark' : 'text-white'}`}>Your text summary</h2>
      <p id='summary' className={`${props.mode === 'light' ? 'text-dark' : 'text-white'}`}>Words: 0, Characters: 0</p>
      <h2 className={`${props.mode === 'light' ? 'text-dark' : 'text-white'}`}>Preview</h2>
      <p id='preview' className={`${props.mode === 'light' ? 'text-dark' : 'text-white'}`}></p>

    </div>
  )
}
