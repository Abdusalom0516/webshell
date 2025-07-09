import command from '../../config.json' assert {type: 'json'};

const createProject = (): string[] => {
  let string = "";
  const projects: string[] = [];

  // Message showing how many public projects there are
  const files = `There are ${command.projects.length} public projects here. The remaining projects and work are not presented due to company confidentiality agreements.`;

  const SPACE = "&nbsp;";

  projects.push("<br>");

  command.projects.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`;
    string += SPACE.repeat(2); // Add spacing before link
    string += link; // Add project title as link
    string += SPACE.repeat(Math.max(0, 25 - ele[0].length)); // Align descriptions
    string += ele[1]; // Add project description
    projects.push(string);
    string = '';
  });

  projects.push("<br>");
  projects.push(files);
  projects.push("<br>");

  return projects;
}

export const PROJECTS = createProject();
