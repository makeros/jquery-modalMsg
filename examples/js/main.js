$(document).ready(function () {

  $("#action_modal_example").click(function () {

    $('#modal_example').modalMsg({
      messages : ['Lorem ipsum dolor sit amet',
        'consectetur adipiscing elit.'],
      buttons : [
        {
          name : 'OK',
          callback : null
        },
        {
          name : 'Alert!',
          callback : function () {
            alert("don't panic ;)")
          },
          defaultClose: true
        },
        {
          name : 'Alert^2!',
          callback : function () {
            alert("now you cant panic ;)")
          },
          defaultClose: false 
        }
      ],
      overlayBlocked : false
      
    });

  });

  $("#action_modal_1").click(function () {

    $('#modal_1').modalMsg({
      messages : ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu nulla cursus arcu hendrerit dictum et et quam. Maecenas et odio molestie, consequat leo id, fringilla magna. '],
      buttons : [
        {
          name : 'OK',
          callback : null
        },
        {
          name : 'x',
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

  $("#action_modal_4").click(function () {

    $('#modal_4').modalMsg({
      container : 'modal_container',
      messages : ['Lorem ipsum dolor 1'],
      buttons : [
        {
          name : 'OK',
          callback : null
        }

      ],
      
    });

  });


});