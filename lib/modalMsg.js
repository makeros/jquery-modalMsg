/**
 * messagePopup
 * 
 * Small information popup for varius informations
 * @author arek czogala <arek@pwn.pl>
 * @param Object options
 *
 */
(function ($) {

  $.fn.extend({

    modalMsg : function (opt) {

      var options;

      /*example default optionst*/
      options = {
        container : 'body',
        messages : ['Default modalMsg message1','Default modalMsg message2'],
        buttons : [
          {
            name : 'OK',
            callback : function (){
              alert('ok');
            }
            
          },
          {
            name : 'Cancel',
            callback : function () {
              alert('cancel');
            }
          }
        ]
      };

      $.extend(options, opt);


      return this.each(function () {

        var msgNr, btnNr, $btn = [], $msg = [], $overlay, $modal = $(this);

        var bindDataToModal = function () {

          console.log(options);
          /*find and fill out messages*/
          for (var msg_index=0; msg_index < options.messages.length; msg_index++){

            msgNr = msg_index+1;
            $msg[msg_index] = $modal.find('.modalMsg-message'+msgNr);
            $msg[msg_index].html(options.messages[msg_index]);

          }
          console.log($msg);

          /*find and add actions to btn's*/
          for (var btn_index=0; btn_index < options.buttons.length; btn_index++){

            btnNr = btn_index+1;
            $btn[btn_index] = $modal.find('.modalMsg-button'+btnNr);

            $btn[btn_index].html(options.buttons[btn_index].name);

            if (options.buttons[btn_index].callback) {
              $btn[btn_index].click(options.buttons[btn_index].callback);
            }
            else {
              $btn[btn_index].click(hideAndDestroy);
            }

          }
          console.log($btn);

        };

        var hideAndDestroy = function () {

          /*clear messages*/
          for (var m=0; m < $msg.length; m++){
            $msg[m].html('');
          }
          $msg = null;

          /*clear buttons*/
          for (var b=0; b < $btn.length; b++){
            $btn[b].html('');
            $btn[b].unbind('click',options.buttons[b].callback);
          }
          $btn = null;

          $modal.hide();
          $('.modalMsg-overlay').unbind('click').remove();

        };

        bindDataToModal();

        /*show overlay*/
        $overlay = $('<div class="modalMsg-overlay"></div>');
        $overlay.appendTo('body');

        $overlay.click(function () {
          
          hideAndDestroy();

        });

        /*bind global modal clicks*/

        $overlay.show();
        $modal.show();


      });
    }

  });

})(jQuery);