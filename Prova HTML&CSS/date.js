// Pega o elemento de ID 'date'
const dateInput = document.getElementById('date');

// Adiciona um evento e compara se o valor é diferente de ' ', senão fica transparente
dateInput.addEventListener('input', () => {
    if (dateInput.value !== '') 
    {
        dateInput.style.color = 'white';
    } 
    else 
    {
        dateInput.style.color = 'transparent';
    }
});
if (dateInput.value !== '') {
    dateInput.style.color = 'white';
}