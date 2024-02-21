import Validator from './validator.js';

test('Проверяем корректность имени', () => {
  const user = new Validator('Us_11-r');
  expect(user.validateUsername()).toBe(true);
});

test('Проверяем на содержание символов латинских букв', () => {
  const user = new Validator('Us_я1-r');
  expect(user.validateUsername()).toBe(false);
});

test('Проверяем на содержание символов кроме тире -, подчёркивания _ и цифр (0-9)', () => {
  const user = new Validator('Us_!!1-r');
  expect(user.validateUsername()).toBe(false);
});

test('Проверяем на содержание более трех цифр подряд', () => {
  const user = new Validator('Us_112-r');
  expect(user.validateUsername()).toBe(false);
});

test('Проверяем на начало без цифр', () => {
  const user = new Validator('1Us_11-r');
  expect(user.validateUsername()).toBe(false);
});

test('Проверяем на начало без _', () => {
  const user = new Validator('_Us_11-r');
  expect(user.validateUsername()).toBe(false);
});

test('Проверяем на начало без -', () => {
  const user = new Validator('-Us_11-r');
  expect(user.validateUsername()).toBe(false);
});

test('Проверяем на конец без цифр', () => {
  const user = new Validator('Us_11-r1');
  expect(user.validateUsername()).toBe(false);
});

test('Проверяем на конец без _', () => {
  const user = new Validator('Us_11-r_');
  expect(user.validateUsername()).toBe(false);
});

test('Проверяем на конец без -', () => {
  const user = new Validator('Us_11-r-');
  expect(user.validateUsername()).toBe(false);
});
