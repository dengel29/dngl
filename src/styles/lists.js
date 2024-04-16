import {css} from 'lit'
export const listStyles = css`
    a {
      color: var(--link-text);
      text-decoration: none;
      font-family: var(--font-1);
    }
    a:visited {
      color:var(--text-1);
      background-color: var(--surface-1)
    }
    a:hover {
      text-decoration: underline;
    }

    h1,h2,h3,h4 {
      margin-block-end: .02rem;
      font-family: var(--font-1);
      font-weight: 400;
    }

    .post-list__container {
      
    }
  `