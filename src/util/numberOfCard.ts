export default function VerifyTotalCards(
  numberHands: number,
  numberCards: number,
  numberByList: number,
): boolean {
  if (numberHands * numberByList === numberCards) {
    return true;
  }

  return false;
}
