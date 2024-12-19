async function getJoke() {
    const jokeElement = document.getElementById('joke');
    try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
      const data = await response.json();
      console.log(data)
      jokeElement.textContent = `${data[0].setup} - ${data[0].punchline}`;
    } catch (error) {
      jokeElement.textContent = '';
      console.error('Error fetching joke:', error);
    }
  }
  
  // Fetch a programming joke when the page loads
  window.onload = getJoke;
  