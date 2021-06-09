let num;
let score;
const ques1 = {
  question:'Для чего нужна сетевая модель OSI?',
  answer: ['Для определения mac-адреса компьютера по его ip-адресу.', 'Для идентификации сетевого устройства в сети IP.', 'Для стандартизации взаимодействия между сетевыми устройствами.', 'Для подсчета потребленного трафика пользователем.'],
  correctAnswer:'c'}
const ques2 = {
  question:'Сколько уровней содержит модель OSI?',
  answer:[5, 7, 4, 8],
  correctAnswer:'b'}
const ques3 = {
  question:'Сколько уровней содержит стек TCP/IP?',
  answer:[5, 7, 4, 8],
  correctAnswer:'c'}
const ques4 = {
  question:'Какой из перечисленных протоколов работает на транспортном уровне?',
  answer: ['SMTP', 'Ethernet', 'ZigBee', 'TCP'],
  correctAnswer:'d'}
let questions = [ques1, ques2, ques3, ques4];

// questions.forEach((elem) => {
//   if (elem.correctAnswer === 'c') console.log('Вопрос: ' + elem.question + 'Ответ: ' + elem.answer[2]);
// })

function checkAnswer(){
  questions.forEach((elem) => {
      let ans = prompt(elem.question + '\na) ' + elem.answer[0] + '\nb) ' + elem.answer[1] + '\nc) ' + elem.answer[2] + '\nd) ' + elem.answer[3]);
      if (ans == elem.correctAnswer) alert('Верно!');
      else alert('Не верно.')
  })
}
checkAnswer();
