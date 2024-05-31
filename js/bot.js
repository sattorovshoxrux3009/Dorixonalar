const form = document.querySelector(".modal-form");
const modal = document.querySelector(".modal");
const overlay = document.querySelector("#overlay");
const headerBtn = document.querySelector(".header-btn");
const overlayClose = document.querySelectorAll("#overlay-close");
const buy=document.querySelectorAll('#buy')
const subscribes=document.querySelectorAll('.subscribes')
const overlaysubscribe=document.querySelector('#overlaysubscribe')

buy.forEach((element,i)=>{
    element.addEventListener('click',()=>{
        modal.classList.remove("hide");
        console.log('ss')
    })
})

subscribes.forEach((e)=>{
    e.addEventListener('submit',(el)=>{
        el.preventDefault();
        overlaysubscribe.classList.remove('hide')
        setTimeout(() => {
            overlaysubscribe.classList.add("hide");
            e.reset();
          }, 2000);
        console.log('ssda')
    })
})

headerBtn.addEventListener("click", () => {
  modal.classList.remove("hide");
});

overlayClose.forEach((el)=>{
    el.addEventListener("click", () => {
        overlay.classList.add("hide");
        modal.classList.add("hide");
        overlaysubscribe.classList.add('hide')
        form.reset();
        subscribes.forEach((e)=>{
            e.reset();
        })
      });
})



form.addEventListener("submit", (e) => {
  e.preventDefault();
  overlay.classList.remove("hide");
  setTimeout(() => {
    overlay.classList.add("hide");
    modal.classList.add("hide");
    form.reset();
  }, 2000);
  const name = form.inputName.value;
  const number = form.inputNumber.value;
  const product=form.inputProduct.value;
  let Text = `Yangi buyurtma!!! %0AMijozning ismi: ${name} %0AMijozning raqami: ${number} %0AMahsulot nomi: ${product}`;
  getData(Text);
});
const getData = async (massage) => {
  const chat_id = "6590436670";
  const token = "7190713236:AAF_51jVpWGQZvSBjBmqAbToMLbN3Q5xfDY";
  const request = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${massage}`
  );
};
window.addEventListener('keydown',(e)=>{
    if(e.key=='Escape'){
        overlay.classList.add("hide");
        modal.classList.add("hide");
        overlaysubscribe.classList.add('hide')
    }
})
