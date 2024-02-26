const fs = require("fs");
let allData = require("./allData");

const loadData = () => {
  try {
    const Datafile = fs.readFileSync("Data.json").toString();
    return JSON.parse(Datafile);
  } catch {
    return [];
  }
};

const savaAllData = (allData) => {
  const AllDataJson = JSON.stringify(allData);
  fs.writeFileSync("Data.json", AllDataJson);
};

function additem(id, fname, lname, age, city) {
  allData = loadData();

  let duplicateData = allData.find((item) => {
    return item.id == id;
  });
  if (duplicateData) {
    console.log("Duplicated ID");
  } else {
    allData.push({
      id: id,
      first: fname,
      sec: lname,
      Age: age,
      City: city,
    });
    savaAllData(allData);
  }
}

function Deleteitem(id) {
  allData = loadData();
  let Filterd = allData.filter((item) => {
    return item.id != id;
  });
  savaAllData(Filterd);
}

function Read(id) {
  allData = loadData();
  let FindItem = allData.find((item) => {
    return item.id == id;
  });
  if (FindItem) {
    console.log(FindItem);
  } else {
    console.log("Item not Exiest");
  }
}

function list() {
  allData = loadData();
  allData.forEach((element) => {
    console.log(element.first, element.sec, element.Age, element.City);
  });
}

module.exports = {
  additem,
  savaAllData,
  loadData,
  Deleteitem,
  Read,
  list,
};
