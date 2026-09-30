/* =========================================================================
   ПУБЛІЧНА частина уроку: те, що бачать студенти.
   Нотаток і ключів тут НЕМАЄ — вони в teacher.js.
   Типи слайдів: title · content · vocab · mcq · gap · open · end
   ========================================================================= */
window.LESSON = {
  id: 'demo',
  title: 'Hedging: saying less, meaning more',
  slides: [
    {
      id: 's1', type: 'title',
      kicker: 'B2+ · Academic & professional English',
      title: 'Hedging',
      subtitle: 'How to sound confident without overclaiming'
    },
    {
      id: 's2', type: 'content', reveal: true,
      kicker: 'Warm-up',
      title: 'Which version would you trust more?',
      items: [
        '<b>A.</b> This method <b>proves</b> that remote teams are more productive.',
        '<b>B.</b> This method <b>suggests</b> that remote teams <b>may be</b> more productive.',
        '<span class="muted">Why might a careful reader prefer B?</span>'
      ]
    },
    {
      id: 's3', type: 'vocab',
      kicker: 'Key word',
      term: 'arguably',
      ipa: '/ˈɑːɡjuəbli/',
      pos: 'adverb',
      def: 'used when you believe something can be supported by good reasons, while admitting that others may disagree',
      example: 'It is <b>arguably</b> the most influential study of the decade.',
      uk: 'мабуть, цілком можна стверджувати, що…'
    },
    {
      id: 's4', type: 'mcq',
      kicker: 'Quick check',
      prompt: 'Which sentence makes the <b>most cautious</b> claim?',
      options: [
        'The data <b>prove</b> the hypothesis.',
        'The data <b>clearly show</b> a link.',
        'The data <b>appear to suggest</b> a link.',
        'The data <b>confirm</b> a link.'
      ]
    },
    {
      id: 's5', type: 'gap',
      kicker: 'Fill the gap',
      instruction: 'Use the verb in brackets. Make the claim more tentative than the plain Present Simple.',
      prompt: 'The findings ___ (seem) to indicate a shift in public opinion.',
      placeholder: 'two words'
    },
    {
      id: 's6', type: 'open',
      kicker: 'Your turn',
      prompt: 'Make this feedback more diplomatic:<br><b>“Your plan is wrong.”</b>',
      placeholder: 'I’m not sure the plan…'
    },
    {
      id: 's7', type: 'end',
      kicker: 'Takeaway',
      title: 'Hedging is not weakness.',
      text: 'It is precision about how certain you really are.'
    }
  ]
};
