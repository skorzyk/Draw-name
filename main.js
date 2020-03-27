const btn = document.querySelector('button');
const names = ['Jagienka', 'Izabela', 'Dobrawa', 'Marysia', 'Anastazja', 'Krystyna', 'Bogumila', 'Genowefa'];
const div = document.querySelector('div');
const prefixs = ['Wydaje mi się', 'Mam wrażenie', 'Szczerze powiedziawszy, myślę', 'Szczerze uważam', 'Na 100% twierdzę', 'Jestem pewien']







const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[indexPrefix]}, że najfajniejsze imię to ${names[indexName]}`
}



btn.addEventListener('click', nameGenerator);