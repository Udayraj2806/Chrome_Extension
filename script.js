// const submitButton = document.getElementsByClassName("submitButton");
// const resultElement = document.getElementsByClassName("myTextarea");

// submitButton[0].addEventListener("click", function onClick(event) {
//   event.preventDefault(); // Prevent form submission

//   // Set the innerHTML of the result elemen
//   resultElement.innerHTML = "Button clicked!";
// });

// for (const box of submitButton) {
//   box.addEventListener("click", function onClick() {
//     console.log("box clicked1111");
//     console.log(resultElement);
//     resultElement.innerHTML = "Button clicked!";
//   });
// }
chrome.tabs.executeScript({
  code: 'document.getElementById("myElement").innerHTML = "New content";',
});

// Content script (if you want to modify a page's HTML)
document.getElementById("myButton").addEventListener("click", myClickFunction);

function myClickFunction() {
  // Your code here
  fetch("plaintext2.txt")
    .then((response) => response.text())
    .then((textData) => {
      console.log(textData);
      document.getElementById("myElement").innerHTML = textData;
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("Button clicked!");
}


// document.getElementById("myElement").innerHTML = "New dfdfsfdcontent";
