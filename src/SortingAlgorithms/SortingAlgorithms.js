function swap(arr,indx1,indx2){
    var arrayBar=document.getElementsByClassName("array-bar");
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
    let barOne = arrayBar[indx1].style;
    let barTwo = arrayBar[indx2].style;
    barOne.backgroundColor="orange";
    barTwo.backgroundColor="orange";
   let tempHeight = barOne.height
    barOne.height = barTwo.height;
    barTwo.height = tempHeight;
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
        var currentHeight=arrayBar[i].style.height;
        arrayBar[i].style.backgroundColor="red";
        var currentVal=arr[i];
        for(var j = i-1;j>=0 && arr[j]>currentVal;j--){
            arrayBar[j].style.backgroundColor="orange";
            await sleep(delay);
            arr[j+1] = arr[j];
            arrayBar[j+1].style.height = arrayBar[j].style.height;
            arrayBar[j].style.backgroundColor="#292b2c";
        }
        arrayBar[j+1].style.height = currentHeight;
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



export  {bubbleSort,selectionSort,insertionSort,mergeSort};