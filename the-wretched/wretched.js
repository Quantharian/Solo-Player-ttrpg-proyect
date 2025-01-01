async function populate() {
    const request = new request('wretched.json');
  
    const response = await fetch(request);
    const superHeroes = await response.json();
}
console.log(request)