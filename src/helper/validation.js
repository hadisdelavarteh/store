


export const validation = (data, type) =>{

    const errors = {};

    if(!data.email){
        errors.email = "Email is mandatory"
    } else if( ! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)){
        errors.email = "Please enter a valid email"
    } else{
        delete errors.email
    }

    if(!data.password){
        errors.password = "Password is mandatory"
    } else if(data.password.length < 6){
        errors.password = "Enter at least 6 characters"
    } else{
        delete errors.password
    }
    
    if(type !== "login"){

        if(!data.username.trim()){
            errors.username = "Username is mandatory"
        } else if(data.username.length < 3){
            errors.username = "Enter at least 3 characters"
        } else {
            delete errors.username
        }

        if(!data.confirmPassword){
            errors.confirmPassword = "Confirm the password"
        } else if(data.confirmPassword !== data.password){
            errors.confirmPassword = "The password does not match"
        } else{
            delete errors.confirmPassword
        }

        if(!data.isAccept){
            errors.isAccept = "Accept the rules"
        } else{
            delete errors.isAccept 
        }
    }
    return errors;
}
