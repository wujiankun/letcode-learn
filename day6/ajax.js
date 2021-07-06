const xhr = new XMLHttpRequest();
xhr.open('get','https://163.com');
xhr.send();
xhr.onreadystatechange = function(){
    if(xhr.readyState===4&&xhr.status===200){
        console.log(xhr.responseXML);
    }
};

function deepCopy(target,map=new WeakMap()){
    if(typeof target==='object'){
        let newTarget = Array.isArray(target)?[]:{};
        if(map.has(target)){
            return target;
        }
        map.set(target,newTarget);
        for (const key in target) {
            if (target.hasOwnProperty(key)) {
                newTarget[key] = deepCopy(target[key],map);
            }
        }
        return newTarget;
    }else{
        return target;
    }
}

Function.prototype.myCall = function(context){
    //调用者合法性判断
    if(!this instanceof Function){
        throw new Error('type error');
    }
    context = context||window;
    let args = [...arguments].slice(1);
    context.fn = this;
    let result  = context.fn(...args);
    delete context.fn;
    return result;
}

Function.prototype.myApply = function(context){
    if(typeof this !=='function'){
        throw new Error('type error');
    }
    context = context||window||globalThis;
    context.fn = this;
    let result;
    if(arguments[1]){
        result = context.fn(...arguments[1])
    }else{
        result = context.fn()
    }
    delete context.fn;
    return result;
}

Function.prototype.myBind = function(context){
    if(typeof this !== 'function'){
        throw new Error('type error');
    }
    let fn = this;
    context = context||window;
    let args = [...arguments].slice(1);
    return function Fn(){
        return fn.apply(this instanceof Fn?this:context,args.concat(...arguments));
    }
}

function debounce(fn,wait){
    let timer;
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(fn.apply(this,arguments),wait);
    }
}

function throttle(fn,delay){
    let startTime = +new Date();
    return function(){
        let now = +new Date();
        if(now-startTime>delay){
            startTime = now;
            fn.apply(this,arguments);
        }
    }
}