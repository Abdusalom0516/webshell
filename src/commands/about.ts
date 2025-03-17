import command from '../../config.json' assert {type: 'json'};

const createAbout = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  const INSTAGRAM = "Instagram";
  const TELEGRAM = "Telegram";
  
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;   
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  const instagram = `<i class='fa-brands fa-instagram'></i> ${INSTAGRAM}`;
  const telegram = `<i class='fa-brands fa-telegram'></i> ${TELEGRAM}`;
  let string = "";

  about.push("<br>");
  const words = command.aboutGreeting.split(" ");
  let line = "";
  const maxLength = 50; // Maksimal qator uzunligi
  
  words.forEach((word) => {
    if ((line + word).length > maxLength) {
      about.push(line);
      line = ""; // Yangi qatorni boshlash
    }
    line += (line ? " " : "") + word;
  });
  
  if (line) about.push(line); // Oxirgi qatorni qo‘shish
  
  about.push("<br>");
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);  
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += instagram;
  string += SPACE.repeat(17 - INSTAGRAM.length);  
  string += `<a target='_blank' href='https://www.instagram.com/${command.social.instagram}'>instagram/${command.social.instagram}</a>`;
  about.push(string);



  string = '';
  string += SPACE.repeat(2);
  string += telegram;
  string += SPACE.repeat(17 - INSTAGRAM.length);  
  string += `<a target='_blank' href='https://www.t.me/${command.social.telegram}'>telegram/${command.social.telegram}</a>`;
  about.push(string);



  about.push("<br>");
  return about
}

export const ABOUT = createAbout();
