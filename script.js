document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  var pdfFrame = document.getElementById("pdf-frame");

  document.querySelectorAll('.box').forEach(function(box) {
    box.addEventListener('click', function() {
      var pdfFile = box.getAttribute('data-pdf');
      var link = box.getAttribute('data-link');

      if (pdfFile) {
        pdfFrame.src = pdfFile;
        modal.style.display = "flex";
      } else if (link) {
        window.location.href = link;
      }
    });
  });

  span.onclick = function() {
    modal.style.display = "none";
    pdfFrame.src = ""; // Clear the iframe
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      pdfFrame.src = ""; // Clear the iframe
    }
  }
});