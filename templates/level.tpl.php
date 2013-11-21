<div class="game-play">
  <form class="ac-custom ac-checkbox ac-checkmark" autocomplete="off">
    <h1 class="gam-level-name"><?= $class ?></h1>
    <ul class="game-form">
      <?php $num = 1; ?>
      <?php foreach ($node->field_qa_game_scope_items['und'] as $item) : ?>
        <li class="game-option">
          <input class="scope-item" id="scope-item<?= $num ?>" type="checkbox" name="scope-item<?= $num ?>" value="<?= $item['value'] ?>"><label for="scope-item<?= $num ?>"><?= $item['value'] ?></label>
        </li>
        <?php $num++; ?>
      <?php endforeach; ?>
    </ul>
  </form>
  <div class="game-area">

  </div>
  <h1 class="game-continue disabled" data-level="<?= $level + 1 ?>">Continue</h1>
</div>