// alert("hello");
const validateForm = () => {
  let productId = document.getElementById("productId").value;
  let ProductName = document.getElementById("ProductName").value;
  let Image = document.getElementById("Image").value;
  let Price = document.getElementById("Price").value;
  let Description = document.getElementById("Description").value;

  if (productId == "") {
    alert("please Enter your productId");
    return false;
  } else if (productId < 1) {
    alert("please Enter valid productId");
    return false;
  }
  if (ProductName == "") {
    alert("please Enter your ProductName");
    return false;
  }
  if (Image == "") {
    alert("please Enter valid Image Link");
    return false;
  }
  if (Price == "") {
    alert("please Enter valid Price");
    return false;
  }
  if (Description == "") {
    alert("please Enter valid Description");
    return false;
  }
  return true;
};

const showData = () => {
  let peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  let html = "";
  peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.productId + "</td>";
    html += "<td>" + element.ProductName + "</td>";
    html += "<td>" + element.Image + "</td>";
    html += "<td>" + element.Price + "</td>";
    html += "<td>" + element.Description + "</td>";
    html +=
      '<td><button onclick="showdata(' +
      index +
      ')" class="btn btn-success m-2">Show</button><button onclick="updateData(' +
      index +
      ')" class="btn btn-warning m-2">Edit</button> <button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger">delete</button> </td>';
    html += "</tr>";
  });
  document.querySelector("#crudTable tbody").innerHTML = html;
};

document.onload = showData();

const AddData = () => {
  if (validateForm() == true) {
    let productId = document.getElementById("productId").value;
    let ProductName = document.getElementById("ProductName").value;
    let Image = document.getElementById("Image").value;
    let Price = document.getElementById("Price").value;
    let Description = document.getElementById("Description").value;
    let peopleList;
    if (localStorage.getItem("peopleList") == null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    peopleList.push({
      productId: productId,
      ProductName: ProductName,
      Image: Image,
      Price: Price,
      Description: Description,
    });
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    document.getElementById("productId").value = "";
    document.getElementById("ProductName").value = "";
    document.getElementById("Image").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Description").value = "";
  }
};

const deleteData = (index) => {
  let peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  peopleList.splice(index, 1);
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
  document.getElementById("productId").value = "";
  document.getElementById("ProductName").value = "";
  document.getElementById("Image").value = "";
  document.getElementById("Price").value = "";
  document.getElementById("Description").value = "";

  document.getElementById("submit").style.display = "block";
};

const updateData = (index) => {
  document.getElementById("submit").style.display = "none";
  document.getElementById("Update").style.display = "block";
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  document.getElementById("productId").value = peopleList[index].productId;
  document.getElementById("ProductName").value = peopleList[index].ProductName;
  document.getElementById("Image").value = peopleList[index].Image;
  document.getElementById("Price").value = peopleList[index].Price;
  document.getElementById("Description").value = peopleList[index].Description;

  document.querySelector("#Update").onclick = function () {
    if (validateForm() == true) {
      peopleList[index].productId = document.getElementById("productId").value;
      peopleList[index].ProductName =
        document.getElementById("ProductName").value;
      peopleList[index].Image = document.getElementById("Image").value;
      peopleList[index].Price = document.getElementById("Price").value;
      peopleList[index].Description =
        document.getElementById("Description").value;
      localStorage.setItem("peopleList", JSON.stringify(peopleList));
      showData();
      document.getElementById("productId").value = "";
      document.getElementById("ProductName").value = "";
      document.getElementById("Image").value = "";
      document.getElementById("Price").value = "";
      document.getElementById("Description").value = "";

      document.getElementById("submit").style.display = "block";
      document.getElementById("Update").style.display = "none";
    }
  };
};

const showdata = (index) => {
  document.getElementById("submit").style.display = "none";
  document.getElementById("Update").style.display = "none";
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  document.getElementById("productId").value = peopleList[index].productId;
  document.getElementById("ProductName").value = peopleList[index].ProductName;
  document.getElementById("Image").value = peopleList[index].Image;
  document.getElementById("Price").value = peopleList[index].Price;
  document.getElementById("Description").value = peopleList[index].Description;
};
const searchFun = () => {
  let filter = document.getElementById("myInput").value.toLowerCase();
  let myTable = document.getElementById("crudTable");
  let tr = myTable.getElementsByTagName("tr");
  for (let index = 0; index < tr.length; index++) {
    let td = tr[index].getElementsByTagName("td")[1];
    if (td) {
      let textvalue = td.textContent || td.innerHTML;
      if (textvalue.toLowerCase().indexOf(filter) > -1) {
        tr[index].style.display = "";
      } else {
        tr[index].style.display = "none";
      }
    }
  }
};
