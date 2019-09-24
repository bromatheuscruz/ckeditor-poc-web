const commentPersonElementId = 'comment-person';
const discardButtonElementId = 'discard-button';
const longDateFormat  = 'dd/MM/yyyy HH:mm:ss';

const getCustomCommentElement = () => {
    return document.getElementById(commentPersonElementId);
};

const addCommentToCustomCommentBox = (comment) => {
    
    const template = `<div class="row">
                        <div class="col-md-4">
                            <p>Matheus Cruz</p>
                        </div>
                        <div class="col-md-4">
                            <span class="hour">${comment.date}</span>
                        </div>
                        <div class="col-md-4">
                            ${comment.content}
                        </div>
                    </div>`;
    
    const customComment = getCustomCommentElement();
    customComment.innerHTML = template;
};

const deleteComment = () => {
    const customCommentElement = getCustomCommentElement();
    customCommentElement.innerHTML = '';
};

document.getElementById(discardButtonElementId)
    .addEventListener('click', function () {
        deleteComment();
});
