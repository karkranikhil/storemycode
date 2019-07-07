import React, {useState} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.css'
import Sinppetbox from '../snippetbox'
const Collapsible =({heading, body_text, body_code, rel, code_input, code_output})=>{
  const [visibility, setVisibility] = useState(false)
  return (
    <div className="collapse_container">
    <div className="collapsible_header" onClick={()=>setVisibility(!visibility)}>
    <strong>{heading}</strong></div>
    {visibility && <div className="collapsible_body show" >
      {code_input && <Sinppetbox data={code_input} rel='Input'/>}
      {body_text}
      <Sinppetbox data={body_code} rel={rel}/>
      {code_output && <Sinppetbox data={code_output} rel='Output'/>}
    </div>}
    <ExpandMoreIcon className="collapsible_down_arrow"/>
    </div>
  )
}
export default Collapsible