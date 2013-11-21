<div class="game">
  <div class="game-list">
    <h1 class="game-list-title">Choose Your Game</h1>
    <ul class="game-nodes">
      <?php foreach ($nodes as $node): ?>
        <li class="game-node" data-node="<?= $node->nid ?>"><?= $node->field_qa_game_account_code['und'][0]['value'] ?> - <?= $node->title ?></li>
      <?php endforeach; ?>
    </ul>
    <h1 class="game-start">Start</h1>
  </div>
</div>