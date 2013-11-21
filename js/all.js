/**
 * Handles all JS for the game.
 */
(function ($) {

  Drupal.run_game = {
    node: ""
  };

  /**
   * Attaches an onclick event to the start button
   */
  Drupal.run_game.enableStart = function () {
    $('.game-node').each(function() {
      $(this).on('click', function() {
        if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
          $('.game-start').removeClass('enabled').addClass('disabled');
        } else {
          $('.selected').removeClass('selected');
          $(this).addClass('selected');
          $('.game-start').removeClass('disabled').addClass('enabled');
        }
      });
    });
  };

  /**
   * Adds onclick events to enable the continue button
   */
  Drupal.run_game.enableContinue = function() {
    Drupal.run_game.attachAjax();
    $('.scope-item').change(function () {
      if ($('.scope-item:checked').length == $('.scope-item').length) {
        $('.game-continue').removeClass('disabled').addClass('enabled');
      } else {
        $('.game-continue').removeClass('enabled').addClass('disabled');
      }
    });
  };

  /**
   * Attaches ajax events to the different components.
   */
  Drupal.run_game.attachAjax = function () {
    $('.game-start').on('click', function() {
      if ($(this).hasClass('enabled')) {
        Drupal.run_game.node = $('.selected').data('node');
        $.ajax({
          url: '/level?node=' + $('.selected').data('node') + '&level=' + $(this).data('level'),
          dataType: 'html',
          success: function (data) {
            if ($('.game-list').length > 0) {
              $('.game-list').detach();
            }
            $('.game').append(data);
            Drupal.run_game.enableContinue();
            var checkbxsCheckmark = Array.prototype.slice.call( document.querySelectorAll( 'form.ac-checkmark input[type="checkbox"]' ) );
            checkbxsCheckmark.forEach( function( el, i ) { controlCheckbox( el, 'checkmark' ); } );
          }
        });
      }
    });

    $('.game-continue').on('click', function() {
      if ($(this).hasClass('enabled')) {
        $.ajax({
          url: '/level?node=' + Drupal.run_game.node + '&level=' + $(this).data('level'),
          dataType: 'html',
          success: function (data) {
            if ($('.game-play').length > 0) {
              $('.game-play').detach();
            }
            $('.game').append(data);
            Drupal.run_game.enableContinue();
            var checkbxsCheckmark = Array.prototype.slice.call( document.querySelectorAll( 'form.ac-checkmark input[type="checkbox"]' ) );
            checkbxsCheckmark.forEach( function( el, i ) { controlCheckbox( el, 'checkmark' ); } );
          }
        });
      }
    });
  };

  $(document).ready(function () {
    // Attach events to the different components.
    Drupal.run_game.enableStart();
    Drupal.run_game.attachAjax();
  });

}(jQuery));