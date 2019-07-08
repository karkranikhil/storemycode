import React, { useEffect } from 'react'
import Prism from "prismjs";

import './style.css'
const Snippetbox = ({data, rel, family})=>{
    useEffect(() => {
        Prism.highlightAll();
      },[]);
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
        <code className={family}>
            {data}
        </code>
    </pre>
    )
}


export default Snippetbox