const helpObj = {
  "commands": [
    [
      "'about'",
      "Who created this website?"
    ],
    [
      "'projects'",
      "Maybe there are some interesting things here."
    ],
    [
      "'whoami'",
      "Very interesting question."
    ],
    [
      "'sudo'",
      "???"
    ],
    [
      "'repo'",
      "View the GitHub repository."
    ],
    [
      "'banner'",
      "Display the banner."
    ],
    [
      "'clear'",
      "Clear the terminal."
    ]
  ],
};

const createHelp = (): string[] => {
  const help: string[] = [];
  help.push("<br>");

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
  });

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> to autocomplete a command.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push("Use <span class='keys'>[↑][↓]</span> to scroll through command history.");
  help.push("<br>");
  return help;
};

export const HELP = createHelp();
