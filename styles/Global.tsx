import { css, CssBaseline, GlobalStyles } from "@mui/material";
import emotionReset from "emotion-reset";

/** Font 적용 */

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={css`
          ${emotionReset}

          html,
          body {
            height: 100%;
            width: 100%;
          }
        `}
      />
    </>
  );
};
