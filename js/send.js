
$("#send").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var posting = $.post("https://script.google.com/macros/s/AKfycbxMbOEH4fISOWd3eCYqyY2FqFIbO9rUDeCboyxPGcr7TtbOAGk/exec", { name: name, email: email, message: message },
    function(data) {
   if (response == "success") {
                    alert("Form submitted successfully!");
                } else {
                    alert("Form submission failed!");
                }
   


    }
    );
    posting.done(function( data ) {
        alert('success');
      });

    alert("Message sent successfully!");
    $('#formoid')[0].reset();
});


const toggle = document.querySelector('.toggle-input');

toggle.addEventListener('change', function() {
    var count=parseInt(sessionStorage.getItem("count"));
    console.log(count);
    count=count+1;

    if(count%2==0){
        document.body.style.setProperty("--primary-color", "#D43F52");
        document.body.style.setProperty("--secondary-color", "#fff");
        document.body.style.setProperty("--tertiary-color", "#999");
        document.body.style.setProperty("--background-color", "#111");
        document.body.style.setProperty("--secondary-background-color", "#1a1a1a");
        document.getElementById("navi").classList.add("navbar-inverse");
        document.getElementById("navi").classList.remove("navbar-default");
        document.body.style.setProperty("--modal-background-color", "rgb(0,0,0,0.8)");

         var link = document.createElement('link'),
             oldLink = document.getElementById('favicon');
         link.id = 'favicon';
         link.rel = 'shortcut icon';
         link.type='image/x-icon';
         link.href = 'images/icon1/favicon-red.ico';

         if (oldLink) {
          document.head.removeChild(oldLink);
         }
         document.head.appendChild(link);
    }
    else{
        document.body.style.setProperty("--primary-color", "#336699");
        document.body.style.setProperty("--secondary-color", "#222");
        document.body.style.setProperty("--tertiary-color", "#333");
        document.body.style.setProperty("--background-color", "#eee");
        document.body.style.setProperty("--secondary-background-color", "#ccc");
        document.getElementById("navi").classList.remove("navbar-inverse");
        document.getElementById("navi").classList.add("navbar-default");
        document.body.style.setProperty("--modal-background-color", "rgb(255,255,255,0.8)");
        

        var link = document.createElement('link'),
             oldLink = document.getElementById('favicon');
         link.id = 'favicon';
         link.rel = 'shortcut icon';
         link.type='image/x-icon';
         link.href = 'images/icon2/favicon-blue.ico';

         if (oldLink) {
          document.head.removeChild(oldLink);
         }
         document.head.appendChild(link);
    }
    sessionStorage.setItem("count", count);
});
