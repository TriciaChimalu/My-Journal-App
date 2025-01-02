const pages = document.querySelectorAll('.page');
const prevButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');
let saveButtton =document.getElementById('textarea-btn');
let currentPage = 0;



saveButtton.addEventListener('click',inputMessage);

function  inputMessage(){
    
    let inputMessage = document.getElementById('textArea').value;
    let messageDiv  = document.createElement('div');
    messageDiv.textContent = inputMessage;
    pages.appendChild(messageDiv)
}

function showPage(){
    pages.forEach((page,index) => {
        
        if(index <= currentPage){
    
            page.classList.add('flipped');
            page.style.zIndex = index ;

        }
    else{
        page.classList.remove('flipped');
        page.style.zIndex = pages.length - index;
    }
    //console.log(`page ${index + 1} flipped`);
   
});
}

nextButton.addEventListener('click',() =>{
    if(currentPage < pages.length - 1){
        currentPage++;
        showPage()
    }
});
prevButton.addEventListener('click', () =>{
    
    if(currentPage > 0){
        currentPage--;
        showPage()
    }

});

