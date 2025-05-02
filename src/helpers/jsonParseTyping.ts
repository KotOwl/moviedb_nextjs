export const jsonParseTyping =<T,>(str:string|string[]|undefined|null) =>{
    if(str){
        if(!Array.isArray(str)){
    const parse = JSON.parse(str);
    return parse as T}}

    else return {}as T
}