function myFunction() {
    document.getElementById("demo").innerHTML = 5+8;
  }

  function kaushik() {
    document.getElementById("demo").innerHTML = 5*8;
  }

  const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const set = new Set(numbers);

const duplicates = numbers.filter(item => {
    if (set.has(duplicates)) {
        set.delete(item);
    } else {
        return item;
    }
});
console.log(duplicates);0
