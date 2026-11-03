/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let updatedarr= arr.map((ele)=>{
    return ele;
  }).filter((ele)=>{
    return ele.profession === "developer";
  })

  console.log(updatedarr);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((ele)=>{
    if(ele.profession==="developer"){
      console.log(ele);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({
        id: 4,
        name: "susan",
        age: "20",
        profession: "intern"
    });

    console.log(arr);
  
}

function removeAdmin() {
  //Write your code here, just console.log
  let updatedarr = arr.filter((ele) => {
        return ele.profession !== "admin";
    });

    console.log(updatedarr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = arr.concat([
        { id: 4, name: "susan", age: "20", profession: "intern" }
    ]);

    console.log(newArray);
}
