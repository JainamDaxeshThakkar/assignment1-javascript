// Corrected to match updated HTML IDs
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');

const nouns1 = ['Mario', 'Sonic', 'Link', 'Master Chief', 'Crash Bandicoot'];
const verbs = ['jumped', 'ran', 'attacked', 'collected', 'escaped'];
const adjectives = ['heroic', 'agile', 'skilled', 'brave', 'clever'];
const nouns2 = ['coin', 'ring', 'sword', 'gun', 'power-up'];
const settings = ['castle', 'city', 'jungle', 'space station', 'underwater world'];

function displayStudentIdOnHover() {
    const showStudentIdButton = document.getElementById('showStudentId');
    const studentIdParagraph = document.getElementById('studentId');

    showStudentIdButton.addEventListener('mouseover', function() {
        studentIdParagraph.style.display = 'block';
    });

    showStudentIdButton.addEventListener('mouseleave', function() {
        studentIdParagraph.style.display = 'none';
    });
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

noun1Button.addEventListener('click', function() {
    choosenNoun1.textContent = getRandomElement(nouns1);
});

verbButton.addEventListener('click', function() {
    choosenVerb.textContent = getRandomElement(verbs);
});

adjectiveButton.addEventListener('click', function() {
    choosenAdjective.textContent = getRandomElement(adjectives);
});

noun2Button.addEventListener('click', function() {
    choosenNoun2.textContent = getRandomElement(nouns2);
});

settingButton.addEventListener('click', function() {
    choosenSetting.textContent = getRandomElement(settings);
});

function playback_on_click() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} in the ${choosenSetting.textContent}`;
    document.getElementById('story').value = story;
}

document.getElementById('playback').addEventListener('click', playback_on_click);

function random_on_click() {
    choosenNoun1.textContent = getRandomElement(nouns1);
    choosenVerb.textContent = getRandomElement(verbs);
    choosenAdjective.textContent = getRandomElement(adjectives);
    choosenNoun2.textContent = getRandomElement(nouns2);
    choosenSetting.textContent = getRandomElement(settings);
    playback_on_click();
}

document.getElementById('random').addEventListener('click', random_on_click);

document.getElementById('reset').addEventListener('click', function() {
    choosenNoun1.textContent = '';
    choosenVerb.textContent = '';
    choosenAdjective.textContent = '';
    choosenNoun2.textContent = '';
    choosenSetting.textContent = '';
    document.getElementById('story').value = '';
});

displayStudentIdOnHover();
