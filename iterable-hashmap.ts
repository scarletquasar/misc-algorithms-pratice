type IterableHashmap<T> = 
  ({ [key in keyof T]: string }) 
  & ({ [Symbol.iterator](): IterableIterator<[keyof T, T[keyof T]]> });

function ihmap<T>(obj: T) {
  const iterator = function *() {
    const entries = Object.entries(obj as any);
    for(const entry of entries) {
      yield entry
    }
  }

  return Object.assign(obj as any, { [Symbol.iterator]: iterator }) as IterableHashmap<T>
}

const obj = ihmap({
  a: "test1",
  b: "test2"
});

for(const entry of obj){
  console.log(entry);
}
