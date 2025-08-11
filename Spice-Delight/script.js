document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  alert(`Thanks, ${name}! Your reservation for ${date} at ${time} has been received.`);
  this.reset();
});
