# byte-formatter &nbsp;[![Build Status](https://travis-ci.org/zekroTJA/byte-formatter.svg?branch=master)](https://travis-ci.org/zekroTJA/byte-formatter) ![npm](https://img.shields.io/npm/v/byte-formatter) 
A leight package to format byte numbers to human readable output.

## Usage

```ts
import { byteFormatter } from 'byte-formatter';

const res = byteFormatter(624223443);
// -> res = '595.31 MiB'
```

You can also specify a custom ammount of digets behind the comma (`fix`):
```ts
import { byteFormatter } from 'byte-formatter';

const res = byteFormatter(624223443, 5);
// -> res = '595.30587 MiB'
```

If you want a custom format for the units, use one of the pre defined like `DEFAULT_FORMAT` or `EXTENDED_FORMAT`:
```ts
import { byteFormatter, EXTENDED_FORMAT } from 'byte-formatter';

const res = byteFormatter(61273868723462, 2, EXTENDED_FORMAT);
// -> res = '55.73 Tebibytes'
```

Or define a custom format by using the `Format` interface:
```ts
import { byteFormatter, Format } from 'byte-formatter';

const MY_CUSTOM_FORMAT = {
  bytes: 'b',
  kibibytes: 'kib',
  mebibytes: 'mib',
  gibibytes: 'gib',
  tebibytes: 'tib',
} as Format;

const res = byteFormatter(61273868723462, 2, MY_CUSTOM_FORMAT);
// -> res = '55.73 tib'
```