import {alertSideBarFunction} from './alert.js'
import {closeAlertButton} from './alert.js'

// so at first we get and create our tags
const closeAlert = document.getElementById('close');
const mainList = document.getElementById('main-list-blogs');
const makeyourBlogButton = document.getElementById('create-your-blog');
const allInputContainer  = document.getElementById('all-input-container');
const dateOfUploadInput  = document.getElementById('date-of-upload');
const iconOfUserInput  = document.getElementById('icon-of-user');
const detailsOfUserInput = document.getElementById('details-of-user');
const userNameInput = document.getElementById('user-name');
const authorInput = document.getElementById('author-name');
const skillUserNameInput = document.getElementById('skill-of-user');
const allInputContainerClassList = allInputContainer.classList
let i=0;
let checkIfTheClassIsFlex = true;

const localStorageAllData = localStorage.getItem('belogsList');
const arrayLocalStorage = JSON.parse(localStorageAllData) || [];
const saveAllData = [...arrayLocalStorage];

const createNewBelog = (itemsDate,itemsDetails,itemsName,itemsAuthorName,itemsSkill)=>{

    const containerList = document.createElement('li');
    const dateOfUpload = document.createElement('div');
    const iconOfUser = document.createElement('img');
    const detailsOfUser = document.createElement('p');
    const containerTimeAndLike = document.createElement('div');
    const containerLike = document.createElement('div');
    const likeIcon = document.createElement('img');
    const numberLike = document.createElement('div');
    const containerTime = document.createElement('div');
    const timeIcon = document.createElement('img');
    const numberTime = document.createElement('div');
    const containerUserNameAndAuthor = document.createElement('div');
    const userName = document.createElement('div');
    const author = document.createElement('div');
    const skillUserName = document.createElement('div');
    // now we determine our childs
    containerTimeAndLike.appendChild(containerTime);
    containerTime.appendChild(numberTime);
    containerTime.appendChild(timeIcon);
    containerTimeAndLike.appendChild(containerLike);
    containerLike.appendChild(numberLike);
    containerLike.appendChild(likeIcon);
    containerUserNameAndAuthor.appendChild(userName);
    containerUserNameAndAuthor.appendChild(author);
    containerList.appendChild(dateOfUpload);
    containerList.appendChild(iconOfUser);
    containerList.appendChild(detailsOfUser);
    containerList.appendChild(containerTimeAndLike);
    containerList.appendChild(containerUserNameAndAuthor);
    containerList.appendChild(skillUserName);
    
        // now we just add datas to our new elements that we made
    dateOfUpload.innerHTML = itemsDate;
    iconOfUser.src = "../img/zed.jpg";
    // iconOfUser.innerHTML = allInputData.icon;
    detailsOfUser.innerHTML = itemsDetails;
    userName.innerHTML = `Username:${itemsName}`;
    author.innerHTML = `Author:${itemsAuthorName}`;
    skillUserName.innerHTML = `Skills:${itemsSkill}`;
    

    // for likes and times 
    likeIcon.src = '../img/like.svg';
    timeIcon.src = '../img/time.svg';
    numberLike.innerHTML = '0';
    numberTime.innerHTML = '0 days ago';
    //here I just make some classes
    iconOfUser.setAttribute('class' , 'test-user-blog-profile');
    containerLike.setAttribute('class', 'd-flex');
    containerTime.setAttribute('class', 'd-flex');
    containerTimeAndLike.setAttribute('class', 'd-flex');
    // we add a class to our containerList
    containerList.setAttribute('class','list-of-blogs');
    //final step
    mainList.appendChild(containerList);
    //and here we empty the values of inputs 
    dateOfUploadInput.value='';
    detailsOfUserInput.value='';
    userNameInput.value='';
    authorInput.value='';
    skillUserNameInput.value='';
};

// while(i<dataListArray.length){
//     if(dataListArray[i]==false){
//         console.error('EEEEEEEEEEEEEEEnd')
//         return alertSideBarFunction('please full all of the inputs');
//     };
//     ++i
// };
saveAllData.forEach((dataBelog)=>{
    createNewBelog(dataBelog.date,dataBelog.details,dataBelog.name,dataBelog.authorName,dataBelog.skill);
});

function makeYourBlog(){
    //here we will use if to open our form for making a new blog
    

    if(checkIfTheClassIsFlex == true){
        allInputContainerClassList.add('display-flex');
        allInputContainerClassList.remove('display-none');
        checkIfTheClassIsFlex = false
        return
    }else{
        allInputContainerClassList.add('display-none');
        allInputContainerClassList.remove('display-flex');
        checkIfTheClassIsFlex = true
    }
    const dataListArray = [dateOfUploadInput.value,detailsOfUserInput.value,userNameInput.value,authorInput.value,skillUserNameInput.value];
    while(i<dataListArray.length){
        if(dataListArray[i]==false){
            console.error('EEEEEEEEEEEEEEEnd')
            return alertSideBarFunction('please full all of the inputs');
        };
        ++i
    };
    // allInputContainerClassList.forEach(function(item){
    //     if(item=='display-none'){
    //         console.warn('correct');
    //         return console.log('second correct');
    //         console.error('third correct');
    //     }
    // })
    


    //we will use while for checking if there is no variable in inputs we shouldnt make a blog
    // while(i<dataListArray.length){
    //     if(dataListArray[i]==false){
    //         console.error('EEEEEEEEEEEEEEEnd')
    //         return alertSideBarFunction('please full all of the inputs');
    //     };
    //     ++i
    // };
    // const containerList = document.createElement('li');
    // const dateOfUpload = document.createElement('div');
    // const iconOfUser = document.createElement('img');
    // const detailsOfUser = document.createElement('p');
    // const containerTimeAndLike = document.createElement('div');
    // const containerLike = document.createElement('div');
    // const likeIcon = document.createElement('img');
    // const numberLike = document.createElement('div');
    // const containerTime = document.createElement('div');
    // const timeIcon = document.createElement('img');
    // const numberTime = document.createElement('div');
    // const containerUserNameAndAuthor = document.createElement('div');
    // const userName = document.createElement('div');
    // const author = document.createElement('div');
    // const skillUserName = document.createElement('div');
    // // now we determine our childs
    // containerTimeAndLike.appendChild(containerTime);
    // containerTime.appendChild(numberTime);
    // containerTime.appendChild(timeIcon);
    // containerTimeAndLike.appendChild(containerLike);
    // containerLike.appendChild(numberLike);
    // containerLike.appendChild(likeIcon);
    // containerUserNameAndAuthor.appendChild(userName);
    // containerUserNameAndAuthor.appendChild(author);
    // containerList.appendChild(dateOfUpload);
    // containerList.appendChild(iconOfUser);
    // containerList.appendChild(detailsOfUser);
    // containerList.appendChild(containerTimeAndLike);
    // containerList.appendChild(containerUserNameAndAuthor);
    // containerList.appendChild(skillUserName);
    
    // now we store the values of the inputs
    const allInputData = {
        date:dateOfUploadInput.value,
        icon:null,
        details:detailsOfUserInput.value,
        name:userNameInput.value,
        authorName:authorInput.value,
        skill:skillUserNameInput.value,
    };
    createNewBelog(allInputData.date,allInputData.details,allInputData.name,allInputData.authorName,allInputData.skill);
    //     // now we just add datas to our new elements that we made
    // dateOfUpload.innerHTML = allInputData.date;
    // iconOfUser.src = "../img/zed.jpg";
    // // iconOfUser.innerHTML = allInputData.icon;
    // detailsOfUser.innerHTML = allInputData.details;
    // userName.innerHTML = `Username:${allInputData.name}`;
    // author.innerHTML = `Author:${allInputData.authorName}`;
    // skillUserName.innerHTML = `Skills:${allInputData.skill}`;
    

    // // for likes and times 
    // likeIcon.src = '../img/like.svg';
    // timeIcon.src = '../img/time.svg';
    // numberLike.innerHTML = '0';
    // numberTime.innerHTML = '0 days ago';
    // //here I just make some classes
    // iconOfUser.setAttribute('class' , 'test-user-blog-profile');
    // containerLike.setAttribute('class', 'd-flex');
    // containerTime.setAttribute('class', 'd-flex');
    // containerTimeAndLike.setAttribute('class', 'd-flex');
    // // we add a class to our containerList
    // containerList.setAttribute('class','list-of-blogs');
    // //final step
    // mainList.appendChild(containerList);
    // //and here we empty the values of inputs 
    // dateOfUploadInput.value='';
    // detailsOfUserInput.value='';
    // userNameInput.value='';
    // authorInput.value='';
    // skillUserNameInput.value='';
    saveAllData.push(allInputData);
    console.log(saveAllData);
    localStorage.setItem('belogsList',JSON.stringify(saveAllData));
}

makeyourBlogButton.addEventListener('click', makeYourBlog);
closeAlert.addEventListener('click',closeAlertButton);