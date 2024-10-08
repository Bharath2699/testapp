import QRCode from "react-qr-code"
import "./index.css"
 
const DesktopView=()=>{
    const qrvalue="https://mytestapplication.netlify.app/play"

     return(
        <div>
              <h1>Desktop View</h1>
              <QRCode value={qrvalue}/>
        </div>
       
     )
}

export default DesktopView