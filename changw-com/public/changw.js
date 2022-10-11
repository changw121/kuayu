//通分富哦CORS访问qq.com数据
// const request = new XMLHttpRequest()
// request.open('GET', 'http://localhost:8888/friends.json')
// request.onreadystatechange = ()=>{
//     if(request.readyState === 4 && request.status ===200){
//         console.log(request.response)
//     }
// }
// request.send()

//回调
// window.xxx = (data)=>{
//     console.log(data)
// }

//优化xxx
const random = 'changwJSONPCallbackName' + Math.random()
console.log(random)
window[random] = (data)=>{
    console.log(data)
}

const script = document.createElement('script')
script.src = `http://localhost:8888/friends.js?functionName=${random}`  // json不让访问，js总让访问吧
script.onload = ()=>{
    script.remove()  //用完script标签就删掉
}
document.body.appendChild(script)