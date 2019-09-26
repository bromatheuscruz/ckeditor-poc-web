const commentPersonElementId = "comment-person";
const discardButtonElementId = "discard-button";

const getCustomCommentElement = () => {
  return document.getElementById(commentPersonElementId);
};

const addCommentToCustomCommentBox = async comment => {
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

const emailService = email => {
  $.ajax({
    url: 'http://localhost:3000/email/notify',
    dataType: 'JSON',
    contentType: "application/json",
    data: JSON.stringify(email),
    method: 'POST'
  });
};

async function getParticipantsFromDocument(documentId) {
  const data = await $.get(
    `http://localhost:3000/documents/${documentId}/participants`
  );
  return data.participants;
}

async function getTopicFromDocument(documentId, topicId) {
  const data = await $.get(
    `http://localhost:3000/documents/${documentId}/topics/${topicId}`
  );
  return data.topic;
}

async function getAllReferences() {
  const data = await $.get("http://localhost:3000/references");
  return data.references;
}
