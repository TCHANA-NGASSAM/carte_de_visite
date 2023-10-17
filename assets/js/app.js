function createCard() {
    let name = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
  
    let card = document.getElementById("card");
    card.innerHTML = "<h2>" + name + "</h2>" +
                     "<p><strong>Profession :</strong> " + job + "</p>" +
                     "<p><strong>Email :</strong> " + email + "</p>" +
                     "<p><strong>Téléphone :</strong> " + phone + "</p>";
  
    card.style.display = "block";
  }