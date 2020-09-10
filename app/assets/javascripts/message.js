$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message-box">
          <div class="message-info">
            <div class="user-name">
              ${message.user_name}
            </div>
            <div class="time">
              ${message.created_at}
            </div>
          </div>
          <div class="user-message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message-box">
        <div class="message-info">
          <div class="user-name">
            ${message.user_name}
          </div>
          <div class="time">
            ${message.created_at}
          </div>
        </div>
        <div class="user-message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.form__message').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-field').append(html);      
      $('form')[0].reset();
      $('.main-field').animate({ scrollTop: $('.main-field')[0].scrollHeight});
    })
    .always(function(){
      $('.form__submit').prop('disabled', false);
      })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});