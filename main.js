const fs = require("fs");

// JSON fájl beolvasása
try {
  // JSON fájl beolvasása
  const jsonData = fs.readFileSync(
    "infomatika-tavkozles-agazat-szoftverfejleszto-es-tesztelo-kkk.json",
    "utf8"
  );

  // JSON adatok feldolgozása
  const kkk = JSON.parse(jsonData);

  // Példa: az összes skill domain kilistázása
  console.log("Skill domének:");
  const skillDomains = [...new Set(kkk.map((item) => item.skillDomain))];
  skillDomains.forEach((domain) => {
    console.log(`- ${domain}`);
  });

  // Példa: összes tanulási elem óraszámainak összegzése
  let totalHours = 0;
  kkk.forEach((item) => {
    if (item.learningElements) {
      item.learningElements.forEach((element) => {
        if (element.topics) {
          element.topics.forEach((topic) => {
            totalHours += topic.numberOfLesson || 0;
          });
        }
      });
    }
  });
  const kkk2 = kkk.map((item) => {
    return {
      ...item,
      learningElements: [],
    };
  });
  // JSON fájlba írás
  fs.writeFileSync(
    "infomatika-tavkozles-agazat-szoftverfejleszto-es-tesztelo-kkk2.json",
    JSON.stringify(kkk2, null, 2),
    "utf8"
  );
  console.log(kkk2);
  console.log(`\nÖsszes óraszám: ${totalHours} óra`);
} catch (error) {
  console.error("Hiba történt a fájl beolvasása során:", error.message);
}
