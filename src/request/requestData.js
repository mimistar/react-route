
let request={
    article:{
        getData:(parameter="",callback)=>{
            let url =  `http://jsonplaceholder.typicode.com/todos`
            console.log(url)
           return fetch(url)
                .then((res)=>res.json())
                .then(data=>{
                    callback(data)
                })
        }
    }

}
export default request