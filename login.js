var formn=document.getElementById('fromid');
formn.addEventListener('submit', (event)=>{
  event.preventDefault();
  const username=document.getElementById('username').value;
const password=document.getElementById('password').value;
fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({username,password})
})
.then((res) => {
  if(res.ok){
    window.location.href='first_p.html';
  }
  else{
    alert('wrong informations');
  }
})
}
)


