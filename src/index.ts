/** @format */

const K = 1024;

/**
 * Format defines the strings used for the
 * units placed behind the values.
 */
export interface Format {
  bytes: string;
  kibibytes: string;
  mebibytes: string;
  gibibytes: string;
  tebibytes: string;
}

/**
 * The defaultly used format using
 * the hsort forms of the units.
 */
export const DEFAULT_FORMAT = {
  bytes: 'B',
  kibibytes: 'kiB',
  mebibytes: 'MiB',
  gibibytes: 'GiB',
  tebibytes: 'TiB',
} as Format;

/**
 * An expanded format using the full
 * names of the units.
 */
export const EXTENDED_FORMAT = {
  bytes: 'Bytes',
  kibibytes: 'Kibibytes',
  mebibytes: 'Mebibytes',
  gibibytes: 'Gibibytes',
  tebibytes: 'Tebibytes',
} as Format;

/**
 * Fortats a number of bytes to a human readable
 * result string.
 * @param bytes    The ammount of bytes.
 * @param [fix]    The number of digits behind the comma. (default: 2)
 * @param [format] A custom format for the units behind the values. (default: DEFAULT_FORMAT)
 * @returns        The formatted human readable string.
 */
export function byteFormatter(
  bytes: number,
  fix: number = 2,
  format: Format = DEFAULT_FORMAT
): string {
  if (bytes < K) {
    return `${bytes} ${format.bytes}`;
  }
  if (bytes < Math.pow(K, 2)) {
    return `${(bytes / K).toFixed(fix)} ${format.kibibytes}`;
  }
  if (bytes < Math.pow(K, 3)) {
    return `${(bytes / Math.pow(K, 2)).toFixed(fix)} ${format.mebibytes}`;
  }
  if (bytes < Math.pow(K, 4)) {
    return `${(bytes / Math.pow(K, 3)).toFixed(fix)} ${format.gibibytes}`;
  }
  return `${(bytes / Math.pow(K, 4)).toFixed(fix)} ${format.tebibytes}`;
}
