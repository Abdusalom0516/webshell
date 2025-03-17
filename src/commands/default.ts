const createDefault = () : string[] => {
  const defaultMsgArr = [
    "<br>",
    "BUYRUQ MAVJUD EMAS",
    "Boshlash uchun <span class='command'>'help'</span> yuboring",
    "<br>"
  ]  
  
  const defaultMsg : string[] = [];
  
  defaultMsgArr.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

export const DEFAULT = createDefault();
