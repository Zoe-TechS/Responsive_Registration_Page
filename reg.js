const form = document.querySelector('.registration form');
const inputs = document.querySelectorAll('.registration form input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach(input=>{
        if(!input.value){
            input.parentElement.classList.add('error');
        }else{
            input.parentElement.classList.remove('error');
            if(input.type == 'email'){
                if(validEmail(input.value)) {
                    input.parentElement.classList.remove('error');
                } else {
                    input.parentElement.classList.add('error');
                }
            }
        }
    });
});
function validEmail(email){
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(email);
}