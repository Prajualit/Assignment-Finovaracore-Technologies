import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";

const aadhaarStatus = asyncHandler(async (req, res) => {
  const { aadhaar, dob } = req.body;
  console.log("Aadhaar Status Request:", req.body);

  if ([aadhaar, dob].some((field) => String(field).trim() === "")) {
    throw new apiError(400, "All fields are required");
  }

  if (!/^\d{12}$/.test(aadhaar) || !/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
    return res
      .status(400)
      .json(new apiResponse(400, null, "Invalid Aadhaar or DOB format"));
  }

  console.log("req.user", req.user._id);

  // Update current user with Aadhaar and DOB
  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { aadhaar, dob },
    { new: true }
  );
  console.log("Updated user:", updatedUser);

  if (!updatedUser) {
    throw new apiError(404, "User not found");
  }

  const responseData = {
    status: "Active",
    aadhaar_number: `XXXX-XXXX-${aadhaar.slice(-4)}`,
    dob,
    last_updated: updatedUser.updatedAt
      ? updatedUser.updatedAt.toISOString().split("T")[0]
      : null,
  };

  return res
    .status(200)
    .json(
      new apiResponse(
        200,
        responseData,
        "Aadhaar status updated and fetched successfully"
      )
    );
});

export { aadhaarStatus };
