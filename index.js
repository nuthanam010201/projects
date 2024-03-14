const qrImageBox = document.getElementById('imageBox')
console.log(qrImageBox)
const qrImage = document.getElementById('qrImage')
console.log(qrImage)
const qrText = document.getElementById('qrText')
console.log(qrText)
function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
        console.log("button clicked")
       qrImageBox.classList.add("show-img")
    }else{
       qrText.classList.add('error')
        setTimeout(()=>{
        qrText.classList.remove('error') 
       },1000)
          
          
    }
    
}