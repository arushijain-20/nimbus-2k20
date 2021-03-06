import "bootstrap/dist/css/bootstrap.min.css";
import "../../sass/pages/register.scss";
import "./menu";

import anime from "animejs";

var form = $("#registration-form");
form.submit(function (event) {
  event.preventDefault();

  var fname = $("#fname").val();
  var email = $("#email").val();
  var message = $("textarea#message").val();
  var data = {
    fname,
    email,
    message,
  };
  $(".bar").width("50%");
  fetch("https://festnimbus.com/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.message == "success") {
        $(".response").removeClass("error").addClass("success");
        $(".bar").width("100%");
        $(".bar").removeClass("red").addClass("green");
      } else {
        $(".response").removeClass("success").addClass("error");
        $(".bar").width("100%");
        $(".bar").removeClass("green").addClass("red");
      }
      $(".response").text(data.message);
    })
    .catch((err) => {
      $(".response").removeClass("success").addClass("error");
      $(".response").text("Could not Connect...");
    });
});

// animations

anime({
  targets: "h1",
  easing: "easeOutQuad",
  opacity: [0, 1],
});

// var emailPattern = new RegExp("[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,5}");

// var errorText = "Please Enter a valid ";
// $('.registered-message-container').hide();
// $("input[required]")
//   .popover({
//     placement: "bottom",
//     container: "body",
//     trigger: "manual",
//     selector: "true",
//     content: function() {
//       return $(this).attr("title");
//     },
//     template:
//       '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
//   })
//   .focus(function() {
//     $(this).popover("hide");
//   });

// function validateForm() {
//   var status = true;
//   var fname = document.forms["registration-form"].fname;
//   var team = document.forms["registration-form"].team;
//   var email = document.forms["registration-form"].email;
//   var city = document.forms["registration-form"].city;
//   var college = document.forms["registration-form"].college;
//   var phone = document.forms["registration-form"].phone;

//   var year = -1;
//   var events = [];
//   // var years = document.getElementsByName("year");

//   // for (let i = 0; i < years.length; i++) {
//   //   if (years[i].checked) {
//   //     year = years[i].value;
//   //     break;
//   //   }
//   // }
//   $('input').focus(function(){
//     $('#error-message').html("");
//     $(this).css("border-bottom","2px solid #ccc");
//   });
//   if (fname.value.trim().length === 0) {
//     $('#error-message').html(errorText+"Name");
//     $(fname).css("border-bottom","2px solid #f00");
//     return  false;
//   }
//   if (team.value.trim().length === 0) {
//     $('#error-message').html(errorText+"Team");
//     $(team).css("border-bottom","2px solid #f00");
//     return false;
//   }
//   if(!(emailPattern.test(email.value.trim()) )){
//     $('#error-message').html(errorText+"Email");
//     $(email).css("border-bottom","2px solid #f00");
//       return false;
//     }
//   if (city.value.trim().length === 0) {
//     $('#error-message').html(errorText+"City");
//     $(city).css("border-bottom","2px solid #f00");
//     return  false;
//   }
//   if (college.value.trim().length === 0) {
//     $('#error-message').html(errorText+"College");
//     $(college).css("border-bottom","2px solid #f00");
//     return  false;
//   }
//   if (phone.value.trim().length != 10) {
//     $('#error-message').html(errorText+"Phone Number");
//     $(phone).css("border-bottom","2px solid #f00");
//     return  false;
//   }
//   // if(year === -1 || Number(year) != Number(year) || Number(year) < 0 || Number(year) > 5){
//   //   status=false;
//   //   alert("Select a Year");
//   // }

//     return true;
// }

// document.getElementsByTagName("form")[0].addEventListener("submit",function(e){
//   e.preventDefault();
//   var res = validateForm();
//   if(res){
//     var objectToSend = {
//         "fname": fname.value,
//         "team": team.value,
//         "email": email.value,
//         "phone": phone.value,
//         "college": college.value,
//         "city": city.value,
//         // "year": year
//         //"events": events
//       };
//       var xmlhttp = new XMLHttpRequest();
//       xmlhttp.open("POST", "/adduser");
//       xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//       xmlhttp.send(JSON.stringify(objectToSend));
//       console.log(JSON.stringify(objectToSend));

//       xmlhttp.onreadystatechange = function(){
//             if(xmlhttp.readyState == 4){
//               console.log('xmlhttp.responseText');
//               var stat = JSON.parse(xmlhttp.responseText);
//               console.log(stat);
//               if(stat == 500){
//                 console.log("Huge Error");
//               }
//               else{
//                 // submitButton.disabled = false;
//                 // submitButton.value = "Registered";
//                 $('.registered-name').html("Thank You "+fname.value);
//                 $("#fname").val("");
//                 $("#team").val("");
//                 $("#email").val("");
//                 $("#phone").val("");
//                 $("#college").val("");
//                 $("#city").val("");
//                 // $('#eventOpt').selectedIndex=-1;
//                 $('.registered-message-container').show();
//                 // $('.confirm').addClass('yes');
//                 setTimeout(function(){
//                   window.location.reload(1);
//                 }, 1000);
//               }
//             }
//           }
//   }

// });

// var policy = document.getElementById('policy');
//   policy.addEventListener('click', ()=>{
//     window.open('./pdf/Policy.doc');
//     // console.log('hey');
//   })
