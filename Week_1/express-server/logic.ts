export function splitString(inputString: string): { revisedString: string } {
    const revisedString = inputString.replace('_', ' ');
    return { revisedString };
}
export function isLeapYear(year: number): boolean {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}
export function secretHandshake(num: number): string[] {
    const binaryString = num.toString(2); // Convert the number to binary
    const actions: string[] = [];

    // Start from the right-most digit and move left
    for (let i = binaryString.length - 1; i >= 0; i--) {
        // If the digit is 1, add the corresponding action to the actions array
        if (binaryString[i] === '1') {
            switch (binaryString.length - 1 - i) {
                case 0:
                    actions.push('wink');
                    break;
                case 1:
                    actions.push('double blink');
                    break;
                case 2:
                    actions.push('close your eyes');
                    break;
                case 3:
                    actions.push('jump');
                    break;
                case 4:
                    // If it's the left-most digit, reverse the order of actions
                    actions.reverse();
                    break;
            }
        }
    }

    return actions;
}