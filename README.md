# Canvas LMS BigBlueButton Close Recording Reminder Plug-in

Plugin for the [Canvas LMS theme app](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-app) that adds
a blinking label to remind you to close the recording of a BigBlueButton conference.

[![](https://img.shields.io/npm/v/@artevelde-uas/canvas-lms-bbb-close-recording-reminder-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-bbb-close-recording-reminder-plugin)
[![](https://img.shields.io/github/license/artevelde-uas/canvas-lms-bbb-close-recording-reminder-plugin.svg)](https://spdx.org/licenses/ISC)
[![](https://img.shields.io/npm/dt/@artevelde-uas/canvas-lms-bbb-close-recording-reminder-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-bbb-close-recording-reminder-plugin)

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-bbb-close-recording-reminder-plugin

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-bbb-close-recording-reminder-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';
import bbbCloseRecordingReminderPlugin from '@artevelde-uas/canvas-lms-bbb-close-recording-reminder-plugin';

addPlugin(bbbCloseRecordingReminderPlugin);

run();
```
