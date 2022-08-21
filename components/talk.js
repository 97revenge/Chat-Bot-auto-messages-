function talk() {

    var know = {
        "Who are you ": "Hello, Codewith_random here...🤖",
        "How are You": "im fine thanks 🙂",
        "What can i do for you": "Please Give us A Follow & Like (✿◕‿◕✿)",
        "You followers": "I have my family of 5000 members, i don't have follower, have supportive family ",
        "ok": "Thank You Soo much",
        "Bye": "Okay !! i Will meet soon"

    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + '<br>';
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry, i didn't understand <br>"
    }
};