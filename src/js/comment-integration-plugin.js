class CommentsIntegration {
  constructor(editor) {
    this.editor = editor;
  }

  init() {
    const usersPlugin = this.editor.plugins.get("Users");
    const commentsPlugin = this.editor.plugins.get("Comments");

    for (const user of appData.users) {
      usersPlugin.addUser(user);
    }

    usersPlugin.defineMe(mockSession.user.id);

    for (const commentThread of appData.commentThreads) {
      commentsPlugin.addCommentThread(commentThread);
    }

    commentsPlugin.adapter = {
      addComment: async comment => {
        const createdAt = new Date();
        const formattedDate = `${createdAt.getDate()}/${createdAt.getMonth() +
          1}/${createdAt.getFullYear()}`;

        comment.date = formattedDate;
        comment.name = mockSession.user.name;
        comment.authorId = mockSession.user.id;
        comment.topic = mockTopicId;
        comment.doc = mockDocumentId;

        const recipients = appData.users.map(element => {
          return {
            id: element.id,
            email: element.email
          }
        });

        comment.recipients = recipients;

        addCommentToCustomCommentBox(comment);
        addCommentService(comment);

        return Promise.resolve({
          createdAt
        });
      },
      updateComment: function (comment) {
        return Promise.resolve();
      },
      removeComment: function (comment) {
        $(`#${comment.commentId}`).remove();
        return Promise.resolve();
      }
    }
  }
}