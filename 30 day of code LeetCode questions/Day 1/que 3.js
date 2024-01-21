//3. Swap two numbers without using a temporary variable.

const swap = (a,b) =>{

    a=a+b;
    b=a-b;
    a=a-b;
   
return [a, b];
}

const main = () =>{

    let a=2, b=3;
    console.log("a = " +a+ " and b = "+ b );
    [a,b]=swap(2,3);
    console.log("a = " +a+ " and b = "+ b );
}   

main()