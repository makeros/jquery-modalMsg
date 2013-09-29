$(document).ready(function () {

  $("#action_modal_1").click(function () {

    $('#modal_1').modalMsg({
      messages : ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu nulla cursus arcu hendrerit dictum et et quam. Maecenas et odio molestie, consequat leo id, fringilla magna. '],
      buttons : [
        {
          name : 'OK',
          callback : null
        }
      ]
    });

  });  


  $("#action_modal_2").click(function () {

    $('#modal_2').modalMsg({
      messages : ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu nulla cursus arcu hendrerit dictum et et quam. Maecenas et odio molestie, consequat leo id, fringilla magna. '],
      buttons : [
        {
          name : 'OK',
          callback : null
        }
      ],
      overlayBlocked : false
      
    });

  });

  $("#action_modal_3").click(function () {

    $('#modal_3').modalMsg({
      messages : ['Lorem ipsum dolor 1', 'Ipsum 2', 'some dynamic!'],
      buttons : [
        {
          name : 'OK',
          callback : null
        },
        {
          name : 'Show Alert!',
          callback : function () {
            alert('This is a alert!');
          }
        },
        {
          name : 'Hide popup'
        }

      ],
      
    });

  });


});