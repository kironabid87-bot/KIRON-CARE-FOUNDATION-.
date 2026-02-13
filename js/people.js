import { db } from './firebase.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const grid = document.getElementById('peopleGrid');
const snap = await getDocs(collection(db,'people'));
snap.forEach(d=>{
  const p=d.data();
  const div=document.createElement('div');
  div.className='card';
  div.innerHTML=`<h3>${p.name}</h3><p>${p.role}</p><p>${p.bio}</p>`;
  grid.appendChild(div);
});
