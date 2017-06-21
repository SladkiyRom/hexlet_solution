Наибольшим общим делителем (НОД) для двух целых чисел m и n называется наибольший из их общих делителей.
Пример: для чисел 70 и 105 наибольший общий делитель равен 35. Наибольший общий делитель существует и однозначно определён,
если хотя бы одно из чисел m или n не равно нулю.

solution.js

Экспортируйте функцию по умолчанию,
которая находит наибольший общий делитель двух положительных и целых чисел.

gcd(2, 3); // 1
gcd(6, 3); // 3
gcd(14, 21); // 7


// BEGIN (write your solution here)
const gcd = (m, n) => {
  while (m !== 0 && n !== 0)
  if (m > n) {
   m = m % n;
  }
  else {
   n = n % m;
  }

  return m + n;
};
gcd(2, 3);
export default gcd;
// END

//Решение учителя

// BEGIN
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export default gcd;
// END

