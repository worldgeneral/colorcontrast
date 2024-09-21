# Color Contrast Checker App - README

## Overview

The **Color Contrast Checker** is an easy-to-use app that checks how well multiple colors (like text and background) work together. It follows rules to make sure that the colors are clear and easy to read, especially for people with vision problems. The app helps you see if your color choices are accessible and meet the standards for good design.

## Features

- **Contrast Ratio Calculation**: Instantly calculates the contrast ratio between your colors.
- **WCAG Compliance Check**: Determines if the color combination meets WCAG 2.1 standards (AA or AAA) for normal text, large text, and graphical elements.
- **Hex and RGB Input Support**: Enter colors via Hex or RGB values for ease of use.
- **Real-Time Color Preview**: Visualize how the foreground color looks on the background in real time.
- **Pass/Fail Indicators**: Clear pass/fail indicators based on WCAG thresholds.
- **WCAG Level Display**: Displays the compliance level (AA/AAA) for normal text and large text.
- **User-Friendly Interface**: Clean and simple UI designed for ease of use.

## WCAG Guidelines

The app supports the following WCAG 2.1 contrast ratio requirements:

- **Normal Text**: Minimum contrast ratio of 4.5:1 (for AA) and 7:1 (for AAA).
- **Large Text**: Minimum contrast ratio of 3:1 (for AA) and 4.5:1 (for AAA).
- **Graphical Objects and User Interface Components**: Minimum contrast ratio of 3:1.

## How to Use

1. **Enter Color**: Enter the colors of the text or content you want to evaluate. You can input the color using either the Hex code or RGB values.
2. **View Contrast Ratio**: The contrast ratio will be displayed automatically.
3. **Check WCAG Compliance**: The app will indicate if the color combination passes or fails WCAG compliance for both normal text and large text, showing the appropriate levels (AA/AAA).

### Example:

- **Foreground Color**: #FFFFFF (white)
- **Background Color**: #000000 (black)
- **Contrast Ratio**: 21:1
- **Result**: Passes AA and AAA for both normal and large text.

## Built With

- **JavaScript**: Core logic for contrast calculation and WCAG compliance check.
- **HTML/CSS**: User interface.
- **Node.js** (if applicable): Backend for hosting or extending the app.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
