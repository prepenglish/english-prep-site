const dictionary = [
    {
        word: "stress",
        level: "B1",
        meaning: "A feeling of worry or pressure",
        turkish: "stres",
        example: "Students feel stress before exams."
    },
    {
        word: "effect",
        level: "A2",
        meaning: "A result of an action",
        turkish: "etki",
        example: "Stress has a negative effect on health."
    },
    {
        word: "advantage",
        level: "A2",
        meaning: "A good side of something",
        turkish: "avantaj",
        example: "Technology has many advantages."
    }
];

async function translateWord() {
    const input = document.getElementById("wordInput").value.toLowerCase().trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (!input) return;

    // 1️⃣ Önce kendi sözlüğünde ara
    const found = dictionary.find(d => d.word === input);

    if (found) {
        resultDiv.innerHTML = `
            <div class="word-card">
                <h3>${found.word} <small>(${found.level})</small></h3>
                <p><b>Meaning:</b> ${found.meaning}</p>
                <p><b>Turkish:</b> ${found.turkish}</p>
                <p><b>Example:</b> ${found.example}</p>
            </div>
        `;
        return;
    }

    // 2️⃣ Sözlükte yoksa → genel çeviri (LibreTranslate)
    try {
        const res = await fetch("https://libretranslate.de/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                q: input,
                source: "en",
                target: "tr",
                format: "text"
            })
        });

        const data = await res.json();

        resultDiv.innerHTML = `
            <div class="word-card">
                <h3>${input}</h3>
                <p><b>Translation:</b> ${data.translatedText}</p>
                <p><i>This translation is automatic.</i></p>
            </div>
        `;
    } catch (err) {
        resultDiv.innerHTML = "<p>Translation service unavailable.</p>";
    }
}
