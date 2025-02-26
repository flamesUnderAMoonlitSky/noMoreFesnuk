document.addEventListener('DOMContentLoaded', function () {
  const enabledCheckbox = document.getElementById('enabled');
  browser.storage.sync.get('enabled', (data) => {
    enabledCheckbox.checked = data.enabled !== false; // Default to true
  });
  enabledCheckbox.addEventListener('change', () => {
    browser.storage.sync.set({ enabled: enabledCheckbox.checked });
  });

  const quotes = [
    'Ngoding punika kados ngendikakaken mantra, kedah sabar supados kasilipun sae. – Frieren',
    'Waktu kanggé debug memang suwé, nanging manawi cepet rampung, rasanipun kados sihir. – Frieren',
    'Sinau ngoding punika kados nyusuri lorong waktu, alon-alon nanging mesthi tekan. – Frieren',
    'Error punika namung alangan alit, kula sampun biasa ngadhepi sing luwih susah. – Frieren',
    'Kode kula mboten langsung mlaku? Tenang, kula gadhah sewu taun kanggé mbeneraken. – Frieren',
    'Ngitung kompleksitas algoritma punika kados ngitung umur kula, rumit nanging wigati. – Frieren',
    'Siji baris kode salah saged ngrusak sadaya, mirip sihir kuna, ta? – Frieren',
    'Kula mboten kesusu nulis kode, sing penting rampung lan rapi. – Frieren',
    'Ngoding punika kados petualangan, saben bug punika mungsuh sing kedah dilupakaken. – Frieren',
    'Manawi panjenengan nyerah amarga error, panjenengan mboten bakal dados mage ngoding. – Frieren',
    'Fungsi sing mbingungaken punika kados mantra sing lali kula tulis ulang. – Frieren',
    'Saben baris kode gadhah crita, kados kenangan perjalanan kula. – Frieren',
    'Optimasi kode punika kados nyanyi, kedah pas supados irit ambekan. – Frieren',
    'Kula sampun ningali ewonan bug, nanging saben dinten tetep sinau. – Frieren',
    'Ngitung runtime punika kados mriksa stok mana sihirkula, kedah efisien. – Frieren',
    'Kode sing resik punika kados pemandangan sèstrikaken perang, tentrem sanget. – Frieren',
    'Aja wedi salah, kula piyambak mbutuhaken atusan taun kanggé dados mage ngoding. – Frieren',
    'Ngoding punika kados nyanyi lagu kuna, kedah ngélingi nada sing bener. – Frieren',
    'Stack overflow? Kula gadhah tumpukan buku sihir sing luwih dhuwur tinimbang punika. – Frieren',
    'Manawi panjenengan damel kode sing prasaja, panjenengan bakal gesang luwih suwé kados kula. – Frieren',
  ];

  const difficultySelect = document.getElementById('difficulty');
  const websiteSelect = document.getElementById('website');

  document.getElementById('quote').textContent =
    quotes[Math.floor(Math.random() * quotes.length)];

  // Load saved preferences from storage and set defaults if not present
  browser.storage.sync.get(['difficulty', 'website'], function (data) {
    // Set default difficulty to "All" if not defined
    if (!data.difficulty) {
      browser.storage.sync.set({ difficulty: 'All' }, function () {
        difficultySelect.value = 'All';
      });
    } else {
      difficultySelect.value = data.difficulty;
    }

    // Set default website to "LeetCode" if not defined
    if (!data.website) {
      browser.storage.sync.set({ website: 'LeetCode' }, function () {
        websiteSelect.value = 'LeetCode';
      });
    } else {
      websiteSelect.value = data.website;
    }
  });

  // Save difficulty when changed
  difficultySelect.addEventListener('change', function () {
    const selectedDifficulty = difficultySelect.value;
    browser.storage.sync.set({ difficulty: selectedDifficulty }, function () {
      console.log('Difficulty set to: ' + selectedDifficulty);
    });
  });

  // Save website when changed
  websiteSelect.addEventListener('change', function () {
    const selectedWebsite = websiteSelect.value;
    browser.storage.sync.set({ website: selectedWebsite }, function () {
      console.log('Website set to: ' + selectedWebsite);
    });
  });
});
