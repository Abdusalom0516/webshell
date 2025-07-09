import command from '../../config.json' assert {type: 'json'};

const createBanner = (): string[] => {
  const banner: string[] = [];
  banner.push("<br>");
  
  command.ascii.forEach((ele) => {
    let bannerString = "";
    // This is for the ASCII art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }

    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });  

  banner.push("<br>");
  banner.push("Welcome to Abdusalom G'ayratov's Shell v1.0.1!");
  banner.push("To see a list of all available commands, type <span class='command'>'help'</span>.");
  banner.push(`To view the GitHub repository, type <span class='command'>'repo'</span> or <a href='${command.repoLink}' target='_blank'>click here</a>.`);
  banner.push("<br>");

  return banner;
}

export const BANNER = createBanner();
