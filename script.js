// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var descriptionEl = $('#description');
var secondDescriptionEl = $('#secondDescription')
var saveBtnEl = $('#saveBtn');
var saveButtonEl = $('#saveButton')



$(function() {

  $(document).ready(function() {

    var currentHour = new Date().getHours();

    $('.time-block').each(function () {
      var blockId = parseInt($(this).attr('id').split('-')[1]);

      if (blockId < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (blockId === currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    })
    $('#description').text('');
    $('#saveBtn').on('click', function() {
      //alert("Let's get things done");
    });
  });

  var savedText =localStorage.getItem('');
  if (savedText) {
    $('#description').val(savedText);
  };
  
  $('#saveBtn').click(function() {
    var newText = $('#description').val();

    localStorage.setItem('hour-9', newText);
    alert('Look at you being an adult!');
  });
  
  renderLastSaved();
  
  function displayMessage(type, message) {
    //console.log(descriptionEl);
  
    descriptionEl.textContent = message;
    descriptionEl.attr("class", type);
  };
  function renderLastSaved() {
    var description = localStorage.getItem('hour-9');
  
    if (!description) {
      return;
    }
  
    descriptionEl.textContent = description;
  };

  $('#secondDescription').text('');
  $('#saveButton').on('click', function() {

  });

  var savedText = localStorage.getItem('');
  if (savedText) {
    $('#secondDescription').val(savedText);
  };

  $('#saveButton').click(function() {
    var newText = $('#secondDescription').val();

    localStorage.setItem('hour-10', newText);
    alert("Let's do this!");
  });

  renderLastSaved();

  function displayMessage(type, message) {
    secondDescriptionEl.textContent = message;
    secondDescriptionEl.attr("class", type);
  };

  function renderLastSaved() {
    var secondDescription = localStorage.getItem('hour-10');

    if (!secondDescription) {
      return;
    }

    secondDescriptionEl.textContent = secondDescription;
  };
 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  
  
  var today = dayjs();
  $('#currentDay').text(today.format('D MMM, YYYY'));
});
