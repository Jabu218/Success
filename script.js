// Firebase configuration
/*const firebaseConfig = {
    apiKey: "AIzaSyBZu0ytJjU2I9Y2aTrfChVNcdtLIRnjxWU",
    authDomain: "file-system-e1815.firebaseapp.com",
    projectId: "file-system-e1815",
    storageBucket: "file-system-e1815.appspot.com",
    messagingSenderId: "924787673289",
    appId: "1:924787673289:web:25cd090343274d2b676518",
    measurementId: "G-YP4BDV1XQR"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Check authentication status on page load
window.onload = function() {
    auth.onAuthStateChanged(user => {
        if (user) {
            // User is signed in, redirect to index.html
            if (window.location.pathname !== '/index.html') {
                window.location.href = 'index.html'; 
            }
        } else {
            // User is signed out, stay on login or signup pages
            if (window.location.pathname === '/index.html') {
                window.location.href = 'login.html'; // Redirect to login if not authenticated
            }
        }
    });
};

// Login functionality
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to index.html after successful login
            window.location.href = 'index.html';
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Signup functionality
function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Signup successful! You can now log in.');
            window.location.href = 'login.html'; // Redirect to login page
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Logout functionality
function logout() {
    auth.signOut().then(() => {
        window.location.href = 'login.html'; // Redirect to login page after logout
    }).catch((error) => {
        alert(error.message);
    });
}
*/