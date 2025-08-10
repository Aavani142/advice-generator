async function fetchAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    document.getElementById('advice').textContent = data.slip.advice;
  } catch (error) {
    document.getElementById('advice').textContent = 'Failed to fetch advice. Please try again.';
  }
}

document.getElementById('getAdviceBtn').addEventListener('click', fetchAdvice);
