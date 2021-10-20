module.exports = {
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    transform: {
        '^.+\\.js$': ['babel-jest', {presets: ['next/babel']}],
    },
    transformIgnorePatterns: [
        '/node_modules/',
    ],
}
