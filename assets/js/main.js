//login//
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "عبدالله" && password === "123456") {
    errorMessage.style.display = "none";
    window.location.href = "/home.html"; // الانتقال إلى صفحة /details
  } else {
    errorMessage.style.display = "block";
  }
}

///dashboard//
function showPage(page) {
  // Hide all pages
  document.querySelectorAll(".page").forEach(function (el) {
    el.style.display = "none";
  });

  // Show the selected page
  document.getElementById(page).style.display = "block";
}

// Default page to show
document.getElementById("orders").style.display = "block";

function sendMessage() {
  const messageInput = document.getElementById("chatMessage");
  const chatBox = document.getElementById("chatBox");

  // If the message input is empty, do nothing
  if (messageInput.value.trim() === "") {
    return;
  }

  // Create a new message element
  const newMessage = document.createElement("div");
  newMessage.classList.add("message");
  newMessage.innerHTML = `
        <img src="assets/images/image 47.png" alt="You" class="avatar">
        <div>
            <p><strong>New Customer:</strong> ${messageInput.value}</p>
            <span>${new Date().toLocaleString()}</span>
        </div>
    `;

  // Append the new message to the chat box
  chatBox.appendChild(newMessage);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear the input field
  messageInput.value = "";
}

function closeChat() {
  document.getElementById("messages").style.display = "none";
}
