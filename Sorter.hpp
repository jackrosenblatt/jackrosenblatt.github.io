class Sorter{
    private:
        int* arr;
        int length;
        void swap(int* xp, int* yp);
        void merge(int*, int, int, int);
        void actualMerge(int*, int, int);
        int* makeCopy();

    public:
        Sorter(int*, int);
        Sorter();
        ~Sorter();

        void loadData(int*, int);
        void bubbleSort();
        void insertionSort();
        void mergeSort();

        int getDataPtr();
        int getDataLength();
        void setData(int);
};