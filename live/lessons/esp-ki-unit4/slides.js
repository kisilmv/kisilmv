/* =========================================================================
   Unit 4 · Embedded and IoT Security: Closing the Back Doors
   ESP · Комп'ютерна інженерія · B1
   ПУБЛІЧНА частина: те, що бачать студенти. Нотатки й ключі — у teacher.js.
   Частина 1 (≈80 хв): Lead-in + Grammar (4.1–4.4)
   Частина 2 (≈80 хв): Vocabulary (4.5) · Reading (4.6–4.8) · Dialogues (4.9) · 4.10 · Speaking (4.11)
   ========================================================================= */
(function () {
  const K = (s) => '<span class="muted">' + s + '</span>';
  const IMG = 'lessons/esp-ki-unit4/reading.jpg';
  const SM = (h) => '<span style="display:block;font-size:18px;line-height:1.45">' + h + '</span>';
  const term = (en, ipa, uk) => '<span style="display:block;font-size:19px;line-height:1.35"><b>' + en + '</b> ' + K(ipa) + '<br>' + uk + '</span>';

  const S = [];
  const add = (o) => S.push(o);

  /* ===================== ЧАСТИНА 1 ===================== */
  add({ id: 'title', type: 'title',
    kicker: 'Unit 4 · English for Computer Engineering',
    title: 'Embedded and IoT Security',
    subtitle: 'Closing the back doors' });

  /* ---------- Lead-in ---------- */
  add({ id: 'l1', type: 'mcq', kicker: 'Lead-in · 1/3',
    prompt: 'You buy a Wi-Fi camera, plug it in, and it works at once. You never set a password.<br><b>Is that good design or bad design?</b>',
    options: ['Good design', 'Bad design', 'It depends'] });
  add({ id: 'l2', type: 'open', kicker: 'Lead-in · 2/3',
    prompt: 'An attacker has one of your company’s <b>smart locks</b> and a <b>screwdriver</b> on the desk.<br><b>What could they try?</b> Write one idea.',
    placeholder: 'They could…' });
  add({ id: 'l3', type: 'mcq', kicker: 'Lead-in · 3/3',
    prompt: 'For which device would a <b>security flaw</b> be more dangerous?',
    options: ['a smart light bulb', 'an insulin pump'] });

  /* ---------- Grammar: real conditions ---------- */
  add({ id: 'g0', type: 'end', kicker: 'Grammar',
    title: 'Talking about risks',
    text: 'Conditions and consequences' });
  add({ id: 'g1a', type: 'content', reveal: true, kicker: 'Grammar · Rule 1 · 1/2',
    title: 'Real conditions: zero',
    items: [
      'if + present → present<br>' + K('a rule: it always happens'),
      'If a device <b>ships</b> with a default password, anyone who knows the model <b>can log in</b>.'
    ] });
  add({ id: 'g1b', type: 'content', reveal: true, kicker: 'Grammar · Rule 1 · 2/2',
    title: 'Real conditions: first',
    items: [
      '<b>First:</b> if + present → will / can / may + verb<br>' + K('a likely result in the future'),
      'If we <b>don’t close</b> the debug port, attackers <b>will read</b> the firmware.',
      '✅ if the signature check <b>fails</b><br>❌ if the signature check <b>will fail</b>'
    ] });

  const G1 = 'Put the verb in the correct form.';
  const TWO = 'Type both forms: <b>1, 2</b>';
  const blankN = (n) => '<span class="blank">' + n + '</span>';
  add({ id: 'e41_1', type: 'gap', kicker: '4.1 · 1/8', instruction: G1,
    prompt: 'If a sensor ___ (lose) power, it keeps its settings in flash memory.' });
  add({ id: 'e41_2', type: 'gap', kicker: '4.1 · 2/8', instruction: G1,
    prompt: 'If we ___ (not / disable) the debug port, anyone with a cable will be able to read the firmware.' });
  add({ id: 'e41_3', type: 'gap', kicker: '4.1 · 3/8', instruction: G1,
    prompt: 'If a device uses Telnet, an attacker on the same network ___ (can / see) the password.' });
  add({ id: 'e41_4', type: 'gap', kicker: '4.1 · 4/8', instruction: TWO,
    prompt: 'If the signature check ' + blankN(1) + ' (fail), the bootloader ' + blankN(2) + ' (not / start) the new image.<br>1, 2 → ___',
    placeholder: 'form 1, form 2' });
  add({ id: 'e41_5', type: 'gap', kicker: '4.1 · 5/8', instruction: G1,
    prompt: 'Tamper switches ___ (erase) the keys if the case is opened.' });
  add({ id: 'e41_6', type: 'gap', kicker: '4.1 · 6/8', instruction: G1,
    prompt: 'If the device ___ (detect) three failed logins, it will block the account for ten minutes.' });
  add({ id: 'e41_7', type: 'gap', kicker: '4.1 · 7/8', instruction: G1,
    prompt: 'If you ___ (connect) the camera to the internet with the default password, it will be found within minutes.' });
  add({ id: 'e41_8', type: 'gap', kicker: '4.1 · 8/8', instruction: TWO,
    prompt: 'If the firmware ' + blankN(1) + ' (not / sign), an attacker ' + blankN(2) + ' (be able to) replace it.<br>1, 2 → ___',
    placeholder: 'form 1, form 2' });

  /* ---------- Grammar: unless, as long as, provided that, otherwise ---------- */
  add({ id: 'g2a', type: 'content', reveal: true, kicker: 'Grammar · Rule 2',
    title: 'unless = if … not',
    items: [
      'The verb after <b>unless</b> is <b>positive</b>: the “not” is already inside.',
      'The bootloader refuses to start the image <b>unless</b> its signature <b>is</b> valid.',
      '✅ unless the signature <b>is</b> valid<br>❌ unless the signature <b>isn’t</b> valid'
    ] });
  add({ id: 'g2b', type: 'content', reveal: true, kicker: 'Grammar · Rule 2',
    title: 'as long as · provided that',
    items: [
      '<b>as long as / provided that</b> = only if<br>' + K('provided that is more formal'),
      'The device stays secure <b>as long as</b> the private key never leaves the secure element.'
    ] });
  add({ id: 'g2c', type: 'content', reveal: true, kicker: 'Grammar · Rule 2',
    title: 'otherwise',
    items: [
      '<b>otherwise</b> = if not, then…<br>' + K('after a full stop or a semicolon'),
      'Disable Telnet before shipping; <b>otherwise</b>, the device can be taken over remotely.'
    ] });

  add({ id: 'e42_1', type: 'mcq', kicker: '4.2 · 1/6',
    prompt: 'If the signature is not valid, the image is rejected.<br><b>Which sentence means the same?</b>',
    options: [
      'The image is rejected unless the signature is valid.',
      'The image is rejected unless the signature isn’t valid.',
      'The image is rejected unless the signature will be valid.'
    ] });
  add({ id: 'e42_2', type: 'gap', kicker: '4.2 · 2/6',
    instruction: 'The device is secure, but only if the private key stays in the secure element. <b>(as long as)</b>',
    prompt: 'The device is secure ___ the private key stays in the secure element.' });
  add({ id: 'e42_3', type: 'gap', kicker: '4.2 · 3/6',
    instruction: 'Change the default password now. If you don’t, the camera can join a botnet. <b>(otherwise)</b>',
    prompt: 'Change the default password now; ___, the camera can join a botnet.' });
  add({ id: 'e42_4', type: 'gap', kicker: '4.2 · 4/6',
    instruction: 'You can leave the debug header on the board, but only if the port is locked. <b>(provided that)</b>',
    prompt: 'You can leave the debug header on the board ___ the port is locked.' });
  add({ id: 'e42_5', type: 'mcq', kicker: '4.2 · 5/6',
    prompt: 'If users don’t change the factory password, the device is easy to take over.<br><b>Unless users ___ the factory password, the device is easy to take over.</b>',
    options: ['change', 'don’t change', 'will change'] });
  add({ id: 'e42_6', type: 'open', kicker: '4.2 · 6/6',
    prompt: 'The gateway accepts a sensor only if it presents a valid certificate.<br><b>Rewrite with <i>unless</i>.</b>',
    placeholder: 'The gateway…' });

  /* ---------- Grammar: unreal conditions ---------- */
  add({ id: 'g3', type: 'content', reveal: true, kicker: 'Grammar · Rule 3',
    title: 'Unreal: now or future',
    items: [
      'if + <b>past simple</b> → would / could / might + verb<br>' + K('past form = not real, not past'),
      'If an attacker <b>opened</b> the case, what <b>would</b> they <b>find</b> on the board?',
      'If someone <b>cloned</b> the device ID, they <b>could send</b> fake sensor readings.',
      '<b>If I were you</b>, I <b>would disable</b> the UART port in production.'
    ] });
  add({ id: 'g4a', type: 'content', reveal: true, kicker: 'Grammar · Rule 4 · 1/2',
    title: 'Unreal: now or past?',
    items: [
      K('Ukrainian «якби» works for now and for the past. English must choose.'),
      '<b>Now:</b> If the port <b>were</b> closed, we <b>would sleep</b> better.',
      '<b>Past:</b> If the cameras <b>had shipped</b> with unique passwords, the botnet <b>would have been</b> much smaller.'
    ] });
  add({ id: 'g4b', type: 'content', reveal: true, kicker: 'Grammar · Rule 4 · 2/2',
    title: 'Too late to change',
    items: [
      '<b>Criticism:</b> We <b>should have removed</b> the test firmware before shipping.',
      '✅ if they <b>had removed</b><br>❌ if they <b>would have removed</b>'
    ] });

  add({ id: 'e43_1', type: 'gap', kicker: '4.3 · 1/6',
    instruction: 'Our devices don’t have a secure element, so the keys are stored in ordinary flash.',
    prompt: 'If our devices ___ a secure element, the keys wouldn’t be stored in ordinary flash.' });
  add({ id: 'e43_2', type: 'gap', kicker: '4.3 · 2/6',
    instruction: 'The manufacturer didn’t disable Telnet, so Mirai infected its cameras.',
    prompt: 'If the manufacturer had disabled Telnet, Mirai ___ its cameras.',
    placeholder: 'three words' });
  add({ id: 'e43_3', type: 'mcq', kicker: '4.3 · 3/6',
    prompt: 'The firmware wasn’t encrypted, so a competitor copied it.<br><b>If the firmware ___, a competitor couldn’t have copied it.</b>',
    options: ['was encrypted', 'had been encrypted', 'would have been encrypted', 'had encrypted'] });
  add({ id: 'e43_4', type: 'open', kicker: '4.3 · 4/6',
    prompt: 'Nobody tested the car’s entertainment system, so outside researchers found the flaw first.<br><b>If somebody…</b>',
    placeholder: 'If somebody…' });
  add({ id: 'e43_5', type: 'mcq', kicker: '4.3 · 5/6',
    prompt: 'I’m not the hardware lead, so I can’t remove the debug header.<br><b>If I ___ the hardware lead, I would remove the debug header.</b>',
    options: ['am', 'were', 'had been', 'would be'] });
  add({ id: 'e43_6', type: 'gap', kicker: '4.3 · 6/6',
    instruction: 'They didn’t lock the JTAG port, and now anyone can dump the firmware.',
    prompt: 'They ___ the JTAG port.',
    placeholder: 'should…' });

  /* ---------- 4.4 Find the mistake ---------- */
  const FM = (id, n, sentence, parts) => add({ id, type: 'mcq', kicker: '4.4 · Find the mistake · ' + n + '/8',
    prompt: sentence + '<br><span class="muted">Tap the wrong part.</span>', options: parts });
  FM('e44_1', 1, 'If the check will fail, the device returns to the old image.',
    ['If the check will fail', 'the device returns', 'to the old image']);
  FM('e44_2', 2, 'The image is not installed unless the signature isn’t valid.',
    ['The image is not installed', 'unless', 'the signature isn’t valid']);
  FM('e44_3', 3, 'If the vendor would have closed the port, the camera would not have been infected.',
    ['If the vendor would have closed the port', 'the camera would not have been infected']);
  FM('e44_4', 4, 'If I would be you, I would lock the debug interface.',
    ['If I would be you', 'I would lock', 'the debug interface']);
  FM('e44_5', 5, 'Hold the button for ten seconds to reboot the device to factory settings.',
    ['Hold the button', 'for ten seconds', 'to reboot the device', 'to factory settings']);
  FM('e44_6', 6, 'All our cameras ship with the same standard password, admin.',
    ['All our cameras', 'ship with', 'the same standard password', 'admin']);
  FM('e44_7', 7, 'The certificate was recalled after the private key leaked.',
    ['The certificate', 'was recalled', 'after the private key leaked']);
  FM('e44_8', 8, 'Our team designs the iron for the new controller.',
    ['Our team', 'designs', 'the iron', 'for the new controller']);

  add({ id: 'p1end', type: 'end', kicker: 'End of Part 1',
    title: 'Part 1: done',
    text: 'Next time: vocabulary, the Mirai story and your security briefing.' });

  /* ===================== ЧАСТИНА 2 ===================== */
  add({ id: 'v0', type: 'end', kicker: 'Part 2 · Vocabulary',
    title: 'Words for attacks and defenses',
    text: 'American spelling and pronunciation, as in industry documentation.' });

  add({ id: 'vA1', type: 'content', kicker: 'Vocabulary · 1/2', title: 'A. Threats and attacks', items: [
    term('vulnerability', '/ˌvʌlnərəˈbɪləti/', 'вразливість'),
    term('attacker', '/əˈtækər/', 'зловмисник, нападник'),
    term('botnet', '/ˈbɑːtnet/', 'ботнет'),
    term('malware', '/ˈmælwer/', 'шкідливе програмне забезпечення')] });
  add({ id: 'vA2', type: 'content', kicker: 'Vocabulary · 2/2', title: 'A. Threats and attacks', items: [
    term('DDoS attack', '/ˌdiː dɑːs əˈtæk/', 'розподілена атака на відмову в обслуговуванні'),
    term('to take over', '/ˌteɪk ˈoʊvər/', 'захоплювати (керування)'),
    term('remote attack', '/rɪˌmoʊt əˈtæk/', 'віддалена атака'),
    term('physical attack', '/ˌfɪzɪkl əˈtæk/', 'фізична атака')] });
  add({ id: 'vAq', type: 'mcq', kicker: 'A · Quick check',
    prompt: 'An attacker controls 600,000 infected cameras and routers.<br><b>This network is a …</b>',
    options: ['vulnerability', 'botnet', 'malware', 'physical attack'] });

  add({ id: 'vB1', type: 'content', kicker: 'Vocabulary · 1/2', title: 'B. Access and identity', items: [
    term('default password', '/dɪˌfɔːlt ˈpæswɜːrd/', 'заводський пароль'),
    term('credentials', '/krəˈdenʃlz/', 'облікові дані'),
    term('authentication', '/ɔːˌθentɪˈkeɪʃn/', 'автентифікація'),
    term('authorization', '/ˌɔːθərəˈzeɪʃn/', 'авторизація (надання й перевірка прав)')] });
  add({ id: 'vB2', type: 'content', kicker: 'Vocabulary · 2/2', title: 'B. Access and identity', items: [
    term('certificate', '/sərˈtɪfɪkət/', 'сертифікат'),
    term('to revoke', '/rɪˈvoʊk/', 'відкликати (сертифікат, доступ)'),
    term('private key', '/ˌpraɪvət ˈkiː/', 'закритий ключ'),
    term('open port', '/ˌoʊpən ˈpɔːrt/', 'відкритий порт')] });
  add({ id: 'vBq', type: 'mcq', kicker: 'B · Quick check',
    prompt: 'The private key leaked, so the certificate is no longer safe.<br><b>The company … the certificate.</b>',
    options: ['recalls', 'revokes', 'patches', 'clones'] });

  add({ id: 'vC1', type: 'content', kicker: 'Vocabulary · 1/2', title: 'C. Hardware protection', items: [
    term('debug port', '/diːˈbʌɡ pɔːrt/', 'порт налагодження'),
    term('header', '/ˈhedər/', 'штировий роз’єм (на платі)'),
    term('to dump firmware', '/ˌdʌmp ˈfɜːrmwer/', 'вивантажувати мікропрограму'),
    term('secure boot', '/sɪˌkjʊr ˈbuːt/', 'безпечне завантаження')] });
  add({ id: 'vC2', type: 'content', kicker: 'Vocabulary · 2/2', title: 'C. Hardware protection', items: [
    term('chain of trust', '/ˌtʃeɪn əv ˈtrʌst/', 'ланцюжок довіри'),
    term('secure element', '/sɪˌkjʊr ˈelɪmənt/', 'захищений елемент (мікросхема)'),
    term('tamper detection', '/ˈtæmpər dɪˌtekʃn/', 'виявлення втручання'),
    term('to clone', '/kloʊn/', 'клонувати, виготовляти копію')] });
  add({ id: 'vCq', type: 'mcq', kicker: 'C · Quick check',
    prompt: 'Someone opens the case, and the device erases its keys.<br><b>This feature is …</b>',
    options: ['secure boot', 'tamper detection', 'a chain of trust', 'a debug port'] });

  add({ id: 'vD1', type: 'content', kicker: 'Vocabulary · 1/2', title: 'D. Responsibility and response', items: [
    term('security flaw', '/sɪˈkjʊrəti flɔː/', 'вада захисту'),
    term('to patch', '/pætʃ/', 'латати, встановлювати виправлення'),
    term('recall', '/ˈriːkɔːl/', 'відкликання (партії виробів)'),
    term('support period', '/səˈpɔːrt ˌpɪriəd/', 'строк підтримки')] });
  add({ id: 'vD2', type: 'content', kicker: 'Vocabulary · 2/2', title: 'D. Responsibility and response', items: [
    term('functional safety', '/ˌfʌŋkʃənl ˈseɪfti/', 'функційна безпека'),
    term('penetration test', '/ˌpenəˈtreɪʃn test/', 'тест на проникнення'),
    term('attack surface', '/əˈtæk ˌsɜːrfəs/', 'поверхня атаки'),
    term('to ship', '/ʃɪp/', 'відвантажувати, постачати (продукт)')] });
  add({ id: 'vDq', type: 'mcq', kicker: 'D · Quick check',
    prompt: 'Before launch, the company pays experts to attack its own product.<br><b>This is a …</b>',
    options: ['recall', 'penetration test', 'support period', 'patch'] });

  /* ---------- Terminological traps ---------- */
  const trap = (pair, uk, ex) => SM('<b>' + pair + '</b><br>' + K(uk) + '<br><i>' + ex + '</i>');
  add({ id: 't1', type: 'content', reveal: true, kicker: 'Vocabulary · 1/4', title: 'Terminological traps', items: [
    trap('security ≠ safety', 'security — захист від навмисних дій · safety — захист людей від випадкової шкоди',
      'A hacked insulin pump is a security problem that can quickly become a safety problem.'),
    trap('default ≠ standard', '«заводський пароль» = default password · standard — відповідний стандарту',
      'The default password was admin.')] });
  add({ id: 't2', type: 'content', reveal: true, kicker: 'Vocabulary · 2/4', title: 'Terminological traps', items: [
    trap('reboot ≠ reset', '«перезавантажити» = reboot · reset — скинути до початкового стану',
      'Reboot the router if it freezes; a factory reset erases all your settings.'),
    trap('hardware ≠ iron', '«залізо» (жаргон) = hardware · iron — метал, праска',
      'The bug is in the hardware, not in the firmware.')] });
  add({ id: 't3', type: 'content', reveal: true, kicker: 'Vocabulary · 3/4', title: 'Terminological traps', items: [
    trap('recall ≠ revoke', 'відкликати партію виробів = recall · сертифікат, ключ, доступ = revoke',
      'The carmaker recalled 1.4 million vehicles; the leaked certificate was revoked.'),
    trap('tamper with ≠ damage', 'tamper with — навмисно втручатися · damage — пошкоджувати',
      'The seal shows whether anyone has tampered with the meter.')] });
  add({ id: 't4', type: 'content', reveal: true, kicker: 'Vocabulary · 4/4', title: 'Terminological traps', items: [
    trap('sensitive ≠ sensible', 'чутливі, конфіденційні дані = sensitive data · sensible — розсудливий',
      'A smart meter collects sensitive data; a sensible design stores as little as possible.'),
    trap('authentication ≠ authorization', 'хто ви? = authentication · що вам дозволено? = authorization',
      'The lock authenticates the owner by fingerprint; authorization decides whether a guest may open it at night.')] });

  const P45 = [
    ['An insulin pump must meet strict ___ requirements so that it never harms a patient by accident.', 'security', 'safety'],
    ['All the cameras used the same ___ password: admin.', 'default', 'standard'],
    ['If the device freezes, just ___ it; your settings will be kept.', 'reboot', 'reset'],
    ['Our startup designs both the ___ and the firmware of the lock.', 'hardware', 'iron'],
    ['After the private key leaked, the certificate was ___.', 'recalled', 'revoked'],
    ['The case has a switch that erases the keys if someone tries to ___ with the device.', 'tamper', 'damage'],
    ['The smart meter stores ___ data, such as when a family is at home.', 'sensitive', 'sensible'],
    ['The lock checks the owner’s fingerprint: that is ___. The app then decides who else may open the door.', 'authentication', 'authorization']
  ];
  P45.forEach((p, i) => add({ id: 'e45_' + (i + 1), type: 'mcq', kicker: '4.5 · ' + (i + 1) + '/8',
    prompt: p[0], options: [p[1], p[2]] }));

  /* ---------- Reading ---------- */
  add({ id: 'r0', type: 'open', kicker: 'Reading · Before you read',
    prompt: '<img src="' + IMG + '" alt="An infected camera sends traffic to overloaded servers; a car on a highway" style="display:block;width:100%;height:230px;object-fit:cover;object-position:50% 30%;border-radius:16px;margin-bottom:12px">The text is called <b>“Default Settings, Real Damage”</b>. What do you think happened?',
    placeholder: 'I think…' });

  const PARA = [
    'On October 21, 2016, millions of people in the United States and Europe suddenly could not open Twitter, Netflix, Reddit or GitHub. The sites themselves were working. The target was Dyn, a company that ran DNS services for them, and the traffic that flooded its servers came from an unusual army: home routers, digital video recorders and security cameras infected with <b>malware</b> called Mirai. Dyn later estimated that up to 100,000 infected devices took part in the attack.',
    'Mirai needed no brilliant tricks. It scanned the internet for devices with <b>open Telnet ports</b> and tried a short list of about sixty factory <b>default</b> usernames and passwords, such as admin and admin. If a device accepted one of them, it <b>was taken over</b> within seconds. Most owners never noticed anything: the camera kept recording, and the only symptom was some extra network traffic. At its peak, the <b>botnet</b> controlled around 600,000 devices. If those cameras had shipped with unique passwords and closed ports, Mirai would have been a small nuisance rather than a global headline.',
    'For embedded engineers, the story has a second, more worrying chapter. In 2015, two security researchers showed that a car could be attacked in a similar way: remotely. Through a flaw in the connected entertainment system of a Jeep Cherokee, they reached the vehicle’s internal network and took control of its radio, its wipers and even its transmission while a journalist was driving it on a highway. Fiat Chrysler <b>recalled</b> 1.4 million vehicles to fix the problem. In a connected device, a <b>security flaw</b> can quickly become a <b>safety</b> problem.',
    'That is why hardware teams practice thinking like an attacker, one who has the device on the desk. What would happen if someone opened the case? What if they connected a cable to the board? <b>Debug interfaces</b> such as JTAG and UART are essential during development, but if they are left open on production boards, an attacker can <b>dump the firmware</b>, read the keys and build a perfect copy of the device. Good designs lock or disable these ports before shipping and add <b>tamper detection</b> that erases secrets when the case is opened.',
    'The software side needs the same care. With <b>secure boot</b>, each stage of the startup process checks the signature of the next one, and the processor refuses to run any code unless its signature is valid. This <b>chain of trust</b> begins with keys stored in a <b>secure element</b>, a small chip designed to keep them inside even under physical attack. As long as the <b>private key</b> never leaves that chip, a cloned board is of little use to an attacker.',
    'Regulators have also stopped waiting for manufacturers. Since April 2024, consumer connected products sold in the United Kingdom may not have universal default passwords. In the European Union, the Cyber Resilience Act has required manufacturers to report actively exploited <b>vulnerabilities</b> since September 11, 2026, and from December 2027 products with digital elements will have to meet its security requirements to carry the CE marking. Unless a device can receive security updates throughout its <b>support period</b>, it will not meet those requirements.',
    'Many connected devices stay in service for ten years or more. Over that time, someone will almost certainly find a vulnerability. The real question for an engineer is not whether this will happen, but whether the device will still be locked, updatable and worth trusting when it does.'
  ];
  PARA.forEach((p, i) => add({ id: 'r' + (i + 1), type: 'content',
    kicker: 'Reading · Default Settings, Real Damage', title: 'Paragraph ' + (i + 1) + ' of 7', items: [SM(p)] }));

  const Q46 = [
    ['Mirai took over devices mainly by …', ['exploiting a secret flaw in DNS servers', 'stealing passwords from device owners', 'trying factory default usernames and passwords', 'installing fake firmware updates']],
    ['The Jeep Cherokee example shows that …', ['a flaw in a connected device can put people in danger', 'cars are safer than home cameras', 'entertainment systems should never be connected', 'journalists often test cars for security']],
    ['Open debug ports on production boards let an attacker …', ['shut down a DNS service', 'avoid the CE marking', 'control a car’s transmission', 'read the firmware and keys and copy the device']],
    ['A secure element is described as …', ['a type of debug port', 'a chip that keeps keys inside even under physical attack', 'a list of default passwords', 'a part of the processor that inspects traffic']],
    ['The final paragraph mainly suggests that engineers should …', ['be ready for the vulnerability that will eventually be found', 'design devices that last longer than ten years', 'stop worrying about vulnerabilities', 'wait for regulators to set the rules']]
  ];
  Q46.forEach((q, i) => add({ id: 'e46_' + (i + 1), type: 'mcq', kicker: '4.6 · ' + (i + 1) + '/5',
    prompt: q[0], options: q[1] }));

  const D47 = [
    'a network of infected devices controlled by an attacker',
    'to get control of a device',
    'an official request to return products to the manufacturer for repair',
    'connectors used to test and program a board during development',
    'a chip designed to keep keys safe even under physical attack',
    'a sequence in which each startup stage checks the next one'
  ];
  D47.forEach((d, i) => add({ id: 'e47_' + (i + 1), type: 'gap', kicker: '4.7 · ' + (i + 1) + '/6',
    instruction: 'Find a word or phrase in the text.', prompt: d + ' → ___' }));

  /* ---------- 4.8 Keyword drill ---------- */
  add({ id: 'k0', type: 'content', kicker: '4.8 · Keyword drill', title: 'Build the sentence', items: [
    'You see only the <b>keywords</b>, in the right order.',
    'Add articles and prepositions. Choose the tense and the type of condition.',
    'Say your sentence → compare → repeat the target 3 times.'] });
  const KW = [
    ['scan · internet · device · open · Telnet port · try · default · password',
      'Mirai <b>scanned</b> the <b>internet</b> for <b>devices</b> with <b>open Telnet ports</b> and <b>tried default passwords</b>.',
      'Mirai шукав в інтернеті пристрої з відкритими портами Telnet і пробував заводські паролі.'],
    ['owner · never · notice · anything · camera · keep · record',
      'To be honest, most <b>owners never noticed anything</b>, because the <b>camera kept recording</b>.',
      'Чесно кажучи, більшість власників нічого не помітили, бо камера й далі записувала.'],
    ['security · flaw · quickly · become · safety · problem',
      'The thing is, a <b>security flaw</b> can <b>quickly become</b> a <b>safety problem</b>.',
      'Річ у тім, що вада кіберзахисту може швидко стати загрозою для безпеки людей.'],
    ['what · happen · if · someone · open · case · connect · cable',
      '<b>What would happen if someone opened</b> the <b>case</b> and <b>connected</b> a <b>cable</b> to the board?',
      'Що станеться, якби хтось відкрив корпус і під’єднав до плати кабель?'],
    ['processor · refuse · run · code · unless · signature · valid',
      'The <b>processor refuses</b> to <b>run</b> any <b>code unless</b> its <b>signature</b> is <b>valid</b>.',
      'Процесор відмовляється виконувати будь-який код, якщо його підпис недійсний.'],
    ['if · camera · ship · unique · password · botnet · much · small',
      '<b>If</b> those <b>cameras</b> had <b>shipped</b> with <b>unique passwords</b>, the <b>botnet</b> would have been <b>much smaller</b>.',
      'Якби ці камери постачали з унікальними паролями, ботнет був би значно меншим.']
  ];
  KW.forEach((k, i) => add({ id: 'k' + (i + 1), type: 'content', reveal: true,
    kicker: '4.8 · Keyword drill · ' + (i + 1) + '/6', title: k[0], items: [k[1], K(k[2])] }));

  /* ---------- Dialogues ---------- */
  const L = (who, t) => SM('<b>' + who + ':</b> ' + t);
  add({ id: 'd1a', type: 'content', kicker: 'Dialogue 1 · 1/2', title: 'The open debug port', items: [
    L('Sofiia', 'I’ve checked the production board for the smart lock. There’s one thing I don’t like.'),
    L('Andrii', 'Go ahead.'),
    L('Sofiia', 'The UART header is still on the board, and it isn’t locked. If I connect a cable, I get a root shell.'),
    L('Andrii', 'Really? We only used it for testing.')] });
  add({ id: 'd1b', type: 'content', kicker: 'Dialogue 1 · 2/2', title: 'The open debug port', items: [
    L('Sofiia', 'I know, but attackers don’t care why it’s there. If someone bought one lock, they could dump the firmware and read the keys.'),
    L('Andrii', 'Fair point. If we had missed this before launch, we’d have had to recall the whole batch.'),
    L('Sofiia', 'Exactly. Can we disable the port in the production firmware?'),
    L('Andrii', 'Yes. And I’ll ask the hardware team to remove the header from the next revision, just in case.')] });
  add({ id: 'd2a', type: 'content', kicker: 'Dialogue 2 · 1/3', title: 'Drop the default password', items: [
    L('Manager', 'Customers love that our camera works straight out of the box. Why change that?'),
    L('Engineer', 'I understand. But if every camera has the same password, an attacker can take over thousands of them in one night.'),
    L('Manager', 'Surely most people change it themselves?'),
    L('Engineer', 'Most don’t, unfortunately. And if our cameras ended up in a botnet, our brand would be in the news.')] });
  add({ id: 'd2b', type: 'content', kicker: 'Dialogue 2 · 2/3', title: 'Drop the default password', items: [
    L('Manager', 'So what do you suggest?'),
    L('Engineer', 'Each camera gets a unique password printed on its label, provided that setup still takes under two minutes. I’d also recommend a short setup wizard in the app.'),
    L('Manager', 'Fine, as long as support doesn’t get flooded with calls.')] });
  add({ id: 'd2c', type: 'content', kicker: 'Dialogue 2 · 3/3', title: 'Drop the default password', items: [
    L('Engineer', 'It shouldn’t. And there’s one more thing: since April 2024, we can’t sell cameras with a universal default password in the UK anyway.'),
    L('Manager', 'Then that settles it. But if calls go up, let’s look at the wizard again.'),
    L('Engineer', 'Agreed. We’ll track the numbers for the first month.')] });

  const TYPES = ['real · now or always', 'real · future', 'unreal · now or future', 'unreal · past'];
  const C49 = [
    'If I connect a cable, I get a root shell.',
    'If someone bought one lock, they could dump the firmware and read the keys.',
    'If we had missed this before launch, we’d have had to recall the whole batch.',
    'If our cameras ended up in a botnet, our brand would be in the news.',
    'If calls go up, let’s look at the wizard again.'
  ];
  C49.forEach((c, i) => add({ id: 'e49c_' + (i + 1), type: 'mcq', kicker: '4.9 · What type of condition? · ' + (i + 1) + '/5',
    prompt: c, options: TYPES }));

  const M49 = [
    ['straight out of the box', ['right after unpacking, with no setup', 'in its original box', 'without a warranty']],
    ['Fair point.', ['That is a good argument.', 'That is not fair.', 'Let’s make a point.']],
    ['get flooded with calls', ['receive far too many calls', 'lose all phone calls', 'call too many customers']],
    ['That settles it.', ['That decides the question.', 'That is a new problem.', 'Let’s discuss it later.']]
  ];
  M49.forEach((m, i) => add({ id: 'e49m_' + (i + 1), type: 'mcq', kicker: '4.9 · What does it mean? · ' + (i + 1) + '/4',
    prompt: '<b>' + m[0] + '</b>', options: m[1] }));
  add({ id: 'e49_3', type: 'mcq', kicker: '4.9 · Dialogue 2',
    prompt: 'Which argument <b>finally</b> persuades the manager?',
    options: ['Customers love simple setup.', 'A short setup wizard in the app.', 'Since April 2024, the UK does not allow universal default passwords.', 'Support will get fewer calls.'] });

  /* ---------- 4.10 Say in English ---------- */
  const UA = [
    ['Якщо пристрій постачають із заводським паролем, будь-хто, хто знає модель, може в нього ввійти.', 'If a device ships with a default password, anyone who knows the model can log in to it.'],
    ['Якщо ми не вимкнемо порт налагодження, зловмисники прочитають мікропрограму.', 'If we don’t disable the debug port, attackers will read the firmware.'],
    ['Завантажувач не запускає образ, якщо підпис недійсний. <span class="muted">(unless)</span>', 'The bootloader doesn’t start the image unless the signature is valid.'],
    ['Пристрій захищений, доки закритий ключ не залишає захищеного елемента.', 'The device is secure as long as the private key doesn’t leave the secure element.'],
    ['Вимкніть Telnet перед відвантаженням, інакше пристрій можна буде захопити віддалено.', 'Disable Telnet before shipping; otherwise, the device can be taken over remotely.'],
    ['Якби зловмисник відкрив корпус, він не знайшов би на платі жодних ключів.', 'If an attacker opened the case, they wouldn’t find any keys on the board.'],
    ['На вашому місці я б заблокував інтерфейс JTAG.', 'If I were you, I would lock the JTAG interface.'],
    ['Якби виробник закрив порти, ці камери не потрапили б до ботнету.', 'If the manufacturer had closed the ports, these cameras wouldn’t have ended up in a botnet.'],
    ['Нам слід було видалити тестову мікропрограму перед відвантаженням.', 'We should have removed the test firmware before shipping.'],
    ['Замок перевіряє відбиток пальця власника, а застосунок вирішує, кому ще дозволено відчиняти двері.', 'The lock authenticates the owner by fingerprint, and the app decides who else is authorized to open the door.'],
    ['Якщо роутер зависне, перезавантажте його.', 'If the router freezes, reboot it.'],
    ['Після витоку ключа сертифікат відкликали.', 'After the key leaked, the certificate was revoked.'],
    ['Пломба показує, чи хтось втручався в лічильник.', 'The seal shows whether anyone has tampered with the meter.'],
    ['Наша команда розробляє апаратне забезпечення для нового контролера.', 'Our team designs the hardware for the new controller.']
  ];
  UA.forEach((u, i) => add({ id: 'e410_' + (i + 1), type: 'content', reveal: true,
    kicker: '4.10 · Say it in English · ' + (i + 1) + '/14', title: u[0], items: [u[1]] }));

  /* ---------- 4.11 Speaking ---------- */
  add({ id: 'sp1', type: 'content', kicker: '4.11 · Speaking', title: 'Security briefing', items: [
    '<b>Audience:</b> a manager who is not technical',
    '<b>Time:</b> two minutes',
    '<b>Goal:</b> the main security risks of a connected device and how to reduce them'] });
  add({ id: 'sp2', type: 'mcq', kicker: '4.11 · Choose your device',
    prompt: 'Which device will you talk about?',
    options: ['a smart door lock', 'a baby monitor camera', 'a controller in a water treatment plant', 'a connected insulin pump', 'a fleet of rental electric scooters'] });
  add({ id: 'sp3', type: 'content', reveal: true, kicker: '4.11 · Four moves', title: 'Your briefing plan', items: [
    '<b>1.</b> What must the device protect: data, functions or people’s physical safety?',
    '<b>2.</b> Two realistic attacks: one <b>remote</b>, one <b>physical</b>. What would happen if they succeeded?',
    '<b>3.</b> The protections and the conditions they depend on.',
    '<b>4.</b> A real or imagined past incident → one priority action.'] });
  add({ id: 'sp4', type: 'content', kicker: '4.11 · 1/2', title: 'Useful phrases', items: [
    'The most sensitive part of this device is …',
    'If an attacker had the device on their desk, they could …',
    'The device won’t run any firmware unless its signature is valid.',
    'The keys stay safe as long as they never leave the secure element.'] });
  add({ id: 'sp5', type: 'content', kicker: '4.11 · 2/2', title: 'Useful phrases', items: [
    'If those cameras had shipped with unique passwords, Mirai would have been much smaller.',
    'I’d strongly recommend disabling the debug port before production.',
    'Otherwise, one stolen device is enough to study and attack the whole product line.'] });
  add({ id: 'sp6', type: 'open', kicker: '4.11 · Get ready',
    prompt: 'Write your <b>priority action</b> in one sentence.<br>Use <b>otherwise</b> or <b>unless</b>.',
    placeholder: 'We should … ; otherwise, …' });
  add({ id: 'sp7', type: 'content', kicker: '4.11 · While you listen', title: 'Check the speaker', items: [
    'One <b>remote</b> and one <b>physical</b> attack?',
    'At least two <b>if + past</b> sentences?',
    '<b>unless</b>, <b>as long as</b>, <b>provided that</b> or <b>otherwise</b>?',
    'A clear <b>priority action</b> with a deadline?'] });

  add({ id: 'end', type: 'end', kicker: 'Unit 4',
    title: 'Someone will find a vulnerability.',
    text: 'Your job: keep the device locked, updatable and worth trusting.' });

  window.LESSON = {
    id: 'esp-ki-unit4',
    title: 'Unit 4 · Embedded and IoT Security',
    slides: S
  };
})();
