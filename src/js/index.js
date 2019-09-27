const discardButtonElementId = "discard-button";

const addCommentToCustomCommentBox = async comment => {
  const template = `<div class="card my-2" id="${comment.commentId}">
  <div class="card-header">
      <div class="row">
          <div class="col-md-6 text-left">
              ${comment.name}
          </div>
          <div class="col-md-6 text-right">
              ${comment.date}
          </div>
      </div>
  </div>
  <div id="body-${comment.commentId}" class="card-body" style="cursor: pointer;" >
      <div class="row">
          <div class="col-md-10">
              ${comment.content}
          </div>
          <div class="col-md-2 text-right" id="toggle-${comment.commentId}" data-toggle="tooltip" title="Click here to see options">
              <span>
                  <i style="color: #0e7fe1;" class="fa fa-chevron-down"></i>
              </span>
          </div>
      </div>
  </div>
  <div class="card-footer">
      <div id="footer-${comment.commentId}" class="text-center radix-invisible">
          <button class="btn btn-success btn-sm" id="resolved-${comment.commentId}">Resolved</button>
          <button  class="btn btn-warning btn-sm" id="onhold-${comment.commentId}">On Hold</button>
          <button class="btn btn-danger btn-sm"
              id="discard-${comment.commentId}">Discard</button>
          <button id="answer-${comment.commentId}" class="btn btn-primary btn-sm">Answer</button>
      </div>
  </div>
</div>`;

  const customCommentBox = $("#comment-person");
  $(template).appendTo(customCommentBox);

  $(`#toggle-${comment.commentId}`).on("click", function () {
    $(`#footer-${comment.commentId}`).removeClass("radix-invisible");
  })

  const config = [
    {
      preffixSelector: "resolved", color: "rgb(40,167,69, 0.1)"
    },
    {
      preffixSelector: "onhold", color: "rgb(255,193,7, 0.1)"
    },
    {
      preffixSelector: "answer", color: "rgb(0,123,255, 0.1)"
    },
    {
      preffixSelector: "discard", color: "rgb(220,53,69, 0.1)"
    }
  ];

  const element = $(`#${comment.commentId}`);
  setControlsToElement(config, comment.commentId, element)
};

function setControlsToElement(controls, commentId, element) {
  controls.forEach(control => {
    $(`#${control.preffixSelector}-${commentId}`)
      .on("click", () => $(element).css("background-color", control.color));
  });
};

const addBackgroundColorToBody = (id, color) => {
  $(`body-${id}`).css("background-color", color);
};




