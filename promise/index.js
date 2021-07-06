function MyPromise(fn){
    this.cbs = [];
    
    const resolve = value=>{
        setTimeout(()=>{
            this.data = value;
            this.cbs.forEach(element =>element(value));
        })
    };

    fn(resolve);
}

MyPromise.prototype.then = function(onFullFilled){
    return new MyPromise(resolve=>{
        this.cbs.push(()=>{
            const res = onFullFilled(this.data);
            if(res instanceof MyPromise){
                res.then(resolve)
            }else{
                resolve(res);
            }
        });
    });
};

new MyPromise(resolve=>{
    setTimeout(()=>{
        resolve(1);
    },500)
}).then(res=>{
    console.log(res);
    return new MyPromise(resolve=>{
        setTimeout(()=>{
            resolve(2)
        },500);
    });
}).then(console.log);