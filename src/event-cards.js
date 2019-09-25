Vue.component('event-card', {
  props: ['event'],
  template:
  '<div class="relative m-8 max-w-sm w-4/5 shadow-lg rounded-lg overflow-hidden">\
    <div class="absolute ml-4 mt-4 w-16 h-16 bg-white rounded-lg shadow pt-2">\
      <p class="text-gray-800 font-Montserrat font-semibold text-center text-base">{{ event.day }}</p>\
      <p class="text-gray-800 font-Montserrat font-semibold text-center text-base uppercase">{{ event.month }}</p>\
    </div>\
    <img class="h-48 w-full object-cover object-top" v-bind:src=event.image alt="Event Image">\
    <div class="relative h-48 bg-white p-4 flex flex-col justify-between">\
      <svg class="absolute bottom-0 right-0 fill-current z-0" width="295" height="170" fill="none" xmlns="http://www.w3.org/2000/svg">\
        <circle cx="300" cy="100" r="95" fill="#FBFDFF" stroke="#F3F3F3" stroke-width="10"/>\
        <circle cx="300" cy="100" r="65" fill="#FBFDFF" stroke="#F3F3F3" stroke-width="10"/>\
        <circle cx="300" cy="100" r="35" fill="#FBFDFF" stroke="#F3F3F3" stroke-width="10"/>\
        <circle cx="200" cy="153" r="95" fill="#FBFDFF" stroke="#F3F3F3" stroke-width="10"/>\
        <circle cx="200" cy="153" r="65" fill="#FBFDFF" stroke="#F3F3F3" stroke-width="10"/>\
        <circle cx="200" cy="153" r="35" fill="#FBFDFF" stroke="#F3F3F3" stroke-width="10"/>\
        <circle cx="100" cy="206" r="95" fill="#FBFDFF" stroke="#F3F3F3" stroke-width="10"/>\
        <circle cx="100" cy="206" r="65" fill="#FBFDFF" stroke="#F3F3F3" stroke-width="10"/>\
        <circle cx="100" cy="206" r="35" fill="#FBFDFF" stroke="#F3F3F3" stroke-width="10"/>\
        <circle cx="300" cy="206" r="95" fill="#FBFDFF" stroke="#F3F3F3" stroke-width="10"/>\
        <circle cx="300" cy="206" r="65" fill="#FBFDFF" stroke="#F3F3F3" stroke-width="10"/>\
        <circle cx="300" cy="206" r="35" fill="#FBFDFF" stroke="#F3F3F3" stroke-width="10"/>\
      </svg>\
      <div class="z-10">\
        <h4 class="mb-4 text-gray-800 font-Montserrat font-semibold text-lg truncate">{{ event.title }}</h4>\
        <div class="flex flex-row mb-2">\
          <svg class="flex-none w-6 fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">\
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"/>\
          </svg>\
          <p class="text-gray-600 font-Montserrat text-lg truncate">{{ event.time }}</p>\
        </div>\
        <div class="flex flex-row">\
          <svg class="flex-none w-6 fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">\
            <path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>\
          </svg>\
          <p class="text-gray-600 font-Montserrat text-lg truncate">{{ event.location }}</p>\
        </div>\
      </div>\
      <div class="z-10 flex flex-row justify-between">\
        <a class="flex flex-row w-2/5 bg-red-400 py-2 px-4 rounded-full text-red-100" v-bind:href=event.calLink target="_blank" title="Google Calendar Event">\
          <svg class="hidden sm:block flex-none w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\
            <path d="M7 3h2v2h6V3h2v2h2c1.1046 0 2 .8954 2 2v7h-2V9H5v10h9v2H5c-1.1046 0-2-.8954-2-2V7c0-1.1046.8954-2 2-2h2V3zm2 8H7v2h2v-2zm6 0h2v2h-2v-2zm-2 0h-2v2h2v-2zm-6 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm3 1v2h-2v2h2v2h2v-2h2v-2h-2v-2h-2z"/>\
          </svg>\
          <p class="w-full text-center font-Montserrat font-semibold text-base truncate">Calendar</p>\
        </a>\
        <a class="flex flex-row w-2/5 bg-red-400 py-2 px-4 rounded-full text-red-100" v-bind:href=event.fbLink target="_blank" title="Facebook Event Page">\
          <svg class="hidden sm:block flex-none w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\
            <path d="M18 3H6C4.3431 3 3 4.3431 3 6v12c0 1.6569 1.3431 3 3 3h4.5938v-6.3984H8.3086V12h2.2852v-1.9828c0-2.2553 1.3429-3.5016 3.3996-3.5016.9843 0 2.0144.1758 2.0144.1758v2.2149h-1.1355c-1.118 0-1.4661.6943-1.4661 1.4062V12h2.4961l-.399 2.6016h-2.0971V21H18c1.6569 0 3-1.3431 3-3V6c0-1.6569-1.3431-3-3-3z"/>\
          </svg>\
          <p class="w-full text-center font-Montserrat font-semibold text-base truncate">View</p>\
        </a>\
      </div>\
    </div>\
  </div>'
})

// Firebase initialization
var config = {
  apiKey: "AIzaSyDLW28ig83t3MkGlZFXXNaIQTgCcf-cQ2k",
  authDomain: "ucsd-jsa.firebaseapp.com",
  databaseURL: "https://ucsd-jsa.firebaseio.com",
  storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);
var database = firebase.database();

// Event cards
var data = {
  events: []
};

var vm = new Vue({
  el: "#event-cards",
  data: data
})

function getEvents() {
  var events = firebase.database().ref("events").orderByChild("date").limitToFirst(3);
  events.once("value")
    .then(function(snapshot) {
      var count = 0;
      snapshot.forEach(function (eventSnapshot) {
        if (eventSnapshot.child("fbLink").val()) {

          // Create event Object
          var event = eventSnapshot.val();
          // Get event title from key
          event.title = eventSnapshot.key;
          // Set id for Vue
          event.id = count;

          // Parse date
          var date = new Date(event.date);
          event.month = date.toLocaleString('en-us', { month: 'short' });
          event.day = date.getDate();
          // Convert time
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          minutes = minutes < 10 ? '0'+minutes : minutes;
          event.time = hours + ':' + minutes + ' ' + ampm;

          // Add event to events
          data.events.push(event);
          count++;
        }
    });
  });
}

getEvents();