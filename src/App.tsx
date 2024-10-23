import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { themes } from "./styled/theme/theme";

function App() {
  const [themeName, setThemeName] = useState<string>("theme1"); // 초기 테마를 theme1으로 설정
  const [isDarkMode, setIsDarkMode] = useState(false); // 초기 모드를 라이트 모드로 설정

  const toggleThemeMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const switchTheme = (name: string) => {
    console.log(name);
    setThemeName(name); // 테마 변경
  };

  const currentTheme = themes[themeName][isDarkMode ? "dark" : "light"];

  return (
    <ThemeProvider theme={currentTheme}>
      <div
        style={{
          background: currentTheme.background,
          color: currentTheme.color,
        }}
      >
        <button onClick={toggleThemeMode}>Toggle Dark Mode</button>
        <select onChange={(e) => switchTheme(e.target.value)} value={themeName}>
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
          {/* theme4 ~ theme7 옵션 추가 */}
        </select>
        {/* 나머지 앱 컴포넌트 */}
      </div>
    </ThemeProvider>
  );
}

export default App;
