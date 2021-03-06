import { readAllLinesFilterEmpty } from '../io.util';
import { minus } from '../sets.util';

const parseLine = (line: string): number =>
    parseInt(line.replace(/(F|L)/g, '0').replace(/(B|R)/g, '1'), 2);

const seats = (input: string[]): number[] => input
    .map((line) => (parseLine(line.slice(0, 7)) << 3) + parseLine(line.slice(7)));

const part1 = (input: string[]): number =>
    Math.max(...seats(input));

const part2 = (input: string[]): number =>
    minus(seats(input).map((s) => s + 1), seats(input))[0];

const input = readAllLinesFilterEmpty('./res/2020/input05.txt');
console.log('(part 1):', part1(input));
console.log('(part 2):', part2(input));
