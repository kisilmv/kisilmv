/* =========================================================================
   Unit 3 · Over-the-Air Updates: Changing Code in the Field
   ESP · Комп'ютерна інженерія · B1
   ПУБЛІЧНА частина: те, що бачать студенти. Нотатки й ключі — у teacher.js.
   Безперервна презентація: Lead-in · Grammar (3.1–3.4) · Vocabulary (3.5) ·
   Reading (3.6–3.8) · Dialogues (3.9) · 3.10 · Speaking (3.11)
   ========================================================================= */
(function () {
  const K = (s) => '<span class="muted">' + s + '</span>';
  const SM = (h) => '<span style="display:block;font-size:18px;line-height:1.45">' + h + '</span>';
  const term = (en, ipa, uk) => '<span style="display:block;font-size:19px;line-height:1.35"><b>' + en + '</b> ' + K(ipa) + '<br>' + uk + '</span>';
  const blankN = (n) => '<span class="blank">' + n + '</span>';

  const S = [];
  const add = (o) => S.push(o);

  add({ id: 'title', type: 'title',
    kicker: 'Unit 3 · English for Computer Engineering',
    title: 'Over-the-Air Updates',
    subtitle: 'Changing code in the field' });

  /* ---------- Lead-in ---------- */
  add({ id: 'l1', type: 'mcq', kicker: 'Lead-in · 1/3',
    prompt: 'Your phone installs an update at night and restarts.<br><b>The battery dies halfway. What happens?</b>',
    options: ['The phone is dead forever.', 'The phone starts the old version.', 'The phone starts the new version.', 'I have no idea.'] });
  add({ id: 'l2', type: 'open', kicker: 'Lead-in · 2/3',
    prompt: 'A company has sold <b>200,000 smart thermostats</b>. Then it finds a <b>security flaw</b>.<br><b>How can it fix the devices?</b> Write one way and one drawback.',
    placeholder: 'They could… but…' });
  add({ id: 'l3', type: 'mcq', kicker: 'Lead-in · 3/3',
    prompt: 'A new <b>firmware update</b> for your router is out today.<br><b>What do you do?</b>',
    options: ['Install it today', 'Wait a week', 'It depends'] });

  /* ---------- Grammar: passive ---------- */
  add({ id: 'g0', type: 'end', kicker: 'Grammar',
    title: 'Describing a process',
    text: 'Steps, order and purpose' });
  add({ id: 'g1a', type: 'content', reveal: true, kicker: 'Grammar · Rule 1 · 1/2',
    title: 'The passive',
    items: [
      '<b>be</b> + past participle (V3)<br>' + K('the action matters, not who does it'),
      'The new image <b>is downloaded</b> to a spare partition.',
      K('The tense is in <b>be</b>:') + '<br>is signed · was signed · has been signed'
    ] });
  add({ id: 'g1b', type: 'content', reveal: true, kicker: 'Grammar · Rule 1 · 2/2',
    title: 'Modal passive',
    items: [
      '<b>must / can / should + be + V3</b><br>' + K('rules and possibilities'),
      'The signature <b>must be verified</b> before installation.',
      '✅ The image <b>is verified</b>.<br>❌ The image verified.<br>' + K('No <b>be</b> → a different meaning!')
    ] });

  const G1 = 'Put the verb in the correct passive form.';
  [
    'The update ___ (sign) with the manufacturer’s private key before release.',
    'In 2015, about 1.4 million vehicles ___ (recall) by Chrysler after researchers hacked a Jeep remotely.',
    'The new image ___ (write) to the spare partition, not over the running one.',
    'The signature ___ (must / check) before the device reboots.',
    'In 2024, the code of Voyager 1 ___ (move) to a different part of its memory after one chip failed.',
    'If the new version fails, the old one ___ (can / restore) automatically.',
    'The story of the first computer “bug”, a moth found in a relay in 1947, ___ (popularize) by Grace Hopper.',
    'Each device in the fleet ___ (update) only after the first group reports no errors.'
  ].forEach((p, i) => add({ id: 'e31_' + (i + 1), type: 'gap', kicker: '3.1 · ' + (i + 1) + '/8',
    instruction: G1, prompt: p, placeholder: 'is / was / must be …' }));

  /* ---------- Grammar: sequence ---------- */
  add({ id: 'g2a', type: 'content', reveal: true, kicker: 'Grammar · Rule 2 · 1/2',
    title: 'Order of steps',
    items: [
      '<b>once · as soon as · after · before · until · when</b>',
      '<b>Once</b> the download <b>finishes</b>, the device will reboot.',
      K('After these words: present, <b>not will</b>.') + '<br>✅ as soon as it <b>finishes</b><br>❌ as soon as it <b>will finish</b>'
    ] });
  add({ id: 'g2b', type: 'content', reveal: true, kicker: 'Grammar · Rule 2 · 2/2',
    title: 'before / after + -ing',
    items: [
      'Same subject in both parts → <b>-ing</b>',
      '<b>Before installing</b> the image, the bootloader checks the signature.',
      '❌ before install · ❌ before to install'
    ] });

  const J = 'Join the two sentences.';
  add({ id: 'e32_1', type: 'gap', kicker: '3.2 · 1/6',
    instruction: J + '<br>The download finishes. The device will reboot. <b>(once)</b>',
    prompt: 'Once the download ___, the device will reboot.' });
  add({ id: 'e32_2', type: 'gap', kicker: '3.2 · 2/6',
    instruction: J + '<br>Check the battery level. Then start the update. <b>(before + -ing)</b>',
    prompt: '___ the update, check the battery level.', placeholder: 'two words' });
  add({ id: 'e32_3', type: 'gap', kicker: '3.2 · 3/6',
    instruction: J + '<br>The old image stays on the device. The new one boots successfully. <b>(until)</b>',
    prompt: 'The old image stays on the device until the new one ___ successfully.' });
  add({ id: 'e32_4', type: 'gap', kicker: '3.2 · 4/6',
    instruction: J + '<br>The device boots. Immediately after that, it reports its version to the server. <b>(as soon as)</b>',
    prompt: 'As soon as the device ___, it reports its version to the server.' });
  add({ id: 'e32_5', type: 'gap', kicker: '3.2 · 5/6',
    instruction: J + '<br>The bootloader verifies the checksum. Then it jumps to the application. <b>(after + -ing)</b>',
    prompt: '___ the checksum, the bootloader jumps to the application.', placeholder: 'two words' });
  add({ id: 'e32_6', type: 'gap', kicker: '3.2 · 6/6',
    instruction: 'The first group will confirm success. Then we will release the update to everyone. <b>(once)</b><br>Type both forms: <b>1, 2</b>',
    prompt: 'Once the first group ' + blankN(1) + ' (confirm) success, we ' + blankN(2) + ' (release) the update to everyone.<br>1, 2 → ___',
    placeholder: 'form 1, form 2' });

  /* ---------- Grammar: purpose ---------- */
  add({ id: 'g3a', type: 'content', reveal: true, kicker: 'Grammar · Rule 3 · 1/2',
    title: 'Why? Purpose',
    items: [
      '<b>to / in order to</b> + verb',
      '<b>so that</b> + subject + can / will / does not …',
      'Updates are signed <b>so that</b> attackers <b>cannot replace</b> them.'
    ] });
  add({ id: 'g3b', type: 'content', reveal: true, kicker: 'Grammar · Rule 3 · 2/2',
    title: 'Prevention and precaution',
    items: [
      '<b>prevent</b> + object + <b>from</b> + -ing',
      'A watchdog timer <b>prevents</b> the device <b>from freezing</b>.',
      '<b>in case</b> = на випадок, якщо<br>' + K('present, not will'),
      'Keep the old image <b>in case</b> the new one <b>fails</b>.'
    ] });

  const R3 = (orig, word) => 'Rewrite. ' + orig + ' <b>(' + word + ')</b>';
  add({ id: 'e33_1', type: 'gap', kicker: '3.3 · 1/6',
    instruction: R3('Updates are signed. That way, attackers cannot replace them.', 'so that'),
    prompt: 'Updates are signed so that attackers ___ them.' });
  add({ id: 'e33_2', type: 'gap', kicker: '3.3 · 2/6',
    instruction: R3('The watchdog timer resets the device; otherwise, it could freeze forever.', 'prevent … from'),
    prompt: 'The watchdog timer prevents the device ___ forever.', placeholder: 'two words' });
  add({ id: 'e33_3', type: 'gap', kicker: '3.3 · 3/6',
    instruction: R3('We keep the previous image because the new one might fail.', 'in case'),
    prompt: 'We keep the previous image in case the new one ___.' });
  add({ id: 'e33_4', type: 'gap', kicker: '3.3 · 4/6',
    instruction: R3('The update goes to one percent of devices first. The aim is to catch errors early.', 'in order to'),
    prompt: 'The update goes to one percent of devices first ___ errors early.', placeholder: 'four words' });
  add({ id: 'e33_5', type: 'gap', kicker: '3.3 · 5/6',
    instruction: R3('The device checks the battery first. It must not lose power during the update.', 'so that … not'),
    prompt: 'The device checks the battery first so that it ___ power during the update.' });
  add({ id: 'e33_6', type: 'gap', kicker: '3.3 · 6/6',
    instruction: R3('Take a spare debug probe to the site. The first one might break.', 'in case'),
    prompt: 'Take a spare debug probe to the site in case the first one ___.' });

  /* ---------- Grammar: by / with ---------- */
  add({ id: 'g4', type: 'content', reveal: true, kicker: 'Grammar · Rule 4',
    title: 'by or with?',
    items: [
      K('«виробником», «ключем»: one Ukrainian case, two English prepositions.'),
      '<b>by</b> = who?<br>The update is signed <b>by the manufacturer</b>.',
      '<b>with</b> = with what?<br>The update is signed <b>with a private key</b>.',
      '❌ signed <b>by</b> a key'
    ] });
  add({ id: 'g4q', type: 'mcq', kicker: 'Rule 4 · Quick check',
    prompt: 'The image is checked ___ a hash function.',
    options: ['by', 'with'] });

  /* ---------- 3.4 Find the mistake ---------- */
  const FM = (id, n, sentence, parts) => add({ id, type: 'mcq', kicker: '3.4 · Find the mistake · ' + n + '/8',
    prompt: sentence + '<br><span class="muted">Tap the wrong part.</span>', options: parts });
  FM('e34_1', 1, 'The image verified by the bootloader before every start.',
    ['The image verified', 'by the bootloader', 'before every start']);
  FM('e34_2', 2, 'Once the download will finish, the device reboots.',
    ['Once the download will finish', 'the device reboots']);
  FM('e34_3', 3, 'The firmware is signed by a private key.',
    ['The firmware', 'is signed', 'by a private key']);
  FM('e34_4', 4, 'A watchdog timer prevents the device to crash.',
    ['A watchdog timer', 'prevents the device', 'to crash']);
  FM('e34_5', 5, 'This sensor has been in exploitation since 2021.',
    ['This sensor', 'has been', 'in exploitation', 'since 2021']);
  FM('e34_6', 6, 'We need to control the checksum before flashing the board.',
    ['We need', 'to control the checksum', 'before flashing the board']);
  FM('e34_7', 7, 'Take a charger in case the battery will die.',
    ['Take a charger', 'in case', 'the battery will die']);
  FM('e34_8', 8, 'We made a revision of the old boards last week to find damaged parts.',
    ['We made a revision', 'of the old boards', 'last week', 'to find damaged parts']);
  add({ id: 'e34_fix', type: 'open', kicker: '3.4 · Your turn',
    prompt: 'Choose <b>one</b> sentence from 3.4 and write it <b>correctly</b>.',
    placeholder: 'The image is…' });

  add({ id: 'v0', type: 'end', kicker: 'Vocabulary',
    title: 'Words for updates',
    text: 'American spelling and pronunciation, as in industry documentation.' });

  add({ id: 'vA1', type: 'content', kicker: 'Vocabulary · 1/2', title: 'A. The update pipeline', items: [
    term('over-the-air (OTA) update', '/ˌoʊvər ði ˈer ˌʌpdeɪt/', 'бездротове (дистанційне) оновлення'),
    term('firmware image', '/ˈfɜːrmwer ˌɪmɪdʒ/', 'образ мікропрограми'),
    term('release', '/rɪˈliːs/', 'випуск, реліз'),
    term('patch', '/pætʃ/', 'латка, виправлення')] });
  add({ id: 'vA2', type: 'content', kicker: 'Vocabulary · 2/2', title: 'A. The update pipeline', items: [
    term('to roll out', '/ˌroʊl ˈaʊt/', 'поступово впроваджувати'),
    term('staged rollout', '/ˌsteɪdʒd ˈroʊlaʊt/', 'поетапне розгортання'),
    term('fleet', '/fliːt/', 'парк (сукупність) пристроїв'),
    term('delta update', '/ˈdeltə ˌʌpdeɪt/', 'дельта-оновлення (передавання лише змін)')] });
  add({ id: 'vAq', type: 'mcq', kicker: 'A · Quick check',
    prompt: 'The server sends only the <b>changes</b>, not the whole image.<br><b>This is a …</b>',
    options: ['patch', 'delta update', 'staged rollout', 'release'] });

  add({ id: 'vB1', type: 'content', kicker: 'Vocabulary · 1/2', title: 'B. On the device', items: [
    term('bootloader', '/ˈbuːtˌloʊdər/', 'завантажувач'),
    term('to boot', '/buːt/', 'завантажуватися, запускатися'),
    term('partition', '/pɑːrˈtɪʃn/', 'розділ (пам’яті)'),
    term('to flash', '/flæʃ/', 'записувати у флеш-пам’ять, прошивати')] });
  add({ id: 'vB2', type: 'content', kicker: 'Vocabulary · 2/2', title: 'B. On the device', items: [
    term('to reboot', '/ˌriːˈbuːt/', 'перезавантажувати(ся)'),
    term('watchdog timer', '/ˈwɑːtʃdɔːɡ ˌtaɪmər/', 'сторожовий таймер'),
    term('non-volatile memory', '/ˌnɑːn ˈvɑːlətl ˌmeməri/', 'енергонезалежна пам’ять'),
    term('to brick', '/brɪk/', 'безповоротно вивести з ладу («перетворити на цеглину»)')] });
  add({ id: 'vBq', type: 'mcq', kicker: 'B · Quick check',
    prompt: 'The device freezes. After a few seconds, something resets it automatically.<br><b>What resets it?</b>',
    options: ['the bootloader', 'a partition', 'the watchdog timer', 'non-volatile memory'] });

  add({ id: 'vC1', type: 'content', kicker: 'Vocabulary · 1/2', title: 'C. Integrity and security', items: [
    term('checksum', '/ˈtʃeksʌm/', 'контрольна сума'),
    term('hash', '/hæʃ/', 'геш-значення (хеш)'),
    term('digital signature', '/ˌdɪdʒɪtl ˈsɪɡnətʃər/', 'цифровий підпис'),
    term('private key', '/ˌpraɪvət ˈkiː/', 'закритий (приватний) ключ')] });
  add({ id: 'vC2', type: 'content', kicker: 'Vocabulary · 2/2', title: 'C. Integrity and security', items: [
    term('to verify', '/ˈverɪfaɪ/', 'перевіряти (на відповідність)'),
    term('integrity', '/ɪnˈteɡrəti/', 'цілісність'),
    term('vulnerability', '/ˌvʌlnərəˈbɪləti/', 'уразливість'),
    term('to tamper with', '/ˈtæmpər wɪð/', 'несанкціоновано втручатися (в щось)')] });
  add({ id: 'vCq', type: 'mcq', kicker: 'C · Quick check',
    prompt: 'Someone changed the image on its way to the device.<br><b>The image was …</b>',
    options: ['verified', 'tampered with', 'flashed', 'released'] });

  add({ id: 'vD1', type: 'content', kicker: 'Vocabulary · 1/2', title: 'D. When things go wrong', items: [
    term('failure', '/ˈfeɪljər/', 'відмова, збій'),
    term('fault', '/fɔːlt/', 'несправність, дефект'),
    term('to roll back', '/ˌroʊl ˈbæk/', 'відкочувати(ся) до попередньої версії'),
    term('fallback', '/ˈfɔːlbæk/', 'резервний варіант')] });
  add({ id: 'vD2', type: 'content', kicker: 'Vocabulary · 2/2', title: 'D. When things go wrong', items: [
    term('power loss', '/ˈpaʊər lɔːs/', 'утрата живлення'),
    term('recall (n.)', '/ˈriːkɔːl/', 'відкликання (продукції)'),
    term('downtime', '/ˈdaʊntaɪm/', 'час простою'),
    term('corrupted', '/kəˈrʌptɪd/', 'пошкоджений (про дані)')] });
  add({ id: 'vDq', type: 'mcq', kicker: 'D · Quick check',
    prompt: 'The new version crashes, so the device goes back to the old one.<br><b>The device …</b>',
    options: ['rolls out', 'rolls back', 'boots up', 'bricks'] });

  /* ---------- Terminological traps ---------- */
  const trap = (pair, uk, ex) => SM('<b>' + pair + '</b><br>' + K(uk) + '<br><i>' + ex + '</i>');
  add({ id: 't1', type: 'content', reveal: true, kicker: 'Vocabulary · 1/4', title: 'Terminological traps', items: [
    trap('update ≠ upgrade', 'update — оновлення в межах версії · upgrade — перехід на новішу версію чи потужніше обладнання',
      'Update 2.1.4 fixes a bug; the upgrade to version 3 needs more flash memory.'),
    trap('operation ≠ exploitation', '«експлуатація» = operation, service, use · exploitation — використання вразливості',
      'The sensor has been in operation since 2021.')] });
  add({ id: 't2', type: 'content', reveal: true, kicker: 'Vocabulary · 2/4', title: 'Terminological traps', items: [
    trap('check ≠ control', '«контролювати» (перевіряти) = check, verify, monitor · control — керувати',
      'The bootloader checks the image; the application controls the motor.'),
    trap('verification ≠ validation', 'verification — чи зроблено правильно (за специфікацією) · validation — чи зроблено те, що потрібно користувачеві',
      'Verification: the code matches the spec. Validation: customers need the feature.')] });
  add({ id: 't3', type: 'content', reveal: true, kicker: 'Vocabulary · 3/4', title: 'Terminological traps', items: [
    trap('fault ≠ failure', 'fault — несправність (причина) · failure — відмова (наслідок)',
      'A fault in the flash chip caused a failure of the whole device.'),
    trap('signature ≠ subscription', '«підпис» = signature · «підписка» = subscription',
      'The image carries a digital signature; the dashboard needs a monthly subscription.')] });
  add({ id: 't4', type: 'content', reveal: true, kicker: 'Vocabulary · 4/4', title: 'Terminological traps', items: [
    trap('revision ≠ inspection', 'revision — редакція, версія плати · «ревізія, перевірка» = inspection, audit',
      'Board revision C passed the safety inspection.'),
    trap('assemble ≠ mount', '«монтувати плату, збирати пристрій» = assemble · mount — закріплювати; підключати файлову систему',
      'We assemble the boards in-house and mount them in the cabinet.')] });

  [
    ['The ___ to the new processor family will take the team a year.', 'update', 'upgrade'],
    ['The pump has been in ___ for twelve years without a firmware change.', 'operation', 'exploitation'],
    ['Please ___ the checksum before you flash the board.', 'control', 'check'],
    ['___ proved that the design meets its written requirements.', 'Verification', 'Validation'],
    ['A ___ in the voltage regulator caused the reboot loop.', 'failure', 'fault'],
    ['Only images with a valid ___ are accepted by the bootloader.', 'signature', 'subscription'],
    ['The bug appears only on board ___ B.', 'inspection', 'revision'],
    ['Our partner in Lviv will ___ the boards from the parts we send.', 'assemble', 'mount']
  ].forEach((p, i) => add({ id: 'e35_' + (i + 1), type: 'mcq', kicker: '3.5 · ' + (i + 1) + '/8',
    prompt: p[0], options: [p[1], p[2]] }));

  /* ---------- Reading ---------- */
  add({ id: 'r0', type: 'mcq', kicker: 'Reading · Before you read',
    prompt: 'The text is called <b>“Fixing a Device Nobody Can Reach”</b>.<br>Which device do you expect to read about?',
    options: ['a spacecraft', 'a sensor in a pipeline', 'a car on a highway', 'a smart thermostat'] });

  const PARA = [
    'In November 2023, Voyager 1 started sending home nonsense. The spacecraft, launched in 1977 and by then more than 24 billion kilometers from Earth, was still receiving commands, but the data it sent back made no sense. Engineers eventually traced the problem to a single failed chip in one of its onboard computers. Nobody could fly out and replace it. Instead, the affected code <b>was split</b> into pieces and <b>moved</b> to other parts of the memory, and the new instructions <b>were sent</b> by radio: each message took about twenty-two and a half hours to arrive. By April 2024, readable engineering data was coming back again.',
    'Most engineers will never repair anything that far away, but they face the same problem every week. Once a product leaves the factory, its <b>firmware</b> still has bugs, and some of those bugs are security <b>vulnerabilities</b>. The device may be screwed to a ceiling, buried in a pipeline or moving down a highway at 110 kilometers per hour. The usual answer is the <b>over-the-air (OTA) update</b>: new firmware is delivered through the network the device already uses.',
    'The alternative is expensive. In 2015, two security researchers showed that they could take control of a Jeep from a laptop miles away. About 1.4 million vehicles <b>were recalled</b>, and because the cars could not be updated remotely, owners were mailed USB drives with the fix or asked to visit a dealer.',
    'A typical OTA update follows a strict sequence. <b>First</b>, the new <b>firmware image</b> is signed by the manufacturer with a <b>private key</b>. The image is <b>then</b> downloaded to a spare <b>partition</b>, <b>while</b> the device keeps running the old version. <b>Before installing</b> anything, the <b>bootloader</b> verifies the <b>signature</b>, so that an image that has been <b>tampered with</b> is simply rejected. The device <b>reboots</b> into the new version only <b>after</b> this check succeeds.',
    'The old image is not deleted. It is kept <b>until</b> the new one has booted and reported that it works. If the new version freezes, a <b>watchdog timer</b> resets the device, and the bootloader <b>rolls back</b> to the previous image. This design, often called an A/B scheme, <b>prevents</b> a failed update <b>from turning</b> the device into a “brick”: engineers’ slang for a product that no longer starts at all. The update must also survive a sudden <b>power loss</b>, which is why many devices check the battery before they begin and refuse to start if the charge is low.',
    'Even a well-built update can carry a bad bug, so large <b>fleets</b> are rarely updated all at once. In a <b>staged rollout</b>, a <b>release</b> goes first to perhaps one percent of devices. <b>Once</b> that group reports no <b>failures</b>, the next group is updated, and then the next. The cost of ignoring this rule became clear in July 2024, when a faulty update from the security company CrowdStrike reached millions of Windows computers within about an hour. Roughly 8.5 million of them crashed, and airlines, banks and hospitals spent days recovering. It was not a firmware update, but the lesson is the same: the bigger the fleet, the smaller the first step should be.',
    'Engineers like to say that a product is finished only when the last unit has been switched off. Until then, somebody has to keep shipping <b>patches</b>: carefully, in small groups, and always with a way back.'
  ];
  PARA.forEach((p, i) => add({ id: 'r' + (i + 1), type: 'content',
    kicker: 'Reading · Fixing a Device Nobody Can Reach', title: 'Paragraph ' + (i + 1) + ' of 7', items: [SM(p)] }));

  /* ---------- A/B scheme: visual summary ---------- */
  const AB =
    '<svg viewBox="0 0 320 120" width="100%" role="img" aria-label="Two memory slots: A with the old version, B with the new version" style="display:block;max-width:420px">' +
    '<rect x="4" y="18" width="146" height="78" rx="12" style="fill:var(--surface-2);stroke:var(--line);stroke-width:2"/>' +
    '<rect x="170" y="18" width="146" height="78" rx="12" style="fill:var(--accent-soft);stroke:var(--accent);stroke-width:2"/>' +
    '<text x="77" y="50" text-anchor="middle" style="fill:var(--ink);font:700 18px system-ui,sans-serif">Slot A</text>' +
    '<text x="77" y="76" text-anchor="middle" style="fill:var(--ink-2);font:15px system-ui,sans-serif">old · v1.4</text>' +
    '<text x="243" y="50" text-anchor="middle" style="fill:var(--ink);font:700 18px system-ui,sans-serif">Slot B</text>' +
    '<text x="243" y="76" text-anchor="middle" style="fill:var(--accent);font:15px system-ui,sans-serif">new · v1.5</text>' +
    '<text x="160" y="114" text-anchor="middle" style="fill:var(--ink-2);font:13px system-ui,sans-serif">one bootloader chooses the slot</text>' +
    '</svg>';
  add({ id: 'rab', type: 'content', reveal: true, kicker: 'Reading · The A/B scheme', title: 'Two slots, one way back', items: [
    AB,
    '<b>1.</b> The new image <b>is downloaded</b> to slot B.',
    '<b>2.</b> The signature <b>is verified</b>. → reboot into B',
    '<b>3a.</b> B works → it <b>is kept</b>.<br><b>3b.</b> B freezes → watchdog → <b>roll back</b> to A.'] });

  const Q36 = [
    ['The Voyager 1 problem was solved by …', ['replacing the failed chip', 'moving code to other parts of the memory', 'sending commands through another spacecraft', 'switching off the onboard computer']],
    ['Jeep owners were sent USB drives because …', ['the drives were cheaper than a radio update', 'the cars could not receive updates remotely', 'the dealers refused to install the fix', 'the researchers asked Chrysler to do so']],
    ['Before installing a new image, the bootloader …', ['deletes the old image', 'checks nothing but the battery', 'verifies the signature', 'reports to the server']],
    ['The main purpose of the A/B scheme is to …', ['make downloads faster', 'let the device recover from a failed update', 'save flash memory', 'hide the update from users']],
    ['The CrowdStrike example is used to show that …', ['Windows is less reliable than firmware', 'large updates should be released gradually', 'security companies should not issue updates', 'configuration errors rarely cause crashes']]
  ];
  Q36.forEach((q, i) => add({ id: 'e36_' + (i + 1), type: 'mcq', kicker: '3.6 · ' + (i + 1) + '/5',
    prompt: q[0], options: q[1] }));

  [
    'to change something secretly and without permission',
    'a section of memory kept separate from the rest',
    'to return to an earlier version',
    'slang for a device that no longer starts at all',
    'sending a release to small groups of devices, one after another',
    'to ask customers to return a product because of a defect'
  ].forEach((d, i) => add({ id: 'e37_' + (i + 1), type: 'gap', kicker: '3.7 · ' + (i + 1) + '/6',
    instruction: 'Find a word or phrase in the text.', prompt: d + ' → ___' }));

  /* ---------- 3.8 Keyword drill ---------- */
  add({ id: 'k0', type: 'content', kicker: '3.8 · Keyword drill', title: 'Build the sentence', items: [
    'You see only the <b>keywords</b>, in the right order.',
    'Add articles and prepositions. Choose the tense: <b>active or passive?</b>',
    'Say your sentence → compare → repeat the target 3 times.'] });
  const KW = [
    ['spacecraft · still · receive · command · data · make · no sense',
      'The <b>spacecraft</b> was <b>still receiving commands</b>, but its <b>data made no sense</b>.',
      'Апарат досі приймав команди, але його дані не мали жодного сенсу.'],
    ['once · product · leave · factory · firmware · still · have · bug',
      'The thing is, <b>once</b> a <b>product leaves</b> the <b>factory</b>, its <b>firmware still has bugs</b>.',
      'Річ у тім, що навіть коли виріб покидає завод, у його прошивці все ще є помилки.'],
    ['first · new · image · sign · manufacturer · private key',
      '<b>First</b>, the <b>new image</b> is <b>signed</b> by the <b>manufacturer</b> with a <b>private key</b>.',
      'Спершу виробник підписує новий образ закритим ключем.'],
    ['before · install · anything · bootloader · verify · signature',
      '<b>Before installing anything</b>, the <b>bootloader verifies</b> the <b>signature</b>.',
      'Перш ніж щось установлювати, завантажувач перевіряє підпис.'],
    ['watchdog timer · reset · device · bootloader · roll back · previous · image',
      'The <b>watchdog timer resets</b> the <b>device</b>, and the <b>bootloader rolls back</b> to the <b>previous image</b>.',
      'Сторожовий таймер перезапускає пристрій, а завантажувач відкочується до попереднього образу.'],
    ['staged rollout · fleet · update · small · group · all at once',
      'In a <b>staged rollout</b>, the <b>fleet</b> is <b>updated</b> in <b>small groups</b>, not <b>all at once</b>.',
      'Під час поетапного розгортання парк пристроїв оновлюють невеликими групами, а не весь одразу.']
  ];
  KW.forEach((k, i) => add({ id: 'k' + (i + 1), type: 'content', reveal: true,
    kicker: '3.8 · Keyword drill · ' + (i + 1) + '/6', title: k[0], items: [k[1], K(k[2])] }));

  /* ---------- Dialogues ---------- */
  const L = (who, t) => SM('<b>' + who + ':</b> ' + t);
  add({ id: 'd1a', type: 'content', kicker: 'Dialogue 1 · 1/2', title: 'Stand-up: the overnight update', items: [
    L('Oksana', 'How did the overnight update go on the test rack?'),
    L('Taras', 'Not great. Three units out of twenty didn’t come back after the reboot.'),
    L('Oksana', 'Bricked, or just stuck?'),
    L('Taras', 'Stuck in a <b>boot loop</b>. The watchdog <b>kicked in</b>, but the rollback never triggered.')] });
  add({ id: 'd1b', type: 'content', kicker: 'Dialogue 1 · 2/2', title: 'Stand-up: the overnight update', items: [
    L('Oksana', 'So the fallback is what we need to look at, not the new build.'),
    L('Taras', 'Exactly. I’ll <b>pull the logs</b> and reproduce it on one board this morning.'),
    L('Oksana', 'Good. And <b>put the rollout on hold</b> until we know what went wrong.')] });
  add({ id: 'd2a', type: 'content', kicker: 'Dialogue 2 · 1/3', title: 'Explaining a staged rollout', items: [
    L('Customer', 'There’s a security flaw in your thermostat. Why not update every unit tonight?'),
    L('Engineer', 'We could, but if the patch has a bug of its own, two hundred thousand homes would lose heating at the same time.')] });
  add({ id: 'd2b', type: 'content', kicker: 'Dialogue 2 · 2/3', title: 'Explaining a staged rollout', items: [
    L('Customer', 'So what’s the plan?'),
    L('Engineer', 'One percent tonight, ten percent tomorrow, and everyone else on Thursday, once the first groups report no failures.'),
    L('Customer', 'And in the meantime? Those units are still vulnerable.')] });
  add({ id: 'd2c', type: 'content', kicker: 'Dialogue 2 · 3/3', title: 'Explaining a staged rollout', items: [
    L('Engineer', 'That’s true, and it’s the price of doing it safely. To be fair, the flaw can only be exploited from inside the home network, so the risk is limited.'),
    L('Customer', 'All right. <b>Keep me posted</b>, and call me the moment anything goes wrong.')] });

  add({ id: 'e39_1', type: 'open', kicker: '3.9 · 1/3',
    prompt: 'Find words or phrases that show <b>time</b> or the <b>order of events</b>.<br>Write as many as you can.',
    placeholder: 'overnight, …' });

  const M39 = [
    ['a boot loop', ['a cable for the bootloader', 'the device restarts again and again', 'a quick reboot after an update']],
    ['to kick in', ['to break a device', 'to send a command', 'to start working automatically']],
    ['to pull the logs', ['to download the log files from a device', 'to delete old records', 'to unplug the cables']],
    ['to put something on hold', ['to finish it quickly', 'to stop it for a while', 'to give it to another team']],
    ['to keep somebody posted', ['to send somebody a letter', 'to keep somebody waiting', 'to give somebody regular news']]
  ];
  M39.forEach((m, i) => add({ id: 'e39m_' + (i + 1), type: 'mcq', kicker: '3.9 · 2/3 · What does it mean? · ' + (i + 1) + '/5',
    prompt: '<b>' + m[0] + '</b>', options: m[1] }));

  add({ id: 'e39_3a', type: 'mcq', kicker: '3.9 · 3/3 · Dialogue 2',
    prompt: 'The engineer <b>admits a weakness</b> in his plan. Which phrases does he use?',
    options: ['We could, but … / So what’s the plan?', 'That’s true … / To be fair, …', 'Keep me posted … / All right.', 'One percent tonight … / everyone else on Thursday'] });
  add({ id: 'e39_3b', type: 'open', kicker: '3.9 · 3/3 · Dialogue 2',
    prompt: 'Why does the customer <b>still accept</b> the plan?',
    placeholder: 'Because the engineer…' });

  /* ---------- 3.10 Say in English ---------- */
  const UA = [
    ['Новий образ завантажується в запасний розділ.', 'The new image is downloaded to a spare partition.'],
    ['Підпис необхідно перевірити перед установленням.', 'The signature must be verified before installation.'],
    ['Щойно завантаження завершиться, пристрій перезавантажиться.', 'As soon as the download finishes, the device will reboot.'],
    ['Старий образ зберігається, доки новий успішно не запуститься.', 'The old image is kept until the new one boots successfully.'],
    ['Оновлення підписують закритим ключем, щоб зловмисники не могли їх підмінити.', 'Updates are signed with a private key so that attackers cannot replace them.'],
    ['Сторожовий таймер не дає пристрою зависнути.', 'The watchdog timer prevents the device from freezing.'],
    ['Візьміть запасну батарею на випадок, якщо ця розрядиться.', 'Take a spare battery in case this one dies.'],
    ['Цей датчик в експлуатації з 2019 року.', 'This sensor has been in operation since 2019.'],
    ['Перевірте контрольну суму, перш ніж прошивати плату.', 'Check the checksum before flashing the board.'],
    ['Помилку виправили в новій редакції плати.', 'The bug was fixed in the new board revision.'],
    ['Несправність стабілізатора напруги спричинила відмову всієї системи.', 'A fault in the voltage regulator caused a failure of the whole system.'],
    ['2015 року компанія відкликала майже півтора мільйона автомобілів.', 'In 2015, the company recalled almost one and a half million cars.'],
    ['Ми призупиняємо розгортання, доки не з’ясуємо причину.', 'We’re putting the rollout on hold until we find out the cause.'],
    ['Перехід на третю версію потребуватиме більше флеш-пам’яті.', 'The upgrade to version 3 will require more flash memory.']
  ];
  UA.forEach((u, i) => add({ id: 'e310_' + (i + 1), type: 'content', reveal: true,
    kicker: '3.10 · Say it in English · ' + (i + 1) + '/14', title: u[0], items: [u[1]] }));

  /* ---------- 3.11 Speaking ---------- */
  add({ id: 'sp1', type: 'content', kicker: '3.11 · Speaking', title: 'Update plan', items: [
    '<b>Audience:</b> a manager who is not technical',
    '<b>Time:</b> two minutes',
    '<b>Goal:</b> explain how an update for your product will be delivered <b>safely</b>'] });
  add({ id: 'sp2', type: 'mcq', kicker: '3.11 · Choose your scenario',
    prompt: 'Which product will you talk about?',
    options: ['smart water meters in 50,000 apartments', 'traffic-light controllers in a city', 'a fleet of 300 delivery drones', 'infusion pumps in a hospital network', 'soil sensors on farms with weak coverage'] });
  add({ id: 'sp3', type: 'content', reveal: true, kicker: '3.11 · Four moves', title: 'Your briefing plan', items: [
    '<b>1.</b> The <b>steps</b> of the update, in order.',
    '<b>2.</b> How the update is <b>protected</b> against tampering.',
    '<b>3.</b> What if it goes wrong? A crash, a power loss, a corrupted image.',
    '<b>4.</b> A <b>rollout schedule</b> and the <b>condition for stopping</b> it.'] });
  add({ id: 'sp4', type: 'content', kicker: '3.11 · 1/2', title: 'Useful phrases', items: [
    'First, the image is signed and uploaded to our update server.',
    'Once the download is complete, the signature is verified.',
    'The old version is kept in case the new one fails.',
    'This step prevents the device from being bricked.'] });
  add({ id: 'sp5', type: 'content', kicker: '3.11 · 2/2', title: 'Useful phrases', items: [
    'We’d start with one percent of the fleet.',
    'If more than 0.1 percent of devices fail, the rollout is put on hold.',
    'The worst case, then, is a short delay, not a recall.'] });
  add({ id: 'sp6', type: 'open', kicker: '3.11 · Get ready',
    prompt: 'Move 4 is the hardest. Write your <b>stop condition</b> in one sentence.<br>Use a <b>number</b> and the <b>passive</b>.',
    placeholder: 'If more than …, the rollout is …' });
  add({ id: 'sp7', type: 'content', kicker: '3.11 · While you listen', title: 'Check the speaker', items: [
    'All <b>four moves</b>, in order?',
    'At least three <b>passive</b> forms?',
    '<b>once</b>, <b>until</b> or <b>before + -ing</b>?',
    '<b>so that</b>, <b>prevent … from</b> or <b>in case</b>?',
    'A stop condition with a <b>number</b>?'] });

  add({ id: 'end', type: 'end', kicker: 'Unit 3',
    title: 'A product is finished only when the last unit is switched off.',
    text: 'Until then: small groups, and always a way back.' });

  window.LESSON = {
    id: 'esp-ki-unit3',
    title: 'Unit 3 · Over-the-Air Updates',
    slides: S
  };
})();
