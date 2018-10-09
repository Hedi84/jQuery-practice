$(document).ready(
    function(){
        $('#button').click(
            function(){
               toAdd = $('input[name=ListItem]').val();
                 $('ol').append('<li>' + '<input type="checkbox" name="myCheckbox" />' +  toAdd + '</li>');
            });



       $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }




      });

    }
);

