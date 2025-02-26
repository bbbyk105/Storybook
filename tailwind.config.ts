module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Storybook のコンポーネントを含める
    "./.storybook/**/*.{js,ts,jsx,tsx}", // ✅ Storybook の設定ファイルを含める
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
