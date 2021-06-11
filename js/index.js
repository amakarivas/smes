function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  let msg = document.querySelector('.msg');

  myForm.addEventListener('submit', onSubmit);
  function onSubmit(e) {
      e.preventDefault();
      
      if(emailInput.value ==='' || passwordInput.value==='') {
          msg.innerHTML = 'Please enter all fields';
          setTimeout(() => msg.remove(), 3000);
      } else {
        (emailInput.value ==='' || passwordInput.value==='') 
          msg.innerHTML = 'Please enter all fields';
          setTimeout(() => msg.remove(), 3000);
          return
        }
        usersList.appendChild(li);
        //Clear Fields
        nameInput.value = '';
        emailInput.value = '';
      }