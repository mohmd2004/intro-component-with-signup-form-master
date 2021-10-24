var form = document.getElementById('form');

form.addEventListener('submit', event =>{
	event.preventDefault();

    var fname=form['fname'].value;
    var lname=form['lname'].value;
    var email=form['email'].value;
    var passward=form['passward'].value;
    
    if(fname === '' ){
        addErrorTo('fname','the first name cannot be empty');
    
    }else{
        removeErrorTo('fname')
    }
    if(lname === '' ){
        addErrorTo('lname','the last name cannot be empty');
    }else{
        removeErrorTo('lname')
    }
    if (email === '') {
		addErrorTo('email', 'Email is required');
	} else if (!isValid(email)) {
		addErrorTo('email', 'Email is not valid');
	} else {
		removeErrorTo('email');
	}
    if(passward === '' ){
        addErrorTo('passward','the password cannot be empty');
    }else{
        removeErrorTo('passward')
    }
    alert (fname + lname + email + passward);
});
function addErrorTo(field, message) {
	const formControl = form[field].parentNode;
	formControl.classList.add('error');

	const small = formControl.querySelector('small');
	small.innerText = message;
}

function removeErrorTo(field) {
	const formControl = form[field].parentNode;
	formControl.classList.remove('error');
}
function isValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}