const github = new Github;
const ui = new UI;

const searcUser = document.getElementById('searchUser');

searcUser.addEventListener('keyup' , (e) => {
    const userText = e.target.value;
    if (userText !== '') {
        // console.log(userText);

        github.getUser(userText)
        .then(data => {
            // console.log(data);
            if(data.profile.message === 'Not Found'){   
                ui.showAlert('User not Found', 'alert alert-danger');
            }   else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    }   else{
        ui.clearProfile();
    }
});