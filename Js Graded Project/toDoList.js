window.onload = () => {
	const form1 = document.querySelector("#addForm");

	let items = document.getElementById("items");
	let submit = document.getElementById("submit");
	let editItem = null;

	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);
};
function addItem(e) {
	e.preventDefault();
	if (submit.value != "Submit") {
		editItem.target.parentNode.childNodes[0].data = document.getElementById("item").value;
		submit.value = "Submit";
		document.getElementById("item").value = "";
		return false;
	}
	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null) {
		return false;
    }
	else {
		document.getElementById("item").value = "";
    }
	let li = document.createElement("li");
	li.className = "list-group-item";

	let editButton = document.createElement("button");
	editButton.className ="edit";
	editButton.appendChild(document.createTextNode("Edit"));

	let deleteButton = document.createElement("button");
	deleteButton.className ="delete";
	deleteButton.appendChild(document.createTextNode("Delete"));

	li.appendChild(document.createTextNode(newItem));
    li.appendChild(editButton);
	li.appendChild(deleteButton);
	items.appendChild(li);
}
function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you Sure You Want To Delete?")) {
			let li = e.target.parentNode;
			items.removeChild(li);
		}
	}
	if (e.target.classList.contains("edit")) {
		document.getElementById("item").value = e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editItem = e;
	}
}

