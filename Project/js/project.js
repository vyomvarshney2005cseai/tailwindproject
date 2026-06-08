const initApp=()=>{
    const hamburgerBtn=document.getElementById('hamburger-button');
    const mobilemenu=document.getElementById('mobile-menu');

    const toggleMenu=()=>{
        mobilemenu.classList.toggle('hidden');
        mobilemenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn')
    }
    hamburgerBtn.addEventListener('click',toggleMenu);
    mobilemenu.addEventListener('click',toggleMenu);
}
document.addEventListener('DOMContentLoaded',initApp);