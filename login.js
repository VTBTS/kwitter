function add(){
    username=document.getElementById("name").value;
    localStorage.setItem("username", username);
    window.location="kwitter.html";
    firebase.database().ref("/").child(username).update({
        purpose:"adding user",
    });
    window.location="kwitter.html";
}