import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import UserService from '../../reactservice/UserService';
const API = new UserService();



const PrintButton = ({label}) => (<div className="tc mb4 mt2">
  <div
    className="calculat"
    onClick={() => {     
      html2canvas(document.querySelector('#tools_pdf')).then(canvas => {  
        var dataURL = canvas.toDataURL();
        var pdf = new jsPDF();
        pdf.addImage(dataURL, 'JPEG', 5, -135, 200, 500); //addImage(image, format, x-coordinate, y-coordinate, width, height)
        pdf.save("tools.pdf");
      });   
      let userData=API.getProfile().data;
      const generatePDF ={
        "id":userData._id,
        "name":userData.name            
      }

      API.generatePDFActivityLog(generatePDF)
        .then((result) => {
            if(result.data.success){
                // console.log('xxx res:', result );
                //this.resetForm();
                this.setState({
                    showAlert:true,
                    color:'green',
                    message: result.data.message
                });
            }else{
                // console.log('xxx errocode:', result );
                this.setState({
                    showAlert:true,
                    color:'#b31313d6',
                    message: result.data.message
                });
    
            } 
        }).catch(err => {
            // console.log('xxx new:', err);
        })       

    }}
  >
    <a hre='#/' style={{color:'white'}}>{label}</a>
  </div>
</div>);

export default PrintButton;