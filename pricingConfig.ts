
import { ProjectType, FinishLevel, TimelinePreference, CalculatorState } from './types';

export const BASE_RATES: Record<ProjectType, number> = {
  architecture: 100, // per sq ft
  home: 1200,       // per sq ft
  office: 1500,     // per sq ft
  retail: 1800,     // per sq ft
  turnkey: 2500,    // per sq ft
};

export const FINISH_MULTIPLIERS: Record<FinishLevel, number> = {
  economy: 1.0,
  premium: 1.5,
  luxury: 2.5,
};

export const LOCATION_MULTIPLIERS: Record<string, number> = {
  'Gurgaon': 1.15,
  'Delhi NCR': 1.05,
  'Other City': 1.0,
};

export const TIMELINE_MULTIPLIERS: Record<TimelinePreference, number> = {
  standard: 1.0,
  fast: 1.2,
};

export const calculateEstimate = (state: CalculatorState) => {
  const baseRate = BASE_RATES[state.projectType];
  const finishMult = FINISH_MULTIPLIERS[state.finishLevel];
  const locMult = LOCATION_MULTIPLIERS[state.location] || 1.0;
  const timeMult = TIMELINE_MULTIPLIERS[state.timeline];
  
  // Basic Area Calculation
  let totalCost = state.area * baseRate * finishMult * locMult * timeMult;

  // Add-on Logic for Scope
  if (state.projectType === 'home' || state.projectType === 'turnkey') {
    if (state.scope.kitchen) totalCost += 150000 * finishMult;
    totalCost += state.scope.bedrooms * 100000 * finishMult;
    if (state.scope.livingDining) totalCost += 120000 * finishMult;
    totalCost += state.scope.wardrobes * 60000 * finishMult;
    if (state.scope.falseCeiling) totalCost += (state.area * 120 * finishMult);
  }

  if (state.projectType === 'office') {
    totalCost += state.scope.workstations * 25000 * finishMult;
  }

  // Final Range (+/- 10%)
  const min = Math.round(totalCost * 0.9);
  const max = Math.round(totalCost * 1.1);

  // Cost Breakup
  const designCost = Math.round(totalCost * 0.08);
  const materialCost = Math.round(totalCost * 0.62);
  const executionCost = Math.round(totalCost * 0.30);

  return {
    min,
    max,
    breakup: {
      design: designCost,
      material: materialCost,
      execution: executionCost
    },
    timelineDays: state.timeline === 'fast' ? 45 : 75
  };
};
