const add = () => {
  let input1 = +document.querySelector('#input_1').value;
  let input2 = +document.querySelector('#input_2').value;
  let output = document.querySelector('#output');
  let res;

  res = input1 + input2;
  output.innerHTML = res;
};

const minus = () => {
  let input1 = +document.querySelector('#input_1').value;
  let input2 = +document.querySelector('#input_2').value;
  let output = document.querySelector('#output');
  let res;

  res = input1 - input2;
  output.innerHTML = res;
};

const mult = () => {
  let input1 = +document.querySelector('#input_1').value;
  let input2 = +document.querySelector('#input_2').value;
  let output = document.querySelector('#output');
  let res;

  res = input1 * input2;
  output.innerHTML = res;
};

const del = () => {
  let input1 = +document.querySelector('#input_1').value;
  let input2 = +document.querySelector('#input_2').value;
  let output = document.querySelector('#output');
  let res;

  res = input1 / input2;
  output.innerHTML = res;
};

const reset = () => {
  document.querySelector('#input_1').value = '';
  document.querySelector('#input_2').value = '';
  document.querySelector('#output').innerHTML = '00';
};
