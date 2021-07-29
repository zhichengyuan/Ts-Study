class User {
    loginid:string = '';//描述是：账号，验证规则：1.必填。2，必须3-5个字符
    loginpwd:string = '12232';//必须是6-12个字符
    age:number =2 //必须是0-100之间的数字
    gendr:'男'|'女' = '男';
}