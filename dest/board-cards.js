Vue.component('board-card', {
  props: ['info'],
  template: 
    '<div class="relative flex flex-col items-center w-full max-w-xs mt-20 mx-8">\
      <img class="rounded-full -my-12 w-32 h-32 object-cover object-top shadow z-40" v-bind:src=info.image v-bind:alt=info.name>\
      <div class="flex flex-col items-center w-full p-6 max-w-sm h-64 bg-white rounded-lg shadow-md">\
        <h4 class="mt-10 text-center font-Montserrat text-lg text-gray-800 font-semibold leading-tight">{{ info.name }}</h4>\
        <h5 class="mb-4 text-center font-Montserrat text-lg text-red-400 font-semibold">{{ info.position }}</h5>\
        <div class="w-full h-full flex flex-col justify-around">\
          <div class="flex flex-row">\
            <svg class="flex-none w-6 fill-current text-gray-800 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">\
              <path d="M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"/>\
            </svg>\
            <p class="text-gray-600 font-Montserrat text-lg">{{ info.major }}</p>\
          </div>\
          <div class="flex flex-row">\
            <svg class="flex-none w-6 fill-current text-gray-800 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">\
              <path d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z"/>\
            </svg>\
            <p class="text-gray-600 font-Montserrat text-lg">{{ info.year }} Year</p>\
          </div>\
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

var data = {
  officers: [],
  staff: []
};


// Generate data for officers
var vmOfficers = new Vue({
  el: "#officer-cards",
  data: data
})

var vmStaff = new Vue({
  el: "#staff-cards",
  data: data
})

function getBoardInfo() {
  var board = firebase.database().ref("board");
  board.once("value")
    .then(function(snapshot) {
      var count = 0;
      snapshot.forEach(function (boardSnapshot) {

        // Create boardMember Object
        var boardMember = boardSnapshot.val();
        // Get board member name from key
        boardMember.name = boardSnapshot.key;
        // Set id for Vue
        boardMember.id = count;

        if (boardMember.position !== "Staff") {
          data.officers.push(boardMember);
        } else {
          data.staff.push(boardMember);
        }
        count++;
    });
  });
}

getBoardInfo();