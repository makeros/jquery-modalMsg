/**
 * modalMsg jQuery plugin
 * 
 * Modal simple popups. 
 * @author arek czogala <arek@pwn.pl>
 *
 */
(function ($) {

  $.fn.extend({

    modalMsg : function (opt) {

      var options;

      /*example default options*/
      options = {
        container : 'body',
        messages : ['Default modalMsg message1','Default modalMsg message2'],
        buttons : [
          {
            name : 'OK',
            callback : function (){
              alert('ok');
            },
            defaultClose : true
          },
          {
            name : 'Cancel',
            callback : function () {
              alert('cancel');
            }
          }
        ],
        overlayBlocked : true,
        overlayId : null
        
      };

      $.extend(options, opt);


      return this.each(function () {

        var msgNr, btnNr, $btn = [], $msg = [], $overlay, $modal = $(this);
        var self = this;
        // this.testing = 'wtf?';

        var bindDataToModal = function () {

          // console.log(options);

          /*find and fill out messages*/
          for (var msg_index=0; msg_index < options.messages.length; msg_index++){

            msgNr = msg_index+1;
            $msg[msg_index] = $modal.find('.modalMsg-message'+msgNr);
            $msg[msg_index].html(options.messages[msg_index]);

          }

          /*find and add actions to btn's*/
          for (var btn_index=0; btn_index < options.buttons.length; btn_index++){

            btnNr = btn_index+1;
            $btn[btn_index] = $modal.find('.modalMsg-button'+btnNr);

            $btn[btn_index].html(options.buttons[btn_index].name);

            if (options.buttons[btn_index].callback) {

              $btn[btn_index].click(options.buttons[btn_index].callback);

              if (options.buttons[btn_index].defaultClose) {
                
                $btn[btn_index].click(hideAndDestroy);
                
              }
            }
            else {
              $btn[btn_index].click(hideAndDestroy);
            }

          }
          // console.log($btn);

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
            $btn[b].unbind('click');
          }
          $btn = null;

          $modal.hide();

          if ( options.overlayId ) {

            $('#'+options.overlayId).unbind('click').remove();

          }
          else {

            $('.modalMsg-overlay').unbind('click').remove();

          }


          $('body').css({'overflow' : ''});

        };

        bindDataToModal();

        /*show overlay*/
        if (options.overlayId) {

          $overlay = $('#'+options.overlayId);

        } 
        else {

          $overlay = $('<div class="modalMsg-overlay"></div>');
          $overlay.appendTo($modal);
          
        }

        console.log('modal popup overlay: ',options.overlayId, $overlay, options.overlayBlocked);

        if (!options.overlayBlocked) {

          $overlay.click(hideAndDestroy);

        }

        /*bind global modal clicks*/

        $overlay.show();
        $('body').css({'overflow' : 'hidden'});
        $modal.show();

      })[0];


    }

  });

})(jQuery);