$(document).ready(function() {
  /*if (!$("#question_type_question option[value='free_text']").is(':selected')) {
    $('#correct_answer').hide();
  }else{
    $('#alternatives').hide();
  }

  $("#question_type_question").change(function(){
    var selectedAlternatives = $(this).children("option:selected").val();

    if(selectedAlternatives == "free_text"){
      $('#alternatives').hide();
      $('#correct_answer').show();
    }else{
      $('#alternatives').show();
      $('#correct_answer').hide();
    }
  });

  var text_max = 60;
  $('.count_message').html( $('.correct_answer').val().length +' / ' + text_max );

  $('.correct_answer').keyup(function() {
    var text_length = $('.correct_answer').val().length;
    var text_remaining = text_max - text_length;
    
    $('.count_message').html(text_length + ' / ' + text_max);
  });*/

  $('#add_field_button').on('click', function(e) {
    e.preventDefault();
    const index = $('#fields .field').length;
    const newField = `
      <div class="field row p-3">
        <input class="form-control string optional col-6" type="text" value="Berlim" name="question[correct_answer]" id="question_correct_answer_${index}">
        <button type="button" class="mx-3 remove_field_button">Remove</button>
      </div>
    `;
    $('.fields').append(newField);
  });

  $('.fields').on('click', '.remove_field_button', function(e) {
    e.preventDefault();
    $(this).closest('.field').remove();
  });
});


