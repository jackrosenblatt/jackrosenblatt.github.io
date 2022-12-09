#include "Sorter.hpp"
#include <stdlib.h>
#include <stdio.h>
#include <time.h>

int main(){
    const int NUM_ITEMS = 50000;
    int* arrOriginal = new int[NUM_ITEMS];

    for(int k = 0; k < NUM_ITEMS; k++){
        arrOriginal[k] = rand() % 100;
    }

    Sorter* sort = new Sorter(arrOriginal, NUM_ITEMS);
    
    clock_t startBubble = clock();
    sort->bubbleSort();
    auto timeBubble = (double)(clock() - startBubble) / CLOCKS_PER_SEC;
    
    clock_t startInsertion = clock();
    sort->insertionSort();
    auto timeInsertion = (double)(clock() - startInsertion) / CLOCKS_PER_SEC;

    clock_t startMerge = clock();
    sort->mergeSort();
    auto timeMerge = (double)(clock() - startMerge) / CLOCKS_PER_SEC;

    printf("\nTime to sort with bubble: %.4f seconds", timeBubble);
    printf("\nTime to sort with insertion: %.4f seconds", timeInsertion);
    printf("\nTime to sort with merge: %.4f seconds\n", timeMerge);
}