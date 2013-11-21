<div class="game-play">
  <ul class="game-form">
    <?php foreach ($node->field_qa_game_scope_items['und'] as $item) : ?>
      <li class="game-option"><input class="scope-item" type="checkbox" name="scope_item" value="<?= $item['value'] ?>"> <?= $item['value'] ?></li>
    <?php endforeach; ?>
  </ul>
  <div class="game-area">

  </div>
  <h1 class="game-continue disabled" data-level="<?= $level + 1 ?>">Continue</h1>
</div>