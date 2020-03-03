import "../../sass/pages/admin.scss";
import "./menu";

$("form").submit(e => {
  e.preventDefault();
  let pass = $("#pass").val();
  console.log(pass);
  fetch("/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ pass: pass })
  })
    .then(data => data.json())
    .then(data => {
      $(".container").html("");
      $(".container").append($("<div>").addClass("data"));
      console.log(data);
      if (data.msg == "WP") {
        $(".data").text("Wrong Password");
        return;
      }
      data.forEach(user => {
        if (user.fname) {
          $(".data").append(
            $("<div>")
              .addClass("entry")
              .html(
                `<div class="name">${user.fname}</div>
                <div class="team">${user.team}</div>
                <div class="college">${user.college}</div>
                <div class="city">${user.city}</div>
                <div class="mob">${user.phone}</div>
                <div class="email">${user.email}</div>`
              )
          );
        }
      });
    });
});
