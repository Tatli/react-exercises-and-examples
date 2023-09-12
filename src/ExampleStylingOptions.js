/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styles from './ExampleStylingOptions.module.scss';

// const catDivWithPropsStyles = (props) => css`
//   margin: 4px;
//   padding: 8px;
//   border: 2px solid props.color;
//   border-radius: 12px;
// `;

const mouseDivStyles = (color) => css`
  margin: 4px;
  padding: 8px;
  border: 4px solid ${color};
  border-radius: 12px;
`;

const catDivStyles = css`
  margin: 4px;
  padding: 8px;
  border: 4px solid brown;
  border-radius: 12px;
`;

export default function ExampleStylingOptions() {
  // const lionDiv = {
  //   margin: '4px',
  //   padding: '8px',
  //   border: '2px solid orange',
  //   borderRadius: '12px',
  // };
  return (
    <div>
      <div
        style={{
          margin: '4px',
          padding: '8px',
          border: '2px solid orange',
          borderRadius: '12px',
        }}
      >
        Lion
      </div>
      <div css={catDivStyles}>Cat</div>
      <div css={mouseDivStyles('red')} color="red">
        Mouse
      </div>
      <div className={styles.dog}>Dog</div>
    </div>
  );
}
