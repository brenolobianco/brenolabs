let Validator = {
    handleSubmit:(event) =>{
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input')
        for(let i=0; i<inputs.length;i++) {
            let input = inputs[i]
           let check = Validator.checkInput(input)
           if(check !==true){
               send = false
           }

        }
        send=false
        if(send) {
            form.submit();
        }
    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules')
        if(rules !== null) {
            rules = rules.split('|')
            for(let k in rules) {

            }

        }
return true;
    }
}
    

let form = document.querySelector('.validator');
form.addEventListener('submit' , Validator.handleSubmit )