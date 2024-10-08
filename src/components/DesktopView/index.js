import QRCode from "react-qr-code"
import "./index.css"
 
const DesktopView=()=>{
    const qrvalue="http://localhost:3004/play"

     return(
        <div>
              <h1>Desktop View</h1>
              <QRCode value={qrvalue}/>
        </div>
       
     )
}

export default DesktopView