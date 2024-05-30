import Student from './Student.jsx'

function App() {
    return(
        <>
          <Student name="Harry Potter" age="30" isStudent={true}/>
          <Student name="Michael Jordan" age={23} isStudent={false}/>
          <Student name="JarJar Binks" age={971} isStudent={true}/>
          <Student/>
        </>
    );
}

export default App
