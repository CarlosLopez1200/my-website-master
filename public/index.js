var students = [
    {
      lname: "Lopez",
      name: "Carlos ",
      age: 21,
      birthday: {
        year: 2000,
        month: "June",
        day: 12
      },
      Career: "IDYGS"
    },
    {
      lname: "De Leon",
      name: "Angelica",
      age: 21,
      birthday: {
        year: 2000,
        month: "June",
        day: 9
      },
      Career: "IDYGS"
    },
    {
      lname: "Gonzalez",
      name: "Edson",
      age: 21,
      birthday: {
        year: 2000,
        month: "February",
        day: 4
      },
      Career: "IDYGS"
    }
  ]
  
  var table = document.getElementsByTagName("table")[0];
  for (var i = 0; i < students.length; i++) {
    var templ = document.getElementById("tbodytempl").content.cloneNode(true);
    var tdnumber = templ.querySelector("span[name='tbodynumber']");
    var tdname = templ.querySelector("span[name='tbodyname']");
    var tdage = templ.querySelector("span[name='tbodyage']");
    var tdcareer = templ.querySelector("span[name='tbodycareer']");
  
    tdnumber.innerText = i + 1;
    tdname.innerText = students[i].lname + " " + students[i].name;
    tdage.innerText = students[i].age;
    tdcareer.innerText = students[i].Career;
  
    table.append(templ);
  }