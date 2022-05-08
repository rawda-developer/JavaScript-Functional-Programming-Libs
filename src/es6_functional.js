const forEach = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
};
const tellType = (data) => {
     console.log("The type of data is " + typeof data);
};
export { forEach, tellType };
