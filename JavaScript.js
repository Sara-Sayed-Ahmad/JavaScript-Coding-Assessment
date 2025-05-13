let inputSearch = document.getElementById('input');

async function getData(){
    try{
        const response = await fetch('https://dummyjson.com/quotes');

        if(response.ok){
            let data = await response.json();
            const list = document.getElementById('lists');

            list.innerHTML = data.quotes.map(item =>
                `<li>${item.quote}</li>`
            ).join('');

            let items = document.querySelectorAll('#lists li');
            filterData(inputSearch, items);
        }
        else{
            throw new Error('Failed to fetch data');
        }
    }
    catch(error){
        console.log(error);
    }
}

function filterData(inputSearch, items) {
    inputSearch.addEventListener('input', function() {
        const value = inputSearch.value.toLowerCase();

        items.forEach(item => {
            const text = item.innerText.toLowerCase();

            if(text.includes(value)){
                item.classList.remove('display');
            }
            else{
                item.classList.add('display');
            }
        });
    });
}

getData();