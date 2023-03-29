function Datatypes()
{
    let age=18;
    let name="kiran";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age);
    console.log(name);
    console.log(setStatus);
    console.log(userDefault);
    console.log(responseValue);
    
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(age);
    console.log(setStatus);
    const Hi=()=>{alert("Check the console output!")}
    return <div>
    Primitive Data types and copy the values<br></br>
    <button onClick={Hi}>Primitive Data Types and call the function</button>
    </div>
    
}
ReactDOM.render(<Datatypes/>,document.getElementById('mydiv'))
