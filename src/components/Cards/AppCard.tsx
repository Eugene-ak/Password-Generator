import { StyledCard } from "./AppCard.style";
import { MutableRefObject, useRef, useState } from "react";
import CopyButton from "../Buttons/CopyButton";
import PasswordField from "../Inputs/PasswordField";
import { TopSectionDiv } from "../Sections/TopSection.style";
import GenerateButton from "../Buttons/GenerateButton";
import Checkbox from "../Inputs/Checkbox";
import { BottomSectionDiv } from "../Sections/BottomSection.style";
import PasswordLength from "../Sections/PasswordLength";
import StrengthContainer from "../Sections/StrengthContainer";

export default function AppCard() {
  const uppercaseLetters: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const lowercaseLetters: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const symbols: string[] = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];

  const range: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const uppercaseCheck: MutableRefObject<HTMLInputElement | null> =
    useRef(null);
  const lowercaseCheck = useRef<HTMLInputElement | null>(null);
  const numbersCheck = useRef<HTMLInputElement | null>(null);
  const symbolsCheck = useRef<HTMLInputElement | null>(null);

  const [password, setPassword] = useState<string>("");
  const [rangeValue, setRangeValue] = useState<number>(0);
  const [checkedStateCount, setCheckedStateCount] = useState<number>(0);

  // Function to update the range value
  const updateRangeValue = () => {
    let value: number = 0;
    if (range.current?.value) {
    value = parseInt(range.current?.value);
    }
    setRangeValue(value);
  };

  // Function to determine strength state and type of values to include in password
  const updateCheckCount = (
    name: MutableRefObject<HTMLInputElement | null>
  ) => {
    if (name.current?.checked === true) {
      setCheckedStateCount((prevState) => prevState + 1);
    } else {
      setCheckedStateCount((prevState) => prevState - 1);
    }
  };

  // Shuffle the array
  function shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  // Generate password per conditions specified
  const generatePassword = () => {
    if (rangeValue !== undefined) {
      const passLength: number = rangeValue;
      const newArray = [];

      // Append items to array
      for (let i = 1; i <= passLength; i++) {
        if (uppercaseCheck.current?.checked) {
          newArray.push(
            uppercaseLetters[
              Math.floor(Math.random() * uppercaseLetters.length)
            ]
          );
        }

        if (lowercaseCheck.current?.checked) {
          newArray.push(
            lowercaseLetters[
              Math.floor(Math.random() * lowercaseLetters.length)
            ]
          );
        }

        if (numbersCheck.current?.checked) {
          newArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
        }

        if (symbolsCheck.current?.checked) {
          newArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
        }
      }

      // Convert new password array to string
      let newPassword = shuffleArray(newArray).join("");

      // Slice the password to be equal to the range specified
      if (newPassword.length > passLength) {
        newPassword = newPassword.slice(0, passLength).toString();
        setPassword(newPassword);
      }
      setPassword(newPassword);
    }
  };

  return (
    <StyledCard>
      <TopSectionDiv>
        <PasswordField passwordValue={password} />
        <CopyButton text={password} />
      </TopSectionDiv>
      <BottomSectionDiv>
        <PasswordLength
          range={range}
          rangeValue={rangeValue}
          updateFunction={updateRangeValue}
        />
        <Checkbox
          name="uppercase"
          id="uppercase"
          refValue={uppercaseCheck}
          onChange={() => updateCheckCount(uppercaseCheck)}
          text="Uppercase Letters"
        />
        <Checkbox
          name="lowercase"
          id="lowercase"
          refValue={lowercaseCheck}
          onChange={() => updateCheckCount(lowercaseCheck)}
          text="Lowercase Letters"
        />
        <Checkbox
          name="mumbers"
          id="numbers"
          refValue={numbersCheck}
          onChange={() => updateCheckCount(numbersCheck)}
          text="Numbers"
        />
        <Checkbox
          name="symbols"
          id="symbols"
          refValue={symbolsCheck}
          onChange={() => updateCheckCount(symbolsCheck)}
          text="Symbols"
        />
        <StrengthContainer count={checkedStateCount} />
        <GenerateButton onClick={generatePassword} />
      </BottomSectionDiv>
    </StyledCard>
  );
}
