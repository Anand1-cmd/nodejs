
import StudentProfileCard from './StudentProfileCard';
import './index.css';

function App() {
  return (
    <div className="app">

      <h1>Student Directory</h1>
      <p className="subtitle">
        Student Information and Academic Profiles
      </p>

      <div className="student-container">

        <StudentProfileCard
          name="Anand"
          studentId="202539455"
          major="Computer Science"
          year={2}
          gpa={4.1}
        />

        <StudentProfileCard
          name="Murun"
          studentId="202539440"
          major="Computer science"
          year={2}
          gpa={4.2}
        />

        <StudentProfileCard
          name="Lkhama"
          studentId="202637428"
          major="Computer science"
          year={1}
          gpa={4.3}
        />

      </div>

    </div>
  );
}

export default App;
