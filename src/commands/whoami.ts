const whoamiObj = {
  "message" : [
    [
      "Borliq mozaikasida,",
      "men jumboqni savolga tutayotgan aksman - "
    ],
    [
      "Koinotning pichirlashlari orasida,",
      "o‘zimni anglash labirintida kezaman,",
      "abadiy ohangni takrorlab - "
    ],
    [
      "Hayot simfoniyasida,",
      "o‘z ohangini izlayotgan bir notaman,",
      "olamning savoli bilan hamohang - ",
    ],
    [
      "Yulduz changiday o‘z safarini o‘ylab,",
      "men koinot jumboqini mulohaza qilaman,",
      "jimlik bilan so‘rab - ",
    ],
    [
      "Haqiqat to‘qimasida,",
      "o‘zimni anglash ipiman,",
      "abadiy savolni o‘rab - "
    ],
    [
      "Dengiz to‘lqinida,",
      "men qayrilgan aksman,",
      "qirg‘oqqa urilgan jumboq - "
    ],
    [
      "Vaqt soyasida,",
      "men o‘tgan va kelajak oralig‘ida qolgan shaklman - "
    ],
    [
      "Tong shafag‘ida,",
      "men umid va xavotir aralash haroratman - "
    ],
    [
      "Tungi osmonning yulduzi singari,",
      "men cheksizlik ichida yo‘limni izlayman - "
    ],
    [
      "Shamolning shivirida,",
      "men yo‘qolgan ovozman,",
      "uni eshitadigan quloqni kutib - "
    ],
    [
      "Hayot daraxtining barglarida,",
      "men shivirlagan sirman,",
      "shamolga hamroh - "
    ],
    [
      "Qor yog‘ayotgan tunda,",
      "men erib ketayotgan izman,",
      "undan hech kim bexabar - "
    ],
    [
      "Yomg‘ir tomchilarida,",
      "men osmonga intilgan umidman,",
      "yerni quchoqlab - "
    ],
    [
      "Qaynoq qum orasida,",
      "men yo‘qolayotgan izman,",
      "qachonlardir qayta topiladigan - "
    ],
    [
      "Qushlarning parvozida,",
      "men erkinlikka intilgan qanotman - "
    ],
    [
      "Oyning nurlari orasida,",
      "men jim turgan so‘zman,",
      "kimdir meni o‘qishini kutib - "
    ],
    [
      "Shahar ko‘chalari orasida,",
      "men minglab izlardan biriman,",
      "ammo hech kimniki emas - "
    ],
    [
      "She'r satrlarida,",
      "men yozilgan, lekin hech qachon o‘qilmagan satrman - "
    ],
    [
      "Dengiz tubidagi marjon singari,",
      "men hech kim ko‘rmagan sirman - "
    ],
    [
      "Abadiyat yo‘lining changida,",
      "men kelib ketayotgan izman,",
      "qachonlardir yo‘q bo‘ladigan - "
    ],
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>men kimman?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
