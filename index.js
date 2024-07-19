let form=document.getElementById("form")
let arr=JSON.parse(localStorage.getItem("user")) ||[]
 let btn=document.getElementById("btn")
 btn.addEventListener("click",getvalue)
 function getvalue(ele){
    ele.preventDefault()
    let obj={
        name:document.getElementById("name").value,
        mobile:document.getElementById("mobile").value,
        email:document.getElementById("email").value,
        password:document.getElementById("passward").value,
        father_name:document.getElementById("father_name").value,
        dob:document.getElementById("date_of_birth").value,
        Course:document.getElementById("select").value

    }

    arr.push(obj)
    localStorage.setItem("user",JSON.stringify(arr));
    console.log(arr)

    alert("Thanks for Submit")
    form.reset();

 }


