const alertSideBar = document.getElementById('sidebar-alert');
const closeAlert = document.getElementById('close');

export function alertSideBarFunction(mesg,type){
    alertSideBar.style.right = '0%'
    alertSideBar.innerHTML = mesg ;
    alertSideBar.appendChild(closeAlert)
    switch(type){
        case 'red':
            alertSideBar.style.backgroundColor = 'red';
            break;
        case 'green':
            alertSideBar.style.backgroundColor = 'green';
            break;
        case 'yellow':
            alertSideBar.style.backgroundColor = 'red';
            break;
        default:
            alertSideBar.style.backgroundColor = 'black';
    };
};
export function closeAlertButton(){
    alertSideBar.style.right = '-100%'
}setTimeout(closeAlertButton, 5000);