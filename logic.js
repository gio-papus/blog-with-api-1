const urlPosts = "http://localhost:3000/posts"
const urlComments = "http://localhost:3000/comments"
const urlUsers = "http://localhost:3000/users"

const cardSection = document.querySelector("#cardSection");
const showDelete = document.querySelector(".box");
const showSaving = document.querySelector(".save");

// let userArray = [];

fetch(urlPosts)
    .then(response => response.json())
    .then(json => json.forEach(post => createCard(post)))

// fetch(urlComments)
//     .then(response => response.json())
//     .then(json => json.forEach(comment => userArray.push(comment)))

// console.log(userArray);
// console.log(userArray[0]);
// console.log(userArray.id)

function createCard (post) {

    /* -----POST SECTION----- */
    
    let id = post.id;
    let userId = post.userId;
           
    const divCol = document.createElement("div");
    divCol.classList = "col";
    divCol.setAttribute("id", "post" + id);
    cardSection.appendChild(divCol);

    const card = document.createElement("div");
    card.classList = "card shadow-sm";
    divCol.appendChild(card);

    const img = document.createElement("img");
    if (id<11) {
        img.src = "./images/kimetsu" + id + ".jpg";
    } else {
        img.src = "./images/kimetsu10.jpg";
    }
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList = "card-body";
    card.appendChild(cardBody);

    const p = document.createElement("h4");
    p.classList = "card-text";
    p.textContent = post.title;
    cardBody.appendChild(p);

    const dFlex = document.createElement("div");
    dFlex.classList = "d-flex justify-content-md-end align-items-center ml-3";
    cardBody.appendChild(dFlex);

    const btnGroup = document.createElement("div");
    btnGroup.classList = "btn-group";
    dFlex.appendChild(btnGroup);

    /* ----- BUTTON SECTION----- */

    const button = document.createElement("button");
    button.classList = "btn btn-primary";
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#modal" + post.id);
    button.textContent = "Load Info";
    btnGroup.appendChild(button);

    const modalFade = document.createElement("div");
    modalFade.classList = "modal fade";
    modalFade.setAttribute("id", "modal" + post.id);
    modalFade.setAttribute("tabindex", "-1");
    modalFade.setAttribute("aria-labelledby", "modalLabel");
    modalFade.setAttribute("aria-hidden", "true");
    btnGroup.appendChild(modalFade);

    const modalDialog = document.createElement("div");
    modalDialog.classList = "modal-dialog modal-lg";
    modalFade.appendChild(modalDialog);

    const modalContent = document.createElement("div");
    modalContent.classList = "modal-content";
    modalDialog.appendChild(modalContent);

    const modalHeader = document.createElement("div");
    modalHeader.classList = "modal-header";
    modalContent.appendChild(modalHeader);

    const modalBody = document.createElement("div");
    modalBody.classList = "modal-body";
    modalBody.textContent = post.body;
    modalContent.appendChild(modalBody);
    
    const modalFooter = document.createElement("div");
    modalFooter.classList = "modal-footer";
    modalContent.appendChild(modalFooter);

    const h5 = document.createElement("h2");
    h5.classList = "modal-title";
    h5.setAttribute("id", "modalLabel");
    h5.textContent = post.title;
    modalHeader.appendChild(h5);

    const btnModal = document.createElement("button");
    btnModal.classList = "btn-close";
    btnModal.setAttribute("type", "button");
    btnModal.setAttribute("data-bs-dismiss", "modal");
    btnModal.setAttribute("aria-label", "Close");
    modalHeader.appendChild(btnModal);

    const btnFooter1 = document.createElement("button");
    btnFooter1.classList = "btn btn-warning";
    btnFooter1.textContent = "Edit";
    btnFooter1.setAttribute("type", "button");
    btnFooter1.setAttribute("data-bs-toggle", "modal");
    btnFooter1.setAttribute("data-bs-target", "#editmodal" + post.id);
    btnFooter1.setAttribute("data-bs-dismiss", "modal");
    btnGroup.appendChild(btnFooter1);

    const editModal = document.createElement("div");
    editModal.classList = "modal fade";
    editModal.setAttribute("id", "editmodal" + post.id);
    editModal.setAttribute("tabindex", "-1");
    editModal.setAttribute("aria-labelledby", "modalLabel");
    editModal.setAttribute("aria-hidden", "true");
    btnGroup.appendChild(editModal);

    const editModalDialog = document.createElement("div");
    editModalDialog.classList = "modal-dialog modal-lg";
    editModal.appendChild(editModalDialog);

    const editModalContent = document.createElement("div");
    editModalContent.classList = "modal-content";
    editModalDialog.appendChild(editModalContent);

    const editModalHeader = document.createElement("div");
    editModalHeader.classList = "modal-header";
    editModalContent.appendChild(editModalHeader);


    const editH2 = document.createElement("input");
    editH2.classList = "modal-title";
    editH2.setAttribute("type", "text");
    editH2.setAttribute("id", "modalLabel");
    editH2.setAttribute("value", post.title)
    editModalHeader.appendChild(editH2);

    const editBtnModal = document.createElement("button");
    editBtnModal.classList = "btn-close";
    editBtnModal.setAttribute("type", "button");
    editBtnModal.setAttribute("data-bs-dismiss", "modal");
    editBtnModal.setAttribute("aria-label", "Close");
    editModalHeader.appendChild(editBtnModal);

    const editModalBody = document.createElement("textarea");
    editModalBody.setAttribute("rows", "6")
    editModalBody.setAttribute("cols", "10")
    editModalBody.classList = "modal-body";
    editModalBody.textContent = post.body;
    editModalContent.appendChild(editModalBody);

    const editModalFooter = document.createElement("div");
    editModalFooter.classList = "modal-footer";
    editModalContent.appendChild(editModalFooter);

    const btnFooter2 = document.createElement("button");
    btnFooter2.classList = "btn btn-primary";
    btnFooter2.setAttribute("type", "button");
    btnFooter2.textContent = "Save Changes";
    editModalFooter.appendChild(btnFooter2);

    /* ----- USER AND MAIL FUNCTION ----- */
    
    const username = document.createElement("div");
    username.classList ="modal-body";
    modalBody.appendChild(username);
    
    const mail = document.createElement("div");
    mail.classList ="modal-body";
    modalBody.appendChild(mail)
    
    fetch(urlUsers)
        .then(response => response.json())
        .then(json => json.forEach(user => 
            getMailUser(userId, user)));
    
    function getMailUser (userId, user) {
        if (user.id == userId){
            username.innerHTML = "<b><em> Username </em></b>: " + user.username;
            mail.innerHTML = "<b><em> Mail </em></b>: " + user.email;
        }
    }

    /* -----COMMENTS SECTIONS----- */

    const btnCollapse = document.createElement("button");
    btnCollapse.classList = "btn btn-dark";
    btnCollapse.setAttribute("type", "button");
    btnCollapse.setAttribute("data-bs-toggle", "collapse");
    btnCollapse.setAttribute("data-bs-target", "#comments");
    btnCollapse.setAttribute("aria-expanded", "false");
    btnCollapse.textContent = "Load Comments";
    modalBody.appendChild(btnCollapse);

    const collapse = document.createElement("div");
    collapse.classList = "collapse";
    collapse.setAttribute("id", "comments");
    modalBody.appendChild(collapse);

    fetch(urlComments)
        .then(respone => respone.json())
        .then(json => json.forEach(comment => 
            createComment(comment, id)));

    function createComment(comment, id){
        if (id == comment.postId) {

            const cardComment = document.createElement("div");
            cardComment.classList = "card card-body";
            collapse.appendChild(cardComment);

            const h4Comment = document.createElement("h5");
            h4Comment.classList = "title";

            const pCommentBody = document.createElement("p");
            pCommentBody.classList = "pComment";

            const pCommentMail = document.createElement("em");
            pCommentMail.classList = "pMail";
            h4Comment.textContent = comment.name;
            pCommentBody.textContent = comment.body;
            pCommentMail.textContent = comment.email;
            cardComment.appendChild(h4Comment);
            cardComment.appendChild(pCommentBody);
            cardComment.appendChild(pCommentMail);
        }     
    }

    /* -----DELETE SECTION----- */

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.classList = "btn btn-danger";
    deleteBtn.textContent = "Delete";
    btnGroup.appendChild(deleteBtn);

    deleteBtn.addEventListener("click",removePost)
    
    function removePost () {
        
        Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          
        showDelete.classList.toggle("hidden");
    
        setTimeout(() => {
    
            showDelete.classList.toggle("hidden");
        
            let postAddFall = document.querySelector("#post" + id);
            postAddFall.classList = "col fall"; 
    
            setTimeout(() => {
                fetch("http://localhost:3000/posts/" + post.id, {
                    method: 'DELETE'
                })            
            }, 1000); 
        }, 5000);
        }
      })


    }

    /* -----SAVE CHANGE SECTION----- */

    btnFooter2.addEventListener("click", editPost);

    function editPost(){

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, edit it!'
          }).then((result) => {
            if (result.isConfirmed) {
                showSaving.classList.toggle("hidden");
        
                setTimeout(() => {
        
                    showSaving.classList.toggle("hidden");
                        
                    fetch("http://localhost:3000/posts/" + post.id, {
                        method: 'PUT',
                        body: JSON.stringify({
                            userId: userId,
                            id: id,
                            title: editH2.value,
                            body: editModalBody.value,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then((response) => response.json())
                        .then(() => location.reload())
        
                        alert("Post Edited Successfully!")
                    }, 5000);
            }
        })

    }

}
