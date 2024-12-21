const pages = document.querySelectorAll('.page');
const prevButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');
let currentPage = 0;

showPage()
/*
function showPage(index){
    pages.forEach((page,i) => {
        if(i === index){
            
            page.style.transform ='rotateY(0)';
            page.style.zindex = pages.length - i
        }else if(i < index){
            page.style.transform = 'rotate(-180deg)';
            page.style.zindex =i;
        }else{
            page.style.transform ='rotateY(0)';
            page.style.zindex = pages.length - i;
        }
    })
};*/

function showPage(){
    pages.forEach((page,index) => {
        if(index <= currentPage){
            page.classList.add('flipped');
            page.style.zIndex =index;

        }
    else{
        page.classList.remove('flipped');
        page.style.zIndex = pages.length - index;
    }
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

