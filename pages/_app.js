import "../styles/global.css";

// 全局的css只能放在这个文件中设定

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
