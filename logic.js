const urlPosts = "http://localhost:3000/posts"
const urlComments = "http://localhost:3000/comments"
const urlUsers = "http://localhost:3000/users"

const cardSection = document.querySelector("#cardSection");

let comments = [];
let users = [];

Promise.all([
    fetch(urlPosts).then(response => response.json()),
    fetch(urlComments).then(response => response.json()),
    fetch(urlUsers).then(response => response.json()),
]).then(json => {
    json[0].forEach(item => createCard(item));
    json[1].forEach(comment => comments.push(comment));
    json[2].forEach(user => users.push(user));
});


// fetch(urlPosts)
//     .then(response => response.json())
//     .then(json => json.forEach(post => createCard(post)))



// fetch(urlPosts)
//     .then(response => response.json())
//     .then(json => json.forEach(item => console.log(item)))

// function createCard (post) {

//     const divCol = document.createElement("div");
//     divCol.classList = "col";
//     cardSection.appendChild(divCol);

//     const card = document.createElement("div");
//     card.classList = "card shadow-sm";
//     divCol.appendChild(card);

//     const img = document.createElement("img");
//     img.src = "test1.jpg";
//     card.appendChild(img);
//     const cardBody = document.createElement("div");
//     cardBody.classList = "card-body";
//     card.appendChild(cardBody);

//     const p = document.createElement("p");
//     p.classList = "card-text";
//     p.textContent = post.title;
//     cardBody.appendChild(p);
//     const dFlex = document.createElement("div");
//     dFlex.classList = "d-flex justify-content-between align-items-center";
//     cardBody.appendChild(dFlex);

//     const btnGroup = document.createElement("div");
//     btnGroup.classList = "btn-group";
//     dFlex.appendChild(btnGroup);

//     const button = document.createElement("button");
//     button.classList = "btn btn-primary";
//     button.setAttribute("type", "button");
//     button.setAttribute("data-bs-toggle", "modal");
//     button.setAttribute("data-bs-target", "#modal" + post.id);
//     button.textContent = "Load Info";
//     btnGroup.appendChild(button);
//     const modalFade = document.createElement("div");
//     modalFade.classList = "modal fade";
//     modalFade.setAttribute("id", "modal" + post.id);
//     modalFade.setAttribute("tabindex", "-1");
//     modalFade.setAttribute("aria-labelledby", "modalLabel");
//     modalFade.setAttribute("aria-hidden", "true");
//     btnGroup.appendChild(modalFade);

//     const modalDialog = document.createElement("div");
//     modalDialog.classList = "modal-dialog modal-lg";
//     modalFade.appendChild(modalDialog);

//     const modalContent = document.createElement("div");
//     modalContent.classList = "modal-content";
//     modalDialog.appendChild(modalContent);

//     const modalHeader = document.createElement("div");
//     modalHeader.classList = "modal-header";
//     modalContent.appendChild(modalHeader);
//     const modalBody = document.createElement("div");
//     modalBody.classList = "modal-body";
//     modalBody.textContent = post.body;
//     modalContent.appendChild(modalBody);
//     const modalFooter = document.createElement("div");
//     modalFooter.classList = "modal-footer";
//     modalContent.appendChild(modalFooter);

//     const user = document.createElement("div");
//     user.classList ="modal-body";
//     user.textContent = "User: " + post.user;
//     modalBody.appendChild(user);

//     const mail = document.createElement("div");
//     mail.classList ="modal-body";
//     mail.textContent = "Mail: " + post.mail;
//     modalBody.appendChild(mail);

//     const h5 = document.createElement("h5");
//     h5.classList = "modal-title";
//     h5.setAttribute("id", "modalLabel");
//     h5.textContent = post.title;
//     modalHeader.appendChild(h5);
//     const btnModal = document.createElement("button");
//     btnModal.classList = "btn-close";
//     btnModal.setAttribute("type", "button");
//     btnModal.setAttribute("data-bs-dismiss", "modal");
//     btnModal.setAttribute("aria-label", "Close");
//     modalHeader.appendChild(btnModal);

//     const btnFooter1 = document.createElement("button");
//     btnFooter1.classList = "btn btn-warning";
//     btnFooter1.textContent = "Edit"
//     btnFooter1.setAttribute("type", "button");
//     btnFooter1.setAttribute("data-bs-dismiss", "modal");
//     modalFooter.appendChild(btnFooter1);
//     const btnFooter2 = document.createElement("button");
//     btnFooter2.classList = "btn btn-primary";
//     btnFooter2.setAttribute("type", "button");
//     btnFooter2.textContent = "Save Changes";
//     modalFooter.appendChild(btnFooter2);

//     const deleteBtn = document.createElement("button");
//     deleteBtn.setAttribute("type", "button");
//     deleteBtn.classList = "btn btn-danger";
//     deleteBtn.textContent = "Delete";
//     btnGroup.appendChild(deleteBtn);

// }

function createCard (item) {

    if (item.userId == 1){

    }

    const divCol = document.createElement("div");
    divCol.classList = "col";
    cardSection.appendChild(divCol);

    const card = document.createElement("div");
    card.classList = "card shadow-sm";
    divCol.appendChild(card);

    const img = document.createElement("img");
    img.src = "test1.jpg";
    card.appendChild(img);
    const cardBody = document.createElement("div");
    cardBody.classList = "card-body";
    card.appendChild(cardBody);

    const p = document.createElement("p");
    p.classList = "card-text";
    p.textContent = item.title;
    cardBody.appendChild(p);
    const dFlex = document.createElement("div");
    dFlex.classList = "d-flex justify-content-between align-items-center";
    cardBody.appendChild(dFlex);

    const btnGroup = document.createElement("div");
    btnGroup.classList = "btn-group";
    dFlex.appendChild(btnGroup);

    const button = document.createElement("button");
    button.classList = "btn btn-primary";
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#modal" + item.id);
    button.textContent = "Load Info";
    btnGroup.appendChild(button);
    const modalFade = document.createElement("div");
    modalFade.classList = "modal fade";
    modalFade.setAttribute("id", "modal" + item.id);
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
    modalBody.textContent = item.body;
    modalContent.appendChild(modalBody);
    const modalFooter = document.createElement("div");
    modalFooter.classList = "modal-footer";
    modalContent.appendChild(modalFooter);

    const user = document.createElement("div");
    user.classList ="modal-body";
    modalBody.appendChild(user);

    const mail = document.createElement("div");
    mail.classList ="modal-body";
    mail.textContent = "Mail: "
    modalBody.appendChild(mail);

    const h5 = document.createElement("h5");
    h5.classList = "modal-title";
    h5.setAttribute("id", "modalLabel");
    h5.textContent = item.title;
    modalHeader.appendChild(h5);
    const btnModal = document.createElement("button");
    btnModal.classList = "btn-close";
    btnModal.setAttribute("type", "button");
    btnModal.setAttribute("data-bs-dismiss", "modal");
    btnModal.setAttribute("aria-label", "Close");
    modalHeader.appendChild(btnModal);

    const btnFooter1 = document.createElement("button");
    btnFooter1.classList = "btn btn-warning";
    btnFooter1.textContent = "Edit"
    btnFooter1.setAttribute("type", "button");
    btnFooter1.setAttribute("data-bs-dismiss", "modal");
    modalFooter.appendChild(btnFooter1);
    const btnFooter2 = document.createElement("button");
    btnFooter2.classList = "btn btn-primary";
    btnFooter2.setAttribute("type", "button");
    btnFooter2.textContent = "Save Changes";
    modalFooter.appendChild(btnFooter2);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.classList = "btn btn-danger";
    deleteBtn.textContent = "Delete";
    btnGroup.appendChild(deleteBtn);

}

users.forEach(comment => addMailUser(comment))

function addMailUser(comment){
    user.textContent = "User: " + com.user;
    mail.textContent = comment.email;
    user

}