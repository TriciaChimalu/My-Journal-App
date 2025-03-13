

let currentPage = localStorage.getItem('currentPage') || 1;
 let journalText = document.getElementById('journal-text');
 
 //function to ensure data isn't overwritten when page reloads
document.addEventListener('click',function(){
    loadPage(currentPage)
})

 function loadPage(page){
    let savedText = localStorage.getItem(`page_${page}`) || ' ';
    document.getElementById('journal-text').value = savedText;
    localStorage.setItem('currentPage',page); 
}

// function saveCurrent(){
//     let text = journalText.value;
//     localStorage.setItem(`page_${currentPage}`,text)
// }

document.getElementById('save-btn').addEventListener('click',function(){
    let text = document.getElementById('journal-text').value;
    localStorage.setItem(`page_${currentPage}`,text);
    alert('saved');
});



document.querySelector('.next-btn').addEventListener('click', () => {
    console.log('clicked')
    localStorage.setItem(`page_${currentPage}`,document.getElementById('journal-text').value);
    currentPage++;
    saveCurrent();
    loadPage(currentPage);
    

})
document.querySelector('.prev-btn').addEventListener('click',() =>{
    if(currentPage > 1){
        localStorage.setItem(`page_${currentPage}`,document.getElementById('journal-text').value);

        currentPage--;
        saveCurrent
        loadPage(currentPage);   

    }
})