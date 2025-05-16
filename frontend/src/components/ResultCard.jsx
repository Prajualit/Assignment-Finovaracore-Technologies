export default function ResultCard({ result }) {
  const resultData = [
    { label: "Status", value: result?.status },
    { label: "Aadhaar Number", value: result?.aadhaar_number },
    { label: "Date of Birth", value: result?.dob },
    { label: "Last Updated", value: result?.last_updated || "N/A" },
  ];

  return (
    <div className="w-full p-5 bg-[#dbdbdb] shadow-md shadow-[#d8d8d880] rounded-lg text-[black] font-bold flex flex-col items-center justify-center space-y-5">
      {resultData.map((item, index) => (
        <p key={index}>
          <span className="text-[#676767]">{item.label}:</span>&nbsp;{item.value}
        </p>
      ))}
    </div>
  );
}
