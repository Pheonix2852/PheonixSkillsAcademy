//changing nav bar style on scrolling

window.addEventListener("scroll",()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
})

//show/hide faq answer

const faqs=document.querySelectorAll('.faq');

faqs.forEach(faq=>{

    faq.addEventListener('click',()=>{
        
        faq.classList.toggle('open');

        //change icon

        const icon=faq.querySelector('.faq__icon i');

        if(icon.className==='fa-solid fa-plus')
        icon.className="fa-solid fa-minus";

        else
        icon.className="fa-solid fa-plus";
    })
})


//show menu btn for tablets

const menu=document.querySelector('.nav__menu');
const openMenuBtn=document.querySelector('#open-menu-btn');
const closeMenuBtn=document.querySelector('#close-menu-btn');

openMenuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    openMenuBtn.style.display="none";
    closeMenuBtn.style.display="inline-block";
})


//close menu btn for tablets

const closeMenu=()=>{
    menu.style.display="none";
    openMenuBtn.style.display="inline-block";
    closeMenuBtn.style.display="none";
}

closeMenuBtn.addEventListener('click',closeMenu)
