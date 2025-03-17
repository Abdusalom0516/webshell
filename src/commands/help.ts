const helpObj = {
  "commands": [
    [
      "'about'",
      "Bu sayt kim tomonidan yaratilgan?"
    ],
    [
      "'projects'",
      "Balki qiziqarli narsalar bor."
    ],
    [
      "'whoami'",
      "Juda qiziq savol."
    ],
    [
      "'sudo'",
      "???"
    ],
    [
      "'repo'",
      "GitHub repozitoriyasini ko‘rish."
    ],
    [
      "'banner'",
      "Bannerni ko‘rsatish."
    ],
    [
      "'clear'",
      "Terminalni tozalash."
    ]
  ],
}

const createHelp = () : string[] => {
  const help : string[] = []
  help.push("<br>")

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  help.push("<br>");
  help.push("<span class='keys'>[Tab]</span> tugmasini bosib avtomatik to‘ldirishni ishlating.");
  help.push("<span class='keys'>[Esc]</span> tugmasini bosib kiritish qatorini tozalang.");
  help.push("<span class='keys'>[↑][↓]</span> tugmalari yordamida buyruqlar tarixini ko‘rib chiqing.");
  help.push("<br>");
  return help
}

export const HELP = createHelp();
