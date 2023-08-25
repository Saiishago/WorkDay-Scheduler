var descriptionEl = $('#description');
var secondDescriptionEl = $('#secondDescription');
var saveBtnEl = $('#saveBtn');
var saveButtonEl = $('#saveButton');
var thirdDescriptionEl = $('#thirdDescription');
var saveBEl = $('#saveB');
var sButtonEl = $('#sButton');
var fourthDescriptionEl = $('#fourthDescription');
var fifthDescriptionEl = $('#fifthDescription');
var sBtnEl = $('#sBtn');
var sixthDescriptionEl = $('#sixthDescription');
var savingBtnEl = $('#savingBtn');
var seventhDescriptionEl = $('#seventhDescription');
var savingButtonEl = $("#savingButton");
var eighthDescriptionEl = $('#eighthDescription');
var savingBEl = $('#savingB');
var lastDescriptionEl = $('#lastDescription');
var savedBEl = $('#savedB');



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
    });
    

    $(document).ready(function() {
      const persistentText = $("#persistent-text");
      const savedText = localStorage.getItem("savedText");
    
      if (savedText) {
        persistentText.text(savedText);
      }
    
      persistentText.on("input", function() {
        const newText = persistentText.text();
        localStorage.setItem("savedText", newText);
      });
    
    });
    $('#description').text('');
    $('#saveBtn').on('click', function() {
     
    });
 

  
   var savedText =localStorage.getItem('description');
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
  

   $('#thirdDescription').text('');
   $('#saveB').on('click', function() {
   
   });



   var savedText =localStorage.getItem('');
   if (savedText) {
   $('#thirdDescription').val(savedText);
   };

   $('#saveB').click(function() {
   var newText = $('#thirdDescription').val();

   localStorage.setItem('hour-11', newText);
   alert('Come on, a little more to go!');
   });

   renderLastSaved();

   function displayMessage(type, message) {
 

   thirdDescriptionEl.textContent = message;
   thirdDescriptionEl.attr("class", type);
   };
   function renderLastSaved() {
   var thirdDescription = localStorage.getItem('hour-11');

   if (!thirdDescription) {
    return;
   }

   thirdDescriptionEl.textContent = thirdDescription;
   };
  

   $('#fourthDescription').text('');
   $('#saveB').on('click', function() {
 
   });



   var savedText =localStorage.getItem('');
   if (savedText) {
   $('#fourthDescription').val(savedText);
   };

   $('#sButton').click(function() {
   var newText = $('#fourthDescription').val();

   localStorage.setItem('hour-12', newText);
   alert('One more before lunch!');
   });

   renderLastSaved();

   function displayMessage(type, message) {


   fourthDescriptionEl.textContent = message;
   fourthDescriptionEl.attr("class", type);
   };
   function renderLastSaved() {
   var fourthDescription = localStorage.getItem('hour-12');

   if (!fourthDescription) {
      return;
    }

   fourthDescriptionEl.textContent = fourthDescription;
   };
  

   $('#fifthDescription').text('');
   $('#sBtn').on('click', function() {
 
   });



   var savedText =localStorage.getItem('');
   if (savedText) {
   $('#fifthDescription').val(savedText);
   };

   $('#sBtn').click(function() {
   var newText = $('#fifthDescription').val();

   localStorage.setItem('hour-13', newText);
   alert('No this is the ONE more before lunch!');
   });

   renderLastSaved();

   function displayMessage(type, message) {


   fifthDescriptionEl.textContent = message;
   fifthDescriptionEl.attr("class", type);
   };
   function renderLastSaved() {
   var fifthDescription = localStorage.getItem('hour-13');

   if (!fifthDescription) {
     return;
    }

   fifthDescriptionEl.textContent = fifthDescription;
   };
 

   $('#sixthDescription').text('');
   $('#savingBtn').on('click', function() {
 
   });



   var savedText =localStorage.getItem('');
   if (savedText) {
   $('#sixthDescription').val(savedText);
   };

   $('#savingBtn').click(function() {
   var newText = $('#sixthDescription').val();

   localStorage.setItem('hour-14', newText);
   alert('Keep pushing!');
   });

   renderLastSaved();

   function displayMessage(type, message) {


   sixthDescriptionEl.textContent = message;
   sixthDescriptionEl.attr("class", type);
   };
   function renderLastSaved() {
   var sixthDescription = localStorage.getItem('hour-14');

   if (!sixthDescription) {
     return;
   }

   sixthDescriptionEl.textContent = sixthDescription;
   };
  

   $('#seventhDescription').text('');
   $('#savingButton').on('click', function() {
 
   });



   var savedText =localStorage.getItem('');
   if (savedText) {
   $('#seventhDescription').val(savedText);
   };

   $('#savingButton').click(function() {
   var newText = $('#seventhDescription').val();

   localStorage.setItem('hour-15', newText);
   alert('Thirty minutes left!');
   });

   renderLastSaved();

   function displayMessage(type, message) {


    seventhDescriptionEl.textContent = message;
   seventhDescriptionEl.attr("class", type);
   };
   function renderLastSaved() {
   var seventhDescription = localStorage.getItem('hour-15');

   if (!seventhDescription) {
      return;
   }

   seventhDescriptionEl.textContent = seventhDescription;
   };
  

   $('#eighthDescription').text('');
   $('#savingB').on('click', function() {
 
   });



   var savedText =localStorage.getItem('');
   if (savedText) {
   $('#eighthDescription').val(savedText);
   };

   $('#savingB').click(function() {
   var newText = $('#eighthDescription').val();

   localStorage.setItem('hour-16', newText);
   alert('Two more thirty minutes!');
   });

   renderLastSaved();

   function displayMessage(type, message) {


   eighthDescriptionEl.textContent = message;
   eighthDescriptionEl.attr("class", type);
   };
   function renderLastSaved() {
   var eighthDescription = localStorage.getItem('hour-16');

   if (!eighthDescription) {
     return;
   }

   eighthDescriptionEl.textContent = eighthDescription;
   };
 

   $('#lastDescription').text('');
   $('#savedB').on('click', function() {
 
   var savedText =localStorage.getItem('');
   if (savedText) {
$('#lastDescription').val(savedText);
   };

   $('#savedB').click(function() {
   var newText = $('#lastDescription').val();

   localStorage.setItem('hour-17', newText);
   alert('You made it!');


   renderLastSaved();

   function displayMessage(type, message) {


   lastDescriptionEl.textContent = message;
   lastDescriptionEl.attr("class", type);
   };
   function renderLastSaved() {
   var lastDescription = localStorage.getItem('hour-17');

   if (!lastDescription) {
     return;
   }

   lastDescriptionEl.textContent = lastDescription;
   };
   });

  
   var today = dayjs();
   $('#currentDay').text(today.format('D MMM, YYYY'));
   });
  });

})