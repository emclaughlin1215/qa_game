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
  }

  $(document).ready(function () {
    // Attach events to the different components.
    Drupal.run_game.attachAjax();
  });

}(jQuery));