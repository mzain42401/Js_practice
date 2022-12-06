let para=document.getElementById("para")
let btn=document.getElementById("btn")
btn.setAttribute("onclick","func()")
let obj=[
    {
        q:"what is your name?"
    },
    {
        q:"what is your age?"
    }
]
let index_Number=0;
const func=()=>{
    func1()
    index_Number++

}
const func1=(index_Number)=>{
    para.innerHTML=obj[index_Number].q
}