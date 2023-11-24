import { DateTime } from 'luxon'

const compareDates = (dueDate: string) => {
  const todayFormat = DateTime.now().toFormat('dd LLL, yyyy')
  const today = new Date(todayFormat)
  const due = new Date(dueDate)

  const differenceBetweenDays: number = due.getTime() - today.getTime()
  const dayDifference = differenceBetweenDays / 86400000

  let backgroundColor = '#94979A'
  let textColor = '#FFFFFF'
  let dueDateText = dueDate

  if (dayDifference <= 2 && dayDifference >= 0) {
    backgroundColor = '#EBC77F'
    textColor = '#E5B454'

    if (dayDifference === 0) dueDateText = 'TODAY'
  }

  if (dayDifference < 0) {
    backgroundColor = '#E27D73'
    textColor = '#DA584B'

    if (dayDifference === -1) dueDateText = 'YESTERDAY'
  }

  return { backgroundColor, textColor, dueDateText }
}

export default compareDates
