function Form(){
let comment = document.getElementById("Comment").value;
let form = document.getElementById("form");

form.action="mailto:streame@idk.com?subject=Comment&body=" + comment;
}
