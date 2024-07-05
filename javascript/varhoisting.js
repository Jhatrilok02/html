function testHoisting()
{
    name="saching";
    console.log(name);
    var name;


    setTimeout(()=>{console.log("Timeout");},2000);
    setInterval(()=>{console.log("Intervsl");},3000)
}

testHoisting();
