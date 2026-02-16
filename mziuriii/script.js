let shopItems = [
  { id: 1, name: "ვაშლი", price: 2, category: "ხილი" },
  { id: 2, name: "პური", price: 1.5, category: "ცომეული" },
  { id: 3, name: "კოლა", price: 4, category: "სასმელი" },
];

const shopItemsNames = shopItems.map((item) => item.name);

const ul = document.getElementById("itemsList");
const appendNewItem = (item) => {
  const li = document.createElement("li");
  li.textContent = item.name;
  ul.appendChild(li);
};

const renderList = (array = shopItems) => {
  ul.innerHTML = "";
  for (let item of array) {
    appendNewItem(item);
  }
};
renderList();

const addNewItem = () => {
  const input = document.getElementById("item-input");
  const newItem = input.value;

  if (input.value === "") {
    alert("ინფუთი ცარიელია");
    return;
  }

  shopItems.push({
    id: shopItems.length + 1,
    name: newItem,
    price: 0,
  });
  renderList();

  input.value = "";
};
const deleteLastItem = () => {
  shopItems.pop();
  renderList();
};

const addNewItemAtStart = () => {
  const input = document.getElementById("item-input");

  if (input.value === "") {
    alert("ინფუთი ცარიელია");
    return;
  }

  shopItems.unshift({
    id: shopItems.length + 1,
    name: input.value,
    price: 0,
  });

  renderList();
};

const deleteFirstItem = () => {
  shopItems.shift();
  renderList();
};

const searchItems = () => {
  const searchInput = document.getElementById("search-input");
  const searchValue = searchInput.value;

  const filteredItems = shopItems.filter(function (item) {
    return item.name.includes(searchValue);
  });

  renderList(filteredItems);
};
