// Loosely based on the example code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators
export default function createContentIterator<T>(content: T[]) {
    let index = 0;
    const end = content.length;
    const contentIterator = {
      next() {
        if (index < end) {
          return content[index++];
        }
        return undefined;
      },
    };
    return contentIterator;
  }
  