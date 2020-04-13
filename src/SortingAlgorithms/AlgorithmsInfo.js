const AlgorithmsInfo = { 
       
"Merge Sort" : {
    main:' Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one',
    moreInfo:'https://en.wikipedia.org/wiki/Merge_sort',
    best:'Ω(n log(n))',
    average:'θ(n log(n))',
    worst:'O(n log(n))'
},

 "Quick Sort" : {
    main:'QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.',
    moreInfo:'https://en.wikipedia.org/wiki/Quicksort',
    best:'Ω(n log(n))',
    average:'θ(n log(n))',
    worst:'O(n^2)'
},

"Selection Sort" : {
    main:'The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array .1) The subarray which is already sorted.2) Remaining subarray which is unsorted.In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.',
    moreInfo:'https://en.wikipedia.org/wiki/Selection_sort',
    best:'Ω(n^2)',
    average:'θ(n^2)',
    worst:'O(n^2)'
},

"Bubble Sort" : {
    main:'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.',
    moreInfo:'https://en.wikipedia.org/wiki/Bubble_sort',
    best:'Ω(n)',
    average:'θ(n^2)',
    worst:'O(n^2)'
},

"Insertion Sort" : {
    main:'Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands. Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.',
    moreInfo:'https://en.wikipedia.org/wiki/Insertion_sort',
    best:'Ω(n)',
    average:'θ(n^2)',
    worst:'O(n^2)'
},

"Radix Sort" : {
    main:'Radix sort is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their radix. The idea of Radix Sort is to do digit by digit sort starting from least significant digit to most significant digit. Radix sort uses counting sort as a subroutine to sort.',
    moreInfo:'https://en.wikipedia.org/wiki/Radix_sort',
    best:'Ω(nk)',
    average:'θ(nk)',
    worst:'O(nk)'
},

}

export {AlgorithmsInfo};