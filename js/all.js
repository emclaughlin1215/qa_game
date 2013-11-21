/**
 * Handles all JS for the game.
 */
(function ($) {

  Drupal.run_game = {
    node: ""
  };

  /**
   * Attaches js events to the different components.
   */
  Drupal.run_game.attachAjax = function () {
    $('.game-node').each(function() {
      $(this).on('click', function() {
        if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
        } else {
          $('.selected').removeClass('selected');
          $(this).addClass('selected');
        }
      });
    });

    $('.game-start').on('click', function() {
      $.ajax({
        url: '/level?node=' + $('.selected').data('node') + '&level=' + $(this).data('level'),
        dataType: 'html',
        success: function (data) {
          if ($('.game-list').length > 0) {
            $('.game-list').detach();
          }
          $('.game').append(data);
        }
      });
    });
  }

  $(document).ready(function () {
    // Attach events to the different components.
    Drupal.run_game.attachAjax();
  });

}(jQuery));