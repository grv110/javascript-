function outer(){
    let name = "grv";

    function inner(){
        let name1 = "srv";
        console.log(name);
        console.log(name1);

    }
    inner();
}
outer();