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
              .text(
                `${user.fname} : ${user.team} | ${user.phone} - ${user.email} | ${user.college} - ${user.city}`
              )
          );
        }
      });
    });
});
