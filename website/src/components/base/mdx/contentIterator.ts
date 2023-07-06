// Loosely based on the example code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators
export default function* createContentIterator<T>(content: T[]) {
  for(const value in content){
    yield content[value];
  }
}