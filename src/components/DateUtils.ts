/**
 * Format a Date object into a string in the format MM/DD/YYYY.
 *
 * @param dateObj - The Date object to be formatted.
 * @returns The formatted date string.
 */
export function formatDate(dateObj: Date): string {
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  return `${month}/${day}/${year}`;
}
