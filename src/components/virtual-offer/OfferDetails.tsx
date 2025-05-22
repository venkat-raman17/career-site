export default function OfferDetails({ 
  accepted, 
  onAccept 
}: { 
  accepted: boolean; 
  onAccept: () => void;
}) {
  return (
    <div>
    <h3 className="font-semibold text-xl mb-2">Offer Details</h3>
    <div className="mb-4 p-4 bg-gray-50 rounded shadow-sm">
      <div className="mb-2">
        <span className="font-medium">Position:</span> Software Engineer
      </div>
      <div className="mb-2">
        <span className="font-medium">Department:</span> Engineering
      </div>
      <div className="mb-2">
        <span className="font-medium">Salary:</span> $120,000/year
      </div>
      <div className="mb-2">
        <span className="font-medium">Bonus:</span> 10% annual performance bonus
      </div>
      <div className="mb-2">
        <span className="font-medium">Equity:</span> 2,000 RSUs vesting over 4 years
      </div>
      <div className="mb-2">
        <span className="font-medium">Location:</span> Remote (US-based)
      </div>
      <div className="mb-2">
        <span className="font-medium">Start Date:</span> July 15, 2024
      </div>
      <div className="mb-2">
        <span className="font-medium">Manager:</span> Jane Doe, Director of Engineering
      </div>
      <div className="mb-2">
        <span className="font-medium">Benefits:</span>
        <ul className="list-disc list-inside ml-4">
        <li>Health, dental, and vision insurance</li>
        <li>401(k) with company match</li>
        <li>Flexible PTO and paid holidays</li>
        <li>Home office stipend</li>
        <li>Professional development budget</li>
        </ul>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        Please review the details above. Contact HR at <a href="mailto:hr@example.com" className="text-blue-600 underline">hr@example.com</a> with any questions.
      </div>
    </div>
      {!accepted ? (
        <div className="flex gap-4">
          <button
            onClick={onAccept}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
          >
            Accept Offer
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer">
            Decline
          </button>
        </div>
      ) : (
        <div className="text-green-600">Offer Accepted! Proceeding...</div>
      )}
    </div>
  );
}
