function getUserData() {
    const name = prompt('Введите своё имя:');
    const familiya = prompt('Введите свою фамилию:');
    const yosh = prompt('Введите свой возраст:');
    const atvet = prompt(
        `Выберите каким должны быть ваши данные:\n` +
        `1) С большими буквами\n` +
        `2) С маленькими буквами`
    );

    let name2 = name;
    let familiya2 = familiya;

    if (atvet === '1') {
        name2 = name.toUpperCase();
        familiya2 = familiya.toUpperCase();
    } else if (atvet === '2') {
        name2 = name.toLowerCase();
        familiya2 = familiya.toLowerCase();
    } else {
        alert('Пожалуйста выберите цифру 1 или 2');
        return;
    }
    
    const userDataHTML = `
        <p><strong>Имя:</strong> ${name2}</p>
        <p><strong>Фамилия:</strong> ${familiya2}</p>
        <p><strong>Возраст:</strong> ${yosh}</p>
    `;
    
    document.getElementById('userData').innerHTML = userDataHTML;
}

getUserData();