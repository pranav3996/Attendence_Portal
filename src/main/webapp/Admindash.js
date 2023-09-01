const sideMenu=document.querySelector("aside");
const menuBtn=document.getElementById("#menu-btn");
const closeBtn=document.querySelector("#close-btn");
const themeToggler=document.querySelector(".theme-toggler");


//show sidebar
if(menuBtn){
menuBtn.addEventListener('click', () => {
    sideMenu.style.display='block';
});
}

//close sidebar
if(closeBtn){
closeBtn.addEventListener('click', () => {
    sideMenu.style.display='none';
});
}
//change theme
if(themeToggler){
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

});
}

//fill orders in table
// Activity.forEach(activity => {
//     const tr=document.createElement('tr');
//     const trContent=` <td>${activity.empCode}</td>
//     <td>${activity.empName}/td>
//     <td>${activity.technology}</td>
//     <td>${activity.status}</td>`;
//     tr.innerHTML=trContent;
//     document.querySelector('table tbody').appendChild(tr);
// });
