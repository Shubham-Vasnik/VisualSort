function swap(arr,indx1,indx2){
    var arrayBar=document.getElementsByClassName("array-bar");
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
    let barOne = arrayBar[indx1].style;
    let barTwo = arrayBar[indx2].style;
    barOne.backgroundColor="orange";
    barTwo.backgroundColor="orange";
    barOne.height = `${arr[indx1]}px`;
    barTwo.height = `${arr[indx2]}px`
}

const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };


 const bubbleSort = async (arr,delay) => {
    var arrayBar=document.getElementsByClassName("array-bar");
    let noSwaps;
    for(var i = arr.length;i>0;i--){
        noSwaps=true;
        for(var j = 0;j<i-1;j++){
            arrayBar[j].style.backgroundColor="red";
            arrayBar[j+1].style.backgroundColor="red";
           await sleep(delay);
            arrayBar[j].style.backgroundColor="#292b2c";
            arrayBar[j+1].style.backgroundColor="#292b2c";
            if(arr[j]>arr[j+1]){
                noSwaps=false;
                swap(arr,j,j+1);
                await sleep(delay);
                arrayBar[j].style.backgroundColor="#292b2c";
                arrayBar[j+1].style.backgroundColor="#292b2c";
            }
        }
        if(noSwaps){
            for(var k = 0;k<arrayBar.length;k++){
                arrayBar[k].style.backgroundColor="green";
            }
            break;
        }
        arrayBar[i-1].style.backgroundColor="green";
    }
    return arr;
}

const selectionSort = async(arr,delay) => {
    var arrayBar=document.getElementsByClassName("array-bar");
    for(var i=0;i<arr.length;i++){
        var min=i;
        for(var j=i+1;j<arr.length;j++){
            arrayBar[min].style.backgroundColor="red";
            arrayBar[j].style.backgroundColor="red";
           await sleep(delay);
            arrayBar[min].style.backgroundColor="#292b2c";
            arrayBar[j].style.backgroundColor="#292b2c";
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(i !== min){
            swap(arr,i,min);
        }
        arrayBar[i].style.backgroundColor="green";
    }
    
    return arr;
};

const insertionSort = async (arr,delay) =>{
    var arrayBar=document.getElementsByClassName("array-bar");
    for(var i = 1;i<arr.length;i++){
        arrayBar[i].style.backgroundColor="red";
        var currentVal=arr[i];
        for(var j = i-1;j>=0 && arr[j]>currentVal;j--){
            arrayBar[j].style.backgroundColor="orange";
            await sleep(delay);
            arr[j+1] = arr[j];
            arrayBar[j+1].style.height = `${arr[j+1]}px`;
            arrayBar[j].style.backgroundColor="#292b2c";
        }
        arrayBar[j+1].style.height = `${currentVal}px`;
        arr[j+1] = currentVal;
    }
    for( var k = 0;k<arrayBar.length;k++){
        arrayBar[k].style.backgroundColor="green";
    }
    return arr;
}



const merge = async (arr,start,mid,end,arr2,delay) => {
    var arrayBar=document.getElementsByClassName("array-bar");
    let k = start;
    let i = start;
    let j = mid +1;
    while(i<=mid && j<=end){
        
        arrayBar[i].style.backgroundColor='red';
        arrayBar[j].style.backgroundColor='red';
        await sleep(delay);
        arrayBar[i].style.backgroundColor='#292b2c';
        arrayBar[j].style.backgroundColor='#292b2c';

        if(arr2[i]<=arr2[j]){
            arrayBar[k].style.height=`${arr2[i]}px`;
            arr[k++]=arr2[i++];
            
        }
        else{
            arrayBar[k].style.height=`${arr2[j]}px`;
            arr[k++]=arr2[j++];
        }
    }
    while(i<=mid){
        arrayBar[i].style.backgroundColor='red';
        await sleep(delay);
        arrayBar[i].style.backgroundColor='#292b2c';
        arrayBar[k].style.height=`${arr2[i]}px`;
        arr[k++] = arr2[i++];
        
    }
    while(j<=end){
        arrayBar[j].style.backgroundColor='red';
        await sleep(delay);
        arrayBar[j].style.backgroundColor='#292b2c';
        arrayBar[k].style.height=`${arr2[j]}px`;
        arr[k++] = arr2[j++];
        
    }
}

const mergeSort = async (arr,start,end,arr2,delay) => {
    if(start===end){
        return;
    }
    const mid = Math.floor((start+end)/2);
    await Promise.all([mergeSort(arr2,start,mid,arr,delay),mergeSort(arr2,mid+1,end,arr,delay)]);
    await merge(arr,start,mid,end,arr2,delay);
    console.log(arr);

    var arrayBar=document.getElementsByClassName("array-bar");
    for(var i = 0;i<arr.length;i++){
        if(arr[i]<=arr[i+1]){
            arrayBar[i].style.backgroundColor="green";
        }
    }
    arrayBar[arr.length-1].style.backgroundColor="green";
}


const partition = async (arr,start,end,delay) =>{
    var arrayBar=document.getElementsByClassName("array-bar");
    let pivot = arr[start];
    let pivotIndx = start;
    for(var i = start + 1;i <= end;i++){
        arrayBar[i].style.backgroundColor='red';
        arrayBar[pivotIndx].style.backgroundColor='red';
        if(pivot>arr[i]){
            pivotIndx++;
            swap(arr,i,pivotIndx);
        }
        await sleep(delay+2);
        arrayBar[i].style.backgroundColor='#292b2c';
        arrayBar[pivotIndx].style.backgroundColor='#292b2c';  
    }
    swap(arr,start,pivotIndx);
    arrayBar[start].style.backgroundColor='#292b2c';
    arrayBar[pivotIndx].style.backgroundColor='green';
//     console.log(arr);
    return pivotIndx;
}

const quickSort = async (arr,start,end,delay) =>{
    if(start>end){
        return;
    }
    var pivot = await partition(arr,start,end,delay);
    await Promise.all(
        [
            quickSort(arr,start,pivot-1,delay),
            quickSort(arr,pivot+1,end,delay)
        ]
    );
    

    return arr;
}

const getDigit = (num,i) =>{
    return Math.floor((Math.abs(num)/10**i)%10);
}

const digitCount = (num) =>{
    if(num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (nums) => {
    let maxDigits = 0;
    for(let i = 0;i<nums.length;i++){
        maxDigits = Math.max(maxDigits,digitCount(nums[i]));
    }
    return maxDigits;
}

const  radixSort = async (arr,delay) =>{
    const colors = ['#FFFF00','#808000','#00FFFF','#008080','#0000FF','#000080','#FF00FF','#800080','#800000','#00FF00'];
    let arrayBar=document.getElementsByClassName("array-bar");
    let maxDigitCount = mostDigits(arr);
    for(let i = 0;i<maxDigitCount;i++){
       let digitBuckets = Array.from({length:10},() => []);
       let trackColor = {}
       for(let j = 0;j<arr.length;j++){
           let digit = getDigit(arr[j],i);
           digitBuckets[digit].push(arr[j]);
           arrayBar[j].style.backgroundColor=colors[digit];
           trackColor[arr[j]] = digit;
           await sleep(delay);
       }
       arr = [].concat(...digitBuckets);
       
       for(let k = 0;k<arrayBar.length;k++){
           arrayBar[k].style.height=`${arr[k]}px`;
           arrayBar[k].style.backgroundColor = colors[trackColor[arr[k]]];
       }
       await sleep(delay * 100);
       for(let k = 0;k<arrayBar.length;k++){
        arrayBar[k].style.backgroundColor='#292b2c';
    }
    }
    for(let k = 0;k<arrayBar.length;k++){
        arrayBar[k].style.backgroundColor="green";
    }
    return arr;
}

export  {bubbleSort,selectionSort,insertionSort,mergeSort,quickSort,radixSort};