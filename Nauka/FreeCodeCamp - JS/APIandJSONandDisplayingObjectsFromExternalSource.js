
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {
          $(dom).

        var html = "";
        // Only change code below this line.
        
        
        /* 
        
        var cats = [
          {
            id: 0,
            imageLink: dasdasdssdsadas,
            altText: sdadsadsa,
            codeNames: asdasdasdasd
          };
          {
            id: 1,
            imageLink: dasdasdsadas,
            altText: sdadssadsa,
            codeNames: asdasdsssasdasd
          };
          {
            id: 2,
            imageLink: dasdasdasdsadas,
            altText: sdadsadsasdghasdghas,
            codeNames: asdasdasdasd
          };
        ]
        
        */
        
        // Dla każdego obiektu JSON-owego - u góry są 3 obiekty
        // Stwórz zmienną, która będzie oznaczać wartość klucza Obiektu
        // Dodaj diva
        // Dla każdego klucza obiektu
        // Dodaj zboldowany klucz i wartość po czym przejdź do następnej linii
        // Zamknij diva i przejdź do następnej linii;
   
        json.forEach(function(val) {
          var keys = Object.keys(val);
          html += "<div class='cat'>";
          
            keys.forEach(function(penis) {
              html += "<b>" + penis + ":</b> " + val[penis] + "<br>";
            }); 
          
          html += "</div></br>"
          
           
        });
          
        
        
        // Only change code above this line.

        $(".message").html(html);

      });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
   </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>

