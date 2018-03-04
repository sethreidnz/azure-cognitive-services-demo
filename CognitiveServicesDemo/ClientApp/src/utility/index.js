export const formatConfidenceAsPercentage = (confidence) => {
  return `${Math.round(confidence * 100)}%`
}

export const getConfidenceColorClass = (confidence) => {
  if (confidence > .8) return 'is-success';
  if (confidence > .7 && confidence <= .9) return 'is-light';
  if (confidence > .5 && confidence <= .7) return 'is-warning';
  if (confidence <= .4 ) return 'is-danger';
}