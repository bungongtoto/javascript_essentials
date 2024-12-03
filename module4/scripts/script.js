// function myFunction() {
//     var obj = document.getElementById("h01");
//     obj.innerHTML = "Hello JQuery";
// }


// function myFunctionJQueryVersion() {
//     $("#h01").html("hello JQuery").attr("color", "red");
// }

// $(document).ready(function () {
//     myFunctionJQueryVersion();

//     $("button").click(
//         function () {
//             $("p").hide();
//         }
//     )
// });


$("#btn1").click(function () {
    alert("Text: " + $("#test").text());
})

$("#btn2").click(function () {
    alert("HTML: " + $("#test").html());
})

function appendText() {
    var txt1 = "<p>This is text along with html markup</p>" // create text with html 
    var txt2 = $("<p></p>").text("This is text."); // create text with jquery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text created using the DOM"; //create text with the DOM
    $("body").append(txt1, txt2, txt3); // append new elements
}