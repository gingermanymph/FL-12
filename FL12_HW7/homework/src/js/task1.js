const users = {
    admin: {
        email: 'admin@gmail.com',
        password: 'AdminPass'
    },
    visitor: {
        email: 'user@gmail.com',
        password: 'UserPass'
    }
}

const minEmailLength = 5;
const minPasswordLength = 6;

const session = {}

session.userEmail = prompt('Enter your email', '');

// Step 1. Check login
if (session.userEmail) {
    if (session.userEmail.length >= minEmailLength) {
        if (session.userEmail === users.visitor.email || session.userEmail === users.admin.email) {
            session.loginVerification = true;
        } else {
            alert('I don\'t know you');
        }
    } else {
        alert('I don\'t know any emails having name length less than 5 symbols');
    }
} else {
    alert('Canceled.');
}

// Step 2. Check password:
if (session.loginVerification) {
    session.userPassword = prompt('Enter your password', '');

    if (session.userPassword) {
        if (session.userEmail === users.visitor.email && session.userPassword === users.visitor.password) {
            session.passwordVerification = true;
            session.activeUser = 'visitor';

        } else if (session.userEmail === users.admin.email && session.userPassword === users.admin.password) {
            session.passwordVerification = true;
            session.activeUser = 'admin';

        } else {
            alert('Wrong password');
        }
    } else {
        alert('Canceled.');
    }
}
// Step 3. Change the password:
if (session.passwordVerification) {
    session.passwordChanging = confirm('Do you want to change your password?');

    if (session.passwordChanging) {
        session.oldPassword = prompt('Enter your old password', '');

        if (session.oldPassword) {
            if (session.oldPassword === users[session.activeUser].password) {
                session.oldPassVerification = true;
            } else {
                alert('Wrong password');
            }
        } else {
            alert('Canceled.');
        }
    } else {
        alert('You have failed the change.');
    }
}
// Step 3 p. 3
if (session.oldPassVerification) {
    session.newPassword = prompt('Enter your new password', '');

    if (session.newPassword) {
        if (session.newPassword.length >= minPasswordLength) {
            session.confirmPassword = prompt('Enter your new password again.', '');

            if (session.confirmPassword === session.newPassword) {
                users[session.activeUser].password = session.confirmPassword;
                alert('You have successfully changed your password.');
            } else {
                alert('You wrote the wrong password.');
            }
        } else {
            alert('It\'s too short password. Sorry.');
        }
    } else {
        alert('Canceled.');
    }
}
// Clear session
for(const prop in session) {
    if(session.hasOwnProperty(prop)){
        delete session[prop]
    }
}