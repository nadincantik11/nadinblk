let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

// Contact

const name = document.getElementById("name").value;
const address = document.getElementById("address").value;
const numberPhone = document.getElementById("number").value;

const descValue = document.querySelector(".keterangan");
const submit = document.getElementById("submitContact");

function isEmpty() {
  if (name == "" || address == "" || numberPhone == "") {
    return true;
  } else {
    return false;
  }
}

submit.onclick = () => {
  if (!isEmpty) {
    descValue.innerHTML = `<p>Terima kasih telah mengisi form ini</p>`;
    descValue.classList.add("clicked");
  } else {
    descValue.innerHTML = `<p>Cek Terlebih dahulu</p>`;
    descValue.classList.remove("clicked");
  }
};
