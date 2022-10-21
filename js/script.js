"use script";
let elPiText = $(".result__textend");
let elSelect = $("#form__select");
let selectOptionsValue = [`Yupqa`, `O'rtacha`, `Qalin`];
selectOptionsValue.forEach((e, i, a) => {
  let newElOption = createElement("option", "", `${selectOptionsValue[i]}`);
  elSelect.append(newElOption);

  elSelect.addEventListener("change", (evt) => {
    evt.preventDefault();
    elPiText.textContent = elSelect.value;

  });

  elSelect.appendChild(newElOption);
  newElOption.name = "selected";
});

let pizzaSizeRes = $(".pizza-size-result");
let elPizzaSizeBox = $(".pizza-size-box");
let pitsaSize = ["25 cm", "30 cm", "35 cm"];

pitsaSize.forEach((e, i, a) => {
  let elInputRadio = createElement(
    `input`,
    `form-check-input pizzaSize-radio`,
    ``
  );
  let elLabel = createElement(`label`, `radio-label`, `${e}`);
  elInputRadio.value = e;
  elInputRadio.type = "radio";
  elInputRadio.name = "radio";
  elInputRadio.id = e;
  elLabel.setAttribute("for", e);
 


  elPizzaSizeBox.append(elInputRadio);
  elPizzaSizeBox.append(elLabel);
  
  elInputRadio.addEventListener("change", (e) => {
    e.preventDefault();
    pizzaSizeRes.textContent = elInputRadio.value;

  });
});
let elulList = $(".add-vegetables-list");
let elUlList2 = $(".ustida-list");
let pizzaType = [
  "Pomidor",
  "Kurka go'shti",
  "Zaytun",
  "Tuzlangan bodring",
  "Qo'ziqorin",
  "Qazi",
];
pizzaTypeResult = [];

pizzaType.forEach((e, i, a) => {
  let addTypeItem = createElement("li", "addVegetables-item", "");
  let addTypeCheckbox = createElement("input", "form-check-input", "");
  let addTypeLabel = createElement("label", "addVegetables-label", `${e}`);
  addTypeCheckbox.id = e;
  addTypeLabel.setAttribute("for", e);
  addTypeCheckbox.value = e;
  addTypeCheckbox.type = 'checkbox';
  addTypeCheckbox.name = 'input'

  elulList.append(addTypeItem);
  addTypeItem.append(addTypeCheckbox);
  addTypeItem.append(addTypeLabel);

addTypeCheckbox.addEventListener('change',(evt)=>{
  if (pizzaTypeResult.includes(addTypeCheckbox.value)) {
    let index = pizzaTypeResult.indexOf(this.value);
    pizzaTypeResult.splice(index, 1);
  } 
  else {
    pizzaTypeResult.push(addTypeCheckbox.value);
  }
  elUlList2.innerHTML = null;

  pizzaTypeResult.forEach((e,i,a)=>{
    let elUlItem = createElement('li','add-list__item fw-bold tex',`${e}`);
    elUlList2.appendChild(elUlItem);
  })
})  
});


let elAddLister = $('.addbox__list');
let elAddLIstRes = $(".addending__texting");

let addEndArrey = ['Achchiq', 'Sosiskali'];
let addEndFree = [];

addEndArrey.forEach((e,i,a)=>{
  let addItem = createElement('li','addtionals-item','');
  let addInputCheckbox = createElement('input','form-check-input','');
  let addtLabel = createElement("label",'addVegetables-label',`${e}`);

  addInputCheckbox.id = addEndArrey[i];
        addtLabel.setAttribute('for', addEndArrey[i]);
        addInputCheckbox.value = addEndArrey[i];
        addInputCheckbox.type = 'checkbox';
        addInputCheckbox.name = 'check';

        addItem.appendChild(addInputCheckbox);
        addItem.appendChild(addtLabel);
        elAddLister.appendChild(addItem);
        
        addInputCheckbox.addEventListener('change', function(evt) {
          evt.preventDefault();
          
              if (addEndFree.includes(this.value)) {
                let index = addEndFree.indexOf(this.value);
                addEndFree.splice(index, 1);
              } 
              else {
                addEndFree.push(this.value);
              };
              
              elAddLIstRes.innerHTML = null;

              addEndFree.forEach((e,i,a)=>{
                let elAddEndNewItem = createElement('li','add-list__item',`${e}`);
                      elAddLIstRes.append(elAddEndNewItem);
              })

             
        });

});
// console.log(elAddLIstRes.value);

let modalWrapper=$('.modal-wrapper');
let modalText=$('#modal-text');
let sendBtn=$(".sendBtn");
sendBtn.addEventListener('click',function() {
  let i=elPiText.textContent;
  let j= pizzaSizeRes.textContent;
  let z=addEndFree;

  if(i.length !== 0 && j.length !== 0 && z.length !== 0){
    modalWrapper.setAttribute('class','modal-wrapper d-flex  align-items-center justify-content-center');
   $(".modal-box").classList.add("class","bg-success")
    setInterval(()=>{
      modalText.innerHTML=`
      <h1 class="text-white bg-succes">Buyurtmangiz qabul qilindi.</h1>
      `
    }
    )
    setTimeout(function(){
      modalWrapper.setAttribute('class','modal-wrapper slide');
    },5000)

  }

  if(i.length === 0 || j.length === 0 || z.length === 0){
    modalWrapper.setAttribute('class','modal-wrapper d-flex  align-items-center justify-content-center');
    $(".modal-box").classList.add("class","bg-danger")
     setInterval(()=>{
       modalText.innerHTML=`
       <h1 class="text-white bg-danger">Buyurtma berishda xatolik</h1>
       `
     }
     )
     setTimeout(function(){
       modalWrapper.setAttribute('class','modal-wrapper slide');
     },5000)
  
  
   
  
  }

})

