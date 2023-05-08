var email = document.forms["form"]["email"];
var pass = document.forms["form"]["password"];

email.addEventListener("textInput", email_ver);
pass.addEventListener("textInput", pass_ver);

function email_ver() {
  if (email.value == "ziad53s@gmail.com") {
    return true;
  }
}
function pass_ver() {
  if (pass.value == "012345") {
    return true;
  }

}

