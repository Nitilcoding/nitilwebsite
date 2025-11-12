// आसान JavaScript: बटन क्लिक काउंट
let count = 0;
const btn = document.getElementById('incBtn');
const span = document.getElementById('count');

btn.addEventListener('click', () => {
  count += 1;
  span.textContent = count;
});