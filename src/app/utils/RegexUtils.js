class RegexUtils {
    static extrairRegex(content, pattern) {
        if(this.isRegexCompativelComTexto(content, pattern)){
            let exec = new RegExp(pattern).exec(content) 
            return exec[0]
        }
        return '';
    }

    static isRegexCompativelComTexto(content , pattern) {
        let exec = new RegExp(pattern).exec(content)
        console.log(exec)
        console.log(`content: ${content},\npattern: ${pattern}`)
        return exec !=null  && exec.index != undefined;
    } 
}

module.exports = RegexUtils