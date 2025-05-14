import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { Log } from "../models/log.model.js";

const aadhaarStatus = asyncHandler(async (req, res) => {

    const { aadhaar, dob } = req.body;
    if ([aadhaar, dob].some((field) => field?.trim() === "")) {
        throw new apiError(400, "All fields are required");
    }
    if (!/^\d{12}$/.test(aadhaar) || !/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    await Log.create({ userId: req.user.userId, role: req.user.role, timestamp: new Date(), aadhaar, dob });
    res.json(new apiResponse(200, {
        status: 'Active',
        aadhaar_number: `XXXX-XXXX-${aadhaar.slice(-4)}`,
        dob,
        last_updated: '2024-04-25'
    }),
        "Aadhaar status fetched successfully"
    );
});

export { aadhaarStatus };