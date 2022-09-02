import logo from './logo.svg';
import styles from './App.module.css';
import { LinksCollection} from '../api/links';
import { Tracker } from "meteor/tracker";
import { createSignal, For } from "solid-js";
function App() {
  const [links, setLinks] = createSignal([]);
  Tracker.autorun(function () {
    setLinks(LinksCollection.find().fetch());
  });
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <ul>
          <For each={links()}>{(link) =>
            <li>
              <a target="_blank" href={link.url}>
                {link.title}
              </a>
            </li>
          }</For>
        </ul>
      </header>
    </div>
  );
}

export default App;
