class CommentsIntegration {

    constructor(editor) {
        this.editor = editor;
    }

    init() {
        const usersPlugin = this.editor.plugins.get('Users');
        const commentsPlugin = this.editor.plugins.get('Comments');
        
        for (const user of appData.users) {
            usersPlugin.addUser(user);
        }

        usersPlugin.defineMe(mockSession.user.id);

        for (const commentThread of appData.commentThreads) {
            commentsPlugin.addCommentThread(commentThread);
        }

        commentsPlugin.adapter = {
            addComment: (comment) => {
                const createdAt = new Date();
                const formattedDate = `${createdAt.getDate()}/${(createdAt.getMonth() + 1)}/${createdAt.getFullYear()}`;
                
                comment.date = formattedDate;
                comment.name = mockSession.user.name;
                comment.author = mockSession.user.id;
                comment.topic = mockTopicId;
                comment.doc = mockDocumentId;

                addCommentToCustomCommentBox(comment);

                return Promise.resolve({
                    createdAt
                });
            },
            updateComment: () => Promise.resolve(),
            removeComment: () => Promise.resolve(),
        };
    }
}