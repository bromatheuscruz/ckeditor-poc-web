async function emailService(email) {
    $.ajax({
        url: "http://localhost:3000/email/notify",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(email),
        method: "POST"
    });
};

async function addCommentService(comment) {
    $.ajax({
        url: `http://localhost:3000/documents/${comment.doc}/threads/${comment.threadId}/comments`,
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(comment),
        method: "POST"
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

async function updateTopicData(topic) {
    const data = await $.ajax({
        url: `http://localhost:3000/documents/${topic.document.id}/topics/${topic.id}`,
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(topic),
        method: "PUT"
    });

    return data;
};