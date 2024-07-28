const qrinput = document.getElementById("qr-input");
const qrimg = document.getElementById("qr-img");
const qrbtn = document.getElementById("qr-btn");
// console.log(qrbtn,qrimg,qrinput);
qrbtn.addEventListener('click',()=>{
    const inputValue = qrinput.value;
    // console.log(inputValue);
    if(inputValue === ''){
        alert('please enter a valid URL');
        return
    }else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        qrimg.alt=`QR code for ${inputValue}`
    }
});



  