const Objects =[
    {name: 'Bread', price: 250},
    {name: 'Shoes', price: 59.99},
    {name: 'Lambo', price: 1.99},
    {name: 'My right lung', price: 2.50},
    {name: 'Gourmet stuff', price: 9999}
]



const addItemContainer = document.getElementsByClassName('add-item-container')

Objects.forEach(element => {
    for (let i = 0; i < addItemContainer.length; i++) {
        const container = addItemContainer[i];
        const name = element.name
        const price = element.price.toFixed(2)
        container.insertAdjacentHTML("afterbegin",`<div class="add-item">
        <span id="add-item-name">${name}</span>
        <p id="add-item-price">$${price}</p>
        <button id="add-button">Add</button>
        </div>`)
    }
});
const addBtn = document.querySelectorAll('#add-button')
for (let i = 0; i < addBtn.length; i++) {
        const clicked = addBtn[i];
        clicked.addEventListener('click', (e) =>{
            e.preventDefault();
            itemWrapper.insertAdjacentHTML('afterbegin', `<div class="item">
                        <span class="item-name">${nameValue}</span>
                        <div class="quantity-container">
                            <input type="number" id="quantity"></input>
                        </div>
                        <div class="price-container">
                            <span id="price">$${priceValue.innerHTML}</span>
                        </div>
                        <button class="remove-btn">Remove</button>
                    </div>`)
                    
                    const removeButton = document.querySelectorAll('.remove-btn')
                    
                    for (let i = 0; i < removeButton.length; i++) {
                        const clickedBtn = removeButton[i];
                        clickedBtn.addEventListener('click', (e) =>{
                            clickedBtn.parentNode.remove()
                        })
                    }
                })
    }
const nameValue = document.querySelectorAll('#add-item-name')
const priceValue = document.querySelectorAll('#add-item-price')
const itemWrapper = document.querySelector('.item-wrapper') 






    const removeAll = document.getElementById('remove-all-btn')
    removeAll.addEventListener('click', (e) =>{
        e.preventDefault();
        itemContainer.innerHTML = '';
    })
    const itemContainer = document.querySelector('.item-wrapper')
    
    

    


