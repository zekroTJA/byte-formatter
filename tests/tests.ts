/** @format */

import { byteFormatter, EXTENDED_FORMAT } from '../src/index';

// DEFAULT FORMAT TEST

test('formatting:default 234 -> 234 B', () => {
  const res = byteFormatter(234);
  expect(res).toBe('234 B');
});

test('formatting:default 213232 -> 208.23 kiB', () => {
  const res = byteFormatter(213232);
  expect(res).toBe('208.23 kiB');
});

test('formatting:default 624223443 -> 595.31 MiB', () => {
  const res = byteFormatter(624223443);
  expect(res).toBe('595.31 MiB');
});

test('formatting:default 126386126381 -> 117.71 GiB', () => {
  const res = byteFormatter(126386126381);
  expect(res).toBe('117.71 GiB');
});

test('formatting:default 61273868723462 -> 55.73 TiB', () => {
  const res = byteFormatter(61273868723462);
  expect(res).toBe('55.73 TiB');
});

// EXTENDED FORMAT TEST

test('formatting:extended 234 -> 234 Bytes', () => {
  const res = byteFormatter(234, 2, EXTENDED_FORMAT);
  expect(res).toBe('234 Bytes');
});

test('formatting:extended 213232 -> 208.23 Kibibytes', () => {
  const res = byteFormatter(213232, 2, EXTENDED_FORMAT);
  expect(res).toBe('208.23 Kibibytes');
});

test('formatting:extended 624223443 -> 595.31 Mebibytes', () => {
  const res = byteFormatter(624223443, 2, EXTENDED_FORMAT);
  expect(res).toBe('595.31 Mebibytes');
});

test('formatting:extended 126386126381 -> 117.71 Gibibytes', () => {
  const res = byteFormatter(126386126381, 2, EXTENDED_FORMAT);
  expect(res).toBe('117.71 Gibibytes');
});

test('formatting:extended 61273868723462 -> 55.73 Tebibytes', () => {
  const res = byteFormatter(61273868723462, 2, EXTENDED_FORMAT);
  expect(res).toBe('55.73 Tebibytes');
});

// FIX NUMBER TEST

test('formatting:fix:5 624223443 -> 595.30587 MiB', () => {
  const res = byteFormatter(624223443, 5);
  expect(res).toBe('595.30587 MiB');
});

test('formatting:fix:1 624223443 -> 595.3 MiB', () => {
  const res = byteFormatter(624223443, 1);
  expect(res).toBe('595.3 MiB');
});

test('formatting:fix:0 624223443 -> 595 MiB', () => {
  const res = byteFormatter(624223443, 0);
  expect(res).toBe('595 MiB');
});
