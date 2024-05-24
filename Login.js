function login(input){
    let password = "";
    let strikes = 0;
    

    for(let i = input[0].length - 1; i >= 0; i--){
        password += input[0].charAt(i);
       
    }
    
    let i = 1;    
    let currentRow = input[i];
    
    while(currentRow !== password){
            if(currentRow === "password"){
                console.log(`User ${input[0]} logged in.`);
                return;
            }else if (strikes >= 3) {
                console.log(`User ${input[0]} blocked!`);
                return;
            }
        
        console.log("Incorrect password. Try again.");
        
        strikes++
        i++
        currentRow = input[i];
        
    }
    console.log(`User ${input[0]} logged in.`);
}
//login(['Acer','login','go','let me in','recA']);
login(['sunny','rainy','cloudy','sunny','notsunny']);
 //login(['momo', 'omom']);
