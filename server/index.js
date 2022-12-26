if (process.argv[2] === "test") {
  console.log("hello");

  console.log(6 + 5);
  console.log(+process.argv[3] + parseInt(process.argv[4]));
 
  console.log(process.argv);
} else {
    console.log("only this one");
}
