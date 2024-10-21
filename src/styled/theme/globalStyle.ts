import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      ${reset}
     body {
  background-color: var(--color__page);
}

:root {
  // 아래 방법으로 위에서 설정한 테마를 props 로 내려받을 수 있다.
  --color__primary: ${(props) => props.theme.color.primary};
  --color__page: ${(props) => props.theme.color.page};
}

    `;
export default GlobalStyle;
