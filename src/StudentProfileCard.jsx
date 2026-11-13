function StudentProfileCard({ name, studentId, major, year, gpa }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Student ID: {studentId}</p>
      <p>Major: {major}</p>
      <p>Year: {year}</p>
      <p>GPA: {gpa}</p>
    </div>
  );
}

export default StudentProfileCard;