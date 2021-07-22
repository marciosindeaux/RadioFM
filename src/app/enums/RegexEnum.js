class RegexEnum {
    static values() {
        return {
            channel: {
                pattern:"<#\\d{18}>",
                groups:["(<#)", "(\\d{18})", "(>)"]
            },
            youtube: {
                pattern:'https:\/\/(www.youtube.com|youtu.be)\/((watch\\?v=[\\w.-]+)|[\\w.-]+)',
                groups:[ "https://", "\/\/", "(www.youtube.com)", "(youtu.be)", "((www.youtube.com)|(youtu.be))", "\/", "(watch\\?v=[\\w.-]+)", "([\\w.-]+)", "((watch\\?v=[\\w.-]+)|([\\w.-]+))"]
            } 
        }
    }
}

module.exports = RegexEnum;