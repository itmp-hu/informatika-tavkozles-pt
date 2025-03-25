const fs = require("fs");
let orderedToppics;

try {
  const data = fs.readFileSync(
    "informatika-tavkozles-agazat-szoftverfejleszto-es-tesztelo-programtanterv.md",
    "utf8"
  );
  console.log("A fájl sikeresen beolvasva");

  // parsoljuk az md fájlt, csak a négyes szintű címsorokat kell kiválasztani
  const cleanRows = data
    .split("\n")
    .filter((line) => line.startsWith("#### "))
    .map((line) => line.substring(5).trim());

  const topics = cleanRows.map((topic) => {
    const hoursMatch = topic.match(/\((\d+) óra\)/);
    const hour = hoursMatch ? parseInt(hoursMatch[1]) : null;
    const topicName = topic.replace(/\(\d+ óra\)/, "").trim();
    return { topicName, hour };
  });

  orderedToppics = topics.sort((a, b) =>
    a.topicName.localeCompare(b.topicName)
  );

  //   console.log(orderedToppics);
} catch (err) {
  console.error("Hiba történt a fájl beolvasása során:", err);
}

//olvasd be infomatika-tavkozles-agazat-szoftverfejleszto-es-tesztelo-kkk.json fájlt
const kkkDataRaw = fs.readFileSync(
  "infomatika-tavkozles-agazat-szoftverfejleszto-es-tesztelo-kkk.json",
  "utf8"
);

const kkkData = JSON.parse(kkkDataRaw);

// console.log(kkkData);

// A learningElement-ekből összegyűjtöd a topic neveket és az óraszámaikat
const topics = [];
kkkData.forEach((element) =>
  element.learningElements.forEach((learningElement) =>
    learningElement.topics.forEach((topic) => {
      topics.push({ topicName: topic.name, hour: topic.numberOfLesson });
    })
  )
);

const topicsFlat = topics.reduce((acc, curr) => {
  const existingTopic = acc.find((topic) => topic.topicName === curr.topicName);
  if (existingTopic) {
    existingTopic.hour += curr.hour;
  } else {
    acc.push({ ...curr });
  }
  return acc;
}, []);

topics.length = 0;
Object.assign(topics, topicsFlat);

const orderedToppics2 = topicsFlat.sort((a, b) =>
  a.topicName.localeCompare(b.topicName)
);

console.log(orderedToppics2);

const differences = orderedToppics2.map((topic, index) => {
  return {
    topicNameKkk: topic.topicName,
    hourKkk: topic.hour,
    topicNamePtt: orderedToppics[index].topicName,
    hourPtt: orderedToppics[index].hour,
    differnces: topic.hour - orderedToppics[index].hour,
  };
});

console.log(differences);
// Kiírás fájlba
const outputData = differences
  .map((diff) => {
    return `${diff.topicNameKkk}\t${diff.hourKkk}\t${diff.topicNamePtt}\t${diff.hourPtt}\t${diff.differnces}`;
  })
  .join("\n");

fs.writeFileSync("differences.txt", outputData);
