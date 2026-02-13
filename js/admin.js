import { auth, db, storage } from './firebase.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

document.getElementById('admin').innerHTML = '<p>Admin logged in</p>';
