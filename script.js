// получаем элементы по id
let input1 = document.querySelector('#input_1');
let input2 = document.querySelector('#input_2');
let res = document.querySelector('#output');

// функция прибовления двух чисел
const add = () => {
  res.innerHTML = +input1.value + +input2.value;
};

const min = () => {
  res.innerHTML = +input1.value - +input2.value;
};

const mult = () => {
  res.innerHTML = +input1.value * +input2.value;
};

const del = () => {
  res.innerHTML = +input1.value / +input2.value;
};

const reset = () => {
  res.innerHTML = '00';
  input1.value = '';
  input2.value = '';
};
