import styles from "./App.module.css"
import Form from "./Form/Form"

function App() {

  return (
    <>
      <h1 className={styles.title}>Weather</h1>
      <div className={styles.container}>
        <Form />
        <p>2</p>
      </div>
    </>
  )
}

export default App
