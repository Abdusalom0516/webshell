import command from '../../config.json' assert {type: 'json'};

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")
  command.ascii.forEach((ele) => {
    let bannerString = "";
    //this is for the ascii art
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
  banner.push("Qahorov's Shell v1.0.0 ga xush kelibsiz!");
  banner.push("Barcha mavjud buyruqlar ro‘yxatini ko‘rish uchun <span class='command'>'help'</span> ni kiriting.");
  banner.push(`GitHub repozitoriyasini ko‘rish uchun <span class='command'>'repo'</span> ni kiriting yoki <a href='${command.repoLink}' target='_blank'>shu yerga</a> bosing.`);
  banner.push("<br>");
  return banner;
}

export const BANNER = createBanner();
