function convertToInt(x){
    return x | 0;
}

function add(x: number,y: number){    
    return convertToInt(x)+convertToInt(y);
}

export default {
    add
};