export function phoneNumber(num:string) {
    if(num){
        num = num.replace(/[^0-9]/g, "");
        return num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
    }else{
        return
    }
}