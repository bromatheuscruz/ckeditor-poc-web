const commentPersonElementId = 'comment-person';
const discardButtonElementId = 'discard-button';
const longDateFormat  = 'dd/MM/yyyy HH:mm:ss';

const getCustomCommentElement = () => {
    return document.getElementById(commentPersonElementId);
};

const addCommentToCustomCommentBox = async (comment) => {
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

    await emailService(comment);
    
};

const emailService = async (comment) => {
    const { userId } = comment;
    console.log('userId', userId);
    await $.post(`http://localhost:3000/users/${comment.userId}/send-email`, {
        to: comment.to,
        doc: comment.doc,
        name: comment.name,
        content: comment.content
    })
};

const deleteComment = () => {
    const customCommentElement = getCustomCommentElement();
    customCommentElement.innerHTML = '';
};

document.getElementById(discardButtonElementId)
    .addEventListener('click', function () {
        deleteComment();
});

async function getParticipantsFromDocument(documentId) {
    const data = await $.get(`http://localhost:3000/documents/${documentId}/participants`);
    return data.participants;
}

async function getTopicFromDocument(documentId, topicId) {
    const data = await $.get(`http://localhost:3000/documents/${documentId}/topics/${topicId}`);
    return data.topic;
}
