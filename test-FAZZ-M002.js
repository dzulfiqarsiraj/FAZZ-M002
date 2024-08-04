// no.1
const findSimillarPrefix = (strs) => {
    let prefix = strs[0]
    let index = 1

    while(strs[index]){
        let tempStr = ""
        for(let i = 0; i < strs[index].length; i++){
            if(!prefix.indexOf(strs[index].substring(0, i))){
                tempStr = strs[index].substring(0, i)
            }
        }
        prefix = tempStr
        index ++
    }
    return prefix
}

const strs = ["flight","flower","flies","french"]
console.log(findSimillarPrefix(strs))


// no.2
const isPairedSymbol = (str) => {
    if(str.length % 2 !== 0){
        return false
    }

    const pattern = {
    "(": ")",
    "[":"]",
    "{":"}",
    }
    
    let count = 0;

    while(count < str.length){
        if(pattern[str[count]] !== str[count + 1]){
            return false
        }
        count += 2
    }
    return true
}


console.log(isPairedSymbol(str))