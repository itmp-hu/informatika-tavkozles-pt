### Asztali alkalmazások fejlesztése

#### Bevezetés a szoftverfejlesztésbe 14

##### A Java/C# nyelv és a fejlesztőkörnyezet alapjai

- Bemutatja a Java/C# nyelvek kialakulását, főbb mérföldköveit, ipari elterjedtségüket és a mögöttük álló ökoszisztémákat.
- Használja a fejlesztéshez szükséges alapvető környezeteket és eszközöket, létrehoz projektet és kezeli a forrásfájlokat.
- Eligazodik a Java/C# nyelvcsalád és a futtatókörnyezetek (JVM, CLR) működésében, megérti a keretrendszerek egymásra épülését.
- Beazonosítja a Java/C# nyelvek jelentőségét, összehasonlítja a lehetséges további irányokat (web, asztali, mobil) és megtervezi saját szakmai fejlődését.

##### Alapvető programozási és fejlesztési ismeretek

- Konzolos és egyszerű grafikus alkalmazásokat hoz létre (JavaFX vagy WPF), megismerve a projekt felépítésének főbb elemeit.
- Megkülönbözteti a szoftverfejlesztési paradigmákat (procedurális, objektumorientált, funkcionális) és alkalmazza a spirális és folyamatos fejlesztés (CI/CD) alapelveit.
- Olvassa és értelmezi a kódsorokat, feltérképezi a program logikai felépítését (osztályok, metódusok, változódeklarációk, függvényhívások).
- Felderíti a tipikus hibákat (fordítási, futási, logikai), debugolást végez breakpointok elhelyezésével és lépésenkénti futtatással.

##### Kódminőség, stílus és projektkészítés

- Alkalmazza a Java/C# szintaxis szabályait (utasításlezárás, whitespace-kezelés) és elkerüli a leggyakoribb szintaktikai hibákat.
- Használja a kódolási stílusirányelveket (naming convention, tagolás, formázás), lintelő és automatikus formázó eszközöket.
- Egyszerű projektet készít a szoftverfejlesztési alapismeretek (kódolás, debug, stílus) integrált alkalmazásával.
- Önállóan vagy csoportban dolgozik, kódrészleteket hoz létre és javít, együttműködik a csapattal.

##### Nyelv alapok és történeti kontextus

- A Java/C# nyelv történetét, ipari jelentőségét és fejlődési trendjeit összefoglalja.
- A nyelvcsalád alapvető elemeit (pl. osztályok, objektumok, könyvtárstruktúra) azonosítja és gyakorlatban alkalmazza.

##### Fejlesztői környezetek és eszközök

- Forrás- és konfigurációs fájlokat hoz létre, módosít és értelmez a projektstruktúrán belül.
- Egy integrált fejlesztőkörnyezetet (pl. Visual Studio, IntelliJ) telepít, testreszab és használ alapvető műveletekhez (projektlétrehozás, fájlkezelés).

##### Szintaxis és alkalmazásfejlesztés

- Konzolos alkalmazásokat készít a nyelv alapvető szintaxisával (pl. változók, vezérlési szerkezetek).
- Egyszerű grafikus felhasználói felületeket tervez és valósít meg alapvető eszközökkel (pl. Windows Forms, JavaFX).

##### Fejlesztési módszertanok

- Spirális és folyamatos fejlesztési modelleket hasonlít össze gyakorlati példákon keresztül.
- Verziókövetési alapelveket alkalmaz a kódmódosítások nyomon követéséhez (pl. commit, branching).

##### Kódformázás és konvenciók

- Betartja az ipari szabványnak megfelelő kódolási stílust (pl. elnevezési konvenciók, whitespace kezelés).
- Az utasítások lezárásának szabályait követi és értelmezi a szintaxis hibákat (pl. pontosvessző, blokkszintek).

##### Hibakeresési stratégiák

- Breakpointokat állít be és használ a kód végrehajtásának részletes elemzéséhez debugger eszközökkel.
- Hibák okait diagnosztizálja és javítja a léptetés, változóértékek megfigyelése és logolás segítségével.

#### Procedurális és objektumorientált szoftverfejlesztés 14

##### 1. Szemléleti alapok és fogalmak

- Felismeri a procedurális és az objektumorientált megközelítés közötti fő különbségeket, valamint ezek gyakorlati jelentőségét.
- Értelmezi az osztály és az objektum fogalmát, az OOP alapelemeit (property, metódus, láthatóság).
- Összehasonlítja a procedurális és az OOP kódszervezés előnyeit/hátrányait, és a feladat jellegéhez illően választ megközelítést.

##### 2. Kódszerkezet és gyakorlati alkalmazás

- Létrehoz egyszerű kódrészleteket mind procedurális, mind OOP módon (konzolos példák).
- Példányosít objektumokat, megérti a „new” kulcsszó és a statikus elemek közti eltérést Java/C#-ban.
- Használ property-ket (get/set) és alapvető adatrejtési (encapsulation) elveket.
- Készít kisebb, összehangolt kódot, amelyben a property-k és metódusok együttműködnek (például alapvető esettanulmány).

##### 3. Hibakezelés, csapatmunka, reflexió

- Felderíti a tipikus OOP hibákat (például null-referencia, láthatósági problémák) és alap debugolási módszereket alkalmaz.
- Biztosan mozog a Java/C# nyelvspecifikus fájlszerkezetben (namespace/package, import/using), alkalmazza az ajánlott kódstílusokat.
- Dolgozik önállóan és csoportban is, elemzi és fejleszti a kódot a csapattal való konzultációk során.
- Reflektál a procedurális és objektumorientált szemléletre, az órák során gyűjtött tapasztalatok alapján tisztábban látja, mely területek profitálnak egyik vagy másik megközelítésből.

#### Változók 8

##### Alapfogalmak, primitívek és alapkészségek

- Megismeri a „változó” fogalmát és szerepét a programozásban
- Primitív típusokat (boolean, int, double, String) használ
- Betartja az elnevezési konvenciókat (camelCase, PascalCase)
- Integer típusú primitíveket (byte, short, int, long) alkalmaz, figyelembe véve a méret- és határérték-különbségeket
- Megérti a lebegőpontos típusok (float, double) eltérő pontosságát és a kerekítési hibák lehetőségét
- Alkalmaz aritmetikai és matematikai műveleteket (például összeadás, kivonás, szorzás, osztás, maradékos osztás, abs, pow)
- Betartja a zárójelezés és a műveleti sorrend szabályait

##### Szöveges típus, kimenet és konverziók

- Megkülönbözteti a char és a String típusokat, tisztában van az ASCII/Unicode alapjaival
- Stringműveleteket (összefűzés, hossz, indexelés, substring) használ
- Használja a whitespace és az escape karaktereket (\n, \t, \")
- Adatokat ír ki a konzolra (System.out.println, Console.WriteLine)
- Automatikus típus-promóciót (int → long) és explicit castingot (double → int) végez
- Kezeli a numerikus típusok közötti átváltást (float ↔ double), figyelembe véve az adatvesztés kockázatát
- Stringeket parse-ol (Integer.parseInt, Double.parseDouble), és képes az adatokat visszaalakítani szöveggé (ToString, String.valueOf)

##### Inputkezelés és integrált alkalmazás

- Adatokat olvas be konzolról (Scanner, Console.ReadLine) és grafikus felületről (TextField, TextBox)
- Fájlokból is képes információt beolvasni (soronkénti olvasás, egyszerű formátum)
- Kezeli az alapvető inputhibákat (helytelen formátum, üres mezők), és biztosítja a program további futását
- Komplexebb feladatokban használja a változókhoz kapcsolódó ismereteket (típusválasztás, konverzió, inputkezelés, kimenet)

#### Metódusok 8

##### Metódusok alapjai és felépítés

- Megérti a metódusok (függvények) szerepét, és felismeri, mikor érdemes azokat alkalmazni a kódban
- Definiál és meghív egyszerű metódusokat, betartva a nyelvspecifikus (Java/C#) szintaxist
- Különböző visszatérési típusokat és argumentumokat használ (int, double, String, void), figyelembe véve a probléma jellegét
- Reflektál a metódusok kialakításának szempontjaira (jó név, single responsibility, rövidség), és tudatosan törekszik a jobb kódminőségre

##### Scope és struktúra

- Átlátja a scope fogalmát, megkülönbözteti a lokális és az osztályszintű (globális) változókat, és tudatosan alkalmazza őket
- Eléri az osztályváltozókat (mezőket) a metódusokon belül, megérti a publikus/privát mezők közti eltéréseket
- Strukturálja a kódot metódusok segítségével, összefogja a logikailag összetartozó utasításokat, így tisztább, karbantarthatóbb programot hoz létre

##### Hibakeresés és összetettebb feladatok

- Használ alapvető hibakeresési módszereket (konzolos kiírás, debug) a metódusok működésének ellenőrzésére
- Felold tipikus metódussal kapcsolatos hibákat (nem megfelelő paraméterlista vagy visszatérési típus, scope-félreértések)
- Készít több metódust, amelyek együttműködnek egy összetettebb feladat megoldásában (például több lépéses számítás, stringmanipuláció)

#### Beépített segédosztályok 12

##### A beépített könyvtárak használata és dokumentációértelmezés

- Felhasználja a nyelv beépített könyvtárait a programozási feladatok egyszerűbb és hatékonyabb megoldásához
- Értelmezi a dokumentációt, és megkeresi a szükséges metódusokat a String, Random, Math (vagy más) beépített osztályokban
- Tudatosan választ beépített vagy saját implementáció között, felismeri, hogy a standard könyvtár általában tesztelt és hatékony

##### String és Random osztályok

- Alkalmazza a String osztály főbb függvényeit (indexOf, charAt, substring), megérti az immutábilis működés lényegét és a string-összehasonlítás szabályait
- Generál véletlenszámokat a Random (vagy .NET-en belül Random) osztály segítségével, és kezeli a különböző függvények (nextInt, nextDouble stb.) sajátosságait
- Old meg egyszerű gyakorlati feladatokat a fenti beépített osztályok kombinálásával (például szöveg feldolgozása, véletlengenerálás)

##### Statikus metódusok és integráció

- Hív statikus metódusokat a Math osztályból (min, max, sqrt, pow stb.), és tisztában van a statikus metódusok fogalmával
- Fejleszti a kódot a dokumentációból tanult újabb metódusok beépítésével, és tovább mélyíti a beépített segédosztályokkal kapcsolatos ismereteit

#### Vezérlési szerkezetek, ciklusok 12

##### Logikai alapok és elágazások

- Alkalmazza a boolean típusú logikai változókat és összehasonlító-logikai operátorokat egyszerű és összetett feltételek felírására
- Használja a két- és többirányú elágazásokat (if-else if-else) a program futásának feltétel szerinti irányításához
- Értelmezi a hármas operátor (? : ) működését, és tudatos döntést hoz, mikor érdemes azt bevetni
- Készít switch-elágazást, felismeri, hogy mikor előnyös az if-else-hez képest, és következetesen használja a break, default ágakat

##### Ciklusok és hibakeresés

- Megír elöltesztelő (for, while) és hátultesztelő (do-while) ciklusokat, átlátja a közös és eltérő vonásokat
- Végrehajt összetett feladatokat ciklus segítségével (pl. összegzés, bejárás, keresés tömbben/listában), és figyelembe veszi a ciklusváltozó helyes kezelését
- Diagnosztizál és kijavít tipikus hibákat (rosszul beállított ciklusfeltétel, végtelen ciklus), használja a debug-eszközöket a ciklusok lépésenkénti vizsgálatához
- Használ ciklusvezérlő utasításokat (break, continue), és tisztában van a korai kilépés és az iteráció átugrás következményeivel

##### Integráció és tudatos választás

- Integrálja az elágazások és ciklusok használatát komplexebb menürendszerben vagy egyéb, valósághoz közelítő helyzetben
- Reflektál a vezérlési szerkezetek különféle típusaira, mérlegeli előnyeiket és hátrányaikat, és tudatosan választ közülük az aktuális feladatok igénye alapján

#### Tömbök és listák 15

##### Tömbök létrehozása és kezelése

- Definiál és inicializál egydimenziós tömböket, megérti a fix méret jelentőségét és az indexkezelés szabályait
- Kezel többdimenziós tömböket (pl. mátrixokat), és elvégzi az alapvető műveleteket (beolvasás, kiíratás, módosítás)
- Óvatosan jár el az indexekkel, felismeri és megelőzi a túlcímzés (out of bounds) hibákat

##### Listák és iterálás

- Alkalmazza a lista alapvető műveleteit (létrehozás, hozzáadás, törlés, bejárás), és felismeri a dinamikus elemszám előnyeit
- Megkülönbözteti a generikus és nem generikus listákat, érti az autoboxing fogalmát, és alkalmazza primitív típusok listában való tárolásánál
- Iterál a listákon különböző módokon (for, foreach, iterátor) és kezeli az esetleges hibalehetőségeket (ConcurrentModificationException)
- Tárol objektumokat listában, és végrehajt egyszerű műveleteket (módosítás, kiírás, rendezésre előkészítés)

##### Hibakeresés és alkalmazási területek

- Eltérő helyzetekhez választja a megfelelő adatszerkezetet (tömb vagy lista), és érvekkel alátámasztja döntését (memóriahasználat, fix/dinamikus méret stb.)
- Hibát keres és javít tömböknél, listáknál (rossz index, null-referencia, rossz cast), szükség esetén debugol vagy használ alapvető kivételkezelést
- Integrált feladatokban alkalmazza a tömböket és listákat (adatfeldolgozás, statisztikák, input-kezelés), és világosan struktúrálja a kódot

#### Kivételkezelés, hibakeresés 7

##### Kivételkezelés és hibatípusok

- Megkülönbözteti a fordítási idejű, futási idejű és logikai hibákat, felismeri ezek jellegzetes tüneteit
- Használja a try-catch szerkezetet, és a beépített kivételtípusok (NullPointerException, IndexOutOfRange stb.) esetén célzottan beavatkozik
- Értelmezi a finally ág szerepét és tudatosan alkalmazza, ha a programban szükség van felszabadításra vagy egyéb kötelező teendőre
- Dob kivételt (throw) a kódban, felismeri, hogy ez mikor indokolt (pl. érvénytelen bemenet esetén)
- Megérti a saját kivételtípusok létrehozásának lehetőségét (opcionális), és tudja, milyen esetben van rá szükség

##### Hibakeresés és debug

- Alkalmaz alapvető hibakeresési módszereket (print debug, log írása) a futás közbeni probléma feltérképezésére
- Használja az IDE beépített debugeszközeit (breakpoint, step-by-step futtatás, változók figyelése), hogy lokálisítsa és javítsa a hibát
- Különböző hibák (null-referencia, out of bounds index, rossz parse, logikai tévedés) esetén felismeri a hiba okát és kijavítja

##### Tudatos hibakezelési döntések

- Tudatosan választ hibakezelési technikát (try-catch, ellenőrző feltételek, debug-lépések) az adott helyzetnek megfelelően
- Reflektál a kivételkezelés szerepére, és felméri a hibakezelési módszerek (hibakódok vs. kivételek) közötti különbségeket, előnyöket és hátrányokat

#### Objektumorientált fejlesztés 45

##### Alapfogalmak és projektstruktúra

- Átlátja az objektumorientált szemlélet alapjait (osztály, objektum, property) és felismeri, hogy az OOP hogyan tér el a procedurális megközelítéstől
- Létrehoz OOP-projekteket a kiválasztott IDE-ben, és alkalmazza a nyelvspecifikus konvenciókat (package/namespace, PascalCase osztálynév)
- Kezeli a main függvény szerepét, és érti, hogyan hívható meg az OOP-projektben létrehozott több osztály/kód

##### Osztályok, enkapszuláció, konstruktorkezelés

- Megkülönbözteti az osztálymezők (field) láthatóságát, és tudatosan szabályozza az adatrejtést (enkapszuláció: private mezők, publikus getter/setter)
- Használ konstruktorokat (default és paraméteres), ismeri a this kulcsszó szerepét, és megérti, miért fontos a mezők konstruktor általi inicializálása
- Alkalmazza az érték szerinti paraméterátadás elvét, és tisztázza a primitív vs. referencia típusok átadási különbségeit
- Kiterjeszti a konstruktorhasználatot (konstruktor-láncolás, default értékek, esetleg kivételdobás), és rugalmassá teszi az objektum inicializálását

##### Objektumok és memóriakezelés

- Példányosít objektumokat (new kulcsszó), átlátja a referencia–objektum különbséget, memóriakezelési alapokat (heap, stack), és elkerüli a null-ref jellegű hibákat
- Összehasonlít objektumokat: érti az == vs. equals különbséget, a hashCode szerepét, és felismeri, mikor mit használjon
- Komponál egymáshoz kapcsolódó osztályokat (pl. egyik osztály listaként tartalmazza a másikat), és ezzel összetettebb adatstruktúrákat hoz létre

##### Fejlettebb OOP és hibakeresés

- Értelmezi az enkapszulációt, megismeri az OOP további alappilléreit (öröklés, polimorfizmus) és legalább elméleti szinten látja ezek szerepét
- Használ debug eszközöket OOP környezetben is, az objektumok állapotának vizsgálatára, tipikus hibák (null pointer, rossz referenciák) feloldására
- Megismerkedik néhány alapvető OOP tervezési mintával (Singleton, Factory), és felismeri, hogy az OOP gondolkodás standard megoldásokra épül

##### Integrált feladatok és projektmunka

- Felépít egyszerű, de reálisabb osztályokat (pl. Diák, Termék), majd azokat példányosítja, metódusaikat használja, kódolási stílusra ügyelve
- Létrehoz és bemutat kisebb csoportos projektet, melyben a tervezéstől a kódoláson át a debugig alkalmazza az OOP ismereteit

#### Grafikus programozás 45

##### Alapstruktúra és komponensek

- Létrehoz alapvető grafikus alkalmazást JavaFX vagy WPF használatával, ismeri a projekt szerkezetét, a létfontosságú komponenseket
- Alkalmazza az ablak (stage/window) életciklus-lépéseit, érti a GUI főszál szerepét, és tudja, mikor záródik le az alkalmazás
- Használ alapvető GUI-elemeket (Label, Button, TextField, stb.), képes őket elhelyezni különféle layout menedzserek segítségével

##### Eseménykezelés és felhasználói interakció

- Kezeli az eseményvezérelt programozás alapjait: gombnyomás, szövegbeviteli események, egér- és billentyű-események figyelése
- Egyszerű validációkat és hibaüzeneteket valósít meg (piros keret, felugró ablak, label) a felhasználói adatok ellenőrzésére
- Menüket, eszköztárakat, vagy további ablakokat (dialogusok) hoz létre, és lekezeli a menüpontok kiválasztására
- Hibakeresési módszereket alkalmaz grafikus alkalmazásoknál is, felismeri a GUI-főszál blokkolásának következményeit, megelőzi a tipikus hibákat

##### Megjelenítés, animáció és adatelérés

- Alapfokú stílusbeállításokat végez (színek, betűtípusok, CSS / XAML), és képes képeket, rajzokat beilleszteni a felületre
- Képes egyszerű animációk (átmenetek, mozgások) létrehozására, és felismeri az aszinkron eseménykezelés szükségességét
- Megjelenít listákat, táblázatokat (ListView, TableView, DataGrid), és kezeli az elemek frissítését, kiválasztását

##### Komplex alkalmazások és projektmunka

- Tervez többablakos alkalmazást, elkülöníti a logikát és a megjelenítést (alapszintű MVC / MVVM ismeretek), és összehangolt felületet hoz létre
- Fejleszt egy összetettebb grafikus projektet (csoportosan vagy egyedül), amiben a különféle GUI-elemeket, eseményeket és elrendezéseket integrálja, majd bemutatja a működő alkalmazást

### Adatbázis-kezelés I. (72 óra)

#### Az adatbázis tervezés alapjai (5 óra)

##### Adatbázis-tervezési alapfogalmak

- Azonosítja és alkalmazza az adatbázis-tervezés alapfogalmait, felismeri a redundancia káros következményeit
- Felismeri és kategorizálja az adatbázis anomáliákat, majd megfelelő normalizálási lépésekkel megszünteti azokat
- Alkalmazza a dekompozíciós technikákat a redundancia csökkentésére és az adatintegritás megőrzésére

##### Adatmodellezés ER-modellel

- Megtervezi az adatbázis logikai szerkezetét ER-modell segítségével, megfelelően alkalmazva annak jelölésrendszerét
- Létrehozza és dokumentálja az entitásokat, attribútumokat és kapcsolatokat az ER-modellben

##### Relációs adatmodell kialakítása

- Azonosítja és megfelelően alkalmazza a relációs adatbázisok alapfogalmait (elsődleges kulcs, idegen kulcs, rekord, mező)
- Átalakítja az ER-modellt relációs modellé a megfelelő szabályok és kapcsolattípusok figyelembevételével

#### Adatbázisok létrehozása (5 óra)

- Létrehoz és módosít adatbázisokat és táblákat a CREATE és ALTER utasítások megfelelő használatával
- Megtervezi és létrehozza a táblák mezőit a megfelelő adattípusok és megszorítások (NULL, NOT NULL, UNIQUE, PRIMARY KEY) alkalmazásával
- Kialakítja a táblák közötti kapcsolatokat a REFERENCES záradék használatával

##### Adatbázis-objektumok kezelése

- Létrehoz és kezel indexeket a lekérdezések optimalizálása érdekében
- Töröl adatbázisokat, táblákat és indexeket a DROP utasítás biztonságos alkalmazásával
- Módosítja az adatbázis-objektumok szerkezetét az ALTER utasítás megfelelő használatával

#### Adatok kezelése (10 óra)

##### Adatok felvitele és módosítása

- Új rekordokat szúr be a táblákba az INSERT INTO utasítás megfelelő alkalmazásával
- Frissíti a meglévő rekordok adatait az UPDATE utasítás és a WHERE feltétel használatával

##### Adatok törlése és karbantartása

- Töröl rekordokat a táblákból a DELETE utasítás és a WHERE feltétel biztonságos alkalmazásával
- Ellenőrzi és karbantartja az adatok integritását a DML műveletek végrehajtása során

#### Lekérdezések (46 óra)

##### Alapvető lekérdezési műveletek

- Lekérdezi az adatokat a SELECT utasítás szintaktikailag helyes használatával, megfelelően alkalmazza a WHERE záradékot és a különböző operátorokat az adatsorok szűrésére
- Rendezi az adatsorokat egy vagy több mező szerint az ORDER BY záradék használatával, és alkalmazza az álneveket a lekérdezések átláthatóbbá tételére
- Szűri az ismétlődő sorokat a DISTINCT záradékkal, és használja a helyettesítő karaktereket a rugalmas keresések megvalósításához

##### Összetett lekérdezések és táblák összekapcsolása

- Összekapcsol táblákat különböző JOIN típusok (INNER, LEFT, RIGHT) alkalmazásával, és megfelelően kezeli a kapcsolódó adatokat
- Csoportosítja az adatokat a GROUP BY záradékkal, szűri a csoportokat a HAVING záradékkal, és korlátozza a megjelenő sorok számát (TOP/LIMIT)
- Számított mezőket hoz létre és használ a lekérdezésekben, megfelelően alkalmazva az aritmetikai műveleteket

##### Függvények alkalmazása lekérdezésekben

- Használja az aggregáló függvényeket (COUNT, MIN, MAX, SUM, AVG) statisztikai számítások végrehajtására és adatok összesítésére
- Alkalmazza a szövegkezelő és formázó függvényeket (CONCAT, FORMAT, LENGTH, SUBSTR, REPLACE) az adatok megfelelő megjelenítéséhez
- Használja a numerikus függvényeket (TRUNC, ROUND) a számadatok pontos kezelésére és megjelenítésére

#### Adatbázisok mentése és helyreállítása (6 óra)

##### Adatbázis-mentési stratégiák és végrehajtás

- Megtervezi és végrehajtja az adatbázis teljes és inkrementális mentését a kiválasztott SQL szerveren a parancsok megfelelő alkalmazásával
- Ütemezi és automatizálja a rendszeres mentési feladatokat a választott SQL szerver eszközeivel

##### Adatbázisok helyreállítása és validálása

- Helyreállítja az adatbázist különböző típusú mentésekből a kiválasztott SQL szerveren a parancsok megfelelő alkalmazásával
- Ellenőrzi a helyreállított adatbázis integritását és konzisztenciáját

### Adatbázis-kezelés II. (62 óra)

#### Adatbázis-tervezés (14 óra)

##### ER-modell alapjai és alkalmazása

- Megtervezi az adatbázis szerkezetét ER-modell segítségével, megfelelően alkalmazva annak jelölésrendszerét és szabályait
- Azonosítja és modellezi az entitásokat, attribútumokat és kapcsolatokat az üzleti követelmények alapján
- Felismeri és kezeli a gyenge egyedeket, megfelelően dokumentálja azok azonosítását és függőségeit

##### Relációs adatbázis-tervezés

- Átalakítja az ER-modellt relációs adatbázis-sémává a megfelelő normalizációs szabályok alkalmazásával
- Kezeli a többértékű attribútumokat és az N-ágú kapcsolatokat, megfelelő relációs struktúrákká alakítja őket
- Optimalizálja az adatbázis szerkezetét a redundancia minimalizálásával és a lekérdezési hatékonyság maximalizálásával

#### Haladó lekérdezések (16 óra)

##### Beágyazott lekérdezések készítése

- Létrehoz és alkalmaz egymásba ágyazott lekérdezéseket a megfelelő szintaxis és operátorok használatával
- Kiválasztja és implementálja a feladatnak legmegfelelőbb beágyazott lekérdezéstípust (EXISTS, IN, ANY, ALL)
- Összetett feltételrendszereket alakít ki beágyazott lekérdezések és logikai operátorok kombinálásával

##### Lekérdezés-optimalizálás és teljesítményhangolás

- Megtervezi és létrehozza a szükséges indexeket a lekérdezések teljesítményének javítására
- Elemzi és optimalizálja a lekérdezések végrehajtási tervét a megfelelő eszközök használatával
- Alkalmazza a lekérdezés-optimalizálás bevált gyakorlatait (megfelelő indexhasználat, felesleges joinok elkerülése, WHERE feltételek hatékony megfogalmazása)

#### Adatvezérlő utasítások (10 óra)

##### Tranzakciókezelés alapjai és végrehajtása

- Alkalmazza a tranzakciók ACID tulajdonságait (atomiság, konzisztencia, elszigetelés, tartósság) az adatbázis-műveletek során
- Beállítja és kezeli a megfelelő izolációs szinteket a párhuzamos adathozzáférések szabályozására
- Végrehajtja és kezeli a tranzakciókat a megfelelő utasításokkal (START TRANSACTION, COMMIT, ROLLBACK)
- Alkalmazza a zárolási műveleteket (LOCK/UNLOCK TABLES) az erőforrások kizárólagos használatának biztosítására

##### Felhasználók és jogosultságok kezelése

- Létrehozza és kezeli a felhasználói fiókokat a megfelelő parancsokkal (CREATE USER, DROP USER)
- Beállítja és módosítja a felhasználói jogosultságokat a GRANT és REVOKE utasítások használatával
- Létrehoz és kezel szerepköröket (ROLE) a jogosultságok hatékony adminisztrációjához

#### Tárolt objektumok (10 óra)

##### Nézettáblák kezelése

- Létrehoz és módosít nézettáblákat a CREATE VIEW és ALTER VIEW parancsok használatával
- Törli a szükségtelen vagy elavult nézettáblákat a DROP VIEW parancs alkalmazásával
- Optimalizálja a nézettáblák szerkezetét a lekérdezési teljesítmény javítása érdekében

##### Tárolt eljárások és függvények

- Implementál újrafelhasználható tárolt eljárásokat és függvényeket a CREATE PROCEDURE/FUNCTION parancsokkal
- Karbantartja és frissíti a meglévő tárolt eljárásokat és függvényeket az ALTER PROCEDURE/FUNCTION használatával
- Eltávolítja a feleslegessé vált tárolt eljárásokat és függvényeket a DROP PROCEDURE/FUNCTION parancsokkal

##### Triggerek fejlesztése

- Létrehoz eseményvezérelt triggereket adatbázis-műveletek automatizálására
- Módosítja a triggerek működési logikáját az üzleti követelmények változása esetén
- Megszünteti a nem használt vagy problémás triggereket a DROP TRIGGER paranccsal

#### Az adatbázis-kezelés osztályai (12 óra)

#### Az adatbázis-kezelés osztályai

##### Adatbázis-kapcsolat létrehozása és kezelése

- Telepíti és konfigurálja az adatbázisszerver eléréséhez szükséges modulokat és referenciákat Java vagy C# környezetben
- Létrehozza és kezeli az adatbázis-kapcsolatokat a megfelelő kapcsolódási karakterláncok és osztályok használatával
- Implementálja a hibakezelést az adatbázis-kapcsolatok és műveletek során a megfelelő kivételkezelési technikákkal

##### Adatbázisműveletek végrehajtása

- Végrehajtja az adatbázis-műveleteket (lekérdezés, beszúrás, módosítás, törlés) a megfelelő osztályok és metódusok használatával
- Kezeli a lekérdezések eredményhalmazát a megfelelő osztályok segítségével
- Megjeleníti a lekérdezések eredményét grafikus felhasználói felületen adatkötött vezérlőelemek használatával

### Asztali és mobil alkalmazások fejleszté- se és tesztelése 217

#### Haladó szintű objektumorientált programozás 32

#### Nevezetes algoritmusok és megvalósításuk OOP-technológiával 32

#### A tiszta kód elméleti alapjai és gyakorlata 28

#### Unit tesztelés 28

#### Mobil alkalmazások fejlesztése 32

#### Projektmunka 62

### Webprogramozás 144

#### HTML5 és CSS3 32

#### JavaScript I. 40

#### JavaScript II. 36

#### CMS-rendszerek 36

### Frontend programozás és tesztelés

#### JavaScript 36

#### AJAX 16

#### Frontend készítésére szolgáló JavaScript framework 36

#### Tartalomkezelő keretrendszer CMS- használata 20

#### Integrációs tesztelés 20

#### Projektmunka 58

### Backend programozás és tesztelés 186

#### Backend készítésére szolgáló keretrendszer 46

#### Rétegelt architektúra és ORM 30

#### A REST szoftverarchitektúra alapjai és REST API kiszolgáló készítése 30

#### Integrációs tesztelés 25

#### Projektmunka 55

### Szakmai angol 144

#### Hallás utáni szövegértés 22

#### Szóbeli kommunikáció 24

#### Szóbeli kommunikáció IT-környezetben, projektalapon I. 14

#### Írásos angol nyelvű szakmai anyagok feldolgozása 24

#### Angol nyelvű szövegalkotás – e-mail 18

#### Keresés és ismeretszerzés angol nyelven 22

#### Szóbeli kommunikáció IT-környezetben, projektalapon II. 20
