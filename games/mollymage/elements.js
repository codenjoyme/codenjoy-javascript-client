var MollyMageElement = module.exports = {

/// your Molly

    // This is what she usually looks like.
    HERO : '☺',

    // This is if she is sitting on own potion.
    POTION_HERO : '☻',

    // Oops, your Molly is dead (don't worry,
    // she will appear somewhere in next move).
    // You're getting penalty points for each death.
    DEAD_HERO : 'Ѡ',

/// other players heroes

    // This is what other heroes looks like.
    "OTHER_HERO": '♥',

    // This is if other hero is sitting on own potion.
    "OTHER_POTION_HERO": '♠',

    // Other hero corpse (it will disappear shortly,
    // right on the next move).
    // If you've done it you'll get score points.
    "OTHER_DEAD_HERO": '♣',

/// enemy players heroes

    // This is what enemy heroes looks like.
    "ENEMY_HERO": '♡',

    // This is if enemy hero is sitting on own potion.
    "ENEMY_POTION_HERO": '♤',

    // Enemy hero corpse (it will disappear shortly,
    // right on the next move).
    // If you've done it you'll get score points.
    "ENEMY_DEAD_HERO": '♧',

/// the potions
    // After Molly set the potion, the timer starts (5 ticks).
    POTION_TIMER_5 : '5',

    // This will blow up after 4 ticks.
    POTION_TIMER_4 : '4',

    // This after 3...
    POTION_TIMER_3 : '3',

    // Two..
    POTION_TIMER_2 : '2',

    // One.
    POTION_TIMER_1 : '1',

    // Boom! this is what is potion does,
    // everything that is destroyable got destroyed.
    BOOM : '҉',

/// walls

    // Indestructible wall - it will not fall from potion.
    WALL : '☼',

    // this is a treasure box, it opens with an explosion.
    TREASURE_BOX : '#',

    // this is like a treasure box opens looks
    // like, it will disappear on next move.
    // if it's you did it - you'll get score
    // points. Perhaps a prize will appear.
    OPENING_TREASURE_BOX : 'H',

/// soulless creatures

    // This guys runs over the board randomly
    // and gets in the way all the time.
    // If it will touch Molly - she will die.
    // You'd better kill this piece of ... soul,
    // you'll get score points for it.
    GHOST : '&',

    // This is ghost corpse.
    DEAD_GHOST : 'x',

/// perks

    // Potion blast radius increase.
    // Applicable only to new potions.
    // The perk is temporary.
    POTION_BLAST_RADIUS_INCREASE : '+',

    // Increase available potions count.
    // Number of extra potions can be set
    // in settings. Temporary.
    POTION_COUNT_INCREASE : 'c',

    // Potion blast not by timer but by second act.
    // Number of RC triggers is limited and c
    // an be set in settings.
    POTION_REMOTE_CONTROL : 'r',

    // Do not die after potion blast
    // (own potion and others as well). Temporary.
    POTION_IMMUNE : 'i',

    // Hero can shoot by poison cloud
    // Using: ACT(1)
    // Temporary.
    POISON_THROWER: 'T',

   // Hero can explode all potions on the field
    // Using: ACT(2)
    // Temporary.
    POTION_EXPLODER: 'A',

/// a void
    // This is the only place where you can move your Molly.
    NONE : ' '
};