export default function VerifyDuplicated(list: string[]): boolean {
  const originalSize = list.length;
  const newList = [...new Set(list)];
  const newSize = newList.length;

  return originalSize !== newSize;
}
