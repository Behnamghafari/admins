
const modalContainer = document.querySelector(".modal-container");
const alertModal = document.querySelector(".alert-modal");
const confirmModal = document.querySelector(".confirm-modal");
const promptModal = document.querySelector(".prompt-modal");
const modal = document.querySelector('#modall')
// Function to show the alert dialog

function confirmm(message, okCallback,cancelCallback) {
 document.body.insertAdjacentHTML('afterbegin',`
 <div  id="prmk" style="position: fixed; top: 50%;right: 40%;z-index: 99999123;width:30%"
    class="alert alert-light shadow-lg rounded ">
    <div class="">
      <p id="confirm-message" style="color:black">${message}</p>
    <div class="btn-group row w-100 mx-auto">
      <button class='btn btn-success col-6' id="confirm-ok" onclick="this.parentNode.parentNode.parentNode.style.display='none' ">تایید</button>
      <button class='btn btn-warning col-6' id="confirm-cancel"  onclick="this.parentNode.parentNode.parentNode.style.display='none' ">لغو</button>
    </div>
    </div>
  </div>
  `
)

document.getElementById("confirm-ok").addEventListener("click", okCallback);
document.getElementById("confirm-cancel").addEventListener("click", cancelCallback);
}

// const alal = ()=>{
//   setTimeout(()=>{
//    alpert('yes')
//   },100);
  
  
//  }
//   const al1 = ()=>{
//   setTimeout(()=>{
//    alpert('no')
//   },100);
  
  
//  }
// confirmm('chera' ,alal ,al1)

  
async function promptt( message ,callback) {
  document.body.insertAdjacentHTML('afterbegin',`
 <div id="prm" style="position: fixed; top: 50%;right: 40%;z-index: 99999123;width:30%"
   class="alert alert-light shadow rounded">
     <div  style="border:0px">
         <p id="prompt-message" style="color:black;border:0px !important">${message}</p>
         <textarea class="form-control" id="prompt-input" type="text" ></textarea>
        <div class="w-100  btn-group row mx-auto">
         <button class='btn btn-primary col-xl-6' id="prompt-ok" ondblclick="this.parentNode.parentNode.style.display='none' ">تایید</button>
         <button class='btn btn-warning col-xl-6' id="prompt-cancel" onclick="this.parentNode.parentNode.parentNode.style.display='none' ">لغو</button>
        </div>
         </div>
         </div>
         
         `)
         const promptModal = document.querySelector(".prompt-modal");
         document.getElementById("prompt-input").focus()
document.getElementById("prompt-ok").addEventListener("click", () => {
 if(!document.getElementById("prompt-input").value){
     return alertt('نباید ورودی خالی باشد')
 }else{
  document.getElementById("prompt-ok").disabled = true
  document.getElementById("prompt-ok").innerHTML = 'لطفا صبر کنید'
      //  callback(document.getElementById("prompt-input").value ,callback);
       callback(document.getElementById("prompt-input").value );
      //  prm.style.display = 'none'
 }

});
//   document.getElementById("prompt-cancel").addEventListener("click", cancelCallback);
}




function alpert( word ){
 setTimeout(()=>{
  document.body.insertAdjacentHTML('afterbegin',`
    <div id="nd" style="position: fixed; top: 50%;right: 40%;z-index: 999991239;width:30%"
     class="alert alert-light shadow-lg rounded">
    <p id="pp" style="color:black">${word}</p>
    <div>
      <button onclick="this.parentNode.parentNode.remove()" class="btn  btn-info w-100">تایید</button>
    </div>
  </div>`)
  
  
  window.addEventListener('click' ,(e)=>{
    const nd  =  document.querySelector('#nd')
    if(!nd) return ;
    if(e.target.id !== 'nd' && document.querySelector('#nd')){
      document.querySelector('#nd')?.remove()
    }
  })
  
  window.addEventListener('keyup' ,(e)=>{
    const nd = document.querySelector('#nd')
    if(!nd) return ;
    if(e.key == 'Enter' || e.key == 'Escape' && nd  ){
      nd.remove()
    }
  })
 },200)
}







