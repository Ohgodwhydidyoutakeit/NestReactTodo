import { Priority } from '../domain/Priority.enum';
import { ClassNameMapper } from './ClassNameMapper.util';  // Assuming the file is in the same directory

describe('ClassNameMapper', () => {
    test('should return class name with high priority', () => {
        const result = ClassNameMapper('my-class', Priority.HIGH);
        expect(result).toBe('my-class my-class--priority-high');
    });

    test('should return class name with medium priority', () => {
        const result = ClassNameMapper('my-class', Priority.MEDIUM);
        expect(result).toBe('my-class my-class--priority-medium');
    });

    test('should return class name with low priority', () => {
        const result = ClassNameMapper('my-class', Priority.LOW);
        expect(result).toBe('my-class my-class--priority-low');
    });

    test('should return base class name when priority is unknown', () => {
        const result = ClassNameMapper('my-class', Priority.DEFAULT);
        expect(result).toBe('my-class');
    });
});