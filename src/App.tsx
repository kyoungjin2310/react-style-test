import React, { useState } from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./styled/theme/index";
import GlobalStyles from "./styled/theme/globalStyle";
import Button from "./styled/component/Button";
// styled-components 생성.
const Text = styled.p`
  color: var(--color__primary);
`;

// 테마 모듈 선언
const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

// 테마 타입 선언
type Theme = keyof typeof themes; // 'default' | 'dark'

// 버튼 렌더링을 위해 테마 모듈 key를 배열로 변환
const keysOfThemes = Object.keys(themes) as Theme[];

function App() {
  const [theme, setTheme] = useState<Theme>("default");

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <p>Hello world!</p>

      {keysOfThemes.map((theme) => (
        <button key={theme} onClick={() => setTheme(theme)}>
          {theme}
        </button>
      ))}
      <Button>test</Button>
    </ThemeProvider>
  );
}
export default App;
