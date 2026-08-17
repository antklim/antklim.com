---
title: Printing in Zig
date: 2026-08-01
tags:
  - zig
---

## Printing in Zig

### Use standard logger

```zig
const std = @import("std");

std.log.info("info", .{});
std.log.debug("debug", .{});
std.log.warn("warning", .{});
std.log.err("oops", .{});

// Output:
// info: info
// debug: debug
// warning: warning
// error: oops
```

_Note_: the log level indicators are color coded.
_Note_: standard logger automatically adds a new line symbol at the end of the message.

### Use your own writer

```zig
var stdout_buffer: [1024]u8 = undefined;
var stdout_file_writer: std.Io.File.Writer = .init(.stdout(), io, &stdout_buffer);

const log = &stdout_file_writer.interface;

try log.print("hello\n", .{});
...

// nothing is printed without flush
try log.flush();
```

### Formatting specifiers

Zig supports variety of formatting specifiers. Check [**Zig Guide - Formatting Specifiers**](https://zig.guide/standard-library/formatting-specifiers) and
[**Zig Guide - Advanced Formatting**](https://zig.guide/standard-library/advanced-formatting) for more information.

Following is a short and simple example of using format specifiers for decimal, hexadecimal, and binary representation of integer number.

```zig
const v: u8 = 25;

try log.print("{d} = {b:0>8} = 0x{X}\n", .{ v, v, v });
try log.print("{b:0>8}\n{b:0>8}\n", .{ v, v << 2 });

// Output:
// 25 = 00011001 = 0x19
// 00011001
// 01100100
```
