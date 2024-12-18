function sendMessage() {
    const chatInput = document.getElementById("chat-input");
    const chatContent = document.getElementById("chat-content");
    
    if (chatInput.value.trim() !== "") {
        const message = document.createElement("div");
        message.classList.add("chat-message");
        message.textContent = chatInput.value;
        chatContent.appendChild(message);
        
        // Scroll to the latest message
        chatContent.scrollTop = chatContent.scrollHeight;
        
        // Clear the input field
        chatInput.value = "";
    }
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
});
