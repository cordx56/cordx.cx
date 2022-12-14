const Works = () => (
  <section className="card">
    <h1 className="h1">Works</h1>
    <h2 className="h2">System, Library</h2>
    <ul className="ul">
      <li>
        <h3 className="h3">
          <a
            href="https://github.com/cordx56/silang"
            target="_blank"
            rel="noreferrer"
          >
            SILang
          </a>{" "}
          <small>(2019-2021)</small>
        </h3>
        <p>Simple Interpreter Language interpreter written in Rust</p>
      </li>
      <li>
        <h3 className="h3">
          <a
            href="https://github.com/cordx56/slip"
            target="_blank"
            rel="noreferrer"
          >
            slip
          </a>{" "}
          <small>(2021)</small>
        </h3>
        <p>Small LIsP compiler written in Rust</p>
      </li>
      <li>
        <h3 className="h3">
          <a
            href="https://github.com/cordx56/godrink"
            target="_blank"
            rel="noreferrer"
          >
            godrink
          </a>{" "}
          <small>(2022)</small>
        </h3>
        <p>Parser combinators written in Golang</p>
      </li>
      <li>
        <h3 className="h3">
          <a
            href="https://github.com/cordx56/jsdrink"
            target="_blank"
            rel="noreferrer"
          >
            jsdrink
          </a>{" "}
          <small>(2022)</small>
        </h3>
        <p>Parser combinators written in TypeScript</p>
      </li>
    </ul>
    <h2 className="h2">Web</h2>
    <ul className="ul">
      <li>
        <h3 className="h3">
          <a
            href="https://tweetgen.cordx.net/"
            target="_blank"
            rel="noreferrer"
          >
            Tweet generator
          </a>{" "}
          <small>(2019-2021)</small>
        </h3>
        <p>マルコフ連鎖によるツイート自動生成サービス</p>
      </li>
      <li>
        <h3 className="h3">
          <a href="https://digico.cordx.net/" target="_blank" rel="noreferrer">
            digiCo NLP
          </a>{" "}
          <small>(2018-2019)</small>
        </h3>
        <p>自然言語質問応答システム</p>
      </li>
    </ul>
  </section>
);

export default Works;
