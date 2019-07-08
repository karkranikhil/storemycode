import React, {useState} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.css'
import Sinppetbox from '../snippetbox'
const Collapsible =({heading, body_text, body_code, rel, code_input, code_output, body_code_family, input_code_family, output_code_family})=>{
  const [visibility, setVisibility] = useState(false)
  return (
    <div className="collapse_container">
    <div className="collapsible_header" onClick={()=>setVisibility(!visibility)}>
    <strong>{heading}</strong></div>
    {visibility && <div className="collapsible_body show" >
      {code_input && <Sinppetbox data={code_input} rel='Input' family={input_code_family}/>}
      {body_text}
      <Sinppetbox data={body_code} rel={rel}  family={body_code_family}/>
      {code_output && <Sinppetbox data={code_output} rel='Output' family={output_code_family}/>}
    </div>}
    <ExpandMoreIcon className="collapsible_down_arrow"/>
    </div>
  )
}
export default Collapsible