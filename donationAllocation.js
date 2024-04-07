/*
Algorithm to allocate the donation to the causes

*/

export const allocateDonation = (userDetails) => {
    // Define weights for each criterion
    const weights = {
      income: 0.3,
      maritalStatus: 0.2,
      location: 0.2,

      // Add more criteria and weights as needed
    };
  
    // Normalize income amount if necessary
    const normalizedIncome = userDetails.incomeAmount / 10000; // Normalize income amount to range [0, 1]
  
    // Calculate score for each cause
    const causeScores = {
      cause1: userDetails.income === 'Yes' ? weights.income * normalizedIncome : 0,
      cause2: userDetails.maritalStatus === 'Single' ? weights.maritalStatus : 0,
      cause3: userDetails.location === 'Urban' ? weights.location : 0,
      // Add more causes and scoring criteria as needed
    };
  
    // Allocate donation based on scores
    const totalScore = Object.values(causeScores).reduce((acc, score) => acc + score, 0);
    const donationAllocation = {};
    for (const cause in causeScores) {
      donationAllocation[cause] = userDetails.donationAmount * (causeScores[cause] / totalScore);
    }
  
    return donationAllocation;
  };
  