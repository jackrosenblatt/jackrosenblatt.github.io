
#include <emscripten.h>

EM_JS_DEPS(webidl_binder, "$intArrayFromString");

extern "C" {

// Not using size_t for array indices as the values used by the javascript code are signed.

EM_JS(void, array_bounds_check_error, (size_t idx, size_t size), {
  throw 'Array index ' + idx + ' out of bounds: [0,' + size + ')';
});

void array_bounds_check(const int array_size, const int array_idx) {
  if (array_idx < 0 || array_idx >= array_size) {
    array_bounds_check_error(array_idx, array_size);
  }
}

// VoidPtr

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VoidPtr___destroy___0(void** self) {
  delete self;
}

// Sorter

Sorter* EMSCRIPTEN_KEEPALIVE emscripten_bind_Sorter_Sorter_0() {
  return new Sorter();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Sorter_bubbleSort_0(Sorter* self) {
  self->bubbleSort();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Sorter_insertionSort_0(Sorter* self) {
  self->insertionSort();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Sorter_mergeSort_0(Sorter* self) {
  self->mergeSort();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_Sorter_getDataPtr_0(Sorter* self) {
  return self->getDataPtr();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_Sorter_getDataLength_0(Sorter* self) {
  return self->getDataLength();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Sorter_setData_1(Sorter* self, int length) {
  self->setData(length);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Sorter___destroy___0(Sorter* self) {
  delete self;
}

}

