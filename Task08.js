function toHoursAndMin(num){
    let hours = parseInt(num / 60);
    let minutes = num % 60;
    if(hours == 1 && minutes == 1){
    return `${hours} hour and ${minutes} minute`;
    }else if(hours == 1){
        return `${hours} hour and ${minutes} minutes`;
    }else if(minutes == 1){
        return `${hours} hours and ${minutes} minute`;
    }else{
        return `${hours} hours and ${minutes} minutes`
    }
}
console.log(toHoursAndMin(121));