#include "Sorter.hpp"
#include <cstring>
#include <iostream>
#include <stdio.h>

Sorter::Sorter(int* arr, int length){
    this->arr = arr;
    this->length = length;
}

Sorter::Sorter(){
    this->arr = new int[8];
    this->length = 8;

    for(int k = 8; k > 0; k--){
        this->arr[8 - k] = k;
    }
}

Sorter::~Sorter(){
    delete arr;
}

void Sorter::loadData(int* arr, int length){
    delete arr;
    this->arr = arr;
    this->length = length;
}


void Sorter::swap(int* xp, int* yp){
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void Sorter::bubbleSort(){
    for(int i = 0; i < length - 1; i++){
        for(int j = 0; j < length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                swap(&arr[j], &arr[j + 1]);
            }
        }
    }
}

void Sorter::insertionSort(){
    int key;
    for(int i = 1; i < length; i++){
        key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j -= 1;
        }
        arr[j + 1] = key;
    }
}

void Sorter::merge(int* tArr, int l, int m, int r){
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[n1], R[n2];

    for(i = 0; i < n1; i++)
        L[i] = tArr[l + i];
    for(j = 0; j < n2; j++)
        R[j] = tArr[m + 1 + j];

    i = 0;
    j = 0;
    k = l;

    while( i < n1 && j < n2){
        if(L[i] <= R[j]){
            tArr[k] = L[i];
            i++;
        } else {
            tArr[k] = R[j];
            j++;
        }
        k++;
    }

    while(i < n1){
        tArr[k] = L[i];
        i++;
        k++;
    }

    while(j < n2){
        tArr[k] = R[j];
        j++;
        k++;
    }
}

void Sorter::actualMerge(int* tArr, int l, int r){
    if(l < r){
        int m = l + (r - l) / 2;

        actualMerge(tArr, l, m);
        actualMerge(tArr, m+1, r);
        merge(tArr, l, m, r);
    }
}

void Sorter::mergeSort(){
    actualMerge(arr, 0, length);
}

int Sorter::getDataPtr(){
    return (int) (size_t) arr;
}

int Sorter::getDataLength(){
    return length;
}

void Sorter::setData(int length){
    std::cout << "curr length c++: " << this->length << std::endl;
    std::cout << "Current in c++: " << arr << std::endl;

    int temp = this->length / 4;
    
    if(this->length % 4 != 0){
        temp += 1;
    }

    temp *= 4;

    arr = arr + temp + (length % 4);
    this->length = length;
}