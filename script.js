function threeSum(arr, tar) {
// write your code here
	let closetsum = Number.MAX_VALUE;

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k = j+1;k<arr.length;k++){
                if(Math.abs(tar - closetsum) > Math.abs(tar - (arr[i]+arr[j]+arr[k]))){
                    closetsum = arr[i]+arr[j]+arr[k];
                }
            }
        }
    }
    return closetsum;
  
}

module.exports = threeSum;
