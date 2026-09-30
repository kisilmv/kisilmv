/* =========================================================================
   Налаштування Firebase — заповніть ОДИН раз (див. README.md, крок 1–4)
   Firebase Console → ⚙ Project settings → General → Your apps → Web app → SDK setup and configuration → Config
   Ці ключі не є секретом: захист забезпечують правила бази (database.rules.json).
   ========================================================================= */
window.FIREBASE_CONFIG = {
  apiKey: "ВСТАВТЕ_apiKey",
  authDomain: "ваш-проєкт.firebaseapp.com",
  databaseURL: "https://ваш-проєкт-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ваш-проєкт",
  appId: "ВСТАВТЕ_appId"
};

/* Ваш Google-акаунт — лише він відкриває пульт викладача.
   Ту саму адресу вкажіть у database.rules.json (двічі). */
window.TEACHER_EMAIL = "ваша.адреса@gmail.com";
