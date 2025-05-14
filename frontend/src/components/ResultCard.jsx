export default function ResultCard({ result }) {
  return (
    <div>
      <h3>Status: {result.status}</h3>
      <p>Aadhaar: {result.aadhaar_number}</p>
      <p>DOB: {result.dob}</p>
      <p>Last Updated: {result.last_updated}</p>
    </div>
  );
}