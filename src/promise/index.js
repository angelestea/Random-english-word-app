const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey, its okay!');
        }else{
            reject('Whooops!');
        }
    })
};