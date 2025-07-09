const whoamiObj = {
 "message": [
  [
    "In the quiet of the night,",
    "I walk under the moon,",
    "finding peace in every step."
  ],
  [
    "In lines of code,",
    "I build more than apps —",
    "I build pieces of myself."
  ],
  [
    "Among circuits and wires,",
    "I search for logic,",
    "and sometimes, answers."
  ],
  [
    "In the wind on mountain trails,",
    "I feel free,",
    "closer to who I really am."
  ],
  [
    "Looking at the stars,",
    "I don’t just wonder about space,",
    "I wonder about my place in it."
  ],
  [
    "With a camera in hand,",
    "I freeze moments,",
    "hoping to remember how they made me feel."
  ],
  [
    "When the world is loud,",
    "I find silence in music,",
    "and meaning in lyrics."
  ],
  [
    "While learning new things,",
    "I fail, try again, and grow,",
    "because I love becoming better."
  ],
  [
    "In every late night,",
    "there’s a little dreamer in me,",
    "sketching the future silently."
  ],
  [
    "I don’t chase people,",
    "I chase purpose,",
    "and sometimes, the moon."
  ],
  [
    "When I see animals,",
    "I remember how soft life can be,",
    "and how much I want to protect it."
  ],
  [
    "I don’t talk much,",
    "but my actions,",
    "they speak in Flutter widgets and Firebase calls."
  ],
  [
    "In every shadow of doubt,",
    "there’s a light of curiosity,",
    "and I follow it."
  ],
  [
    "Even in hard days,",
    "I remind myself: ",
    "I’m just a beginner, and that’s beautiful."
  ]
],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'></span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
