import React from 'react'
import './style.css'
const Snippetbox = ({data, rel})=>{
    const copyHandler=(event)=>{
        debugger;
        const copyText = event.target.nextSibling.textContent
        const textArea = document.createElement('textarea');
        textArea.textContent = copyText;
        document.body.append(textArea);
        textArea.select();
        document.execCommand("copy");
    }
    return (
    <pre rel={rel}>
        <span className="copy-text" onClick={copyHandler}>Copy</span>
        <code id="myInput">
            {data}
        </code>
    </pre>
    )
}


export default Snippetbox