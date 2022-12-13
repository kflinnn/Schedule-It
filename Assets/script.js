var dateDisplayEl = $('#currentDay');
var presentTask = $(".col-2 col-md-1 hour text-center py-3")
var pastTask = $()
var futureTask = 

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //First Save Button
  var saveButtonNine = $("#hour-9, button");
  saveButtonNine.on("click", function() {
    var enteredHourNine = document.querySelector("#hour-9-text").value;
    localStorage.setItem("hour-9", enteredHourNine);
    
    //readTasksFromStorage();
  })
//Second Save Button
  var saveButtonTen = $("#hour-10, button");
  saveButtonTen.on("click", function(){
    console.log(saveButtonTen);
    var enteredHourTen = document.querySelector("#hour-10-text").value;
    localStorage.setItem("hour-10", enteredHourTen);
  })

//Third Save Button
var saveButtonEleven = $("#hour-11, button");
saveButtonEleven.on("click", function(){
  var enteredHourEleven = document.querySelector("#hour-11-text").value;
  localStorage.setItem("hour-11", enteredHourEleven);
})

//Fourth Save Button
var saveButtonTwelve = $("#hour-12, button");
saveButtonTwelve.on("click", function(){
  var enteredHourTwelve = document.querySelector("#hour-12-text").value;
  localStorage.setItem("hour-12", enteredHourTwelve);
})

//Fifth Save Button
var saveButtonOne = $("#hour-1, button");
saveButtonOne.on("click", function(){
  var enteredHourOne = document.querySelector("#hour-1-text").value;
  localStorage.setItem("hour-1", enteredHourOne);
})

//Sixth Save Button
var saveButtonTwo = $("#hour-2, button");
saveButtonTwo.on("click", function(){
  var enteredHourTwo = document.querySelector("#hour-2-text").value;
  localStorage.setItem("hour-2", enteredHourTwo);
})

//Seventh Save Button
var saveButtonThree = $("#hour-3, button");
saveButtonThree.on("click", function(){
  var enteredHourThree = document.querySelector("#hour-3-text").value;
  localStorage.setItem("hour-3", enteredHourThree);
})

//Eighth Save Button
var saveButtonFour = $("#hour-4, button");
saveButtonFour.on("click", function(){
  var enteredHourFour = document.querySelector("#hour-4-text").value;
  localStorage.setItem("hour-4", enteredHourFour);
})

//Ninth Save Button
var saveButtonFive = $("#hour-5, button");
saveButtonFive.on("click", function(){
  var enteredHourFive = document.querySelector("#hour-5-text").value;
  localStorage.setItem("hour-5", enteredHourFive);
})

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // for (var i = 0; i < tasks.length; i += 1) {
  //   var task = tasks[i];
  //   var taskTime = dayjs(tasks.time);
  // }
  // console.log(taskTime);
  // console.log(task);
    //get current time
    var currentTime = dayjs().format("hh, mm, ss, A"); 
    console.log(currentTime);

  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // function readTasksFromStorage() {
  //   var tasks = localStorage.getItem("tasks");
  //   if (tasks) {
  //     tasks = JSON.parse(tasks);
  //   } else {
  //     tasks = [];
  //   }
  //   return tasks;
  // }


  // TODO: Add code to display the current date in the header of the page.

  function displayTime() {
    var rightNow = dayjs().format('dddd, MMMM D');
    dateDisplayEl.text(rightNow);
  }
displayTime();

});
