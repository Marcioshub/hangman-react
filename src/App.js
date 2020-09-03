import React, { useState, useEffect } from "react";
import "./App.css";

// components
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";

// helper
import { showNotification as show } from "./helpers/Helpers";

const words = [
  {
    word: "captious",
    definition: "tending to find and call attention to faults",
  },
  {
    word: "bibulous",
    definition: "given to or marked by the consumption of alcohol",
  },
  {
    word: "malapropism",
    definition: "misuse of a word by confusion with one that sounds similar",
  },
  {
    word: "tricorn",
    definition: "cocked hat with the brim turned up to form three points",
  },
  { word: "tenebrous", definition: "dark and gloomy" },
  { word: "braggadocio", definition: "vain and empty boasting" },
  { word: "bruit", definition: "tell or spread rumors" },
  {
    word: "embonpoint",
    definition: "the bodily property of being well rounded",
  },
  { word: "pabulum", definition: "insipid intellectual nourishment" },
  {
    word: "parlay",
    definition: "stake winnings from one bet on a subsequent wager",
  },
  { word: "pother", definition: "an excited state of agitation" },
  {
    word: "valetudinarian",
    definition:
      "weak or sickly person especially one morbidly concerned with his or her health",
  },
  { word: "legerdemain", definition: "an illusory feat" },
  { word: "cantle", definition: "the back of a saddle seat" },
  {
    word: "estivation",
    definition: "cessation or slowing of activity during the summer",
  },
  {
    word: "myrmidon",
    definition: "a follower who carries out orders without question",
  },
  { word: "regnant", definition: "exercising power or authority" },
  {
    word: "terpsichorean",
    definition: "a performer who dances professionally",
  },
  { word: "clerisy", definition: "an educated and intellectual elite" },
  {
    word: "deracinate",
    definition: "move or be moved to a new environment, often forcibly",
  },
  {
    word: "oneiromancy",
    definition: "divination through the interpretation of dreams",
  },
  { word: "tatterdemalion", definition: "a dirty shabbily clothed person" },
  { word: "caitiff", definition: "despicably mean and cowardly" },
  {
    word: "funambulist",
    definition: "an acrobat who performs on a tightrope or slack rope",
  },
  { word: "pule", definition: "cry weakly or softly" },
  {
    word: "sparge",
    definition: "agitate by introducing air or compressed gas",
  },
  { word: "uxoricide", definition: "the murder of a wife by her husband" },
  {
    word: "antediluvian",
    definition: "any of the early patriarchs prior to the Noachian deluge",
  },
  {
    word: "xanthosis",
    definition: "an abnormal yellow discoloration of the skin",
  },
  {
    word: "chiaroscuro",
    definition: "the arrangement or interplay of light and dark in an artwork",
  },
  {
    word: "logorrhea",
    definition: "pathologically excessive and often incoherent talking",
  },
  {
    word: "succedaneum",
    definition: "something that can be used as a substitute",
  },
  { word: "autochthonous", definition: "of rocks, deposits, etc." },

  {
    word: "appoggiatura",
    definition: "an embellishing note usually written in smaller size",
  },

  {
    word: "recalcitrant",
    definition: "marked by stubborn resistance to authority",
  },

  {
    word: "ostensible",
    definition: "represented or appearing as such; pretended",
  },

  { word: "pejorative", definition: "expressing disapproval" },

  {
    word: "verisimilitude",
    definition: "the appearance of truth; the quality of seeming to be true",
  },

  { word: "denizen", definition: "a person who inhabits a particular place" },

  {
    word: "avuncular",
    definition: "resembling an uncle in kindness or indulgence",
  },

  { word: "eschew", definition: "avoid and stay away from deliberately" },

  {
    word: "quisling",
    definition: "someone who collaborates with an enemy occupying force",
  },

  { word: "plaudit", definition: "enthusiastic approval" },

  {
    word: "transmogrify",
    definition: "change completely the nature or appearance of",
  },
  {
    word: "paucity",
    definition: "an insufficient quantity or number",
  },

  {
    word: "junta",
    definition: "a group of officers who rule a country after seizing power",
  },

  {
    word: "Daedal",
    definition: "an Athenian inventor who built the labyrinth of Minos",
  },

  { word: "equipoise", definition: "equality of distribution" },

  { word: "daedal", definition: "complex and ingenious in design or function" },

  {
    word: "antiestablishmentarianism",
    definition:
      "the doctrine of opposition to the social and political establishment",
  },

  {
    word: "pneumonoconiosis",
    definition:
      "chronic respiratory disease caused by inhaling metallic or mineral particles",
  },

  {
    word: "advantageous",
    definition: "appropriate for achieving a particular end",
  },

  { word: "ameliorate", definition: "make better" },

  {
    word: "cognizant",
    definition: "having or showing knowledge or understanding or realization",
  },

  {
    word: "commensurateness",
    definition: "the relation of corresponding in degree or size or amount",
  },

  { word: "acumen", definition: "shrewdness shown by keen insight" },

  {
    word: "effete",
    definition: "excessively self-indulgent, affected, or decadent",
  },

  { word: "lugubrious", definition: "excessively mournful" },

  { word: "parseeism", definition: "the faith of a Zoroastrian sect in India" },

  { word: "mealie", definition: "an ear of corn" },

  { word: "dicarboxylic", definition: "containing two carboxyls per molecule" },

  {
    word: "sial",
    definition:
      "the granitelike rocks that form the outermost layer of the earth's crust; rich in silicon and aluminum",
  },

  {
    word: "illampu",
    definition: "a mountain peak in the Andes in Bolivia (20,870 feet high)",
  },

  {
    word: "earreach",
    definition: "the range within which a voice can be heard",
  },

  {
    word: "pamlico",
    definition:
      "a member of the Algonquian people formerly of the Pamlico river valley in North Carolina",
  },

  {
    word: "xanthoma",
    definition:
      "a skin problem marked by the development (on the eyelids and neck and back) of irregular yellow nodules; sometimes attributable to disturbances of cholesterol metabolism",
  },

  {
    word: "xanthophyll",
    definition:
      "yellow carotenoid pigments in plants and animal fats and egg yolks",
  },

  {
    word: "zamiaceae",
    definition:
      "a family of cycads often included in the family Cycadaceae: zamias",
  },

  {
    word: "anathema",
    definition: "a formal ecclesiastical curse accompanied by excommunication",
  },

  { word: "calumny", definition: "a false accusation of an offense" },
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.word.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
