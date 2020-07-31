/*字符串搜索之Sunday算法*/

const strSearch = (str,temp)=>{

    if(!str||!temp||(typeof str !=='string'||typeof temp!=='string')||str.length<temp.length){
        return -1;
    }

    const sl = str.length,tl = temp.length;
    let s=0,t=0;

    while(s<sl&&t<tl){
        if(str[s]===temp[t]){
            s++;t++;
        }else{
            if(s+tl<sl){
                const indexOfTemp = charLastIndexOf(temp,str[s+tl]);
                if(indexOfTemp>=0){
                    //如果文本串中参与比较的最后一位的下一位在模板串中存在
                    t=0;s=s+indexOfTemp
                }else{
                    //否则直接把模板串右移到不存在的位置的下一个开始比较
                    t=0;s=s+tl+1
                }
            }else{
                return -1;
            }
        }
    }
    if(t===tl){
        return s-t;
    }else{
        return -1;
    }
};

const charLastIndexOf = (str,ch)=>{
    for(let i=str.length-1,j=1;i>=0;i--,j++){
        if(str[i]===ch){
            return j;
        }
    }
    return -1;
};
let temps = ' ABCDDAB ABCDABCDABDE';
let target = 'BBC ABCDAB ABCDDAB ABCDDAB ABCDDAB ABCDDAB ABCDDAB ABCDDAB ABCDDAB ABCDDAB ABCDDAB ABCDDAB ABCDDAB ABCDABCDABDE';
console.time();
let result = strSearch(target,temps);
console.timeEnd();
console.log({target:target.length,tempLength:temps.length,result});