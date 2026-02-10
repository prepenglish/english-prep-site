const dictionary = [
  // ===== A1 =====
  { word: "study", level: "A1", meaning: "to learn", turkish: "çalışmak", example: "I study English every day." },
  { word: "school", level: "A1", meaning: "place of education", turkish: "okul", example: "My school is big." },

  // ===== A2 =====
  { word: "education", level: "A2", meaning: "process of learning", turkish: "eğitim", example: "Education is important." },
  { word: "environment", level: "A2", meaning: "the natural world", turkish: "çevre", example: "We should protect the environment." },
  { word: "technology", level: "A2", meaning: "modern machines", turkish: "teknoloji", example: "Technology helps students." },

  // ===== B1 =====
  { word: "cause", level: "B1", meaning: "a reason", turkish: "sebep", example: "Stress is a cause of problems." },
  { word: "effect", level: "B1", meaning: "a result", turkish: "etki", example: "Lack of sleep has bad effects." },
  { word: "opportunity", level: "B1", meaning: "a chance", turkish: "fırsat", example: "University offers many opportunities." },
  { word: "responsibility", level: "B1", meaning: "duty", turkish: "sorumluluk", example: "Students have responsibilities." },

  // ===== B1+ (PREP CORE) =====
  { word: "academic", level: "B1+", meaning: "related to education", turkish: "akademik", example: "Academic success requires effort." },
  { word: "efficient", level: "B1+", meaning: "working well", turkish: "verimli", example: "Time management makes study efficient." },
  { word: "essential", level: "B1+", meaning: "very important", turkish: "hayati", example: "English is essential at university." },
  { word: "pressure", level: "B1+", meaning: "stress or force", turkish: "baskı", example: "Students feel exam pressure." },
  { word: "consequence", level: "B1+", meaning: "result of an action", turkish: "sonuç", example: "Every action has consequences." },
  { word: "improve", level: "B1+", meaning: "to make better", turkish: "geliştirmek", example: "Practice improves skills." },
  { word: "manage", level: "B1+", meaning: "to control", turkish: "yönetmek", example: "Students must manage time well." },
  { word: "require", level: "B1+", meaning: "to need", turkish: "gerektirmek", example: "Success requires hard work." },
  { word: "significant", level: "B1+", meaning: "important", turkish: "önemli", example: "There is a significant difference." }
];

const wordContainer = document.getElementById("words");
const searchInput = document.getElementById("search");
const levelSelect = document.getElementById("level");

function renderWords() {
  wordContainer.innerHTML = "";

  const searchValue = searchInput.value.toLowerCase();
  const selectedLevel = levelSelect.value;

  dictionary
    .filter(item =>
      item.word.toLowerCase().includes(searchValue) &&
      (selectedLevel === "all" || item.level === selectedLevel)
    )
    .forEach(item => {
      const div = document.createElement("div");
      div.className = "word-card";
      div.innerHTML = `
        <h3>${item.word} <span class="level">(${item.level})</span></h3>
        <p><strong>Meaning:</strong> ${item.meaning}</p>
        <p><strong>Turkish:</strong> ${item.turkish}</p>
        <p><strong>Example:</strong> ${item.example}</p>
      `;
      wordContainer.appendChild(div);
    });
}

searchInput.addEventListener("input", renderWords);
levelSelect.addEventListener("change", renderWords);

renderWords();
dictionary.push(

  // ===== A2 =====
  { word: "benefit", level: "A2", meaning: "a good result", turkish: "fayda", example: "Reading has many benefits." },
  { word: "habit", level: "A2", meaning: "something you do regularly", turkish: "alışkanlık", example: "Studying daily is a good habit." },
  { word: "support", level: "A2", meaning: "to help", turkish: "desteklemek", example: "Teachers support students." },
  { word: "reduce", level: "A2", meaning: "to make less", turkish: "azaltmak", example: "Exercise reduces stress." },
  { word: "increase", level: "A2", meaning: "to make more", turkish: "arttırmak", example: "Practice increases success." },

  // ===== B1 =====
  { word: "focus", level: "B1", meaning: "to concentrate", turkish: "odaklanmak", example: "Students must focus in class." },
  { word: "balance", level: "B1", meaning: "a healthy mix", turkish: "denge", example: "Life needs balance." },
  { word: "goal", level: "B1", meaning: "something you want to achieve", turkish: "hedef", example: "My goal is to pass prep." },
  { word: "experience", level: "B1", meaning: "knowledge from life", turkish: "tecrübe", example: "University is a great experience." },
  { word: "challenge", level: "B1", meaning: "something difficult", turkish: "zorluk", example: "Prep is a challenge for students." },
  { word: "solution", level: "B1", meaning: "way to solve a problem", turkish: "çözüm", example: "We found a solution." },
  { word: "reason", level: "B1", meaning: "cause of something", turkish: "sebep", example: "There is a reason for stress." },

  // ===== B1+ (ÇOK ÖNEMLİ PREP KELİMELERİ) =====
  { word: "advantage", level: "B1+", meaning: "positive side", turkish: "avantaj", example: "Online education has advantages." },
  { word: "disadvantage", level: "B1+", meaning: "negative side", turkish: "dezavantaj", example: "It also has disadvantages." },
  { word: "contribute", level: "B1+", meaning: "to help cause", turkish: "katkı sağlamak", example: "Technology contributes to learning." },
  { word: "affect", level: "B1+", meaning: "to influence", turkish: "etkilemek", example: "Stress affects performance." },
  { word: "impact", level: "B1+", meaning: "strong effect", turkish: "etki", example: "Social media has a big impact." },
  { word: "maintain", level: "B1+", meaning: "to keep", turkish: "sürdürmek", example: "Maintain a healthy routine." },
  { word: "motivation", level: "B1+", meaning: "desire to do something", turkish: "motivasyon", example: "Motivation is essential for success." },
  { word: "concentration", level: "B1+", meaning: "focus", turkish: "konsantrasyon", example: "Lack of sleep reduces concentration." },
  { word: "achievement", level: "B1+", meaning: "success", turkish: "başarı", example: "Passing prep is an achievement." },
  { word: "pressure", level: "B1+", meaning: "stress or force", turkish: "baskı", example: "Exam pressure is common." },
  { word: "efficient", level: "B1+", meaning: "working well", turkish: "verimli", example: "Efficient study saves time." },
  { word: "inevitable", level: "B1+", meaning: "cannot be avoided", turkish: "kaçınılmaz", example: "Stress is inevitable." },
  { word: "significant", level: "B1+", meaning: "important", turkish: "önemli", example: "There is a significant improvement." },
  { word: "requirement", level: "B1+", meaning: "something needed", turkish: "gereklilik", example: "English is a university requirement." },
  { word: "performance", level: "B1+", meaning: "how well someone does", turkish: "performans", example: "Sleep improves performance." }
);
dictionary.push(
  { word: "able", level: "A1", meaning: "can do something", turkish: "yapabilen", example: "She is able to speak English." },
  { word: "about", level: "A1", meaning: "related to", turkish: "hakkında", example: "This book is about history." },
  { word: "above", level: "A1", meaning: "higher than", turkish: "üstünde", example: "The picture is above the table." },
  { word: "across", level: "A1", meaning: "from one side to the other", turkish: "karşısına", example: "Go across the street." },
  { word: "act", level: "A1", meaning: "to do something", turkish: "hareket etmek", example: "He acted quickly." },
  { word: "activity", level: "A1", meaning: "something you do", turkish: "aktivite", example: "Sport is a fun activity." },
  { word: "address", level: "A1", meaning: "place where someone lives", turkish: "adres", example: "What is your address?" },
  { word: "afraid", level: "A1", meaning: "feeling fear", turkish: "korkmuş", example: "She is afraid of dogs." },
  { word: "after", level: "A1", meaning: "later than", turkish: "sonra", example: "We eat after class." },
  { word: "again", level: "A1", meaning: "one more time", turkish: "tekrar", example: "Say it again." },

  { word: "age", level: "A1", meaning: "how old someone is", turkish: "yaş", example: "What is your age?" },
  { word: "agree", level: "A1", meaning: "to have the same opinion", turkish: "katılmak", example: "I agree with you." },
  { word: "air", level: "A1", meaning: "what we breathe", turkish: "hava", example: "Fresh air is important." },
  { word: "all", level: "A1", meaning: "everything", turkish: "hepsi", example: "All students are here." },
  { word: "alone", level: "A1", meaning: "not with others", turkish: "yalnız", example: "She lives alone." },
  { word: "always", level: "A1", meaning: "every time", turkish: "her zaman", example: "He always studies." },
  { word: "angry", level: "A1", meaning: "feeling mad", turkish: "kızgın", example: "She is angry today." },
  { word: "answer", level: "A1", meaning: "a reply", turkish: "cevap", example: "What is the answer?" },
  { word: "area", level: "A1", meaning: "part of a place", turkish: "alan", example: "This area is crowded." },
  { word: "arrive", level: "A1", meaning: "to get to a place", turkish: "varmak", example: "We arrive at school at 9." },

  { word: "ask", level: "A1", meaning: "to question", turkish: "sormak", example: "Ask the teacher." },
  { word: "back", level: "A1", meaning: "behind", turkish: "arka", example: "Sit at the back." },
  { word: "bad", level: "A1", meaning: "not good", turkish: "kötü", example: "This is a bad idea." },
  { word: "begin", level: "A1", meaning: "to start", turkish: "başlamak", example: "Class begins at 8." },
  { word: "believe", level: "A1", meaning: "to think something is true", turkish: "inanmak", example: "I believe you." },
  { word: "best", level: "A1", meaning: "better than all", turkish: "en iyi", example: "She is the best student." },
  { word: "better", level: "A1", meaning: "more good", turkish: "daha iyi", example: "Today is better." },
  { word: "big", level: "A1", meaning: "large", turkish: "büyük", example: "It is a big house." },
  { word: "busy", level: "A1", meaning: "having a lot to do", turkish: "meşgul", example: "I am busy today." },

  { word: "call", level: "A1", meaning: "to phone someone", turkish: "aramak", example: "Call me later." },
  { word: "change", level: "A1", meaning: "to make different", turkish: "değiştirmek", example: "We need to change plans." },
  { word: "child", level: "A1", meaning: "a young person", turkish: "çocuk", example: "The child is happy." },
  { word: "city", level: "A1", meaning: "large town", turkish: "şehir", example: "I live in a city." },
  { word: "clean", level: "A1", meaning: "not dirty", turkish: "temiz", example: "The room is clean." },
  { word: "close", level: "A1", meaning: "not far", turkish: "yakın", example: "My house is close." },
  { word: "come", level: "A1", meaning: "to move here", turkish: "gelmek", example: "Come here." },
  { word: "common", level: "A1", meaning: "usual", turkish: "yaygın", example: "This is common." },
  { word: "country", level: "A1", meaning: "a nation", turkish: "ülke", example: "Turkey is my country." },
  { word: "course", level: "A1", meaning: "class or lesson", turkish: "ders", example: "English course is useful." }
);
dictionary.push(
  { word: "ability", level: "A2", meaning: "skill to do something", turkish: "yetenek", example: "He has the ability to learn fast." },
  { word: "accept", level: "A2", meaning: "to say yes", turkish: "kabul etmek", example: "She accepted the offer." },
  { word: "achieve", level: "A2", meaning: "to succeed", turkish: "başarmak", example: "He achieved his goal." },
  { word: "active", level: "A2", meaning: "doing things", turkish: "aktif", example: "She is an active student." },
  { word: "add", level: "A2", meaning: "to put together", turkish: "eklemek", example: "Add more examples." },
  { word: "allow", level: "A2", meaning: "to let", turkish: "izin vermek", example: "Phones are not allowed." },
  { word: "appear", level: "A2", meaning: "to seem", turkish: "görünmek", example: "He appears tired." },
  { word: "arrange", level: "A2", meaning: "to organize", turkish: "düzenlemek", example: "She arranged the meeting." },
  { word: "avoid", level: "A2", meaning: "to stay away from", turkish: "kaçınmak", example: "Avoid stress." },

  { word: "behave", level: "A2", meaning: "to act", turkish: "davranmak", example: "Behave well in class." },
  { word: "belong", level: "A2", meaning: "to be part of", turkish: "ait olmak", example: "This book belongs to me." },
  { word: "build", level: "A2", meaning: "to make", turkish: "inşa etmek", example: "They build houses." },
  { word: "calm", level: "A2", meaning: "not angry or stressed", turkish: "sakin", example: "Stay calm during exams." },
  { word: "careful", level: "A2", meaning: "paying attention", turkish: "dikkatli", example: "Be careful with time." },

  { word: "choice", level: "A2", meaning: "decision", turkish: "seçim", example: "You have a choice." },
  { word: "compare", level: "A2", meaning: "to find differences", turkish: "karşılaştırmak", example: "Compare two ideas." },
  { word: "complain", level: "A2", meaning: "to say you are unhappy", turkish: "şikayet etmek", example: "Students complain about exams." },
  { word: "consider", level: "A2", meaning: "to think about", turkish: "düşünmek", example: "Consider all options." },
  { word: "control", level: "A2", meaning: "to manage", turkish: "kontrol etmek", example: "Control your time." },

  { word: "cost", level: "A2", meaning: "price", turkish: "maliyet", example: "Books cost a lot." },
  { word: "create", level: "A2", meaning: "to make something new", turkish: "oluşturmak", example: "Create a study plan." },
  { word: "culture", level: "A2", meaning: "way of life", turkish: "kültür", example: "Different cultures exist." },
  { word: "decide", level: "A2", meaning: "to choose", turkish: "karar vermek", example: "Decide quickly." },
  { word: "develop", level: "A2", meaning: "to grow", turkish: "geliştirmek", example: "Develop your skills." },

  { word: "difference", level: "A2", meaning: "not the same", turkish: "fark", example: "There is a difference." },
  { word: "direction", level: "A2", meaning: "way", turkish: "yön", example: "Follow the direction." },
  { word: "discussion", level: "A2", meaning: "talk about something", turkish: "tartışma", example: "We had a discussion." },
  { word: "effort", level: "A2", meaning: "hard work", turkish: "çaba", example: "Success needs effort." },
  { word: "encourage", level: "A2", meaning: "to support", turkish: "teşvik etmek", example: "Teachers encourage students." },

  { word: "energy", level: "A2", meaning: "power", turkish: "enerji", example: "Sleep gives energy." },
  { word: "enough", level: "A2", meaning: "sufficient", turkish: "yeterli", example: "That is enough." },
  { word: "expect", level: "A2", meaning: "to think something will happen", turkish: "beklemek", example: "I expect good results." },
  { word: "explain", level: "A2", meaning: "to make clear", turkish: "açıklamak", example: "Explain the answer." },
  { word: "fail", level: "A2", meaning: "not succeed", turkish: "başarısız olmak", example: "He failed the exam." },

  { word: "fear", level: "A2", meaning: "feeling afraid", turkish: "korku", example: "Fear affects students." },
  { word: "fill", level: "A2", meaning: "to make full", turkish: "doldurmak", example: "Fill the form." },
  { word: "future", level: "A2", meaning: "time after now", turkish: "gelecek", example: "Plan your future." },
  { word: "gain", level: "A2", meaning: "to get", turkish: "kazanmak", example: "Gain experience." },
  { word: "habit", level: "A2", meaning: "regular action", turkish: "alışkanlık", example: "Good habits matter." },

  { word: "improve", level: "A2", meaning: "to make better", turkish: "iyileştirmek", example: "Improve your English." },
  { word: "include", level: "A2", meaning: "to have", turkish: "içermek", example: "The exam includes writing." },
  { word: "increase", level: "A2", meaning: "to become more", turkish: "artmak", example: "Stress increases before exams." },
  { word: "interest", level: "A2", meaning: "something you like", turkish: "ilgi", example: "English is my interest." },
  { word: "knowledge", level: "A2", meaning: "what you know", turkish: "bilgi", example: "Knowledge is power." }
);
dictionary.push(
  { word: "advantage", level: "B1", meaning: "a positive side", turkish: "avantaj", example: "Living alone has advantages." },
  { word: "disadvantage", level: "B1", meaning: "a negative side", turkish: "dezavantaj", example: "There are disadvantages of online learning." },
  { word: "affect", level: "B1", meaning: "to influence", turkish: "etkilemek", example: "Stress affects performance." },
  { word: "amount", level: "B1", meaning: "quantity", turkish: "miktar", example: "A large amount of homework is given." },
  { word: "attitude", level: "B1", meaning: "way of thinking", turkish: "tutum", example: "He has a positive attitude." },

  { word: "behavior", level: "B1", meaning: "the way someone acts", turkish: "davranış", example: "Stress changes behavior." },
  { word: "cause", level: "B1", meaning: "reason for something", turkish: "sebep", example: "Lack of sleep is a cause of stress." },
  { word: "choice", level: "B1", meaning: "decision", turkish: "seçim", example: "Students have many choices." },
  { word: "communicate", level: "B1", meaning: "to share information", turkish: "iletişim kurmak", example: "People communicate by language." },
  { word: "compare", level: "B1", meaning: "to find similarities or differences", turkish: "karşılaştırmak", example: "Compare two opinions." },

  { word: "concentrate", level: "B1", meaning: "to focus", turkish: "konsantre olmak", example: "It is hard to concentrate." },
  { word: "confidence", level: "B1", meaning: "belief in yourself", turkish: "özgüven", example: "Confidence improves speaking." },
  { word: "consider", level: "B1", meaning: "to think about carefully", turkish: "göz önünde bulundurmak", example: "Consider all factors." },
  { word: "consequence", level: "B1", meaning: "result of an action", turkish: "sonuç", example: "Every action has consequences." },
  { word: "continue", level: "B1", meaning: "to keep going", turkish: "devam etmek", example: "Continue studying." },

  { word: "control", level: "B1", meaning: "to manage", turkish: "kontrol etmek", example: "Control your emotions." },
  { word: "create", level: "B1", meaning: "to make something new", turkish: "oluşturmak", example: "Create a plan." },
  { word: "decision", level: "B1", meaning: "a choice", turkish: "karar", example: "This is an important decision." },
  { word: "develop", level: "B1", meaning: "to grow or improve", turkish: "geliştirmek", example: "Develop your skills." },
  { word: "difference", level: "B1", meaning: "not the same", turkish: "fark", example: "There is a big difference." },

  { word: "effect", level: "B1", meaning: "result", turkish: "etki", example: "Technology has an effect on life." },
  { word: "effort", level: "B1", meaning: "hard work", turkish: "çaba", example: "Success needs effort." },
  { word: "environment", level: "B1", meaning: "natural world or situation", turkish: "çevre", example: "A quiet environment helps study." },
  { word: "experience", level: "B1", meaning: "knowledge from life", turkish: "deneyim", example: "University is a valuable experience." },
  { word: "fail", level: "B1", meaning: "to not succeed", turkish: "başarısız olmak", example: "He failed the exam." },

  { word: "focus", level: "B1", meaning: "attention", turkish: "odaklanmak", example: "Focus on your goals." },
  { word: "goal", level: "B1", meaning: "aim", turkish: "hedef", example: "My goal is to pass prep." },
  { word: "improve", level: "B1", meaning: "to make better", turkish: "geliştirmek", example: "Practice improves writing." },
  { word: "influence", level: "B1", meaning: "power to affect", turkish: "etki", example: "Friends influence decisions." },
  { word: "manage", level: "B1", meaning: "to control or organize", turkish: "yönetmek", example: "Manage your time well." },

  { word: "motivation", level: "B1", meaning: "reason to act", turkish: "motivasyon", example: "Motivation helps learning." },
  { word: "opportunity", level: "B1", meaning: "chance", turkish: "fırsat", example: "University offers opportunities." },
  { word: "pressure", level: "B1", meaning: "stress", turkish: "baskı", example: "Exam pressure is common." },
  { word: "process", level: "B1", meaning: "series of actions", turkish: "süreç", example: "Learning is a process." },
  { word: "result", level: "B1", meaning: "outcome", turkish: "sonuç", example: "As a result, grades improved." },

  { word: "responsibility", level: "B1", meaning: "duty", turkish: "sorumluluk", example: "Students have responsibilities." },
  { word: "solution", level: "B1", meaning: "answer to a problem", turkish: "çözüm", example: "We found a solution." },
  { word: "support", level: "B1", meaning: "help", turkish: "destek", example: "Family support is important." },
  { word: "system", level: "B1", meaning: "organized method", turkish: "sistem", example: "Education system matters." },
  { word: "value", level: "B1", meaning: "importance", turkish: "değer", example: "Education has great value." }
);
dictionary.push(
  { word: "academic", level: "B1+", meaning: "related to education", turkish: "akademik", example: "Academic writing is formal." },
  { word: "achievement", level: "B1+", meaning: "something successful", turkish: "başarı", example: "Graduation is an achievement." },
  { word: "alternative", level: "B1+", meaning: "another option", turkish: "alternatif", example: "Online learning is an alternative." },
  { word: "analysis", level: "B1+", meaning: "detailed examination", turkish: "analiz", example: "The essay includes analysis." },
  { word: "approach", level: "B1+", meaning: "method", turkish: "yaklaşım", example: "This approach is effective." },

  { word: "argument", level: "B1+", meaning: "reasoned opinion", turkish: "argüman", example: "The argument is clear." },
  { word: "assumption", level: "B1+", meaning: "belief without proof", turkish: "varsayım", example: "This assumption is common." },
  { word: "beneficial", level: "B1+", meaning: "useful", turkish: "faydalı", example: "Reading is beneficial." },
  { word: "challenge", level: "B1+", meaning: "difficulty", turkish: "zorluk", example: "University is a challenge." },
  { word: "claim", level: "B1+", meaning: "to say something is true", turkish: "iddia etmek", example: "Some people claim this." },

  { word: "complex", level: "B1+", meaning: "not simple", turkish: "karmaşık", example: "The issue is complex." },
  { word: "conduct", level: "B1+", meaning: "to carry out", turkish: "yürütmek", example: "Conduct research." },
  { word: "contribute", level: "B1+", meaning: "to help cause", turkish: "katkı sağlamak", example: "Exercise contributes to health." },
  { word: "critical", level: "B1+", meaning: "careful judgment", turkish: "eleştirel", example: "Critical thinking is important." },
  { word: "decline", level: "B1+", meaning: "decrease", turkish: "azalmak", example: "Interest may decline." },

  { word: "demonstrate", level: "B1+", meaning: "to show clearly", turkish: "göstermek", example: "The data demonstrates growth." },
  { word: "determine", level: "B1+", meaning: "to decide", turkish: "belirlemek", example: "Results determine success." },
  { word: "drawback", level: "B1+", meaning: "disadvantage", turkish: "olumsuz yön", example: "One drawback is cost." },
  { word: "efficient", level: "B1+", meaning: "working well", turkish: "verimli", example: "This method is efficient." },
  { word: "emphasize", level: "B1+", meaning: "to stress importance", turkish: "vurgulamak", example: "Teachers emphasize practice." },

  { word: "engage", level: "B1+", meaning: "to involve", turkish: "dahil olmak", example: "Students engage in discussion." },
  { word: "establish", level: "B1+", meaning: "to create", turkish: "kurmak", example: "Establish rules." },
  { word: "evaluate", level: "B1+", meaning: "to judge", turkish: "değerlendirmek", example: "Evaluate performance." },
  { word: "evidence", level: "B1+", meaning: "proof", turkish: "kanıt", example: "There is strong evidence." },
  { word: "expand", level: "B1+", meaning: "to grow", turkish: "genişletmek", example: "Expand vocabulary." },

  { word: "factor", level: "B1+", meaning: "element", turkish: "faktör", example: "Time is a factor." },
  { word: "function", level: "B1+", meaning: "purpose", turkish: "işlev", example: "Technology has many functions." },
  { word: "generate", level: "B1+", meaning: "to produce", turkish: "üretmek", example: "The idea generates interest." },
  { word: "impact", level: "B1+", meaning: "strong effect", turkish: "etki", example: "Social media has impact." },
  { word: "indicate", level: "B1+", meaning: "to show", turkish: "belirtmek", example: "Results indicate success." },

  { word: "issue", level: "B1+", meaning: "problem/topic", turkish: "konu/sorun", example: "This is a serious issue." },
  { word: "maintain", level: "B1+", meaning: "to keep", turkish: "sürdürmek", example: "Maintain balance." },
  { word: "measure", level: "B1+", meaning: "method to check", turkish: "ölçmek/önlem", example: "Take measures." },
  { word: "method", level: "B1+", meaning: "way of doing", turkish: "yöntem", example: "This method works." },
  { word: "outcome", level: "B1+", meaning: "result", turkish: "sonuç", example: "The outcome was positive." },

  { word: "perspective", level: "B1+", meaning: "point of view", turkish: "bakış açısı", example: "From my perspective..." },
  { word: "primary", level: "B1+", meaning: "main", turkish: "birincil", example: "Primary reason." },
  { word: "prioritize", level: "B1+", meaning: "to put first", turkish: "öncelik vermek", example: "Prioritize tasks." },
  { word: "relevant", level: "B1+", meaning: "connected", turkish: "alakalı", example: "Relevant information." },
  { word: "significant", level: "B1+", meaning: "important", turkish: "önemli", example: "Significant change." },

  { word: "strategy", level: "B1+", meaning: "plan", turkish: "strateji", example: "Study strategy matters." },
  { word: "theory", level: "B1+", meaning: "idea explaining something", turkish: "teori", example: "Learning theory." },
  { word: "trend", level: "B1+", meaning: "general direction", turkish: "eğilim", example: "A growing trend." },
  { word: "valid", level: "B1+", meaning: "acceptable", turkish: "geçerli", example: "Valid argument." },
  { word: "vary", level: "B1+", meaning: "to change", turkish: "değişmek", example: "Opinions vary." }
);
