import { MutableRefObject } from "react";
import { toast } from "sonner";

export const uppercaseLetters: string[] = [
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

export const lowercaseLetters: string[] = [
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

export const numbers: string[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

export const symbols: string[] = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];

export const copyText = (
  text: string,
  copiedText: MutableRefObject<HTMLSpanElement | null>
) => {
  // Check if the password field has a value other than default and make sure reference to the copy button is undefined
  if (text && copiedText?.current) {
    navigator.clipboard.writeText(text);
    // Display copied text for 2seconds and revert to default state on successful copy
    copiedText.current.style.display = "flex";
    toast.success("Copied to clipboard!");
    setTimeout(() => {
      if (copiedText.current) {
        copiedText.current.style.display = "none";
      }
    }, 2000);
  }
};

// Shuffle the array
export function shuffleArray(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Generate password per conditions specified
export const generatePassword = (
  rangeValue: number,
  uppercaseCheck: MutableRefObject<HTMLInputElement | null>,
  lowercaseCheck: MutableRefObject<HTMLInputElement | null>,
  numbersCheck: MutableRefObject<HTMLInputElement | null>,
  symbolsCheck: MutableRefObject<HTMLInputElement | null>,
  setPassword: (password: string) => void
) => {
  if (rangeValue < 4) {
    toast.warning("Please select a password length of at least 4 characters.");
    return;
  }

  if (
    !uppercaseCheck.current?.checked &&
    !lowercaseCheck.current?.checked &&
    !numbersCheck.current?.checked &&
    !symbolsCheck.current?.checked
  ) {
    toast.warning("Please select at least one character type.");
    return;
  }

  if (rangeValue !== undefined) {
    const passLength: number = rangeValue;
    const newArray = [];

    // Append items to array
    for (let i = 1; i <= passLength; i++) {
      if (uppercaseCheck.current?.checked) {
        newArray.push(
          uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
        );
      }

      if (lowercaseCheck.current?.checked) {
        newArray.push(
          lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
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
