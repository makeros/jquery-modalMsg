/**
 * modalMsg jQuery plugin
 * 
 * Modal simple popups. 
 * @author arek czogala <mail@arekczogala.pl>
 *
 */
(function ($) {

  $.fn.extend({

    modalMsg : function (opt) {

      var 
        options,
        STATIC = {
          overlayClass : 'modalMsg-overlay',
          messageClass : 'modalMsg-message',
          buttonClass : 'modalMsg-button'
        }
        ;

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

      console.log('modalMsg options: ', options);

      return this.each(function () {

        var msgNr, btnNr, $btn = [], $msg = [], $overlay, $modal = $(this), $container;
        var self = this;

        $container = ($(options.container).length)? $(options.container) : $('#'+options.container);

        console.log('container: ',$container);

        var bindDataToModal = function () {

          // console.log(options);

          /*find and fill out messages*/
          for (var msg_index=0; msg_index < options.messages.length; msg_index++){

            msgNr = msg_index+1;
            $msg[msg_index] = $modal.find('.'+STATIC.messageClass+msgNr);
            $msg[msg_index].html(options.messages[msg_index]);

          }

          /*find and add actions to btn's*/
          for (var btn_index=0; btn_index < options.buttons.length; btn_index++){

            btnNr = btn_index+1;
            $btn[btn_index] = $modal.find('.'+STATIC.buttonClass+btnNr);

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

            $('.'+STATIC.overlayClass).unbind('click').remove();

          }


          $container.css({'overflow' : ''});

        };

        var checkOverlayAction = function () {
          if (!options.overlayBlocked) {

            $overlay.click(hideAndDestroy);

          }
        };

        bindDataToModal();

        /*show overlay*/
        if (options.overlayId) {

          $overlay = $('#'+options.overlayId);

        } 
        else {

          $overlay = $('<div class="'+STATIC.overlayClass+'"></div>');
          $overlay.appendTo($modal);
          
        }


        checkOverlayAction();

        console.log('modal popup overlay: ',options.overlayId, $overlay, options.overlayBlocked);


        $overlay.show();
        $container.css({'overflow' : 'hidden'});

        $modal.css({
          'top': $container.scrollTop()
        });
        $modal.appendTo($container).show();

      });


    }

  });

})(jQuery);