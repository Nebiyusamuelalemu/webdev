const charlength = document.getElementById("charlen");
const pass = document.getElementById("password");


function generatePassword(){
    let password = "";
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+-=,.<>/{]}[?|`';:";
    if(Number(charlength.value)<6){
        pass.textContent = "Password must be at least 6 characters long";
    }
    else if(Number(charlength.value)>1000000){
        pass.textContent = "Maximum number of characters allowed is 1,000,000";
    }
    else if(Number(charlength.value)>=6){
        for(let i = 0; i < Number(charlength.value); i++){
            let randomindex = Math.floor(Math.random() * chars.length);
            password += chars.charAt(randomindex);
        }
        pass.textContent = password;
    }
    else{
        pass.textContent = "something went wrong please try again";
    }

}

generate.onclick = generatePassword;