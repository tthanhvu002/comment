const submitBtn = document.querySelector('.submit-btn')
const cancelBtn = document.querySelector('.cancel -btn')
const input = document.querySelector('.comment-input.cmt')
const inputName = document.querySelector('.name-input')
const list = document.querySelector('.comment-list')

let comment = []

const img = ['https://images.unsplash.com/photo-1609114450169-f0656f84799e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hpYmElMjBpbnV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1575535468632-345892291673?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpYmElMjBpbnV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1578133709109-96ef373a6ca3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpYmElMjBpbnV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1509119993276-d691aff73209?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNoaWJhJTIwaW51fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60']
const handleSubmit = () => {
    if(input.value && inputName.value){
        let url = img[ Math.floor(Math.random() * img.length)]
        let cmt = {
            img: ` ${url} `, 
            name: inputName.value,
            title: input.value
        }
        console.log(cmt.img);
        comment.push(cmt)
        localStorage.commentList = JSON.stringify(comment)
        render(comment)
        input.value = ''
        inputName.value = ''
        inputName.focus()
    } else{
        alert('Vui long khong bo trong cac truong')
    }
    
}
    
function render (comment){
    
    if(comment){
        localStorage.commentList = JSON.stringify(comment)

        let html = comment.map((data) => 
            `  <li class = "comment-item"> 
            <img src= ${data.img} alt="photo" class = "comment-img">
            <p class = "name"> ${data.name} </p>
            <p class = "title"> ${data.title} </p>
            <i class="fas fa-heart comment-icon"></i>
        </li>  `
        ).join()
        list.innerHTML = html
        const commentItem = document.querySelectorAll('.comment-item')
        
    }
}




if(!localStorage.commentList){
    localStorage.commentList = []
} else{
    comment = JSON.parse(localStorage.commentList) /* lay du lieu tu localStorage */
}
submitBtn.onclick = handleSubmit;
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
        handleSubmit()
    }
});
render(comment)
const cmtsItem = document.querySelectorAll('.comment-item')
Array.from(cmtsItem).map(item => {
    item.ondblclick = () => {
        item.querySelector('.comment-icon').classList.toggle('active')
    }
})


